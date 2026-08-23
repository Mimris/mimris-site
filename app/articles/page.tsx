import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLink, PageHero } from "../_components/site-shell";
import { ArticleDirectory } from "../_components/article-markdown";

export const metadata: Metadata = {
  title: "Articles",
  description:
    "AI news, commentary, and practical explanations about Active Knowledge Modelling, structured context, and model-driven work.",
  alternates: { canonical: "/articles" },
};

export default function ArticlesPage() {
  return (
    <>
      <PageHero
        eyebrow="Mimris articles · AI news and commentary"
        title="Ideas for working with knowledge, models, and AI."
        lead="Long-form explanations, news, and commentary about AI, grounded in practical modelling and the work of understanding complex domains."
      />
      <section className="article-index">
        <div className="article-index-page-layout">
          <ArticleDirectory />
          <div className="article-index-main">
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
            <div className="article-link-grid">
              <Link href="/articles/active-knowledge-modelling"><h2>What Is Active Knowledge Modelling?</h2><p>Understand the approach behind Mimris.</p></Link>
              <Link href="/articles/coffee-shop-universe"><h2>The Coffee Shop World</h2><p>Follow a familiar world from model to work inside an AKM Universe.</p></Link>
              <Link href="/articles/modelling-and-workspace"><h2>Two Complementary Jobs</h2><p>See how the products divide responsibility.</p></Link>
              <Link href="/articles/from-biological-viability-to-artificial-consciousness"><h2>Can AI Have Consciousness?</h2><p>An exploratory hypothesis about living and artificial systems.</p></Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
