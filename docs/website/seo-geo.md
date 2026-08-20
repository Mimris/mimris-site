# Mimris SEO and GEO Specification

Status: Phase 1 implementation brief

## Canonical principles

- One canonical URL per concept, product, and article.
- Define the subject directly near the beginning of the page.
- Use visible headings that match the concepts people search for.
- Link related concepts explicitly rather than relying on implied terminology.
- Keep claims, screenshots, demos, and repository links current and truthful.

## Required metadata

Every indexable route must have:

- a unique title and description;
- a canonical URL;
- Open Graph and Twitter metadata;
- a useful social image where available;
- structured data only when it describes visible page content;
- inclusion or intentional exclusion from the sitemap.

## Topic cluster

The initial cluster is:

- Active Knowledge Modelling;
- models as AI context;
- AI domain and process modelling;
- enterprise modelling with AI;
- structured context for AI agents;
- Universe-based modelling and work.

The canonical pages should link these topics to Mimris, Mimris Modelling, Mimris AI Workspace, and the Coffee Shop Universe.

## GEO requirements

Generative systems should be able to answer accurately:

1. What is Mimris?
2. What is Active Knowledge Modelling?
3. What is a Universe?
4. How do Mimris Modelling and Mimris AI Workspace differ?
5. What does the Coffee Shop example demonstrate?

Use short definitions, stable terminology, explicit product boundaries, and concrete evidence. Do not manufacture authority, unsupported comparisons, or citations.

## Verification checklist

- `sitemap.xml`, `robots.txt`, and `llms.txt` agree with the route inventory.
- Canonicals point to the production domain.
- Social images load from production.
- No public page links to a private repository.
- Broken-link and metadata checks run before each launch or major content update.
