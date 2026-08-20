# Mimris Phase 1 Analytics Specification

Status: Phase 1 implementation brief

## Measurement question

Can a first-time visitor understand the Mimris ecosystem well enough to investigate further?

## Events to measure

| Event | Meaning |
| --- | --- |
| `proof_started` | Visitor opens the Coffee Shop guided proof |
| `product_demo_clicked` | Visitor opens Mimris Modelling or AI Workspace |
| `article_opened` | Visitor opens a permanent article |
| `source_clicked` | Visitor opens public source code |
| `youtube_clicked` | Visitor opens Snorre's modelling channel |
| `interest_started` | A real interest or access mechanism is available and used |

## Reporting dimensions

Where privacy and consent allow, report by landing page, referrer, device class, and route sequence. The minimum useful funnel is:

```text
Landing page -> concept/product page -> Coffee Shop proof -> product demo
```

## Privacy requirements

- Do not install analytics until the tool, consent behavior, and data scope are documented.
- Prefer privacy-preserving measurement and aggregate reporting.
- Do not collect model contents, document contents, or unnecessary identifiers.
- Document retention and deletion behavior before launch.

## Phase 1 baseline

Before promotion, record the initial values for page visits, proof starts, product demo clicks, article opens, YouTube referrals, and source clicks. Use the observations to prioritize Phase 2 rather than optimizing for vanity traffic.
