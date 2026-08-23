import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "../../_components/site-shell";

export const metadata: Metadata = {
  title: "Mimris AI Workspace",
  description: "Use structured models with AI, documents, processes, tasks, decisions, and deliverables in Mimris AI Workspace.",
  alternates: { canonical: "/products/ai-workspace" },
};

export default function AiWorkspacePage() {
  return (
    <>
      <PageHero eyebrow="Mimris AI Workspace" title="Put structured models to work." lead="An AI-enabled environment where a Universe becomes durable context for understanding, planning, performing, and reviewing real work.">
        <div className="button-row"><a className="button button-primary" href="https://mimris-ai-workspace.vercel.app" data-analytics-event="product_demo_clicked" data-analytics-destination="ai-workspace">Open the workspace demo</a><a className="button button-secondary" href="/examples/coffee-shop" data-analytics-event="proof_started" data-analytics-destination="coffee-shop-proof">Follow the guided proof</a></div>
      </PageHero>
      <section className="product-showcase">
        <div className="showcase-copy"><p className="section-number">Work with the world</p><h2>Keep AI output connected to domain context.</h2><ul className="feature-list"><li>Collaborate with AI using explicit concepts and relationships.</li><li>Connect domain descriptions, documents, notes, and decisions.</li><li>Design processes, plan tasks, and perform work in context.</li><li>Generate and review deliverables without losing provenance.</li></ul></div>
        <figure className="product-image"><Image src="/assets/mimris-ai-workspace-public-home.png" alt="Mimris AI Workspace showing connected project work" width={1440} height={1000} sizes="(max-width: 900px) 100vw, 52vw" /><figcaption>The Workspace connects the Universe to documents, decisions, tasks, and results.</figcaption></figure>
      </section>
    </>
  );
}
