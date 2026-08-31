# Mimris Product Architecture

Status: Accepted for Phase 1

Owner: Mimris
Last updated: 2026-08-22

## Purpose

This document defines the Mimris ecosystem and the responsibility of each product and repository. It is the reference for website positioning, product naming, and decisions about where new capabilities belong.

The central architectural principle is:

> The website explains the ecosystem. The product repositories implement the products.

The navigation consequence is:

> `mimris-site` is the ecosystem home. In each product, the Mimris brand links to that public home, while product-specific start and dashboard routes use explicit internal labels.

## 1. Mimris ecosystem

**Mimris** is the umbrella brand, conceptual approach, and product ecosystem for turning domain knowledge into explicit models that people, software, and AI can understand and use.

The ecosystem has three repository responsibilities:

| Repository | Responsibility |
| --- | --- |
| `mimris-site` | Public website and the source of truth for positioning, messaging, concepts, SEO/GEO, public content, and promotion strategy |
| `mimris` | Mimris Modelling: the specialist modelling product and the canonical implementation of model semantics |
| `mimris-ai-workspace` | Mimris AI Workspace: the AI-enabled environment for using models and working context to design and perform work |

The public story is:

> **Mimris: Model the world. Work with it.**

```text
                    Mimris ecosystem
                           |
                Active Knowledge Modelling
                           |
             +-------------+-------------+
             |                           |
     Mimris Modelling          Mimris AI Workspace
     Model the world.          Work with the modelled world.
             |                           |
             +------- AKM Universe -------+
```

## 2. Active Knowledge Modelling

**Active Knowledge Modelling (AKM)** is the Mimris approach to making knowledge explicit as connected, evolvable models that can serve as usable context for people, applications, and AI.

The word **active** distinguishes these models from diagrams or documentation that are created once and then left as passive records. An active knowledge model can be explored, validated, connected to work, changed as understanding develops, and used to guide action.

The core progression is:

```text
Information -> Knowledge -> Models -> Context -> Human + AI work -> Results
```

AKM does not mean that every document must be converted into a model or that AI replaces expert judgement. It provides an explicit structure within which evidence, assumptions, models, human decisions, and AI-generated work can remain connected.

## 3. AKM Universe, World, and Workspace

An **AKM Universe** is the bounded working context in which an AKM World is built, evolved, and used. It contains `Universe.World`, the domain world under development, and the `Workspace` used to work with that world.

An AKM Universe may include:

- a domain description and vocabulary;
- ontologies, model types, and model rules;
- concepts, objects, and relationships;
- organizations, people, roles, products, systems, and information;
- processes, activities, tasks, and views;
- references to documents, evidence, decisions, and deliverables;
- `OriginWorld`, where a reusable starting structure is available;
- `Universe.World`, whether it begins as an empty template or contains data, relationships, evidence, and work;
- the `Workspace` used by people and AI;
- an Operational Preview generated after export/generation.

The lifecycle is:

```text
OriginWorld (when used)
        ↓
Universe.World + Workspace  →  export / generation  →  Operational Preview
```

A new World is built and refined in the current `Universe.World` and `Workspace`; it is not created by first creating another Universe. The distinction between products remains important inside the shared AKM Universe:

- Mimris Modelling owns the deliberate creation and manipulation of model structure.
- Mimris AI Workspace uses that structure as context and connects it to operational work.

An AKM Universe is therefore more than a diagram or a collection of files. It is the working context around a World, with explicit meaning and relationships that can evolve over time.

## 4. Mimris Modelling

**Positioning:** Understand and model complex worlds.

**Primary purpose:** Create, structure, visualize, inspect, and evolve models.

Mimris Modelling is responsible for:

- defining model types, structures, constraints, and semantics;
- creating and editing model objects and relationships;
- building diagrams, views, and hierarchies;
- navigating and inspecting model structures;
- supporting conceptual and instance modelling;
- supporting Mimris constructs such as TYPE, POPS, and IRTV;
- providing the specialist modelling experience.

Its primary question is:

> **What is the world, and how is it structured?**

Its primary audiences are enterprise, process, and knowledge modellers; architects; analysts; knowledge engineers; and domain experts.

## 5. Mimris AI Workspace

**Positioning:** Put structured models to work.

**Primary purpose:** Use models, documents, AI, context, processes, and tasks to design and perform real work.

Mimris AI Workspace is responsible for:

- human and AI collaboration grounded in domain context;
- domain descriptions, documents, attachments, notes, and whiteboards;
- process and task design in an operational context;
- workplaces, planning, and task execution;
- generating, reviewing, and managing deliverables;
- using models as durable context for AI;
- proposing model changes as work reveals new knowledge;
- connecting decisions and outputs back to the relevant AKM Universe and World.

Its primary question is:

> **What do we do within the world we have modelled?**

Its primary audiences are AI-enabled knowledge workers and teams, consultants, business analysts, developers, process owners, and domain specialists.

