# Mimris Public Access, Pricing and Account Requirements

Status: Derived public-site requirements; pre-sale access page implemented, €9/month early-bird price agreed, remaining commercial values pending

Owner: Mimris Site

Last updated: 2026-08-24

## 1. Purpose and source of truth

This document defines how `mimris-site` must explain access, accounts, pricing, AI options, upgrades, and cancellation. It is derived from the canonical product specification in `mimris-ai-workspace/docs/ai-access-and-billing-spec.md`.

The Workspace specification controls actual entitlements and behavior. This site document controls public presentation only. If they differ, correct the site; do not create an independent commercial model here.

Implementation sequencing, release gates, verification, and rollback are defined in [access-pricing-rollout-plan.md](./access-pricing-rollout-plan.md).

## 2. Public promise

- **Mimris Modelling is free.** It supports full modelling with local persistence and does not require an account.
- **Mimris AI Workspace is free to explore and use manually.** Temporary Universes remain free and do not require login.
- **A free Mimris account saves one Universe to Mimris** and includes a limited Mimris AI allowance.
- **Mimris Pro saves multiple Universes**, includes an ongoing/larger Mimris AI entitlement or allowance, and unlocks My AI/BYO AI.
- The initial Pro proposal limits an account to **10 persistent Universes**; temporary Universes remain unlimited.
- The first **Save Universe** asks the user to sign up, not pay.
- The primary contextual Pro prompt appears when a Free account attempts to save a second distinct Universe.
- Signup and checkout must preserve the work already in progress.

Do not describe browser-local temporary work as cloud-saved, synced, backed up, or account-persistent.

## 3. Required plan comparison

| Capability                   | Use without account                                           | Free Mimris account | Mimris Pro                               |
| ---------------------------- | ------------------------------------------------------------- | ------------------- | ---------------------------------------- |
| Mimris Modelling             | Full; local persistence                                       | Same                | Same                                     |
| Workspace manual use         | Included                                                      | Included            | Included                                 |
| Temporary Universes          | Included                                                      | Included            | Included                                 |
| Persistent Universes         | None                                                          | 1                   | Up to 10 initially, to the published service limit |
| Mimris AI                    | No guaranteed public allowance unless an active offer says so | Limited allowance   | Ongoing/larger allowance                 |
| My AI / BYO AI               | Not included                                                  | Not included        | Included                                 |
| User-selected provider/model | Not included                                                  | Not included        | Included                                 |

The plan table must define **temporary** and **persistent** close to the comparison:

- Temporary means browser-local and may be lost when site data is cleared or the user changes device; export is available.
- Persistent means saved to the authenticated Mimris account and reopenable according to the service terms.

## 4. Mimris AI and My AI language

- **Mimris AI:** Mimris manages the provider/model service and meters usage against the included allowance.
- **My AI:** the Pro user selects a supported provider/model and controls authorization; the provider normally bills the user directly.

Never imply that a Free account includes My AI, user-funded My AI usage is included in the Pro price, every provider/model is supported, Mimris permanently stores every provider credential, or Mimris AI has unlimited usage unless the approved plan explicitly does.

A short trust statement should say that Mimris prefers revocable or short-lived provider authorization and avoids storing permanent credentials when practical. Link to detailed privacy/security information rather than overloading the pricing table.

## 5. Routes and content surfaces

Before public sale, add or extend:

- `/pricing` — plan comparison, exact price, billing interval, allowance/limit summary, tax wording, and primary CTAs;
- `/account` or a Workspace-owned account destination — sign-in/account management handoff;
- `/products/modelling` — prominent free/no-account/local-persistence statement;
- `/products/ai-workspace` — temporary/free, first persistent save, Mimris AI, and Pro/My AI explanation;
- `/products` — concise comparison without turning the ecosystem page into a pricing wall;
- FAQ sections for temporary work, first save, second save, allowance reset/exhaustion, provider billing, cancellation, and data access;
- Terms, privacy, refund/cancellation, and acceptable-use links appropriate to launch regions.

Signup, checkout, subscription management, entitlement state, credential management, and Universe save flows belong to the Workspace. The site links into those flows and may preserve a safe return URL; it does not process them.

## 6. CTA and state requirements

- **Open Mimris Modelling** — no login interstitial.
- **Open Mimris AI Workspace** — no login interstitial.
- **Start free** — opens the Workspace; account creation remains contextual at first persistent save unless the visitor explicitly chooses signup.
- **Get Mimris Pro** — signs in if needed, then opens the Workspace-owned checkout flow.
- **Manage subscription** — opens the authenticated Workspace account/billing surface.

