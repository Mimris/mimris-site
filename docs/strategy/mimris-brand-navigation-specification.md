# Mimris Brand and Cross-Repository Navigation Specification

Status: Public-site implementation review — product-repository rollout remains deferred

Owner: `mimris-site`

Repositories in scope: `mimris-site`, `mimris`, `mimris-ai-workspace`

Last updated: 2026-08-23

## Purpose

This document is the source of truth for a coordinated Mimris brand and navigation system across the public website and the two product applications. It defines the shared structure without making the repositories share runtime components or forcing their headers to have identical controls.

The public-site header is now authorized as the first implementation and review surface. No implementation is yet authorized in `mimris` or `mimris-ai-workspace`. The three repositories remain separate, and each product will implement the approved specification locally only after the public-site result is reviewed.

## Observed baseline

The concepts are based on the current repositories, not an assumed greenfield design:

- `mimris-site` currently uses a text **M** in a rounded square and a six-link public header.
- `mimris` currently exposes its main modelling actions through legacy project and modelling menus; its `Header` component itself is visually empty.
- `mimris-ai-workspace` currently has a dense working top bar containing its workspace menu, universe and context, locale, mode, guide, and appearance controls.

The shared design must therefore define a stable ecosystem zone while leaving a flexible product-control zone.

## Brand architecture

**Mimris** is the umbrella brand and ecosystem. The two products are:

- **Mimris Modelling** — create, explore, and evolve structured models.
- **Mimris AI Workspace** — use models and context to design and perform work.

The Mimris mark always represents the ecosystem, never only one product. Product names remain text labels beside or near the ecosystem mark; they do not receive separate competing logos.

### Name origin and brand story

**Mimris** combines two deliberate references:

- **Mímir** — the source of knowledge: the enduring idea of knowledge worth seeking, maintaining, and drawing from.
- **Metis** — the preceding tool: the practical modelling lineage that Mimris extends rather than disowns.

This is a lineage, not an instruction to use mythology literally. The identity should convey accumulated knowledge becoming usable structure: a clear evolution from Metis into the wider Mimris ecosystem. Avoid literal character illustration, runes, helmets, eyes, or faux-Norse ornament.

## Logo concepts for review

All three directions avoid robot heads, brains, circuit boards, sparkles, and generic AI gradients. They are deliberately simple enough for a 24 px application header and for one-colour reproduction.

### Concept 1 — Knowledge model

Four model nodes connect around a central open diamond. The nodes represent explicit objects and relationships; the negative-space centre represents a coherent model that makes knowledge navigable.

- Strength: most directly expresses Active Knowledge Modelling.
- Character: systematic, open, architectural.
- Risk: without the distinctive open centre it could drift toward a generic network symbol.

### Concept 2 — M network

A continuous M-shaped path connects five nodes. It combines a recognizable initial with the idea of connected knowledge.

- Strength: fastest association with the Mimris name and highly legible at small sizes; its connected initial can quietly carry the joined Mímir/Metis lineage.
- Character: direct, technical, confident.
- Risk: the M must remain restrained to avoid resembling an analytics chart or crypto mark.

### Concept 3 — Source of knowledge

A minimal source or well is formed by an open circular vessel, a central rising point, and two quiet ripple lines. It references Mímir as a source of knowledge, while its structured geometry keeps it connected to the Metis modelling lineage rather than a literal Norse illustration.

- Strength: ownable story and a warmer, more timeless identity.
- Character: reflective, enduring, quietly distinctive.
- Risk: less immediately descriptive of modelling and needs the wordmark during early adoption.

### Focused refinement — Open-core M

This refinement combines Concept 1 and Concept 2 without simply overlaying them. The M remains the outer silhouette, while the open diamond becomes its central valley and the six nodes retain the knowledge-model character.

- Strength: joins immediate name recognition with the most distinctive semantic feature of the knowledge-model direction.
- Character: systematic, direct, and more ownable than a plain network M.
- Risk: the central construction may become busy below 24 px and must be tested optically before selection.

The focused refinement board is at [`assets/mimris-logo-hybrid-concept.svg`](assets/mimris-logo-hybrid-concept.svg). It remains a discussion concept rather than a fourth approved direction.

### AI integration exploration

AI should appear as something that activates and uses the knowledge model, not as a replacement for the model or as generic AI decoration. This keeps the Mimris umbrella broader and more durable than any one generation of AI technology.

Three treatments explore increasing levels of explicitness:

1. **Reasoning core** — a single active point within the open diamond; visually quiet, but too abstract to communicate AI clearly.
2. **Knowledge transformation** — round inputs become structured outputs through the core; more semantic but less immediately legible.
3. **Hidden AI monogram** — literal A and I geometry inside the M; most explicit, but busiest and most likely to date the identity.

