import type { Metadata } from "next";
import Link from "next/link";
import { ArticleMarkdown } from "@/app/_components/article-markdown";

export const metadata: Metadata = {
  title: "What Is Active Knowledge Modelling?",
  description: "Active Knowledge Modelling creates connected, evolvable models that remain useful as context for people, software, and AI.",
  alternates: { canonical: "/articles/active-knowledge-modelling" },
};

export default function ActiveKnowledgeModellingArticle() {
  return <><header className="article-hero longform-article"><Link className="article-back" href="/articles">← All articles</Link><p className="eyebrow">Concepts</p><h1>What Is Active Knowledge Modelling?</h1><p className="hero-lead">A model can stay connected to the world it describes.</p></header><ArticleMarkdown file="active-knowledge-modelling.md" /></>;
}
