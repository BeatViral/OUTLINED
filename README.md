# OUTLINED

An independent portfolio/research application that treats public AI role advertisements as briefs, then shows a company-specific proposed solution and real AI actions grounded in that brief.

## The product

Companies publish AI adoption / enablement / training / governance / transformation jobs.

We treat each public job ad as a brief.

**Job ad -> our agent extracts what the company is trying to achieve -> we design a company-specific solution -> the company page shows that solution and lets the visitor use a real AI action.**

The recurring page line is:

> **Our Agent has outlined this**

## Non-negotiables

1. No fake dashboards.
2. No fake company accounts.
3. No invented company systems, policies, metrics, integrations or usage.
4. No claim that a listed company uses or endorses us.
5. Every priority company page must contain at least one real AI interaction.
6. Every company-specific claim must be traceable to the public job source.
7. If we infer something, label it as our proposed solution, not as a company fact.

## Public page model

Home -> Job Map -> Company / Role -> Public brief -> "Our Agent has outlined this" -> Custom solution -> Real tool -> Source / disclaimer.

Current research set: **42 high-fit job briefs**, of which **34 are named public-page roles**.

## Recommended stack

- React + Vite
- Cloudflare Pages
- Cloudflare Worker API
- Server-side LLM provider abstraction
- Static reviewed job/solution JSON committed to the repo
- No user account system in V1
- No persistence of visitor input by default

## Architecture

- React + Vite frontend with dynamic `/jobs` and `/solutions/:slug` routes.
- Reviewed static records in `src/data/` (no database or visitor-input persistence).
- Cloudflare Worker API in `worker/index.ts`, with an OpenAI Responses API provider call.
- `OPENAI_API_KEY` exists only in the Worker secret environment; no Vite variable exposes it.

## Run locally

```bash
npm install
npm run dev
npx wrangler dev
```

Set `VITE_API_BASE_URL=http://localhost:8787` in a local `.env` file. In a separate terminal, run `npx wrangler secret put OPENAI_API_KEY` before `wrangler dev` (or use a local `.dev.vars`, which must not be committed).

## Test and build

```bash
npm run lint
npm test
npm run build
```

## Cloudflare deployment

1. Create a Cloudflare Worker from this repository and deploy `worker/index.ts` with `npx wrangler deploy`.
2. Add the server-only secret: `npx wrangler secret put OPENAI_API_KEY`.
3. Create a Cloudflare Pages project connected to this repository, using build command `npm run build` and output directory `dist`.
4. In Pages environment variables, set `VITE_API_BASE_URL` to the deployed Worker URL. Rebuild Pages.
5. If using a custom domain, restrict Worker CORS in `worker/index.ts` to that domain before launch.

## Adding reviewed content

Add a public job to `src/data/jobs.json`, then add the matching complete solution record to `src/data/solutions.json`. Its module IDs must exist in `src/data/modules.json`, and it must have a source URL, verification date, disclaimer, and at least one real AI action for Priority A records. Do not publish anonymous research as a named public organisation; follow `docs/PUBLISHING_RULES.md`.

## Source materials

Read:
- `docs/PRODUCT_SPEC.md`
- `docs/PAGE_TEMPLATE.md`
- `docs/REAL_AI_ACTIONS.md`
- `docs/BUILD_PLAN.md`
- `docs/SOLUTION_AGENT_PROMPT.md`
- `docs/PUBLISHING_RULES.md`

Data:
- `src/data/jobs.json`
- `src/data/solutions.json`
- `src/data/modules.json`
- `AI_Job_Solution_Engine_PreGit_Master.xlsx`
