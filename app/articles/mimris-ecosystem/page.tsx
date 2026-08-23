import type { Metadata } from "next";
import Link from "next/link";
import { ArticleByline, ArticleLayout, ArticleMarkdown, AiDisclosure } from "@/app/_components/article-markdown";

export const metadata: Metadata = {
  title: "What Is Mimris?",
  description:
    "Understand the Mimris ecosystem, Active Knowledge Modelling, AKM Universes, and the complementary roles of Mimris Modelling and Mimris AI Workspace.",
  alternates: { canonical: "/articles/mimris-ecosystem" },
};

export default function MimrisEcosystemArticle() {
  return (
    <ArticleLayout currentPath="/articles/mimris-ecosystem">
      <header className="article-hero longform-article">
        <Link className="article-back" href="/articles">← All articles</Link>
        <p className="eyebrow">Mimris ecosystem</p>
        <h1>What Is Mimris?</h1>
        <p className="hero-lead">Model the world. Work with it.</p>
        <ArticleByline date="23 August 2026" />
      </header>
      <ArticleMarkdown file="mimris-ecosystem.md" />
      <AiDisclosure />
    </ArticleLayout>
  );
}
