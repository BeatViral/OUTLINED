import { describe, expect, it } from 'vitest'
import solutions from './data/solutions.json'
describe('priority route rendering records', () => { it.each(['abc-ai-adoption-specialist', 'findex-ai-digital-tools-adoption-lead', 'bellroy-ai-enablement-lead', 'icon-group-project-trainer-national-heidi-ai-adoption', 'deloitte-australia-ai-value-adoption-lead-director'])('%s exists', slug => expect(solutions.some(x => x.slug === slug)).toBe(true)) })
