# Mimris Phase 1: Positioning and Web Foundation

Status: Draft controlling specification

Owner: Mimris

Phase: 1
Last updated: 2026-08-21

## 1. Purpose

Phase 1 establishes a clear public explanation of Mimris and a credible web foundation from which the products, demonstrations, knowledge content, and promotion can grow.

This repository is the home for the Mimris ecosystem's external communication: positioning, messaging, public concepts, website structure, SEO/GEO, content, and promotion strategy. The `mimris` and `mimris-ai-workspace` repositories remain focused on implementing their products.

This specification controls Phase 1. Detailed page, content, analytics, and promotion specifications may be added under `docs/`, but they should remain consistent with this document and [product-architecture.md](./product-architecture.md).

Post-launch measurement and prioritization continue in [Phase 2: Post-launch learning](./phase-2-post-launch-learning.md).

## 2. Phase 1 objectives

Phase 1 must make it possible for a new visitor to:

1. understand what Mimris is and why it exists;
2. understand Active Knowledge Modelling without prior knowledge of Mimris terminology;
3. distinguish Mimris Modelling from Mimris AI Workspace;
4. understand the relationship between an AKM Universe and a World through a concrete example;
5. choose a relevant next action: explore a product, follow a guided proof, read more, or express interest.

It must also give search engines and generative systems clear, canonical, machine-readable explanations of the core concepts.

## 3. Strategic foundation

### Problem

Organizational knowledge is distributed across documents, conversations, systems, databases, models, AI sessions, and people's experience. The information may be available while its meaning and relationships remain implicit.

Generative AI can produce useful material from that information, but without durable domain structure its outputs can become disconnected from the concepts, decisions, processes, and constraints of the work.

### Proposition

> **Turn knowledge into models AI can work with.**

Mimris uses Active Knowledge Modelling to make domain knowledge explicit, connected, and usable as context for people, software, and AI.

### Umbrella message

> **Model the world. Work with it.**

Mimris Modelling creates and evolves structured models. Mimris AI Workspace uses those models with documents, processes, tasks, decisions, and AI to perform work.

### Differentiation

Mimris occupies the intersection of knowledge, modelling, and AI. It is not positioned as only:

- a diagramming tool;
- a fixed modelling notation;
- a knowledge base or file repository;
- a document chatbot;
- an AI task runner without durable domain context.

Its differentiator is the continuous connection from domain understanding to explicit model structure to contextualized action.

## 4. Core definitions

These definitions are canonical for Phase 1 public communication.

### Mimris

**Mimris** is an approach and product ecosystem for turning domain knowledge into explicit models that people, software, and AI can understand and use.

### Active Knowledge Modelling

**Active Knowledge Modelling (AKM)** is the practice of creating connected, evolvable models that remain usable as context for exploration, decisions, applications, AI, and work.

### AKM Universe and World

An **AKM Universe** is the working context for an AKM World. `Universe.World` and the Workspace are where the World is built and evolved; export/generation produces an Operational Preview. A **World** may begin as an empty template or become a data-filled operational context.

### Mimris Modelling

**Mimris Modelling** is the specialist environment for creating, structuring, visualizing, inspecting, and evolving models of complex domains.

### Mimris AI Workspace

**Mimris AI Workspace** is an AI-enabled working environment where structured models become context for designing and performing work with documents, processes, tasks, decisions, and deliverables.

## 5. Target audiences

### Primary audience

Phase 1 prioritizes AI-enabled knowledge and software professionals:

- enterprise, process, and knowledge modellers;
- solution and enterprise architects;
- knowledge engineers and AI architects;
- AI application developers and technical founders;
- business analysts and digital-transformation specialists.

They are likely to recognize the need for explicit models, durable context, provenance, and domain-specific structure. The site must give them enough precision and evidence to investigate further.

### Secondary audience

The secondary audience includes consultants, process owners, product teams, and business professionals interested in using AI to understand or transform organizations.

The site should use plain language first, then progressively reveal specialist concepts such as POPS, IRTV, TYPE, IDEF0, and ICOM. Specialist terminology should support credibility rather than obstruct the first explanation.

## 6. Product positioning and boundary

### Mimris Modelling

**Message:** Understand and model complex worlds.

Primary job: define and manipulate model semantics, objects, relationships, diagrams, views, and hierarchies.

Primary CTA: **Explore Mimris Modelling**.

### Mimris AI Workspace

**Message:** Put structured models to work.

Primary job: use models as context for AI collaboration, documents, planning, processes, tasks, decisions, execution, and deliverables.

Primary CTA: **Explore Mimris AI Workspace**.

The boundary and capability matrix are defined in [product-architecture.md](./product-architecture.md). The homepage must present the products as complementary, not as competing versions of the same application.

## 7. Website role

The website is the public front door and canonical explanation of the ecosystem. It should:

- explain the problem before introducing specialist methodology;
- sell the ecosystem before either individual product;
- define important terms directly and consistently;
- provide visible product evidence, not only conceptual claims;
- turn the Coffee Shop World into a guided proof path;
- connect articles and promotional material to permanent canonical pages;
- direct visitors to public demos and appropriate public source code.

