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
                <p className="eyebrow">Model-driven work · 4 minute read</p>
                <h2>From Process Models to AI-Assisted Task Execution</h2>
                <p>
                  See how Mimris turns process context and Workplaces into generic Tasks for AI-assisted documents, models, analysis, reviews, and other work.
                </p>
              </div>
              <ArrowLink href="/articles/ai-assisted-task-execution">Read the article</ArrowLink>
            </article>
            <article className="editorial-card">
              <div>
                <p className="eyebrow">AI and Active Knowledge Modelling · 8 minute read</p>
                <h2>When AI Can Generate the Software, the Model Becomes the Asset</h2>
                <p>As implementation becomes easier to generate, structured knowledge about the domain, work, rules, and outcomes becomes more valuable.</p>
              </div>
              <ArrowLink href="/articles/when-ai-can-generate-the-software">Read the article</ArrowLink>
            </article>
            <div className="article-link-grid">
              <Link href="/articles/why-ai-needs-models"><h2>Why AI Needs Models</h2><p>Why useful AI work depends on explicit concepts, relationships, rules, and context.</p></Link>
              <Link href="/articles/mimris-ecosystem"><h2>What Is Mimris?</h2><p>Meet the ecosystem for modelling a world and putting it to work.</p></Link>
              <Link href="/articles/why-ai-needs-models"><h2>Why AI Needs Models</h2><p>Why useful AI work depends on explicit concepts, relationships, rules, and context.</p></Link>
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