The comparison board is at [`assets/mimris-logo-ai-hybrid-concepts.svg`](assets/mimris-logo-ai-hybrid-concepts.svg).

Reviewer feedback did not support these abstract AI treatments: the central point and transformed node shapes did not make both **AI** and **model graph** sufficiently visible. They remain recorded as explored directions, not recommendations.

### Explicit model graph + AI exploration

The revised brief assigns each idea a visible job:

- the **M is constructed as the model graph**, using connected nodes and relationships;
- **AI appears as legible A–I geometry**, connected to the same graph rather than represented by a generic AI motif.

Three layouts test that construction: a clearly separated but connected **M–AI graph**, a more compact **shared-leg MAI ligature**, and an **AI subgraph enclosed by the M**. The comparison board is at [`assets/mimris-logo-model-ai-concepts.svg`](assets/mimris-logo-model-ai-concepts.svg).

This exploration also introduces a responsive-logo hypothesis: the complete M–AI signature carries the full story at normal sizes, while the graph-built M becomes its compact derivative in application headers and favicons. That is preferable to making the AI letters illegible merely to force every idea into a 24 px square.

### Shared-stroke MAI refinement

A more compact construction reuses rather than appends geometry. The graph-built M drops its centre to the baseline. Its right half then forms an A-shaped triangle; one crossbar makes that reading explicit. The outer-right vertical simultaneously serves as the M’s final stem, the A’s right leg, and the I.

This is the most economical integration explored so far: only the A crossbar is added to the graph-M. At large sizes the A may receive a green accent; in a strict one-colour or 24 px version, M and graph lead while A–I become secondary, discoverable readings. The focused board is at [`assets/mimris-logo-shared-stroke-mai.svg`](assets/mimris-logo-shared-stroke-mai.svg).

### Shared-stroke colour exploration

Colour can reveal the shared letterforms without adding more geometry. The proposed semantic palette is:

- **Mimris ink** (`#17201d`) for the umbrella structure;
- **knowledge green** (`#246a4b`) for the model graph and A relationship;
- **AI orange** (`#d76532`) for the shared right vertical that reads as I and active intelligence.

The recommended starting treatment uses all three roles: ink for the left M construction, green for the A diagonal and crossbar, and orange for the I. A more restrained alternative keeps the entire graph ink and colours only the I orange. Both require a complete monochrome version in which meaning remains structurally present rather than depending on colour.

The comparison board is at [`assets/mimris-logo-color-exploration.svg`](assets/mimris-logo-color-exploration.svg).

#### Blue foundation alternatives

Reviewer preference favours the semantic triad but asks for a blue-toned foundation instead of near-black ink. Four muted dark blues were compared while keeping knowledge green and AI orange unchanged.

The recommended starting point is **Midnight slate** (`#25364a`): visibly blue, but grey enough to anchor the two warmer accents without making the identity feel conventionally corporate or purely technical. **Atlantic navy** (`#203a5f`) is the stronger alternative when a more obvious blue is desired. Both comfortably exceed normal-text contrast requirements on the cream and white brand surfaces.

The comparison board is at [`assets/mimris-logo-blue-foundation-exploration.svg`](assets/mimris-logo-blue-foundation-exploration.svg).

#### Lighter blue and restored model core

The earlier knowledge-model direction included an open diamond: a coherent model or navigable structure held inside the surrounding graph. The latest refinement restores that symbol inside the central V of the shared-stroke M–A–I mark.

The recommended lighter foundation candidate is **Lighter slate** (`#36516b`), which softens Midnight slate while retaining 7.26:1 contrast on the cream brand surface. The open green diamond floats in the upper V, clear of both the green A crossbar and the orange I. A smaller diamond may be used between 24 and 32 px if optical testing shows the primary version is too dense.

The focused board is at [`assets/mimris-logo-light-blue-diamond-refinement.svg`](assets/mimris-logo-light-blue-diamond-refinement.svg).

#### Well symbol alternative

The open diamond can be replaced by a restrained source-of-knowledge symbol that connects more directly to Mímir. The recommended treatment is an open green vessel with a single rising source point inside the M’s central V. It suggests a well without literal masonry, water illustration, or Norse ornament.

This produces a compact brand narrative: **Mímir’s well** inside **Metis’s model graph**, with **AI** present in the shared A–I geometry. Ripple and well-mouth variants communicate water more explicitly but add detail and become illustrative sooner. The focused comparison is at [`assets/mimris-logo-well-symbol-refinement.svg`](assets/mimris-logo-well-symbol-refinement.svg).

