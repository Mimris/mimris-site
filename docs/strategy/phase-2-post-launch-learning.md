# Mimris Phase 2: Post-launch learning

Status: working plan after the first public launch cycle

Phase 2 turns the public launch into evidence for the next product, content, and website decisions. The goal is not to maximize traffic. The goal is to learn whether visitors understand Mimris well enough to investigate further.

## 1. First 30-day objective

Establish a trustworthy baseline for the public journey:

```text
Landing page → concept or product page → Coffee Shop proof → product demo
```

At the end of the first 30 days, we should know:

- which pages introduce Mimris most effectively;
- which articles lead visitors to a next step;
- whether the Coffee Shop World helps visitors understand the product boundary;
- which referrals arrive from LinkedIn, YouTube, GitHub, and search;
- what should be improved before adding more surface area.

## 2. Measurement setup

Before interpreting results:

1. Enable Web Analytics for the `mimris-site` project in Vercel.
2. Confirm that the production site is collecting page views.
3. Record the launch date and the first seven-day baseline.
4. Verify the key routes and links manually:
   - `/`
   - `/active-knowledge-modelling`
   - `/examples/coffee-shop`
   - `/products/modelling`
   - `/products/ai-workspace`
   - `/articles`
5. Record consent, privacy, retention, and data-scope decisions in [the analytics specification](../website/analytics.md).

The initial report should use aggregate data only. Do not collect model contents, document contents, or unnecessary identifiers.

## 3. Baseline scorecard

Complete this table at the end of each review period.

| Measure | First 7 days | First 30 days | Observation | Action |
| --- | ---: | ---: | --- | --- |
| Home page views | — | — | — | — |
| Active Knowledge Modelling views | — | — | — | — |
| Coffee Shop proof starts | — | — | — | — |
| Modelling demo clicks | — | — | — | — |
| AI Workspace clicks | — | — | — | — |
| Article views | — | — | — | — |
| YouTube referrals | — | — | — | — |
| GitHub referrals | — | — | — | — |
| LinkedIn referrals | — | — | — | — |

Traffic volume is context, not the main success measure. Look for evidence of understanding: movement from explanation to proof, and from proof to a relevant product.

## 4. Content publication sequence

Publish and promote permanent site content in this order:

1. Mimris ecosystem and the problem it addresses.
2. Active Knowledge Modelling.
3. Coffee Shop World as a guided proof.
4. The boundary between Mimris Modelling and Mimris AI Workspace.
5. “Why AI Needs Models, Not Just More Documents.”
6. AI news and commentary, including the consciousness series.

Each external post should point to one canonical page and one clear next action. The site article is the approval source; social copy is derived from it.

## 5. Review cadence

### Weekly

- Check route health and obvious broken links.
- Review top landing pages and referrers.
- Note qualitative feedback and questions from readers.
- Avoid changing several variables at once.

### At day 30

- Compare the scorecard with the original measurement question.
- Identify the strongest and weakest transition in the journey.
- Select no more than three Phase 2 improvements.
- Archive the observations with the date and deployment version.

## 6. Prioritized Phase 2 backlog

### P1 — Improve the proof journey

- Make the Coffee Shop entry point and expected next action unmistakable.
- Explain which step belongs to Mimris Modelling and which belongs to Mimris AI Workspace.
- Add a short fallback explanation when the external modelling tool is unavailable.

### P1 — Establish editorial rhythm

- Finish the first six canonical articles.
- Maintain grouped article navigation on desktop and mobile.
- Keep AI-assisted authorship disclosures concise and consistent.

### P2 — Improve evidence

- Add current screenshots or short demonstrations for both products.
- Add selected modelling videos from Snorre's Model Bureau.
- Replace any placeholder claims with observable product behavior.

### P2 — Improve discovery

- Expand the strongest-performing topic cluster.
- Review search snippets, social cards, internal links, and `llms.txt` against visible content.
- Add an interest or access mechanism only when there is a real workflow behind it.

## 7. Decision rule

Do not add a new major page, funnel, or product claim merely because it is possible. Add it when the baseline, visitor questions, or product evidence shows that it will clarify the next decision for a real visitor.

Phase 2 is complete when the first baseline is recorded, three evidence-backed improvements are selected, and the next content cycle has a clear owner, canonical URL, and measurable next action.
