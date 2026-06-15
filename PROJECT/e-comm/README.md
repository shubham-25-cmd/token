# E-Commerce UI

A Next.js e-commerce interface with user authentication, protected pages, and live product listings from the Fake Store API.

## Overview

This application demonstrates a user login and registration flow, protected routes, and a catalog of products fetched from `https://fakestoreapi.com/products`.

## Features

- Next.js 16.2.7 + React 19.2.4
- Tailwind CSS v4
- Authentication context with protected routes
- Login using Fake Store API auth endpoint
- Product listing and product detail pages
- App Router page structure with `/login`, `/register`, `/home`, and `/products`

## Installation

```bash
cd PROJECT/e-comm
npm install
```

## Run Locally

```bash
npm run dev
```

Open `http://localhost:3000` to view the app.

## Build and Start

```bash
npm run build
npm run start
```

## Pages

- `/login` — login form
- `/register` — account registration
- `/home` — protected home page
- `/products` — list of products
- `/products/[id]` — product detail page

## Project Structure

- `src/app/page.js` — main landing page
- `src/app/login/page.js` — login form
- `src/app/register/page.js` — registration form
- `src/app/products/page.js` — product catalog page
- `src/app/products/[id]/page.js` — product details
- `src/context/authContext.js` — authentication provider and hooks
- `src/components/ProtectedRoutes.js` — route protection wrapper
- `src/components/ProductCard.js` — product card component

## Notes

This project is a frontend prototype for learning authenticated e-commerce UI patterns. It uses the Fake Store API for product data and login simulation.
