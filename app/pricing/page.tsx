import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "../_components/site-shell";
import { accessPlans, workspaceUrl } from "@/content/access";

export const metadata: Metadata = {
  title: "Plans and access",
  description: "See what is free in Mimris, when an account is needed, and what Mimris Pro is designed to unlock.",
  alternates: { canonical: "/pricing" },
  robots: { index: false, follow: true },
};

const faqs = [
  ["Do I need an account to start?", "No. Modelling remains local-first, and the Workspace can be explored manually with temporary browser-local Universes."],
  ["What happens when I save for the first time?", "Saving the first persistent Universe asks you to create or sign in to a free Mimris account. Your current temporary work should carry into that registration flow."],
  ["When does Pro become relevant?", "The primary upgrade moment is saving a second distinct persistent Universe. Temporary Universes remain free."],
  ["What is the difference between Mimris AI and My AI?", "Mimris AI uses a Mimris-managed provider and allowance. My AI lets a Pro user choose a supported provider/model and control authorization; the provider normally bills the user directly."],
  ["What happens if I cancel?", "Subscription, downgrade, and data-retention behavior are managed in the Workspace. Final public pricing and cancellation terms will be published with the live checkout configuration."],
] as const;

export default function PricingPage() {
  return (
    <>
      <PageHero eyebrow="Plans and access" title="Start freely. Add persistence when you need it." lead="Mimris keeps modelling local and open. The Workspace stays free for exploration, with an account required only when you choose to persist a Universe.">
        <div className="button-row"><a className="button button-primary" href={workspaceUrl} target="_blank" rel="noreferrer" data-analytics-event="workspace_started" data-analytics-destination="pricing">Open the Workspace ↗</a><Link className="button button-secondary" href="/products/modelling">Explore Modelling</Link></div>
      </PageHero>
      <section className="access-plan-grid" aria-label="Mimris access plans">
        {accessPlans.map((plan, index) => <article className={`access-plan access-plan-${plan.accent}`} key={plan.name}><span className="card-index">0{index + 1}</span><p className="eyebrow">{plan.label}</p><h2>{plan.name}</h2><p>{plan.description}</p><ul>{plan.items.map((item) => <li key={item}>{item}</li>)}</ul><a className="arrow-link" href={plan.href} target={plan.href.startsWith("http") ? "_blank" : undefined} rel={plan.href.startsWith("http") ? "noreferrer" : undefined}>{plan.cta} <span aria-hidden="true">↗</span></a></article>)}
      </section>
      <section className="access-flow-section"><div className="section-heading"><p className="section-number">How access works</p><h2>Login appears at the moment persistence or AI service needs it.</h2></div><ol className="access-flow"><li><span>01</span><strong>Start anonymously</strong><p>Open Modelling or the Workspace without a mandatory launch login.</p></li><li><span>02</span><strong>Save Universe one</strong><p>Signup is the next step, not payment. Existing temporary work carries forward.</p></li><li><span>03</span><strong>Keep working on Free</strong><p>One account-backed Universe and a limited Mimris AI allowance are included.</p></li><li><span>04</span><strong>Upgrade for Universe two</strong><p>Pro is the contextual upgrade for another persistent Universe and My AI/BYO AI.</p></li></ol></section>
      <section className="access-definition-section"><div><p className="section-number">A useful distinction</p><h2>Temporary is browser-local. Persistent is account-backed.</h2></div><div className="access-definition-grid"><div><strong>Temporary Universe</strong><p>Free to create and use. It lives in the browser and may be lost if site data is cleared or you change device, so export is available.</p></div><div><strong>Persistent Universe</strong><p>Saved to your authenticated Mimris account and reopenable according to the Workspace service terms.</p></div></div></section>
      <section className="faq access-faq"><p className="section-number">Questions before you start</p><h2>Access, AI, and account basics.</h2><div className="faq-grid">{faqs.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div></section>
      <section className="closing-section access-closing"><p className="section-number">Public access page</p><h2>Explore first. Decide when persistence is worth an account.</h2><p>Pricing, checkout, entitlement state, AI metering, credentials, and Universe data remain owned by Mimris AI Workspace. This page explains the model and hands you to the product.</p><div className="button-row"><a className="button button-primary" href={workspaceUrl} target="_blank" rel="noreferrer" data-analytics-event="workspace_started" data-analytics-destination="pricing-closing">Open the Workspace ↗</a><Link className="button button-secondary" href="/products">Compare the products</Link></div></section>
    </>
  );
}
