import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "../_components/site-shell";

export const metadata: Metadata = {
  title: "Why Mimris",
  description: "Why AI-assisted work needs explicit, durable domain structure—not only more information.",
  alternates: { canonical: "/why-mimris" },
};

export default function WhyMimrisPage() {
  return (
    <>
      <PageHero
        eyebrow="Why Mimris"
        title="AI can read the files. It still needs to understand the world."
        lead="Mimris connects information to explicit domain structure, and that structure to the work people and AI perform."
      >
        <div className="button-row">
          <Link className="button button-primary" href="/active-knowledge-modelling">Explore the approach</Link>
        </div>
      </PageHero>
      <section className="article-section">
        <div className="article-intro">
          <p className="section-number">The gap</p>
          <h2>Access to information is not the same as shared understanding.</h2>
        </div>
        <div className="prose-grid">
          <p>Organizations accumulate documents, process descriptions, system records, diagrams, decisions, and conversations. Each source contains part of the truth, but their relationships remain scattered and easy to lose.</p>
          <p>AI can summarize the sources and generate new material. Yet a useful answer still depends on knowing what the concepts mean, which rules apply, how activities connect, and what changed.</p>
          <p>Mimris makes those relationships explicit. The model becomes durable context that can be inspected, challenged, revised, and used across both modelling and operational work.</p>
        </div>
      </section>
      <section className="contrast-section">
        <article><span>Without durable structure</span><h3>Every task rebuilds context.</h3><p>Definitions drift, decisions disconnect from evidence, and AI conversations become isolated snapshots.</p></article>
        <article><span>With a Mimris Universe</span><h3>Context becomes a shared asset.</h3><p>People and AI can navigate the same concepts, relationships, processes, evidence, and work.</p></article>
      </section>
    </>
  );
}
