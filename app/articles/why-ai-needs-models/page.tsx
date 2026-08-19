import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Why AI Needs Models, Not Just More Documents",
  description:
    "AI can process documents, but dependable domain work needs explicit concepts, relationships, constraints, and shared context.",
  alternates: { canonical: "/articles/why-ai-needs-models" },
  openGraph: {
    type: "article",
    title: "Why AI Needs Models, Not Just More Documents",
    description:
      "How explicit domain models turn scattered information into context that people and AI can inspect and use.",
    publishedTime: "2026-08-19T00:00:00+02:00",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Why AI Needs Models, Not Just More Documents",
  description:
    "How explicit domain models turn scattered information into context that people and AI can inspect and use.",
  datePublished: "2026-08-19",
  dateModified: "2026-08-19",
  author: { "@type": "Organization", name: "Mimris" },
  publisher: { "@type": "Organization", name: "Mimris" },
  mainEntityOfPage: "https://mimris-site.vercel.app/articles/why-ai-needs-models",
};

export default function WhyAiNeedsModelsPage() {
  return (
    <>
      <article className="longform-article">
        <header className="article-hero">
          <Link className="article-back" href="/articles">← All articles</Link>
          <p className="eyebrow">Active Knowledge Modelling</p>
          <h1>Why AI Needs Models, Not Just More Documents</h1>
          <p className="hero-lead">
            AI can process more information than any person. But access to information is not the same as understanding the world that information describes.
          </p>
          <div className="article-meta"><span>19 August 2026</span><span>8 minute read</span></div>
        </header>

        <div className="article-body">
          <p className="article-deck">
            Documents are essential evidence. They are poor substitutes for an explicit, shared model of a domain.
          </p>

          <h2>AI can read the words without sharing the model</h2>
          <p>
            Organizations describe themselves through policies, presentations, databases, process diagrams, meeting notes, tickets, and conversations. Generative AI makes this material easier to search, summarize, and transform. That is valuable—but the sources rarely agree on a single structure.
          </p>
          <p>
            The same customer may be represented differently in sales, finance, support, and product systems. A “case,” “order,” or “approval” can mean different things to different teams. Important constraints may live in a policy while exceptions live in people’s experience. Reading every document does not automatically resolve those identities, relationships, and boundaries.
          </p>
          <blockquote>
            Information tells AI what has been written. A model makes explicit what the things are and how they relate.
          </blockquote>

          <h2>What an explicit model adds</h2>
          <p>
            A domain model gives names and identities to the important things in a world. It connects them through deliberate relationships and makes assumptions visible enough to challenge. Depending on the domain, the model can express people, roles, products, systems, information, processes, rules, and the views through which different groups understand them.
          </p>
          <p>The model adds four forms of structure that documents alone struggle to maintain:</p>
          <ul>
            <li><strong>Identity:</strong> whether two references describe the same thing or different things.</li>
            <li><strong>Relationships:</strong> how concepts, activities, information, and responsibilities connect.</li>
            <li><strong>Constraints:</strong> which rules, conditions, and boundaries shape valid action.</li>
            <li><strong>Provenance:</strong> where an assertion came from, why it changed, and who accepted it.</li>
          </ul>

          <h2>Models become durable AI context</h2>
          <p>
            A prompt supplies temporary context for one interaction. A model can preserve context across interactions and tasks. It lets a person or application select the relevant part of a domain while retaining connections to the larger whole.
          </p>
          <p>
            This does not mean converting every sentence into a graph. Documents remain the evidence, narrative, and working material. The model provides a stable structure that helps people and AI locate those materials, interpret them consistently, and connect new work back to the domain.
          </p>
          <p>
            The result is not automatic truth. Models can be incomplete or wrong. Their advantage is that their assumptions are inspectable. Experts can review a relationship, correct a definition, compare views, and preserve the reason for a decision instead of hiding it in another generated answer.
          </p>

          <h2>From static documentation to active knowledge</h2>
          <p>
            Traditional models often become snapshots: carefully produced, published, and gradually separated from daily work. Active Knowledge Modelling treats the model as something that continues to participate in understanding and action.
          </p>
          <p>
            Work uses the model as context. Evidence and decisions produced by the work remain connected to it. When experience reveals a missing concept or a changed process, that learning can flow back into the model. The cycle is continuous: describe, structure, use, and learn.
          </p>

          <div className="article-flow" aria-label="Active Knowledge Modelling cycle">
            <span>Describe</span><i>→</i><span>Structure</span><i>→</i><span>Use</span><i>→</i><span>Learn</span>
          </div>

          <h2>A simple example: the Coffee Shop Universe</h2>
          <p>
            Consider a coffee shop. Its documents might describe menus, payment procedures, staff responsibilities, inventory rules, and equipment. A model connects the underlying world: customers place orders; orders contain products; baristas prepare items; payment and production systems exchange information; inventory changes as work is performed.
          </p>
          <p>
            Mimris Modelling is where that structure is deliberately created and explored. Mimris AI Workspace uses the structure alongside documents, decisions, processes, and tasks. The products do different jobs, but they operate within the same Universe.
          </p>

          <h2>Give AI a world to work within</h2>
          <p>
            The next step for AI-assisted work is not simply adding more files to a context window. It is giving people and AI a durable, inspectable representation of the domain—one that connects knowledge to action and results back to learning.
          </p>
          <p>
            That is the purpose of Mimris: model the world, then work with it.
          </p>

          <aside className="article-cta">
            <p className="eyebrow">See the idea in practice</p>
            <h2>Follow the Coffee Shop Universe.</h2>
            <p>Explore one familiar domain across structured modelling and AI-assisted work.</p>
            <Link className="button button-primary" href="/examples/coffee-shop">Open the guided proof</Link>
          </aside>
        </div>
      </article>
      <Script
        id="why-ai-needs-models-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
    </>
  );
}
