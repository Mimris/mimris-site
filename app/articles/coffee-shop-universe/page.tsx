import type { Metadata } from "next";
import Link from "next/link";
import { ArticleByline, ArticleLayout, ArticleMarkdown, AiDisclosure } from "@/app/_components/article-markdown";

export const metadata: Metadata = {
  title: "The Coffee Shop World",
  description: "See how the Coffee Shop World is built in an AKM Universe for modelling and AI-assisted work.",
  alternates: { canonical: "/articles/coffee-shop-universe" },
};

export default function CoffeeShopUniverseArticle() {
  return <ArticleLayout currentPath="/articles/coffee-shop-universe"><header className="article-hero longform-article"><Link className="article-back" href="/articles">← All articles</Link><p className="eyebrow">Examples</p><h1>The Coffee Shop World: An AKM Universe Proof</h1><p className="hero-lead">One familiar world, built in an AKM Universe and seen through two complementary products.</p><ArticleByline /></header><ArticleMarkdown file="coffee-shop-universe.md" /><AiDisclosure /></ArticleLayout>;
}