The repository now uses native Next.js on Vercel as its canonical runtime. It retains the static press and legacy documentation surfaces, synchronises their assets during pnpm development and builds, and keeps published proof paths stable.

### Current implementation status

- The ecosystem homepage, concept pages, product pages, Coffee Shop proof, About page, and initial article are published.
- The Coffee Shop CTA opens the `coffee-shop-generic` Universe in Mimris Modelling with the published IRTV model and End-to-End Store Flow view selected.
- Markdown editorial sources live under `content/articles/` and are published through the article routes, with grouped article navigation, responsive mobile menus, author bylines, and end-of-article AI-assisted writing notes.
- The current article set includes the modelling explainers, Coffee Shop proof, “Why AI Needs Models,” and the exploratory “Can AI Have Consciousness?” article with a separate full-scale infographic page.
- Information architecture, SEO/GEO, and analytics briefs live under `docs/website/`.
- Vercel uses the native Next.js framework preset; Vite, Vinext, and Cloudflare build infrastructure have been removed.

## 8. Information architecture

Target public architecture:

```text
/
|-- /why-mimris
|-- /active-knowledge-modelling
|-- /products
|   |-- /products/modelling
|   `-- /products/ai-workspace
|-- /concepts
|-- /examples
|   `-- /examples/coffee-shop
|-- /articles
|   |-- /articles/active-knowledge-modelling
|   |-- /articles/coffee-shop-universe
|   |-- /articles/modelling-and-workspace
|   |-- /articles/from-biological-viability-to-artificial-consciousness
|   `-- /articles/can-ai-have-consciousness-infographic
|-- /about
|-- /press.html
`-- /metis-legacy.html
```

Existing `.html` URLs should continue to work through stable pages or redirects during migration. The final route form and deployment runtime must be decided before implementing multiple new pages.

### Homepage narrative

The homepage should follow this sequence:

1. **Hero:** Turn knowledge into models AI can work with.
2. **Problem:** Information is abundant, but domain meaning and relationships remain implicit.
3. **Approach:** Introduce Active Knowledge Modelling through `Knowledge -> Models -> Context -> Action`.
4. **Products:** Present Mimris Modelling and Mimris AI Workspace side by side.
5. **Guided proof:** Use the Coffee Shop World in an AKM Universe to show the approach in a familiar domain.
6. **Credibility:** Explain the modelling heritage and show real product screenshots or flows.
7. **Next action:** Offer product demos, deeper reading, GitHub where public, and an interest/follow mechanism.

## 9. Phase 1 content package

The first permanent content set is:

| Content | Purpose |
| --- | --- |
| What is Mimris? | Brand and ecosystem definition |
| What is Active Knowledge Modelling? | Category and core concept |
| Mimris Modelling | Product definition and evidence |
| Mimris AI Workspace | Product definition and evidence |
| Coffee Shop World | Accessible end-to-end demonstration |
| Why AI Needs Models | Initial thought-leadership article |
| Active Knowledge Modelling | Canonical concept explainer |
| The Coffee Shop World | Editorial proof of the flagship example |
| Mimris Modelling and Mimris AI Workspace | Product boundary explainer |
| From Metis to Mimris | Heritage and credibility |
| Can AI Have Consciousness? | Exploratory AI News and Commentary article |
| Consciousness infographic | Separate visual companion at readable scale |

The same source material should support the website, LinkedIn posts, demonstrations, YouTube material, and press references. Promotion should lead back to durable canonical content rather than create disconnected claims.

## 10. Coffee Shop guided proof

The Coffee Shop World is the initial flagship example because it is familiar enough that visitors can focus on the AKM Universe and method rather than learning the domain.

It should connect:

```text
Domain description
      -> concepts and relationships
      -> processes, roles, products, and systems
      -> model views
      -> workspace documents and decisions
      -> planned and performed work
      -> deliverables
```

The public proof should show both products doing their distinct jobs in the same AKM Universe around the Coffee Shop World. It should be possible to follow the main path in about ten minutes, with shorter screenshots or clips available for first-time visitors.

## 11. SEO and GEO foundation

SEO and generative-engine optimization are part of the information architecture, not a post-launch task.

Each important concept or product should have one canonical page with:

- a direct definition near the beginning;
- descriptive title, summary, and canonical URL;
- semantic heading structure;
- explicit relationships to other Mimris concepts;
- a concrete example and appropriate internal links;
- accurate Open Graph and social metadata;
- relevant structured data where it describes visible page content;
- inclusion in the sitemap and an intentional `llms.txt` summary.

Initial topic clusters include Active Knowledge Modelling, AI knowledge modelling, AI domain and process modelling, models as AI context, enterprise modelling with AI, and structured context for AI agents.

GEO content should be clear enough to quote or summarize accurately. It must not manufacture authority, citations, or unsupported comparisons.

## 12. Conversion and analytics

Phase 1 conversion should favor learning and qualified interest over aggressive sales language.

