import type { Metadata } from "next";
import Link from "next/link";
import { ArticleByline, ArticleLayout, ArticleMarkdown, AiDisclosure } from "@/app/_components/article-markdown";

export const metadata: Metadata = {
  title: "What Is Active Knowledge Modelling?",
  description: "Active Knowledge Modelling creates connected, evolvable models that remain useful as context for people, software, and AI.",
  alternates: { canonical: "/articles/active-knowledge-modelling" },
};

export default function ActiveKnowledgeModellingArticle() {
  return <ArticleLayout currentPath="/articles/active-knowledge-modelling"><header className="article-hero longform-article"><Link className="article-back" href="/articles">← All articles</Link><p className="eyebrow">Concepts</p><h1>What Is Active Knowledge Modelling?</h1><p className="hero-lead">A model can stay connected to the world it describes.</p><ArticleByline /></header><ArticleMarkdown file="active-knowledge-modelling.md" /><AiDisclosure /></ArticleLayout>;
}
