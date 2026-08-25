# Technical Architecture

## Frontend
React + Vite.

Routes:
- `/`
- `/jobs`
- `/solutions/:slug`
- `/about`

The solution pages are data-driven from reviewed JSON.

## API
Cloudflare Worker.

Suggested endpoints:
- POST `/api/analyse-work`
- POST `/api/design-workflow`
- POST `/api/design-agent`
- POST `/api/check-governance`
- POST `/api/implementation-plan`
- POST `/api/build-learning-plan`
- POST `/api/value-model`
- POST `/api/executive-brief`

Request includes:
- `solution_slug`
- user input
- optional structured fields for the action

Worker loads the reviewed solution spec for that slug and supplies it as grounding context.

## Data
No company accounts in V1.
No database required for the public job/solution content: reviewed JSON is committed to the repo.
Visitor input is not stored by default.

## Secrets
LLM provider keys are Cloudflare secrets, never frontend environment variables.

## Later
Only add persistence when a real feature needs it. Possible uses:
- internal application tracking;
- job scanner review queue;
- controlled analytics;
- saved internal solution drafts.
