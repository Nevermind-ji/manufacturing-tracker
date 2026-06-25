# Manufacturing Tracker

A production-oriented traceability application for recording which barcode-labelled parts are installed in each QR-labelled machine, by whom, and when.

## Features

- JWT operator authentication with bcrypt password hashing
- Scanner-first machine and part workflow
- Atomic part assignment and immutable scan audit events
- One open session per machine and one machine per part
- Live dashboard, assembly summary, and printable machine report
- Dexie/IndexedDB queue foundation for a later offline synchronization phase

## Project structure

```text
backend/   Express API, Prisma schema, migrations, seed, tests
frontend/  React/Vite operator application
docs/      Architecture, API, database, and Postman collection
```

## Requirements

- Node.js 20+
- PostgreSQL 15+

## Setup

1. Create a PostgreSQL database named `manufacturing_tracker`.
2. Copy `backend/.env.example` to `backend/.env` and set `DATABASE_URL` and a strong `JWT_SECRET`.
3. Copy `frontend/.env.example` to `frontend/.env` if the API is not at the default URL.
4. Install and initialize the backend:

```bash
cd backend
npm install
npx prisma generate
npx prisma migrate deploy
npm run seed
npm run dev
```

5. In a second terminal, start the frontend:

```bash
cd frontend
npm install
npm run dev
```

Open `http://localhost:5173`. Seed credentials are `operator@example.com` / `operator123`; change them outside local development. Seed machine QR code: `MACHINE-001`.

## Environment variables

| Variable | Location | Purpose |
|---|---|---|
| `DATABASE_URL` | backend | PostgreSQL Prisma connection string |
| `JWT_SECRET` | backend | JWT signing secret |
| `JWT_EXPIRES_IN` | backend | Token lifetime; default `8h` |
| `PORT` | backend | API port; default `4000` |
| `FRONTEND_URL` | backend | Allowed CORS origin |
| `VITE_API_URL` | frontend | API base URL |

## Commands

Backend: `npm run dev`, `npm start`, `npm test`, `npm run prisma:migrate`, `npm run prisma:deploy`, `npm run seed`.

Frontend: `npm run dev`, `npm run build`, `npm run preview`.

## Screenshots

Add deployment-specific captures here after starting the application:

- `[Screenshot: operator login]`
- `[Screenshot: live assembly scanner]`
- `[Screenshot: dashboard and printable report]`

Detailed references: [Architecture](docs/ARCHITECTURE.md), [API endpoints](docs/API_ENDPOINTS.md), [Database schema](docs/DATABASE_SCHEMA.md), and [Postman collection](docs/Manufacturing-Tracker.postman_collection.json).
