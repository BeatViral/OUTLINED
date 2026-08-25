import { mkdir, readFile, writeFile } from 'node:fs/promises'
import solutions from '../src/data/solutions.json' with { type: 'json' }

const html = await readFile('dist/index.html', 'utf8')
const routes = ['jobs', 'about', ...solutions.map(({ slug }) => `solutions/${slug}`)]

await writeFile('dist/404.html', html)
for (const route of routes) {
  const directory = `dist/${route}`
  await mkdir(directory, { recursive: true })
  await writeFile(`${directory}/index.html`, html)
}
