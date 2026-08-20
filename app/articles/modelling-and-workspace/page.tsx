import type { Metadata } from "next";
import Link from "next/link";
import { ArticleByline, ArticleLayout, ArticleMarkdown, AiDisclosure } from "@/app/_components/article-markdown";

export const metadata: Metadata = {
  title: "Mimris Modelling and AI Workspace",
  description: "Understand the complementary jobs of Mimris Modelling and Mimris AI Workspace.",
  alternates: { canonical: "/articles/modelling-and-workspace" },
};

export default function ModellingAndWorkspaceArticle() {
  return <ArticleLayout currentPath="/articles/modelling-and-workspace"><header className="article-hero longform-article"><Link className="article-back" href="/articles">← All articles</Link><p className="eyebrow">Products</p><h1>Mimris Modelling and Mimris AI Workspace: Two Complementary Jobs</h1><p className="hero-lead">One creates and evolves model structure. The other puts it to work.</p><ArticleByline /></header><ArticleMarkdown file="modelling-and-workspace.md" /><AiDisclosure /></ArticleLayout>;
}
