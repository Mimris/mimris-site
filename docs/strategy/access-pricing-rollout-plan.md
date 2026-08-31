# Mimris Access and Pricing Public-Site Rollout Plan

Status: Derived implementation plan; site work not started

Owner: Mimris Site

Last updated: 2026-08-24

## 1. Purpose and dependency

This plan implements [access-pricing-and-account-requirements.md](./access-pricing-and-account-requirements.md) in `mimris-site`. It is downstream of the canonical Workspace specification and implementation plan:

- `mimris-ai-workspace/docs/ai-access-and-billing-spec.md`
- `mimris-ai-workspace/docs/access-persistence-billing-implementation-plan.md`

The site explains released behavior and hands visitors into Workspace-owned flows. It does not calculate entitlements, authenticate users, create checkout sessions, store Universes, meter AI, or manage provider credentials.

## 2. Release rule

Public access and pricing content follows this order:

```text
approved policy
  -> Workspace behavior implemented
  -> test-mode end-to-end verification
  -> site content/config completed
  -> cross-repository release check
  -> indexable public launch
```

Draft pages may be developed behind an unpublished route or feature flag. Search indexing, global navigation, structured pricing data, and promotional links remain disabled until the corresponding Workspace behavior is live.

## 3. Site architecture

### 3.1 Plan catalog

Add one typed, versioned public plan catalog, for example `content/plans.ts`, containing only approved public facts:

- plan ids and display names;
- exact price, currency, interval, and tax-display wording;
- persistent-Universe limits;
- Mimris AI allowance label, unit explanation, reset timing, and exhaustion behavior;
- My AI inclusion and provider-billing explanation;
- effective version/date and availability state;
- Workspace handoff URLs;
- policy/FAQ references.

Page components, metadata, FAQs, structured data, and press facts must read from this catalog rather than repeat commercial values.

If the Workspace later exposes a signed/read-only public catalog endpoint, the site may validate against it at build time. A live Workspace dependency is not required to render public pages.

### 3.2 Routes

Add or update:

- `/pricing` — canonical plan comparison and pricing page;
- `/products` — short access summary and link to pricing;
- `/products/modelling` — free, local persistence, no-account statement;
- `/products/ai-workspace` — temporary/manual use, first save, Mimris AI, Pro, and My AI;
- `/about` or footer policy area — account, privacy, billing, and support trust links;
- `/pricing` FAQ anchors for temporary vs persistent, signup, upgrade, AI allowance, My AI billing, cancellation, downgrade, and data access.

Do not add a site-owned `/account` route unless it is a simple redirect/handoff. Account and subscription management should open the Workspace.

### 3.3 Handoff links

Define safe, explicit Workspace destinations for:

- Open Mimris Modelling;
- Open Mimris AI Workspace;
- Start free;
- Sign in;
- Get Mimris Pro;
- Manage subscription.

Only approved internal Workspace return paths may be passed. Never place price, plan authority, entitlement, user id, or payment result in site-controlled query parameters.

## 4. Content contract

### Required message hierarchy

1. Both products open without mandatory login.
2. Mimris Modelling is free with local persistence.
3. Workspace manual use and temporary Universes are free.
4. A Free account saves one Universe and includes limited Mimris AI.
5. Pro saves multiple Universes, includes ongoing/larger Mimris AI, and unlocks My AI.
6. First save prompts signup; second persistent save is the primary Pro trigger.
7. Signup, checkout cancellation, and downgrade do not delete work.

### Required definitions

- **Temporary Universe:** browser-local work that may not follow the user to another browser/device; export is available.
- **Persistent Universe:** account-backed work saved to Mimris under the service terms.
- **Mimris AI:** Mimris manages provider/model access and meters the included allowance.
- **My AI:** a Pro user chooses a supported provider/model and controls authorization; the provider normally bills the user.

### Prohibited claims until explicitly approved

- unlimited AI, Universes, or storage;
- automatic cloud backup for temporary work;
- every model/provider is supported;
- My AI provider cost is included in Pro;
- a historical pilot credit-pack amount is the Pro price;
- “cancel anytime” without effective-date and downgrade consequences;
- security, compliance, availability, recovery, or geographic claims not backed by reviewed evidence.

## 5. Work packages

### SITE-00 — Commercial content gate

Dependencies: approved price, allowance, limits, tax, cancellation/refund, and launch-region decisions.

Work:

- capture approved values and effective date;
- identify policy owners and source links;
- establish a release checklist comparing Workspace configuration, Stripe, and site copy;
- keep production navigation and indexing unchanged until the gate passes.

Exit gate: every public commercial value has an owner and authoritative source.

### SITE-01 — Typed plan catalog and validation

Dependencies: SITE-00 can use test-only values during development.

Work:

- add typed plan/access data under `content/`;
- add validation that rejects missing price interval, ambiguous tax text, missing allowance timing, or missing handoff routes when a plan is marked public;
- keep plan ids stable and separate from display copy;
- add tests if a test harness is introduced; otherwise add a build-time validation function used by page generation.

Likely files: `content/plans.ts`, optional `content/plans.test.ts`, shared metadata helpers.

Exit gate: one source produces all visible and machine-readable plan values.

### SITE-02 — Pricing page and FAQ

Dependencies: SITE-01.

Work:

