# AGENTS.md

## Cursor Cloud specific instructions

This is a frontend-only React SPA (school portal "Liceo Bicentenario") located in `/workspace/escuela-chilena/`. There is no backend, database, or external API — all data is mocked.

### Quick reference

| Action | Command | Working dir |
|--------|---------|-------------|
| Install deps | `npm install` | `escuela-chilena/` |
| Dev server | `npm run dev` | `escuela-chilena/` |
| Lint | `npm run lint` | `escuela-chilena/` |
| Build | `npm run build` | `escuela-chilena/` |

### Notes

- The dev server runs on **port 5173** by default (Vite).
- Mock login credentials: RUT `12345678-9`, password `1234` (or RUT `98765432-1`, password `1234`).
- ESLint has 3 pre-existing errors in the codebase (`AuthContext.jsx` unused var, `Contacto.jsx` unused import). These are not blocking.
- No test framework is configured — there are no automated tests to run.
- No environment variables or secrets are needed.
