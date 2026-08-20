import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLink, PageHero } from "../_components/site-shell";

export const metadata: Metadata = {
  title: "Articles",
  description:
    "Ideas and practical explanations about Active Knowledge Modelling, structured AI context, consciousness, and model-driven work.",
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
            <p className="eyebrow">AI · Consciousness · 12 minute read</p>
            <h2>From Biological Viability to Artificial Consciousness</h2>
            <p>
              Could consciousness have developed from the biological need to remain viable—and could a similar architecture inform artificial consciousness?
            </p>
          </div>
          <ArrowLink href="/articles/biological-and-artificial-consciousness">Read the article</ArrowLink>
        </article>
        <div className="article-link-grid">
          <Link href="/articles/why-ai-needs-models"><h2>Why AI Needs Models, Not Just More Documents</h2><p>See why AI benefits from explicit domain structure and durable context.</p></Link>
          <Link href="/articles/active-knowledge-modelling"><h2>What Is Active Knowledge Modelling?</h2><p>Understand the approach behind Mimris.</p></Link>
          <Link href="/articles/coffee-shop-universe"><h2>The Coffee Shop Universe</h2><p>Follow a familiar domain from model to work.</p></Link>
          <Link href="/articles/modelling-and-workspace"><h2>Two Complementary Jobs</h2><p>See how the products divide responsibility.</p></Link>
        </div>
      </section>
    </>
  );
}
