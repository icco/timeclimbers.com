# TimeClimbers

A modern marketing website for TimeClimbers - a small business building exceptional web and mobile applications.

## Tech Stack

- **Next.js 16** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS v4** - Utility-first CSS framework
- **DaisyUI v5** - Tailwind CSS component library

## Features

- Responsive design that works on all devices
- Modern landing page with hero section
- Services showcase (Web Development, Mobile Apps, Consulting)
- About section
- Contact form
- Custom color scheme based on natwelch.com

## Getting Started

First, install the dependencies:

```bash
yarn install
```

Then, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Build

To create a production build:

```bash
yarn build
yarn start
```

## Docker

To build and run with Docker:

```bash
docker build -t timeclimbers .
docker run -p 3000:3000 timeclimbers
```

## Development

- Edit `app/page.tsx` to modify the landing page content
- Customize colors in `app/globals.css`
- Configure DaisyUI themes as needed

## License

All rights reserved.