Six broader well-symbol directions are compared at [`assets/mimris-logo-well-symbol-alternatives.svg`](assets/mimris-logo-well-symbol-alternatives.svg): rising source, connected source, depth echoes, well mouth, wellspring, and geometric vessel. The strongest candidates to refine are **A** for simplicity and story, **B** for graph integration, and **F** for geometric coherence.

#### AKM integration

Active Knowledge Modelling can be included without requiring the compact mark to display another full acronym. The recommended semantic mapping is:

- **Active** — orange AI action and the shared A–I geometry;
- **Knowledge** — the green well or source;
- **Modelling** — the blue node-link M.

For contexts explicitly about the method, the core Mimris logo can use an endorsed **ACTIVE KNOWLEDGE MODELLING** descriptor. A K-shaped source and a separate AKM methodology badge are also explored, but both increase identity complexity and should remain secondary unless review strongly favours them. The comparison board is at [`assets/mimris-logo-akm-integration.svg`](assets/mimris-logo-akm-integration.svg).

**Selected 2026-08-23:** Concept C, the endorsed descriptor lockup. Spell out **ACTIVE KNOWLEDGE MODELLING** beneath the Mimris wordmark on public, educational, editorial, presentation, and methodology-focused material. Do not include the descriptor in compact product headers or favicon-scale marks. This decision selects the lockup relationship; it does not yet authorize final core-mark production or repository implementation.

The selected-treatment board is at [`assets/mimris-logo-akm-lockup-selected.svg`](assets/mimris-logo-akm-lockup-selected.svg).

The review board is at [`assets/mimris-logo-concepts.svg`](assets/mimris-logo-concepts.svg). These are concept drawings, not final production masters.

## Shared header anatomy

Every desktop header has two conceptual zones:

```text
| ecosystem zone                                    | product-control zone |
| Mimris brand | product navigation | active state   | local controls       |
```

The ecosystem zone uses the same order, naming, active-state principle, and mark across repositories. The product-control zone is owned by the repository in which it appears.

### Public site: discovery header

```text
[mark] Mimris   Product ▾   Demo   Learn   About              [Open Workspace]
```

Product dropdown:

```text
Mimris Modelling
Mimris AI Workspace
Active Knowledge Modelling
```

Rules:

- The Mimris brand links to `/` on the public site.
- **Product** is a button with an accessible menu; it is not a hover-only interaction.
- **Demo** leads to the primary guided proof. Initially this may be `/examples/coffee-shop`.
- **Learn** leads to the editorial/learning index. Initially this may be `/articles`.
- **About** leads to `/about`.
- **Open Workspace** is the only persistent primary CTA and opens Mimris AI Workspace.
- The current broad routes remain available through dropdowns, page content, and footer navigation rather than all competing in the top row.

### Mimris Modelling: work header

```text
[mark] Mimris   Modelling   AI Workspace   |   Project / model / view controls…
                ━━━━━━━━━
```

Rules:

- The Mimris brand links to the canonical `mimris-site` origin.
- **Modelling** is the active product and uses both weight and an underline/pill; colour is not the sole signal.
- **AI Workspace** is a cross-product link.
- Existing modelling actions stay in the local control zone and are not moved into the ecosystem navigation.
- On narrow screens the product links collapse to a labelled product switcher; the mark remains visible.

### Mimris AI Workspace: work header

```text
[mark] Mimris   Modelling   AI Workspace   |   World / context / mode / utility controls…
                            ━━━━━━━━━━━━
```

Rules:

- The Mimris brand links to the canonical `mimris-site` origin.
- **AI Workspace** is the active product; **Modelling** is a cross-product link.
- Workspace start, Dashboard, universe load/save, and tools remain application actions. They belong in the workspace menu or local control zone, not the Mimris brand menu.
- Existing world, context, locale, mode, guide, and appearance controls remain local and may reflow independently of the ecosystem zone.
- The public-site link must say or announce **Mimris ecosystem home**; the product label must not masquerade as the home link.

The coordinated header board is at [`assets/mimris-header-concepts.svg`](assets/mimris-header-concepts.svg).

## Interaction and accessibility contract

- Brand link accessible name: **Mimris ecosystem home**.
- Product switch links use the full accessible names **Mimris Modelling** and **Mimris AI Workspace**, even if the visible labels are shortened.
- Active product uses `aria-current="page"` when the link represents the current product surface.
- Dropdown triggers use a native button, `aria-expanded`, and keyboard focus management.
- Menus open by click/keyboard, close with Escape and outside click, and never require pointer hover.
- Header focus indicators meet WCAG 2.2 contrast and are not clipped.
- Mark-only use is permitted at small sizes only when an accessible name is present.
- Minimum mark size: 24 px in applications, 28 px on the public site. Minimum interactive target: 40 × 40 px where space permits.
- Motion is optional and respects `prefers-reduced-motion`.

