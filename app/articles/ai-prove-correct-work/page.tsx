import type { Metadata } from "next";
import Link from "next/link";
import { ArticleByline, ArticleLayout, ArticleMarkdown, AiDisclosure } from "@/app/_components/article-markdown";

export const metadata: Metadata = {
  title: "AI Can Generate the Work. But Can We Prove It Is Correct?",
  description:
    "Why model-driven engineering needs explicit enterprise knowledge, enforceable requirements, operational fidelity, and independent verification of AI-generated applications.",
  alternates: { canonical: "/articles/ai-prove-correct-work" },
};

export default function AiProveCorrectWorkArticle() {
  return (
    <ArticleLayout currentPath="/articles/ai-prove-correct-work">
      <header className="article-hero longform-article">
        <Link className="article-back" href="/articles">← All articles</Link>
        <p className="eyebrow">Model-driven engineering · AI assurance</p>
        <h1>AI Can Generate the Work. But Can We Prove It Is Correct?</h1>
        <p className="hero-lead">
          AI can generate models and applications faster than ever. The challenge is proving that the result faithfully implements approved enterprise knowledge, work, and constraints.
        </p>
        <ArticleByline date="23 November 2026" />
      </header>
      <ArticleMarkdown file="ai-prove-correct-work.md" />
      <AiDisclosure />
    </ArticleLayout>
  );
}
