import type { Metadata } from "next";
import { ArrowLink, PageHero } from "../_components/site-shell";

export const metadata: Metadata = {
  title: "Articles",
  description:
    "Ideas and practical explanations about Active Knowledge Modelling, structured AI context, and model-driven work.",
  alternates: { canonical: "/articles" },
};

export default function ArticlesPage() {
  return (
    <>
      <PageHero
        eyebrow="Mimris articles"
        title="Ideas for working with knowledge, models, and AI."
        lead="Long-form explanations of the thinking behind Mimris, grounded in practical modelling and AI-assisted work."
      />
      <section className="article-index">
        <article className="editorial-card">
          <div>
            <p className="eyebrow">Active Knowledge Modelling · 8 minute read</p>
            <h2>Why AI Needs Models, Not Just More Documents</h2>
            <p>
              AI can process enormous volumes of information. Useful work still depends on explicit concepts, relationships, rules, and context.
            </p>
          </div>
          <ArrowLink href="/articles/why-ai-needs-models">Read the article</ArrowLink>
        </article>
      </section>
    </>
  );
}