Primary visitor actions:

- follow the guided proof;
- open the relevant product demo;
- explore public source code where available;
- read a concept or article;
- request access or register interest when a real mechanism is available.

At minimum, analytics should measure:

- landing-page and canonical concept-page visits;
- acquisition source;
- product-page and demo click-through rates;
- progress through the Coffee Shop proof;
- article engagement;
- GitHub, LinkedIn, and YouTube referrals;
- interest or access conversions, once implemented.

The primary Phase 1 question is: **Does a visitor understand enough to investigate Mimris further?**

Analytics must respect applicable privacy requirements and should not be installed until the chosen tool, consent behavior, and data collection scope are documented.

## 13. Phase 1 deliverables

### Strategy and content system

- accepted product architecture and terminology;
- positioning, audience, and message hierarchy;
- canonical information architecture and URL policy;
- editorial structure separating internal `docs/` from publishable `content/`;
- initial SEO/GEO and analytics specifications;
- promotion plan derived from permanent site content.

### Public website

- revised ecosystem-led homepage;
- Active Knowledge Modelling page;
- separate Mimris Modelling and Mimris AI Workspace pages;
- Coffee Shop guided proof page;
- About/heritage and first thought-leadership article;
- retained press and legacy documentation access;
- working navigation, metadata, sitemap, discovery content, social previews, and accessible responsive layout;
- a truthful, working conversion or follow mechanism.

### Evidence and promotion

- current screenshots or short product demonstrations;
- one coherent end-to-end Coffee Shop story across the website and products;
- revised LinkedIn launch package with article-first approval workflow and publication log;
- initial YouTube/demo outline;
- documented baseline analytics and launch observations.

## 14. Implementation sequence

### Step 1: Normalize the foundation — complete

The canonical runtime is native Next.js on Vercel. Root static files remain supported through the pnpm synchronisation step, while application routes provide the canonical ecosystem experience.

### Step 2: Turn this strategy into page briefs — complete

Create the supporting specifications for positioning, audiences, messaging, information architecture, homepage, SEO/GEO, and analytics. Assign one canonical definition and CTA to each page.

### Step 3: Establish the content and design system — substantially complete

Create `content/concepts`, `content/products`, `content/examples`, and `content/articles`. Define typography, colors, page primitives, diagrams, screenshots, responsive behavior, grouped article navigation, and restrained editorial disclosures using the useful elements of the current site.

### Step 4: Build the core journey — complete

Implement the homepage, product pages, Active Knowledge Modelling page, and global navigation. Keep public demos and source links accurate.

### Step 5: Build the proof — link complete; model-layout refinement pending

Turn the current Coffee Shop material into a guided cross-product example with a clear start, expected observations, and next action.

### Step 6: Add discovery and measurement — discovery complete; measurement pending

Complete canonical metadata, structured data, sitemap, robots policy, `llms.txt`, social previews, performance and accessibility checks, and privacy-appropriate analytics.

### Step 7: Launch the first content cycle — in progress

Approve the article set, derive LinkedIn material from canonical pages using [the launch package](../promotion/linkedin-launch-package.md), verify all public links, and record baseline results. The next publishable sequence starts with the ecosystem, Active Knowledge Modelling, Coffee Shop proof, product boundary, “Why AI Needs Models,” and then the exploratory AI commentary.

## 15. Definition of done

Phase 1 is complete when all of the following are true:

### Clarity

- Mimris, Active Knowledge Modelling, AKM Universe, World, Mimris Modelling, and Mimris AI Workspace each have an approved, consistently used definition.
- The two products have distinct jobs, pages, and calls to action.
- A representative first-time visitor can explain the ecosystem and choose the right product after reviewing the core journey.

### Website

- The target pages are published, responsive, keyboard accessible, and free of known broken links.
- Existing public entry points either remain valid or redirect intentionally.
- Product claims, screenshots, demos, repository visibility, and calls to action are current and truthful.
- The Coffee Shop World demonstrates the AKM Universe lifecycle and the distinct role of each product.

### Discovery and quality

- Every indexable page has unique metadata, a canonical URL, and an intentional internal-link path.
- Sitemap, robots policy, structured data, social cards, and `llms.txt` agree with visible content.
- The production build and automated checks pass.
- Mobile layout, accessibility, and performance have been manually verified on the primary journey.

### Conversion and learning

- At least one real next-step mechanism is live and measurable.
- Privacy and analytics behavior are documented and verified.
- The permanent article set and launch promotion package are published or approved for publication, with AI assistance disclosed without presenting AI as the author.
- Baseline observations and the prioritized Phase 2 backlog are recorded.

## 16. Scope boundaries and risks

Phase 1 does not require a full documentation portal, a second large Workspace marketing site, a complete corporate identity, a mature commercial funnel, or implementation of cross-product model synchronization.

The principal risks are blurred product positioning, unexplained specialist vocabulary, parallel static and application architectures, stale demo links, claims that exceed working evidence, and promotion that does not lead to permanent useful content. The deliverables and definition of done above are designed to expose these risks early.
