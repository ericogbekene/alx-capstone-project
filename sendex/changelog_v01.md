# Changelog v0.1 — Sendex scaffold

Date: 2025-09-18

Summary
-------
This release contains the first functional implementation of the Errands flow in the Sendex scaffold. It adds a unified dashboard experience where users can view, post, edit, and delete errands (in-memory scaffold). It also includes API improvements, client-side hooks, and lint fixes to make local development and iteration easier.

What changed (high level)
- Implemented CRUD endpoints for errands (in-memory) so the UI can create, list, update and delete errands.
- Added client API helpers for PUT and DELETE and extended existing helpers.
- Replaced and fixed broken Errand components (card, list, form) and wired them to a single `useErrands` hook which exposes create/update/delete actions.
- Updated the dashboard page to support editing selected errands and deleting errands from the list.
- Fixed multiple linting and runtime issues that were blocking Fast Refresh and development.

Files added/modified
- src/app/api/errands/route.ts — Implemented GET/POST/PUT/DELETE with an in-memory store and helper functions to find by id.
- src/lib/api.ts — Added apiPut and apiDelete helpers; existing apiGet/apiPost remain.
- src/hooks/use-errands.ts — Reworked hook to provide errands, loading, fetchErrands, createErrand, updateErrand, deleteErrand (client-side state sync).
- src/components/errands/ErrandCard.tsx — Replaced with a clean TypeScript React component (accessible, typed item prop).
- src/components/errands/ErrandList.tsx — Fixed rendering to pass item to ErrandCard, added Edit/Delete controls and callbacks.
- src/components/errands/ErrandForm.tsx — Reworked to support create and update flows, now uses useErrands actions and optional initial prop for editing.
- src/app/(dashboard)/dashboard/page.tsx — Dashboard wiring: manages selected errand state, passes initial to ErrandForm, wires onEdit/onDelete handlers.
- src/lib/storage.ts — (existing) upload helper used by form; ensure Supabase Storage env variables are set to fully test uploads.

Other changes
- Small lint fixes and temporary eslint-disable no-unused-vars comments where needed to silence false-positives during iterative development. These should be revisited and removed when types/usages are finalized.

How to test locally
1. Ensure dependencies are installed:

```bash
cd sendex
npm install
```

2. Copy environment example and populate Supabase keys if you want to test storage/auth:

```bash
cp .env.local.example .env.local
# fill NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY, SUPABASE_SERVICE_ROLE_KEY
```

3. Run dev server:

```bash
npm run dev
# Next will pick an available port if 3000 is in use (e.g. http://localhost:3001)
```

4. Open the Dashboard: http://localhost:<port>/dashboard and try:
- Create a new errand using the form.
- Edit an errand by clicking its Edit button; changes should persist in the UI.
- Delete an errand using the Delete button.

Notes & Next Steps
- Data persistence is currently in-memory. Replace the MOCK_ERRANDS usage inside src/app/api/errands/route.ts with Supabase queries to persist data across restarts.
- Add Zod schemas for server-side validation and integrate them into the route handlers.
- Clean up ESLint suppressions and ensure all components are strictly typed and used.
- Implement RLS policies and secure server-side calls to Supabase using supabaseServer in src/lib/supabase/server.ts.
- Add tests (Jest + React Testing Library) for the errands flow and CI job to run tests.

Planned next actions
- Wire errands API to Supabase and add example RLS policies.
- Add server-side Zod validation and error handling.
- Remove eslint-disable comments and address underlying causes.
- Add unit/integration tests for the dashboard CRUD flow.

If you want me to proceed with any of these, say which one and I'll implement it next.
