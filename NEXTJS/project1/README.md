# Project1

A small Next.js starter application using the App Router and Tailwind CSS.

## Overview

This project is a minimal Next.js app built as a learning template. It demonstrates an App Router layout, a simple landing page, and a nested dynamic route.

## Features

- Next.js 16.2.7
- React 19.2.4
- Tailwind CSS v4
- App Router structure
- Example dynamic route at `/home/[id]`
- ESLint configured with `eslint-config-next`

## Getting Started

Install dependencies:

```bash
cd NEXTJS/project1
npm install
```

Start the development server:

```bash
npm run dev
```

Open `http://localhost:3000` to view the app.

## Build and Production

Build the application:

```bash
npm run build
```

Start the production server:

```bash
npm run start
```

## Project Structure

- `src/app/page.js` — main landing page
- `src/app/layout.js` — root layout for the app
- `src/app/home/page.js` — nested route example
- `src/app/home/[id]/page.js` — dynamic route example
- `src/app/globals.css` — Tailwind CSS setup and global styles

## Notes

This repository is a good starter for learning Next.js app routing and component structure. Customize the pages and components to extend it into a full application.
