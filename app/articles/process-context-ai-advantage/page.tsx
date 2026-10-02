import type { Metadata } from "next";
import Link from "next/link";
import { ArticleByline, ArticleLayout, ArticleMarkdown, AiDisclosure } from "@/app/_components/article-markdown";

const title = "Why Process Context Is Becoming the Enterprise AI Advantage";
const description =
  "Why reliable enterprise agents need process context, not only documents and data—and what this means for Active Knowledge Modelling and Mimris.";
const canonicalPath = "/articles/process-context-ai-advantage";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: canonicalPath },
  openGraph: {
    type: "article",
    title,
    description,
    publishedTime: "2026-10-02T00:00:00+02:00",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: title,
  description,
  datePublished: "2026-10-02",
  dateModified: "2026-10-02",
  author: { "@type": "Organization", name: "Mimris" },
  publisher: { "@type": "Organization", name: "Mimris" },
  mainEntityOfPage: \`https://mimris-site.vercel.app\${canonicalPath}\`,
};

export default function ProcessContextAiAdvantagePage() {
  return (
    <>
      <ArticleLayout currentPath={canonicalPath}>
        <article className="longform-article">
          <header className="article-hero">
            <Link className="article-back" href="/articles">← All articles</Link>
            <p className="eyebrow">AI news commentary · process context and AKM</p>
            <h1>{title}</h1>
            <p className="hero-lead">Data tells an agent what the enterprise knows. Process context tells it how the enterprise works.</p>
            <ArticleByline date="2 October 2026" />
            <div className="article-meta"><span>7 minute read</span></div>
          </header>
          <ArticleMarkdown file="process-context-ai-advantage.md" />
          <AiDisclosure />
        </article>
      </ArticleLayout>
      <script id="process-context-ai-advantage-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
    </>
  );
}
