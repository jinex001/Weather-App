# Weather App — Content Pipeline & iOS Delivery Principles

> Status: Architecture direction / not yet implemented. Last updated: 2026-10-24.
> Audience: GPT, Claude Code, Codex, and maintainers.
> This document defines future-facing constraints, not a claim that an API, CDN, native app, CMS, or automatic iCloud watcher already exists.

## Product goal

Weather App is a weather-aware fashion editorial experience, not just a forecast app. Preserve the current editorial art direction, day/night and weather-driven recommendations, style-specific swiping, item-level interactions, and Korean/English/German copy. Continue shipping the existing web app while preparing for an App Store iOS release.

## Non-negotiable principles

1. **Content and application code must be separable.** New editorial images, individual product cutouts, product descriptions, and How to Wear copy must eventually publish without a new iOS binary. UI logic, native permissions, executable code, and features may still require App Store review and a binary update. Do not use remote content to bypass Apple's app-review rules.
2. **One canonical content model for web and iOS.** Avoid hard-wiring content exclusively into the web-only `look/outfits.js` implementation. Preserve existing IDs, weather/feels-like/daypart/style/age filters, item mappings, translations, and fallback behavior. Introduce a versioned, validated manifest/API contract before migration. Do not rewrite the live app preemptively.
3. **Editorial generation stays human-approved.** GPT creates editorials, individual product images (one item per image), and the Korean master How to Wear plus styling intent. The user approves visual assets. Claude Code preserves the Korean master, localizes en/de, checks the existing schema, maps assets, tests, and prepares PRs. Never infer an approval from a file's mere presence.
4. **Originals belong in iCloud Drive, not Git.** The user saves approved source assets to iCloud Drive; local Claude tooling copies them to a local inbox after confirming iCloud download completion, file stability, approvals, hashes, format, dimensions, alpha and duplicates. Do not alter or delete iCloud originals. Local `.image-inbox/incoming` and `.image-inbox/ready` remain local and excluded from Git. Do not claim phone Remote control automatically syncs images.
5. **Delivery assets differ from originals.** Publish optimized editorial JPGs and product cutouts using the latest `design/IMAGE_STYLE.md` and `design/IMAGE_MAPPING_HANDOFF.md` requirements. At time of writing, new product cutouts use real transparency in 500×500 WebP; existing legacy JPGs are not retroactively converted. These design documents take precedence for image-specific details.
6. **GitHub is review and source-control infrastructure, not necessarily the production image host.** For scale, plan object storage + CDN for assets and a content API or versioned manifest for metadata. Choose vendor and deployment strategy only after comparing cost, cache behavior, availability and operational needs. Avoid unnecessary early infrastructure.
7. **Publishing is a separate controlled action.** An approved PR and a successful build are not equivalent to content publication. Support draft → validated → approved → published (and rollback/unpublish). Do not automatically merge to `main`, publish, or deploy without explicit authorization.
8. **Backward compatibility and rollback.** Keep existing outfit/product IDs and references stable, retain unknown metadata keys, avoid editing unrelated looks, validate schema and language completeness, check actual file paths, and provide a way to roll back content-manifest versions. Do not break current web rendering during the transition.
9. **No unsupported factual claims in fashion copy.** Do not invent brands, prices, exact fabric compositions, temperatures or locations from an image. Mark uncertainty for review. Preserve the Korean master byte-for-byte through handoff; English and German should localize intent rather than rewrite it.
10. **Automate deterministic tasks first.** Image dimension/size/hash checks, deduplication, schema validation, missing asset checks, link checks and builds should run locally without repeated AI analysis. Visual cutout quality and fashion-language quality still require human review.

## Target content-delivery architecture (future)

```text
GPT editorials + product cutouts + Korean master
       ↓ explicit user approval
iCloud Drive / originals
       ↓ safe local import (not automatic unless configured/tested)
Local image inbox + manifest + hash validation
       ↓
Claude Code / optimization, en/de localization, mapping, QA
       ↓
GitHub branch → PR → approval
       ↓ separate publish gate
Versioned content manifest/API + object storage/CDN
       ├── Web App
       └── iOS App
```

The web and iOS clients should request a manifest version, filter content using shared rules, cache assets, handle offline/stale content gracefully, and refresh safely without requiring an App Store update for editorial-only changes. Cache TTL, content invalidation, API schema, hosting and analytics remain design decisions, not implemented features.

## iOS approach: decision pending

Evaluate reusing the current web stack via Capacitor versus building SwiftUI screens after a codebase audit. Confirm build tooling, runtime data dependencies, location permission behavior, native affordances, performance, offline caching, App Store review requirements, privacy disclosures, and release operations. Do not assume that wrapping the website alone guarantees App Store acceptance.

## Delivery phases

- **Phase 0 — protect current behavior:** Inventory `look/outfits.js`, supplementary mappings, `products.json`, content paths, localization, and build/preview flow. Baseline tests and coverage.
- **Phase 1 — reliable production:** Finish iCloud-approved-originals → local inbox handoff; verify actual assets; complete Claude integration and PR workflow. Keep original files untouched.
- **Phase 2 — portable content contract:** Define canonical IDs, manifest schema, asset URLs, copy fields, weather/daypart targeting, versioning, cache and rollback. Add a compatibility adapter for the current web app; migrate incrementally.
- **Phase 3 — remote publishing:** Add object storage/CDN and a controlled publication process, staging and production environments, content validation, rollback and monitoring.
- **Phase 4 — iOS app:** Audit and choose Capacitor/SwiftUI, implement native requirements, test via TestFlight, satisfy App Store requirements, and ship.
- **Phase 5 — operations:** Add new looks and copy through the content pipeline, without resubmitting the iOS app unless application functionality changes.

Phases may overlap after validation, but never migrate production content or publish automatically on assumption alone.

## Required agent checklist before changes

1. Read this file, `design/IMAGE_STYLE.md`, `design/IMAGE_MAPPING_HANDOFF.md`, `design/IMAGE_INBOX_HANDOFF.md` if present, `CLAUDE.md` and any applicable `AGENTS.md`.
2. Check the current branch, main status, open PRs, local uncommitted changes, and the exact content paths/schema before writing.
3. Distinguish **implemented now**, **proposed**, and **unverified** in reports.
4. For content changes: confirm explicit image approval, immutable original hashes, one-product-one-image, Korean master preservation, en/de localization, product IDs, runtime mapping, actual rendered images, and tests.
5. Keep GitHub commits in an isolated branch and PR; never overwrite unrelated assets or merge/publish without permission.
6. For iOS work: preserve the future ability to add editorials remotely; never bundle the sole canonical content dataset into an immutable app binary.
7. Document any intentional deviation and request approval before breaking these principles.

## Related documentation

- `design/IMAGE_STYLE.md`
- `design/IMAGE_MAPPING_HANDOFF.md`
- `design/IMAGE_INBOX_HANDOFF.md` (currently in PR #1; may not yet be on main)
- `design/look-coverage.md` and `design/look-library.md`
- `CLAUDE.md` / applicable `AGENTS.md`

## External policy reference

Apple App Review Guidelines: https://developer.apple.com/app-store/review/guidelines/
