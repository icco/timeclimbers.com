# syntax=docker/dockerfile:1
FROM node:25-alpine AS base

# Install dependencies only when needed
FROM base AS deps
WORKDIR /app

# Install dependencies using yarn
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Build the application
ENV NEXT_TELEMETRY_DISABLED=1
RUN yarn build

# Production image
FROM base AS runner

LABEL org.opencontainers.image.source=https://github.com/icco/timeclimbers.com
LABEL org.opencontainers.image.description="ghcr.io/icco/timeclimbers.com container image"
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Create public directory
RUN mkdir -p public

# Set the correct permission for prerender cache
RUN mkdir .next
RUN chown nextjs:nodejs .next

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 8080

ENV PORT=8080
ENV HOSTNAME="0.0.0.0"

# NEXT_SERVER_ACTIONS_ENCRYPTION_KEY must be set at runtime via an environment
# variable or Docker secret — NOT baked into the image.
# See: https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations#encryption
# Example: docker run -e NEXT_SERVER_ACTIONS_ENCRYPTION_KEY="$(openssl rand -base64 16)" ...

CMD ["node", "server.js"]
