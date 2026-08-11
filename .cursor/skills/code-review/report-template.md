# Code review report template

Copy this structure into the final response.

```markdown
# Code review report

**Scope:** [repo / paths reviewed]
**Stack:** [e.g. Next.js App Router, TypeScript]
**Date:** [ISO date]

## Summary
- CRITICAL: N | HIGH: N | MEDIUM: N | LOW: N
- Structure health: [Good / Needs work / Poor] — one sentence
- Dead/duplication: one sentence
- SEO readiness: one sentence

## Top 10 actions
1. [SEVERITY] Short action — path
2. ...

---

## Bugs

### CRITICAL
#### B1. Title
- **Where:** `path:line` (approx OK)
- **Evidence:** …
- **Impact:** …
- **Fix:** …

### HIGH
#### B2. …

### MEDIUM
#### B3. …

### LOW
#### B4. …

---

## File structure
| Issue | Current | Suggested | Severity |
|-------|---------|-----------|----------|
| … | `…` | `…` | MEDIUM |

### Proposed moves / renames
- `from` → `to` — reason

---

## Dead code & duplication
| Item | Location(s) | Action | Severity |
|------|-------------|--------|----------|
| Unused X | `…` | Delete | LOW |
| Duplicated Y | `a`, `b` | Extract to `…` | MEDIUM |

---

## Reusable chunks plan
| New module | Path | Pulls from | Benefit |
|------------|------|------------|---------|
| `Thing` | `src/components/…` | pages A, B | … |

---

## SEO recommendations
Ordered by impact.

### CRITICAL / HIGH
#### S1. Title
- **Page/file:** …
- **Gap:** …
- **Change:** …
- **Why it matters:** …

### MEDIUM
#### S2. …

### LOW
#### S3. …

---

## Out of scope / assumptions
- …
```

Severity labels in the report must be exactly: `CRITICAL`, `HIGH`, `MEDIUM`, `LOW`.
