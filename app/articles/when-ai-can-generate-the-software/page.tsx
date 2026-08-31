import type { Metadata } from "next";
import Link from "next/link";
import { ArticleByline, ArticleLayout, ArticleMarkdown, AiDisclosure } from "@/app/_components/article-markdown";

export const metadata: Metadata = {
  title: "When AI Can Generate the Software, the Model Becomes the Asset",
  description: "Why Active Knowledge Modelling may become the durable specification and intellectual asset as AI makes software implementation easier to generate.",
  alternates: { canonical: "/articles/when-ai-can-generate-the-software" },
};

export default function WhenAiCanGenerateTheSoftwarePage() {
  return (
    <ArticleLayout currentPath="/articles/when-ai-can-generate-the-software">
      <header className="article-hero longform-article">
        <Link className="article-back" href="/articles">← All articles</Link>
        <p className="eyebrow">AI and Active Knowledge Modelling</p>
        <h1>When AI Can Generate the Software, the Model Becomes the Asset</h1>
        <p className="hero-lead">As AI makes implementation easier to generate, the durable value moves toward understanding what the software should represent and do.</p>
        <ArticleByline date="31 August 2026" />
      </header>
      <ArticleMarkdown file="when-ai-can-generate-the-software.md" />
      <AiDisclosure />
    </ArticleLayout>
  );
}
