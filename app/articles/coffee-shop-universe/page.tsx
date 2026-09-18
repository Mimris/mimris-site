import type { Metadata } from "next";
import Link from "next/link";
import { ArticleByline, ArticleLayout, ArticleMarkdown, AiDisclosure } from "@/app/_components/article-markdown";

export const metadata: Metadata = {
  title: "The Coffee Shop World",
  description: "See how the Coffee Shop World is built in an AKM Universe for modelling and AI-assisted work.",
  alternates: { canonical: "/articles/coffee-shop-universe" },
};

export default function CoffeeShopUniverseArticle() {
  return <ArticleLayout currentPath="/articles/coffee-shop-universe"><header className="article-hero longform-article"><Link className="article-back" href="/articles">← All articles</Link><p className="eyebrow">Examples</p><h1>From Domain Understanding to Operational Work</h1><p className="hero-lead">A familiar world showing how shared understanding becomes structured, configured, and useful operational work.</p><ArticleByline /></header><ArticleMarkdown file="coffee-shop-universe.md" /><AiDisclosure /></ArticleLayout>;
}
