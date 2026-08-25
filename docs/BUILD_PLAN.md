# Build Plan

## P0 — must exist before first application links go out

1. React/Vite shell.
2. Job Map reading `src/data/jobs.json`.
3. Dynamic company solution route reading `src/data/solutions.json`.
4. Solution module renderer.
5. Cloudflare Worker API.
6. `/api/analyse-work` real model call.
7. Per-solution grounding: reviewed public brief + reviewed solution spec.
8. Source/disclaimer block.
9. Error states that never fake success.
10. QA pass for the first five application targets.
11. Cloudflare production deploy.

## P1 — immediately after P0

- `/api/design-workflow`
- `/api/check-governance`
- `/api/implementation-plan`
- `/api/build-learning-plan`
- `/api/value-model`
- search/filter Job Map
- verified-date badges
- application queue workflow

## P2 — internal automation

- Job Scanner Agent.
- Job Brief Extractor.
- Solution Draft Agent.
- Human approval screen before new company page is committed.

## No-shortcut engineering rules

- API keys never in frontend code.
- Do not persist visitor text unless a later feature explicitly requires it.
- Do not claim integrations that do not exist.
- Do not display generated ROI as achieved ROI.
- Do not use company branding in a way that implies partnership.
- Source job data is reviewed and committed; the live page is not allowed to invent new company facts.