- add `/pricing` with direct definitions, plan comparison, exact billing disclosure, contextual CTAs, and FAQ;
- explain temporary/persistent storage near the comparison;
- explain Mimris AI/My AI funding and authorization boundaries;
- explain cancellation, paid-through access, Free Universe selection, read/export access, and reactivation;
- provide policy and support links;
- make the page accessible, responsive, and understandable without product terminology knowledge.

Likely files: `app/pricing/page.tsx`, shared plan components only when reuse justifies them, `app/globals.css`.

Exit gate: content review, responsive QA, keyboard/screen-reader check, and exact-value verification pass.

### SITE-03 — Product-page alignment

Dependencies: SITE-01.

Work:

- update `/products`, `/products/modelling`, and `/products/ai-workspace`;
- retain product positioning and evidence before pricing detail;
- add concise access summaries and links to `/pricing`;
- preserve direct demo access without login interstitial;
- update the modelling/workspace comparison article only if it currently makes a conflicting access claim.

Exit gate: the same visitor cannot receive contradictory account or plan messages across product pages.

### SITE-04 — Navigation, policy, and handoffs

Dependencies: Workspace routes deployed in staging.

Work:

- add Pricing to global navigation only when public launch is approved;
- add footer/account/billing/privacy/support links;
- validate external Workspace destinations and safe query parameters;
- provide graceful copy if subscription checkout is temporarily unavailable;
- keep the site independent of Workspace runtime availability.

Exit gate: every CTA lands on the intended staging state and a Workspace outage does not break site rendering.

### SITE-05 — Metadata, discovery, and analytics

Dependencies: final public content.

Work:

- add canonical metadata for `/pricing`;
- add only supported structured data that matches visible price and availability;
- update `sitemap.xml`, `llms.txt`, product summaries, and press facts where relevant;
- add privacy-preserving `pricing_viewed`, `plan_cta_clicked`, `workspace_started`, `account_handoff_started`, and `checkout_handoff_started` events;
- do not ingest account, payment, Universe, prompt, model, document, or credential data.

Likely files: route metadata, `sitemap.xml`, `llms.txt`, `press.html`, analytics components/specification.

Exit gate: metadata, visible content, catalog, and analytics payload inspection agree.

### SITE-06 — Cross-repository release verification

Dependencies: Workspace staging release, SITE-02 through SITE-05.

Work:

- compare site plan matrix with `GET /api/account/access` behavior for anonymous, Free, Pro, grace, and expired test accounts;
- verify first save opens signup rather than checkout;
- verify second save opens the Pro path and preserves work on cancel;
- verify Pro amount/interval/tax matches Stripe checkout;
- verify allowance and My AI availability match Workspace UI;
- verify cancellation/downgrade copy matches tested behavior;
- run production build and route/link checks.

Exit gate: joint product, engineering, and policy sign-off.

## 6. Verification matrix

| Public claim                            | Evidence before publication                                              |
| --------------------------------------- | ------------------------------------------------------------------------ |
| No mandatory login                      | Both product launch URLs open signed out                                 |
| Modelling is free/local                 | Current Modelling save/import/export flow verified                       |
| Temporary Workspace use is free         | Signed-out manual flow and browser persistence verified                  |
| Free includes one persistent Universe   | First cloud save and repeat update pass                                  |
| Second persistent Universe requires Pro | API and UI return the same upgrade decision                              |
| Pro includes multiple Universes         | Pro test account creates beyond Free limit to configured cap             |
| Free/Pro Mimris AI allowance            | Account access, AI settings, and exhaustion behavior match catalog       |
| My AI is Pro-only                       | Connect/invoke blocked below Pro and enabled for Pro                     |
| Work survives signup/checkout           | Redirect cancel/failure/success end-to-end tests pass                    |
| Cancellation does not delete work       | Paid-through, expiry, read/export, Free selection, and reactivation pass |
| Price/renewal/tax                       | Site catalog, visible page, structured data, and Stripe checkout match   |

## 7. Deployment and rollback

### Deployment

1. Deploy catalog and pages without navigation/indexing.
2. Verify against Workspace staging and Stripe test mode.
3. Deploy Workspace production capabilities behind its flags.
4. Verify real production configuration with internal accounts.
5. Enable `/pricing` indexing and navigation.
6. Publish promotional links only after route and checkout monitoring is healthy.

### Rollback

- Remove Pricing from navigation and disable plan CTAs without removing the explanatory product pages.
- Set the plan catalog availability to unavailable and show a neutral “not currently available” state.
- Remove pricing structured data immediately if checkout or public values are withdrawn.
- Keep free product demo links and truthful temporary/local explanations available.
- Never represent a Workspace incident as successful signup, checkout, or persistence.

## 8. Site definition of done

- `/pricing` and product pages use one validated plan catalog;
- exact values match deployed Workspace configuration and Stripe;
- every CTA has been verified in anonymous, Free, Pro, canceled, and unavailable states as applicable;
- temporary/persistent and Mimris AI/My AI distinctions are clear;
- cancellation and downgrade consequences are explicit and tested;
- navigation, metadata, structured data, sitemap, `llms.txt`, press facts, and analytics agree;
- `pnpm build` succeeds;
- the site remains a presentation and handoff layer, not a commercial source of truth or runtime dependency.
