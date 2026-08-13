---
name: code-review
description: >-
  Full-codebase code review: find bugs by severity (CRITICAL/HIGH/MEDIUM/LOW),
  validate file structure (components, lib, app, etc.), remove dead and duplicated
  code, and propose reusable extractions. Use when the user asks for a code review,
  full codebase review, bug hunt, structure audit, dead-code cleanup, or refactor
  into reusable chunks. Also trigger on /code-review. Do not cover SEO (separate skill).
---

# Code Review

Perform a **full codebase** review (not only a diff). Produce actionable findings with severity, evidence, and concrete fixes. Prefer fixing only when the user asks; by default **report first**.

**Out of scope:** SEO, metadata, sitemap/robots, and ranking/CTR optimizations — handled by a separate skill.

## When invoked

1. Map the project (framework, package manager, `src/` layout, config).
2. Run the review passes below in order.
3. Emit the report using [report-template.md](report-template.md).

Do **not** invent bugs. Every finding needs a file path and a short evidence note (symptom, bad pattern, or missing piece).

## Severity (required)

| Level | Use when |
|-------|----------|
| **CRITICAL** | Security holes, data loss, auth bypass, secrets exposure, broken production paths, severe a11y/legal blockers |
| **HIGH** | Likely user-facing bugs, broken flows, major perf regressions, incorrect business logic, missing error handling on critical paths |
| **MEDIUM** | Edge-case bugs, maintainability debt that will cause bugs, weak structure, duplicated logic |
| **LOW** | Style nits, minor naming, small a11y polish, micro-optimizations |

If unsure between two levels, pick the **higher** one and note uncertainty.

## Pass 1 — Bugs & correctness

Scan for:

- Logic errors, off-by-one, wrong conditionals, race conditions
- Unhandled promise rejections / missing `await` / fire-and-forget in UI paths
- Null/undefined crashes, unsafe casts, bad type assertions
- Broken routes, wrong links, incorrect dynamic params
- API/route handler validation gaps, status-code mistakes
- Auth/session misuse, CSRF, open redirects, XSS/injection sinks
- Env misuse (`process.env` without guards), leaked secrets
- Incorrect React lifecycle (stale closures, missing deps that cause real bugs, double-fetch that corrupts state)
- Accessibility bugs that block use (focus traps, unlabeled controls, keyboard dead-ends)

For each bug: **severity**, title, location, evidence, impact, suggested fix.

## Pass 2 — File structure

Compare the tree to expected Next.js/`src` conventions (adapt if the repo differs):

| Area | Belongs in |
|------|------------|
| UI building blocks, layout chrome | `src/components/` (feature folders OK: `components/home/`) |
| Pure helpers, shared non-UI logic | `src/lib/` |
| Routes, layouts, route handlers, metadata routes | `src/app/` |
| Static assets | `public/` |
| Design mocks / throwaway HTML | `design/` (must not be imported by production app code) |
| Types shared across features | colocated or `src/lib` / `types` — be consistent |

Flag:

- Business logic or data fetching buried in huge page components that should live in `lib` or server helpers
- Presentational components living under `app/` that should be in `components/`
- `lib` files that are React components
- Cross-imports that create cycles
- God-files (>~300 lines) that mix concerns
- Inconsistent naming (`Button.tsx` vs `button.tsx`, index barrels abuse)

Suggest a **target structure** only where current layout is wrong; do not propose a rewrite for its own sake.

## Pass 3 — Dead & duplicated code

- Unused exports, unreachable branches, commented-out blocks, unused components/pages
- Copy-pasted JSX/logic across pages (extract shared component or `lib` helper)
- Duplicate constants/strings that should live in `src/lib/content` (or existing content module)
- Redundant wrappers that add no behavior
- Dependencies in `package.json` with no imports (note as LOW/MEDIUM)

Recommend extractions: name the new file path, what moves, and what stays.

## Pass 4 — Reusable chunks

Where duplication or oversized modules appear:

1. Name the shared abstraction (component, hook, util).
2. Propose path under `components/` or `lib/`.
3. Keep API small; avoid speculative “flexible” abstractions.
4. Prefer composition over prop-bloated mega-components.

Only suggest splits that remove real duplication or clarify boundaries.

Use [checklists.md](checklists.md) while scanning.

## Output rules

1. Use the structure in [report-template.md](report-template.md).
2. Group bugs by severity: CRITICAL → HIGH → MEDIUM → LOW.
3. Separate sections: Bugs, Structure, Dead/Duplication, Reuse plan.
4. End with a **Top 10 actions** ordered by severity × effort (quick wins first within same severity).
5. If the codebase is large, still cover all passes; sample exhaustively for security-critical paths and summarize lower-risk areas rather than skipping passes.
6. Match existing project conventions when suggesting paths/names.
7. Do **not** include an SEO section or SEO recommendations.

## Claude Code & Cursor

This skill is identical under:

- `.cursor/skills/code-review/` (Cursor)
- `.claude/skills/code-review/` (Claude Code)

Keep both copies in sync when editing. Commit them; do not gitignore these folders.
