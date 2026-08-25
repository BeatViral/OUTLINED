import { mkdir, readFile, writeFile } from 'node:fs/promises'
import solutions from '../src/data/solutions.json' with { type: 'json' }
import jobs from '../src/data/jobs.json' with { type: 'json' }

const html = await readFile('dist/index.html', 'utf8')
const routes = ['jobs', 'about', ...solutions.map(({ slug }) => `solutions/${slug}`)]
const escapeHtml = (value) => String(value).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;')
const publicJobs = jobs.filter(({ public_page }) => public_page === 'Yes')
const cards = publicJobs.map((job) => `<article class="job-card"><p class="sector">${escapeHtml(job.sector)}</p><h2>${escapeHtml(job.company)}</h2><h3>${escapeHtml(job.role)}</h3><p>${escapeHtml(job.need)}</p><div class="meta">Verified ${escapeHtml(job.verified_on)}</div><a href="/OUTLINED/solutions/${encodeURIComponent(job.page_slug)}/">View solution <span>→</span></a></article>`).join('')
const staticJobs = `<header><a class="brand" href="/OUTLINED/jobs/">OUTLINED</a><nav><a href="/OUTLINED/jobs/">Job map</a><a href="/OUTLINED/about/">About</a></nav></header><aside style="background:#edf1de;border-bottom:1px solid #d4d7ce;color:#354039;font-size:.78rem;line-height:1.55;margin:auto;max-width:1240px;padding:13px 30px"><strong>COMPANIES, BE AWARE — BEFORE ANY AI TRAINING CAN BEGIN:</strong> Teach people to check original sources, recognise incentives and bias, compare evidence, and keep human judgement accountable. Search rankings, ads and AI outputs are not neutral truth.</aside><main><section class="page"><p class="eyebrow">The job map</p><h1>Roles that reveal the work ahead.</h1><p class="lede">Named organisations only. Every page is based on a reviewed public source.</p><p class="count">${publicJobs.length} reviewed roles</p><div class="grid">${cards}</div></section></main><footer>OUTLINED · Independent public-job research and solution design.</footer>`
const jobsHtml = html.replace('<div id="root"></div>', `<div id="root">${staticJobs}</div>`)

await writeFile('dist/404.html', html)
for (const route of routes) {
  const directory = `dist/${route}`
  await mkdir(directory, { recursive: true })
  await writeFile(`${directory}/index.html`, route === 'jobs' ? jobsHtml : html)
}
