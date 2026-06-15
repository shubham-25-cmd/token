# Resume Builder

A Next.js resume builder application with AI-powered content generation, user authentication, and MongoDB persistence.

## Overview

This project enables users to register, log in, and generate resume content using Google Gemini AI. It includes backend API routes for creating resumes, generating ATS-friendly descriptions, and storing user data in MongoDB.

## Features

- Next.js 16.2.7 + React 19.2.4
- TypeScript support
- Tailwind CSS v4
- Google Gemini AI integration via `@google/genai`
- MongoDB persistence with Mongoose
- Authentication with JWT cookies
- Resume creation and resume content generation APIs

## Prerequisites

- Node.js 20 or newer
- npm
- MongoDB instance or Atlas cluster
- Google Gemini API key

## Setup

```bash
cd Resume-builder/resume-builder
npm install
```

Create a `.env.local` file in the project root with:

```env
MONGO_URI=mongodb://0.0.0.0/resume-builder
GEMINI_API_KEY=your_google_gemini_api_key
```

## Run Locally

```bash
npm run dev
```

Open `http://localhost:3000` in your browser.

## Build and Start

```bash
npm run build
npm run start
```

## API Routes

- `POST /api/auth/register` — register a new user
- `POST /api/auth/login` — log in and issue JWT cookie
- `POST /api/resume/create` — create or save resume data
- `POST /api/ai/generate-experience` — generate work experience descriptions
- `POST /api/ai/generate-project-description` — generate project descriptions
- `POST /api/ai/generate-skills` — generate skills content
- `POST /api/ai/genratesummary` — generate resume summary text

## Project Structure

- `src/app/page.tsx` — main application entry page
- `src/app/layout.tsx` — shared layout and metadata
- `src/app/api` — route handlers for auth, resume, and AI generation
- `src/lib/gemini.ts` — Gemini AI integration helper
- `src/lib/mongodb.ts` — MongoDB connection helper
- `src/models` — user and resume Mongoose models
- `src/types` — TypeScript interfaces for API payloads and domain models

## Notes

This app is built for building and generating resume content with AI assistance. Be sure to configure `MONGO_URI` and `GEMINI_API_KEY` before running the app.
