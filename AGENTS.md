# AGENTS.md

Guidance for coding agents working on timeclimbers.com.

## Project Overview

Web application for TimeClimbers built with Next.js, React, Tailwind CSS, and daisyUI.

## Commands

Use pnpm:
- `pnpm dev` — Start development server
- `pnpm build` — Build production application
- `pnpm start` — Run production server
- `pnpm lint` — Run ESLint

## Architecture & Conventions

- Application routes and views under `src/app/` or `pages/`.
- UI components styled with Tailwind CSS and daisyUI (`@icco/react-common`).
- PR titles and commits must follow Conventional Commits with lowercase subjects.
- Ensure `pnpm lint` and `pnpm build` pass before submitting PRs.