## 6. Product boundary

| Capability | Mimris Modelling | Mimris AI Workspace |
| --- | --- | --- |
| Create model objects | Primary | Assisted or proposed |
| Edit model relationships | Primary | Assisted or proposed |
| Define model semantics | Primary | Consumes |
| Diagram modelling | Primary | Focused views or embedded use |
| Model navigation | Primary | Yes, in work context |
| TYPE | Primary | Uses |
| POPS and IRTV | Primary | Uses or generates from work |
| Domain description | Supporting input | Primary working artifact |
| AI assistance | Modelling assistance | Primary collaboration mode |
| Documents and attachments | References | Primary |
| Notes and whiteboards | Limited | Primary |
| Process design | Structural model | Operational design |
| Task planning and execution | Out of scope | Primary |
| Deliverables | Out of scope | Primary |

Use this decision rule for new capabilities:

> If a capability primarily creates or manipulates model structure, it belongs in `mimris`.

> If it primarily helps a person or AI perform work using models and context, it belongs in `mimris-ai-workspace`.

Some workflows cross the boundary. In those cases, Mimris AI Workspace may initiate or propose a model change, but shared model semantics and validation must remain canonical rather than being independently reimplemented.

## 7. Shared capabilities and integration direction

The products should share a model foundation without becoming the same user experience.

The intended direction is:

```text
Mimris Modelling
      |
canonical model semantics and selected reusable capabilities
      |
Mimris AI Workspace
```

Potential shared packages or APIs may eventually cover model, schema, Universe, ontology, and diagram concerns. Their exact shape is an implementation decision for the product repositories, not a Phase 1 website dependency.

Architectural constraints:

1. Do not create a second, diverging modelling engine in the Workspace.
2. Keep product-specific interaction design in each product.
3. Treat Universe identity, versioning, and exchange as shared concerns.
4. Preserve provenance when AI or work activities propose model changes.
5. Do not let the marketing site become a runtime dependency for either product.

## 8. Audience relationship

The ecosystem serves adjacent audiences at different levels of depth.

### Primary Phase 1 audience

AI-enabled knowledge and software professionals who already recognize the cost of implicit domain knowledge:

- enterprise, process, and knowledge modellers;
- solution and enterprise architects;
- knowledge engineers and AI architects;
- AI application developers and technical founders;
- business analysts and digital-transformation specialists.

### Secondary audience

Consultants, process owners, product teams, and business professionals who need AI to work with durable organizational context.

The public website should be understandable to the secondary audience while providing enough methodological and technical depth to earn the primary audience's trust.

## 9. Public naming and messaging

Use these names consistently:

- **Mimris**: the umbrella approach, brand, and ecosystem.
- **Active Knowledge Modelling**: the core approach.
- **AKM Universe**: the working context containing `Universe.World`, the Workspace, and generated Operational Previews.
- **World**: the domain-specific representation built and evolved in `Universe.World`; it may be an empty template or a data-filled, operational context.
- **OriginWorld**: a reusable starting World structure used when creating a new World.
- **Mimris Modelling**: the dedicated modelling product in `mimris`.
- **Mimris AI Workspace**: the AI-enabled working environment in `mimris-ai-workspace`.

Preferred short messages:

- Ecosystem: **Model the world. Work with it.**
- Category proposition: **Turn knowledge into models AI can work with.**
- Modelling: **Create, explore, and evolve structured models of your world.**
- Workspace: **Combine models, knowledge, and AI to design and perform work.**

Avoid describing Mimris as only an AI modelling tool, a diagramming application, or a document chatbot. Each description hides the connection between knowledge, model structure, context, and action.

## 10. Repository and website consequences

`mimris-site` owns the canonical public definitions and cross-product comparison. The product repositories own detailed product documentation and implementation decisions.

The website must:

- lead with Mimris as the ecosystem rather than making either product appear to be the whole ecosystem;
- give each product a distinct page and clear call to action;
- explain Active Knowledge Modelling, the AKM Universe, and World in accessible language;
- demonstrate the relationship through one shared example: the Coffee Shop World in an AKM Universe;
- link to the public product demos and only to source repositories that are public;
- preserve room for future products without changing the brand architecture.

## 11. Future expansion

The architecture permits future products, shared services, templates, and AKM Universe libraries. Expansion should happen only when a new offering has a distinct user job and does not blur the Modelling/Workspace boundary.

Questions that remain outside this Phase 1 decision include:

- the approved price, allowance quantities, service limits, launch regions, and timing for the Free/Pro model defined in [access-pricing-and-account-requirements.md](./access-pricing-and-account-requirements.md);
- identity, permissions, and cross-product synchronization;
- the technical format and lifecycle of a shared AKM Universe;
- the timing and shape of reusable modelling packages;
- whether later product documentation uses the public site or dedicated documentation surfaces.

These questions should not block clear public positioning or the initial website.
