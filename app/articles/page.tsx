import type { Metadata } from "next";
import Image from "next/image";
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
      <div className="articles-hero-layout">
        <ArticleDirectory />
        <PageHero
          eyebrow="Mimris articles · Ideas for model-driven work"
          title="Use AI to help you understand your work before you ask it to execute."
          lead="Explore practical explanations, product thinking, and AI commentary from Mimris. These articles follow knowledge from the world people understand, through models and processes, into work that people and AI can perform together."
        >
          <div className="page-hero-note">
            <p><strong>Read across three chapters.</strong> Active Knowledge Modelling explains the foundations, AI News and Commentary examines current developments, and Examples and worlds connect the ideas to familiar domains.</p>
            <p>Start with the latest article or follow a chapter from its foundations to applied work.</p>
            <figure className="articles-hero-infographic">
              <Image src="/assets/articles-understand-before-execute-infographic.png" alt="A governed AI work loop from understanding the work and defining the enterprise model to preparing context, asking AI to execute, and reviewing the result" width={1672} height={942} sizes="(max-width: 720px) 100vw, 720px" />
              <figcaption>Use AI to understand the work before asking it to execute.</figcaption>
            </figure>
          </div>
        </PageHero>
      </div>
      <section className="article-index">
        <div className="article-index-page-layout">
          <div className="article-index-main">
            <article className="editorial-card">
              <div>
                <p className="eyebrow">AI-native software development · 10 minute read</p>
                <h2>AI Can Generate the Code—But Who Defines What Is Correct?</h2>
                <p>
                  Why rapidly scaling AI implementation makes independent work models, acceptance criteria, architecture, and semantic verification increasingly important.
                </p>
              </div>
              <ArrowLink href="/articles/ai-defines-correctness">Read the article</ArrowLink>
            </article>
            <div className="article-link-grid">
              <Link href="/articles/ai-assisted-task-execution"><h2>From Process Models to AI-Assisted Task Execution</h2><p>See how Mimris turns process context and model-grounded Tasks into a generic execution pattern.</p></Link>
              <Link href="/articles/mimris-ecosystem"><h2>What Is Mimris?</h2><p>Meet the ecosystem for modelling a world and putting it to work.</p></Link>
              <Link href="/articles/why-ai-needs-models"><h2>Why AI Needs Models</h2><p>Why useful AI work depends on explicit concepts, relationships, rules, and context.</p></Link>
              <Link href="/articles/active-knowledge-modelling"><h2>What Is Active Knowledge Modelling?</h2><p>Understand the approach behind Mimris.</p></Link>
              <Link href="/articles/coffee-shop-universe"><h2>The Coffee Shop World</h2><p>Follow a familiar world from model to work inside an AKM Universe.</p></Link>
              <Link href="/articles/modelling-and-workspace"><h2>Two Complementary Jobs</h2><p>See how the products divide responsibility.</p></Link>
              <Link href="/articles/from-biological-viability-to-artificial-consciousness"><h2>Can AI Have Consciousness?</h2><p>An exploratory hypothesis about living and artificial systems.</p></Link>
              <Link href="/articles/governed-agent-loops"><h2>Governed Agent Loops</h2><p>Why model-based context, controls, verification, and human review matter when agents keep working.</p></Link>
              <Link href="/articles/process-context-ai-advantage"><h2>Why Process Context Matters</h2><p>Why reliable enterprise agents need structured context about how work is organised.</p></Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
