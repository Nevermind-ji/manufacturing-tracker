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
 FLOW:
1. Operator opens app
        ↓
2. Not logged in → login screen
   POST /api/auth/login
   Gets back a token, stores it
        ↓
3. Assembly screen appears
   Operator scans machine QR
   POST /api/sessions { machine_id }
   Backend creates session → returns session_id
        ↓
4. Screen shows machine name + empty parts list
   Operator scans part barcode
   POST /api/sessions/:id/parts { barcode }
   Backend runs 6 validations
   Success → 3 database writes happen together
   Failure → scan_event logged with reason, error shown on screen
        ↓
5. Operator keeps scanning parts
   Each scan → same flow above
   Parts list on screen grows with each success
        ↓
6. Operator taps Finalize
   PATCH /api/sessions/:id/finalize
   Session status → 'closed'
   Machine status → 'assembled'
   No more parts can be added
        ↓
7. Summary screen shows all parts in this machineTracker.postman_collection.json).
