import type { Metadata } from "next";
import Link from "next/link";
import { ArticleByline, ArticleLayout, ArticleMarkdown } from "@/app/_components/article-markdown";

export const metadata: Metadata = {
  title: "Can AI Have Consciousness?",
  description: "A hypothesis about how consciousness may grow from viability regulation, prediction, memory, and self-models—and what that could mean for artificial systems.",
  alternates: { canonical: "/articles/from-biological-viability-to-artificial-consciousness" },
};

export default function ArtificialConsciousnessArticle() {
  return <ArticleLayout currentPath="/articles/from-biological-viability-to-artificial-consciousness"><header className="article-hero longform-article"><Link className="article-back" href="/articles">← All articles</Link><p className="eyebrow">AI News and Commentary</p><h1>Can AI Have Consciousness?</h1><p className="hero-lead">Could “Am I OK?” be the beginning of mind?</p><ArticleByline /></header><ArticleMarkdown file="from-biological-viability-to-artificial-consciousness.md" /><aside className="article-disclosure longform-article"><strong>Editorial note</strong><p>This article was developed with assistance from an AI system. It is an exploratory hypothesis, not a claim that an AI system is conscious or that the scientific questions involved have been settled. The final editorial decisions are the author’s responsibility.</p></aside></ArticleLayout>;
}
