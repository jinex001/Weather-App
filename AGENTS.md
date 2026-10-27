# Weather App — Agent Instructions

This file is the repository entry point for Codex and other coding agents. Claude Code also reads `CLAUDE.md`. Do not assume ChatGPT image-generation chats automatically load this repository: provide the relevant documents in those sessions.

## Mandatory first steps
- Check branch, working tree, open PRs, and current implementation before modifying anything. Preserve uncommitted work, approved images, IDs, paths and unrelated outfits.
- Read [content and iOS delivery principles](design/CONTENT_DELIVERY_IOS_STRATEGY.md). Distinguish implemented features from future plans.
- Read **only the task-relevant references** below, rather than loading every long document indiscriminately.

## Task → authoritative document
| Task | Read |
| --- | --- |
| Editorial creation, art direction, product image specifications | `design/IMAGE_STYLE.md` |
| Approved GPT images, iCloud originals, local inbox, approval manifest | `design/IMAGE_INBOX_HANDOFF.md` (check whether PR #1 has been merged) |
| Product Breakdown, How to Wear, localization, runtime mapping | `design/IMAGE_MAPPING_HANDOFF.md` (especially §5-1; global sets §5-2), `design/look-library.md`, `design/look-coverage.md` |
| Global generation, climate context, visual region, `look/global/` sets, `look/global-context.js` | `design/IMAGE_STYLE.md` §12, `design/GLOBAL_IMAGE_EXPANSION_HANDOFF.md` (implemented vs deferred), `design/look-library.md` "글로벌 맥락" |
| Cutout generation and validation | `design/CUTOUTS.md` and `design/IMAGE_STYLE.md` |
| Web/iOS architecture, content API/CDN, publication, App Store | `design/CONTENT_DELIVERY_IOS_STRATEGY.md` |
| UI / design system | `design/design-system.md`, `design/tokens.json` |
| Project history and existing implementation caveats | `CLAUDE.md` |

## Workflow constraints
- GPT handles editorial and one-product-one-image creative production, plus Korean master How to Wear and styling intent; the user explicitly approves visual assets.
- iCloud Drive stores originals only. Claude Code/local tools ingest verified copies; never edit or delete originals. No automatic iCloud→local sync or Claude watcher should be claimed unless actually implemented and tested.
- Preserve Korean master copy; Claude Code handles en/de localization and existing app schema integration. Do not invent brands, fabrics, temperatures, prices or image facts.
- Verify image format, transparency, dimensions, hashes, product count, localization, mapping, build and regression checks. Human visual review remains necessary.
- Work in a separate branch and PR. Do not push directly to `main`, merge, publish content, or deploy without explicit approval.
- Keep content delivery independent from app binary updates. The proposed API/CDN, CMS and iOS app are **not yet implemented**.
- When documents disagree, prefer the latest explicit user-approved rule and verified live code, flag ambiguity, and do not silently override prior assets.

## Documentation maintenance — required in the same PR
- When a task changes an approved rule, workflow, data contract, image specification, asset path, validation procedure, deployment behavior, or architectural decision, update the **corresponding authoritative Markdown document in the same PR** as the implementation.
- If a new recurring workflow has no suitable reference, add a focused MD file and register it in this document and `CLAUDE.md`. Avoid duplicate or contradictory sources of truth.
- For ordinary content additions or routine mapping under existing rules, update inventories/coverage only where the current process requires it; do not rewrite architecture documents needlessly.
- Before marking work complete, compare the actual implementation and tests against the affected MD instructions. Record what changed, what was verified, and what remains proposed/unverified. Never describe a proposed workflow as implemented.
- If instructions conflict, do not silently pick one: report the conflict, request approval for consequential changes, then update the canonical documentation once resolved.
