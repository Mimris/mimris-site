# Mimris Website Information Architecture

Status: Phase 1 implementation brief

## Purpose

The website is the canonical public explanation of the Mimris ecosystem. It should lead visitors from the problem of implicit domain knowledge to Active Knowledge Modelling, then to the right product or proof path.

## Ecosystem navigation contract

- `mimris-site` is the Mimris ecosystem and public home.
- Its **Mimris** brand links to `/`.
- Product application brands link back here rather than exposing a separate external `Home` control.
- The product applications are consistently named **Mimris Modelling** and **Mimris AI Workspace**.
- Application-specific start surfaces remain internal and use explicit labels such as **Modelling start** and **Workspace start**.
- Cross-product links should help users move between the two products without making either application appear to own the ecosystem home.

## Canonical routes

| Route | Role | Primary action |
| --- | --- | --- |
| `/` | Ecosystem overview | Explore the approach or Coffee Shop proof |
| `/why-mimris` | Problem and differentiation | Understand why models matter |
| `/active-knowledge-modelling` | Canonical AKM definition | Learn the method |
| `/products` | Product comparison | Choose a product |
| `/products/modelling` | Mimris Modelling | Open the modelling demo |
| `/products/ai-workspace` | Mimris AI Workspace | Open the workspace demo |
| `/examples/coffee-shop` | Guided Coffee Shop World proof | Follow the World through an AKM Universe |
| `/articles` | Editorial index | Read an article |
| `/articles/mimris-ecosystem` | Canonical ecosystem introduction | Continue to the approach, proof, or products |
| `/articles/active-knowledge-modelling` | Article introduction to AKM | Continue to the canonical definition |
| `/articles/coffee-shop-universe` | Article introduction to the proof | Continue to the guided Coffee Shop World |
| `/articles/modelling-and-workspace` | Article introduction to the product boundary | Compare or open a product |
| `/articles/why-ai-needs-models` | Thought leadership | Continue learning |
| `/about` | Heritage and trust | Watch modelling material |
| `/press.html` | Reusable public facts | Share or reference Mimris |
| `/metis-legacy.html` | Historical documentation | Understand continuity |

## Navigation rules

- The global navigation should expose the approach, products, Coffee Shop example, articles, and About page.
- Every page should offer one primary next action and a useful secondary action.
- Product pages link to each other and to the Coffee Shop proof.
- Concept pages link to their definitions, products, and the proof.
- Legacy `.html` entry points remain stable during Phase 1.
- The website must not become a runtime dependency of either product.

## Core visitor journey

```text
Homepage -> Active Knowledge Modelling -> Coffee Shop proof
                              |                    |
                              v                    v
                       Product comparison -> Modelling or Workspace demo
```

## Page brief standard

Each future public page should specify its audience, canonical definition, primary CTA, supporting evidence, metadata, internal links, and success event before implementation.
