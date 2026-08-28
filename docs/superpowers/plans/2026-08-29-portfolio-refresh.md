# taotao.au Portfolio Refresh Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Present Tao's current products and live experiments in two honest, bilingual portfolio tiers with accurate names, links, descriptions, statuses, and contact details.

**Architecture:** Extend the existing typed project catalogue with tier and maturity keys, localize the new labels in the existing translation map, and render grouped cards inside the current homepage projects region. Preserve the existing responsive card system and add only the hierarchy styles needed by the two groups.

**Tech Stack:** Next.js 16 App Router, React 19, TypeScript, global CSS, Vitest, React Testing Library

---

### Task 1: Lock the approved content contract in tests

**Files:**
- Modify: `src/__tests__/page.test.tsx`

- [ ] **Step 1: Replace the stale nine-project assertions with two group assertions**

```tsx
const activeNow = within(projects).getByRole("group", { name: /Active now/i });
const experiments = within(projects).getByRole("group", {
  name: /More live experiments/i,
});

expect(within(activeNow).getAllByRole("link")).toHaveLength(6);
expect(within(experiments).getAllByRole("link")).toHaveLength(7);
```

- [ ] **Step 2: Assert the exact live URLs, renamed cards, maturity labels, Chinese group names, updated Now copy, and LinkedIn profile URL**

- [ ] **Step 3: Run the focused test and verify it fails because the grouping and new content do not exist**

Run: `npm test -- src/__tests__/page.test.tsx`

Expected: FAIL on the missing `Active now` group and new project links.

### Task 2: Add typed grouped project data

**Files:**
- Modify: `src/app/i18n.ts`

- [ ] **Step 1: Add explicit maturity and tier types**

```ts
export type ProjectStatus = "live" | "active" | "prototype";
export type ProjectTier = "activeNow" | "experiments";
```

- [ ] **Step 2: Replace the stale catalogue with the approved 13-project ordered catalogue**

| Tier | Project | Status | URL |
| --- | --- | --- | --- |
| Active now | BetterSchool | Live product | `https://betterschool.au/` |
| Active now | SayType | Live product | `https://saytype.taotao.au/` |
| Active now | KanaDrill | Active build | `https://kanadrill.taotao.au/` |
| Active now | Maths Practice | Active build | `https://mathtrainer.taotao.au/` |
| Active now | Voicely | Active build | `https://voicely.taotao.au/` |
| Active now | EverLog | Active build | `https://everlog.taotao.au/` |
| More live experiments | Threadline Studio | Live product | `https://stringart.taotao.au/` |
| More live experiments | MathPlay AU | Prototype | `https://mathplay.taotao.au/` |
| More live experiments | Mentii | Prototype | `https://menti.taotao.au/` |
| More live experiments | Veiled Roundtable | Prototype | `https://avalon.taotao.au/` |
| More live experiments | EnergyLens | Prototype | `https://energy.taotao.au/` |
| More live experiments | CaseMap | Prototype | `https://casemap.taotao.au/` |
| More live experiments | AI Ops Canvas | Prototype | `https://mindboard.taotao.au/` |

- [ ] **Step 3: Add equivalent English and Chinese tier/status/copy translations and update Now/contact copy**

- [ ] **Step 4: Return ordered localized groups from `getProjectGroups(locale)`**

### Task 3: Render and style the two tiers

**Files:**
- Modify: `src/app/home-page.tsx`
- Modify: `src/app/globals.css`

- [ ] **Step 1: Render a labelled project group for each tier, including count and intro**

```tsx
<div className="project-group" role="group" aria-labelledby={groupId}>
  <div className="project-group-header">
    <div>
      <h3 id={groupId}>{group.title}</h3>
      <p>{group.intro}</p>
    </div>
    <span>{group.projects.length}</span>
  </div>
  <div className="project-grid">...</div>
</div>
```

- [ ] **Step 2: Preserve current card linking, animation, focus, and responsive behaviour while adjusting card headings to level four**

- [ ] **Step 3: Add tier spacing, divider, count, and responsive header styles without changing the overall visual system**

- [ ] **Step 4: Run the focused test and verify it passes**

Run: `npm test -- src/__tests__/page.test.tsx`

Expected: all homepage tests pass.

### Task 4: Verify and publish

**Files:**
- Verify all modified files and docs

- [ ] **Step 1: Run full automated validation**

Run: `npm test && npm run lint && npm run build && git diff --check`

Expected: every command exits 0.

- [ ] **Step 2: Start the production build locally and capture desktop and mobile screenshots**

Run: `npm start -- --hostname 127.0.0.1 --port 3010`

Expected: English and `?lang=cn` homepages render both tiers cleanly at desktop and mobile widths.

- [ ] **Step 3: Review the final diff and git status, commit the intended files, fast-forward main, and push**

```bash
git add docs/superpowers src/__tests__/page.test.tsx src/app/home-page.tsx src/app/i18n.ts src/app/globals.css
git commit -m "feat: refresh current project portfolio"
git push origin main
```

Expected: the connected Vercel `taotao-au` project deploys the refreshed homepage.