## Visual coordination

The shared elements are the mark, wordmark treatment, naming, spacing rhythm, active-state geometry, and focus behaviour. Each product may retain its own surface theme.

Suggested starting tokens:

| Token | Public site | Applications |
| --- | --- | --- |
| Mark | 30–34 px | 24–28 px |
| Ecosystem-zone height | 64–72 px | 40–48 px |
| Item gap | 24–30 px | 16–22 px |
| Active indicator | 2 px underline or quiet filled pill | same geometry |
| Divider | 1 px neutral line | 1 px theme-aware line |
| Brand colour | current Mimris ink/green | inherit theme with verified contrast |

The logo must work in ink, white, and the current Mimris green (`#246a4b`). The final system should not depend on colour gradients.

## Responsive behaviour

- Public site: brand and CTA remain visible; Product, Demo, Learn, and About collapse into one accessible menu.
- Applications: mark remains visible; product links collapse into a product switcher before local controls are hidden. Cross-product and ecosystem links open in a new tab and use a ↗ indicator; local product routes remain in the current tab.
- Local controls follow each product’s own priority order. The cross-repository specification does not prescribe which workspace or modelling utility disappears first.
- No horizontal scrolling is introduced by the ecosystem zone.

## Repository ownership and delivery sequence

1. `mimris-site` owns this specification, the approved logo masters, usage guidance, and public header implementation.
2. `mimris` consumes copied/versioned brand assets and implements the Modelling active state locally.
3. `mimris-ai-workspace` consumes copied/versioned brand assets and implements the AI Workspace active state locally.
4. No repository imports runtime UI from another repository. Cross-repository alignment is specification- and asset-version-based.
5. External origins are configuration values in applications, with production defaults and local-development overrides.

## Review gates

Before implementation:

- select one logo direction or request a focused refinement;
- confirm whether **Demo** initially maps to the Coffee Shop example;
- confirm that **Articles** is the editorial navigation label and maps to `/articles`;
- confirm the canonical production origins for site, Modelling, and AI Workspace;
- approve the shared active-state treatment and mobile product switcher.

After approval, implementation should proceed repository by repository, beginning with `mimris-site`, with visual and keyboard checks before moving to either application.

### Decision docket

The following defaults turn the review into one bounded decision. They are recommendations, not approvals.

| Decision | Recommended default | Basis |
| --- | --- | --- |
| Logo direction | **Shared-stroke M–A–I graph with rising-source well** | The lighter-slate M is the model graph, its green right half forms A, its orange right stem reveals I/AI, and the well reconnects the mark to Mímir’s source of knowledge. The public site is the optical-review surface before production masters are created. |
| Demo destination | **Coffee Shop example** at `/examples/coffee-shop` | The route already exists as the primary guided proof and connects both products. |
| Editorial destination | **Articles** at `/articles` | The route is the canonical editorial index for material prepared for external publication. |
| Production origins | Site: `https://mimris-site.vercel.app`; Modelling: `https://mimris.vercel.app`; AI Workspace: `https://mimris-ai-workspace.vercel.app` | These are the public origins currently used by the repository. Confirm that they are intended as durable canonical origins rather than interim deployment domains. |
| Desktop active state | **Semibold label plus 2 px underline** | It remains visible without relying on colour and leaves the product-control zone visually quiet. |
| Mobile product navigation | **Labelled “Switch product” button** opening both product links | It states the action clearly, preserves the mark, and avoids an ambiguous mark-only or icon-only control. |

A reviewer can approve the recommended defaults as a set or record only the exceptions. Any requested logo refinement should name one direction and one concrete issue to solve; it should not combine the three marks into a fourth direction.

### Finalization checks after logo selection

Before the chosen concept becomes a production master:

- redraw and optically balance it on a consistent grid rather than exporting the review-board geometry unchanged;
- verify true one-colour versions in ink, white, and Mimris green without background-coloured cut-outs;
- compare the mark alone and with the wordmark at 16, 24, 28, 32, and 48 px;
- check recognizability on light and dark application surfaces and in browser favicon crops;
- produce accessible SVG masters plus PNG fallbacks, and record the asset version consumed by each repository.

## Explicitly deferred

- replacing favicon, social-card, or press-kit assets;
- replacing the current simple application landing pages with ecosystem-site redirects;
- creating a shared cross-repository component package;
- redirect or domain changes;
- application navigation restructuring unrelated to the ecosystem zone.