Do not send every product visitor directly to checkout. The public journey should allow product exploration before conversion.

## 7. Pricing disclosure requirements

The current launch proposal is a **€9/month early-bird Pro offer**, limited to the first 100 subscribers or six months, whichever comes first. Subscribers keep the early-bird price while continuously subscribed; it is not a lifetime price. Before `/pricing` is indexable and checkout is live, approve and verify:

- amount, currency, billing interval, renewal wording, and tax treatment;
- Free and Pro Mimris AI allowance, measurement unit, reset timing, expiry/rollover, and exhaustion behavior;
- persistent-Universe Pro service limit and any storage/size limit;
- trial or promotion terms, if any;
- payment-failure grace behavior and cancellation effective date;
- refund and consumer-right wording;
- supported countries/regions.

The current allowance proposal is **25 Mimris AI credits/month on Free** and **500 Mimris AI credits/month on Pro**. Credits reset monthly, do not roll over, and stop Mimris AI requests when exhausted; My AI/BYO AI usage is separately authorized and normally billed by the user’s provider. Do not imply an annual price until one is separately approved.

Price and plan content should come from a single versioned site configuration or server-provided catalog. Structured data, visible copy, checkout, and social/search descriptions must agree.

## 8. Upgrade, cancellation, and downgrade copy

The second-Universe prompt must explain that existing work remains safe, Pro is required to save another distinct Universe, the exact current price and renewal period, included Mimris AI/My AI capabilities, and that checkout cancellation does not lose work.

Cancellation copy must explain:

- when cancellation takes effect;
- that Universes are not deleted on downgrade;
- that existing Universes remain readable/exportable;
- that the user selects one Universe to remain editable on Free;
- that My AI stops at Pro expiry and Mimris AI returns to Free allowance;
- how re-subscription restores Pro access.

Avoid “cancel anytime” unless adjacent wording states the effective date and access consequences.

## 9. Analytics and privacy

Measure aggregate public funnel events without sending model, document, prompt, provider-secret, or payment data:

- `pricing_viewed`
- `plan_cta_clicked` with plan and source page
- `workspace_started` with source page
- `account_handoff_started`
- `checkout_handoff_started`

Completed signup, purchase, cancellation, and entitlement events are Workspace/account events. If summarized for site analytics, use non-sensitive aggregate reporting and the documented consent/retention policy.

## 10. Repository boundary and release discipline

- `mimris-ai-workspace` owns product behavior, entitlement names, service limits, checkout, subscription state, AI metering, and credentials.
- `mimris-site` owns public explanations, plan presentation, FAQs, discovery metadata, policy navigation, and links into Workspace flows.
- `mimris` owns the free local-first Modelling product and must not acquire a mandatory account gate through this work.
- The site must not become a runtime dependency of either product.
- Public copy is enabled only when the corresponding behavior is deployed and verified.

## 11. Public-site acceptance criteria

- A visitor can tell, without signing in, what is free, what requires an account, and what requires Pro.
- Relevant pages state that Mimris Modelling remains free with local persistence and no required account.
- Workspace copy clearly distinguishes temporary browser-local work from a persistent account-backed Universe.
- The first-save explanation says signup, not payment; the second-save explanation identifies the Pro trigger.
- Mimris AI and My AI are compared accurately, including who controls authorization and who normally pays the provider.
- Exact price, renewal, tax, allowance, limits, cancellation, and downgrade copy match the deployed Workspace configuration.
- No CTA introduces a login gate before the visitor can open either product.
- Pricing metadata, visible plan content, checkout handoff, FAQ, terms, privacy, sitemap, and `llms.txt` are mutually consistent.
- Analytics contain no Universe content, prompts, credentials, or payment details.

## 12. Concrete site implementation steps

1. Wait for approval of the commercial values in section 7; do not publish pilot placeholders.
2. Add one typed/versioned plan catalog for site copy and metadata.
3. Add `/pricing` and the required FAQ/policy links using the approved catalog.
4. Update `/products`, `/products/modelling`, and `/products/ai-workspace` with concise access statements and contextual CTAs.
5. Add safe Workspace handoff URLs for Start free, Get Pro, and Manage subscription.
6. Add privacy-preserving funnel events and update the analytics specification.
7. Update sitemap, `llms.txt`, metadata, and public product comparison or press facts.
8. Verify copy against the deployed Workspace entitlement matrix and checkout in test mode before publishing.
