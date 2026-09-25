import type { Metadata } from "next";
import Link from "next/link";
import { ArticleByline, ArticleLayout, ArticleMarkdown, AiDisclosure } from "@/app/_components/article-markdown";

export const metadata: Metadata = {
  title: "AI Can Generate the Code—But Who Defines What Is Correct?",
  description:
    "Why AI-generated software makes independent work models, acceptance criteria, architecture, and semantic verification increasingly important.",
  alternates: { canonical: "/articles/ai-defines-correctness" },
};

export default function AiDefinesCorrectnessArticle() {
  return (
    <ArticleLayout currentPath="/articles/ai-defines-correctness">
      <header className="article-hero longform-article">
        <Link className="article-back" href="/articles">← All articles</Link>
        <p className="eyebrow">AI-native software development</p>
        <h1>AI Can Generate the Code—But Who Defines What Is Correct?</h1>
        <p className="hero-lead">
          As implementation capacity scales through AI agents, the durable engineering asset moves toward explicit work models, authority, acceptance criteria, and independent verification.
        </p>
        <ArticleByline date="25 September 2026" />
      </header>
      <ArticleMarkdown file="ai-defines-correctness.md" />
      <AiDisclosure />
    </ArticleLayout>
  );
}
