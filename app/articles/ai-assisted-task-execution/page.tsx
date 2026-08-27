import type { Metadata } from "next";
import Link from "next/link";
import { ArticleByline, ArticleLayout, ArticleMarkdown, AiDisclosure } from "@/app/_components/article-markdown";

export const metadata: Metadata = {
  title: "From Process Models to AI-Assisted Task Execution",
  description:
    "How Mimris turns model-grounded tasks into a generic AI-assisted execution pattern for documents, models, analysis, reviews, and other work.",
  alternates: { canonical: "/articles/ai-assisted-task-execution" },
};

export default function AiAssistedTaskExecutionArticle() {
  return (
    <ArticleLayout currentPath="/articles/ai-assisted-task-execution">
      <header className="article-hero longform-article">
        <Link className="article-back" href="/articles">← All articles</Link>
        <p className="eyebrow">Model-driven work</p>
        <h1>From Process Models to AI-Assisted Task Execution</h1>
        <p className="hero-lead">The model provides the context. The Task defines the work. AI assists in performing it.</p>
        <ArticleByline date="27 August 2026" />
      </header>
      <ArticleMarkdown file="ai-assisted-task-execution.md" />
      <AiDisclosure />
    </ArticleLayout>
  );
}
