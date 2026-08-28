# taotao.au Portfolio Refresh Design

## Goal

Bring the homepage portfolio in line with Tao's current work without turning the page into an undifferentiated project archive.

## Approved direction

Keep the existing visual language and homepage structure, but replace the single project grid with two clearly labelled tiers:

1. **Active now** — BetterSchool, SayType, KanaDrill, Maths Practice, Voicely, and EverLog.
2. **More live experiments** — Threadline Studio, MathPlay AU, Mentii, Veiled Roundtable, EnergyLens, CaseMap, and AI Ops Canvas.

Each card keeps a direct live link and receives one honest maturity label: **Live product**, **Active build**, or **Prototype**. English and Chinese content must stay equivalent.

## Content and naming

- Replace stale public names: String Art → Threadline Studio, Mindboard → AI Ops Canvas, Avalon Host → Veiled Roundtable, and Energy Plan Lens → EnergyLens.
- Expand BetterSchool copy to reflect all-school discovery, state/suburb browsing, and intake-zone/catchment mapping.
- Describe SayType as cross-platform desktop voice input rather than an older WhispLine concept.
- Describe Voicely as local-first sensitive-meeting transcription rather than generic iOS voice notes.
- Add the currently active KanaDrill, Maths Practice, and EverLog products.
- Update the Now section to describe the six current priorities and the portfolio's build/test/ship rhythm.
- Point LinkedIn to Tao's actual profile: `https://www.linkedin.com/in/ta0wang`.

## UI structure

The existing projects panel remains one accessible region. Inside it, each tier receives a heading, short explanatory line, project count, and its own responsive grid. Cards retain the current motion, focus, and hover behaviour. A subtle divider and tier header provide hierarchy without a wholesale redesign.

## Data model

Project definitions gain `tier` and `status` keys. Locale-specific tier headings, descriptions, and status labels live in the existing translation object. A grouping helper returns ordered groups to the component so content order is deterministic and testable.

## Validation

- React Testing Library verifies both tiers, all 13 links, maturity labels, renamed projects, Chinese equivalents, updated Now copy, and the LinkedIn URL.
- Run Vitest, ESLint, `next build`, and `git diff --check`.
- Inspect desktop and mobile screenshots from a local production build before publishing.
