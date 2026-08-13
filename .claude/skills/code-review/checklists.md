# Code review checklists

Use these while running passes. Not every item applies to every repo.

SEO is out of scope for this skill.

## Bugs

- [ ] Auth/session checks on protected routes and API handlers
- [ ] Input validation on all mutating endpoints
- [ ] No secrets in client bundles or committed env files
- [ ] Error boundaries / route error UI where failures are likely
- [ ] Async errors surfaced to users or logs
- [ ] Correct HTTP methods and status codes
- [ ] Dynamic route params validated before use
- [ ] Forms: loading, disabled submit, server error display
- [ ] Links and redirects resolve to real routes
- [ ] Dangerous HTML / markdown sanitized if rendered

## Structure

- [ ] `components/` = UI only (no DB/secrets)
- [ ] `lib/` = shared non-UI logic, content, utils
- [ ] `app/` = routes, layouts, metadata, route handlers
- [ ] Feature folders used consistently
- [ ] Design/mock files not imported by production routes
- [ ] No circular imports between lib and components
- [ ] Colocation vs shared: one clear rule followed

## Dead & duplication

- [ ] Unused components, hooks, utils, CSS modules
- [ ] Unreachable feature flags / dead branches
- [ ] Repeated JSX blocks across ≥2 pages
- [ ] Repeated string/content literals → content module
- [ ] Duplicate fetch/transform logic → lib helper
- [ ] Orphan files never imported from entrypoints

## Reuse extractions

- [ ] Extract only after ≥2 real call sites (or one oversized god-file)
- [ ] Proposed file path and public API named
- [ ] No new abstraction layers without callers
- [ ] Shared UI goes under `components/`; pure logic under `lib/`
