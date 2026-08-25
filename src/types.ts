export type Job = { company: string; role: string; sector: string; source: string; need: string; solution_name: string; priority: string; verified_on: string; page_slug: string; public_page: string }
export type Solution = { company: string; role: string; slug: string; solution_name: string; hero: string; brief_summary: string; agent_heading: string; agent_summary: string; module_ids: string[]; first_real_action: string; human_judgement: string; source_url: string; verified_on: string; disclaimer: string }
export type Module = { name: string; description: string; endpoint?: string }
export type ActionName = 'analyse-work' | 'design-workflow' | 'design-agent' | 'check-governance' | 'implementation-plan' | 'build-learning-plan' | 'value-model' | 'executive-brief'
