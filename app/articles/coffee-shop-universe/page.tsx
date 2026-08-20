import type { Metadata } from "next";
import Link from "next/link";
import { ArticleMarkdown } from "@/app/_components/article-markdown";

export const metadata: Metadata = {
  title: "The Coffee Shop Universe",
  description: "See how a familiar coffee-shop domain becomes a connected Universe for modelling and AI-assisted work.",
  alternates: { canonical: "/articles/coffee-shop-universe" },
};

export default function CoffeeShopUniverseArticle() {
  return <><header className="article-hero longform-article"><Link className="article-back" href="/articles">← All articles</Link><p className="eyebrow">Examples</p><h1>The Coffee Shop Universe: A Model-Driven Proof</h1><p className="hero-lead">One familiar domain, seen through two complementary products.</p></header><ArticleMarkdown file="coffee-shop-universe.md" /></>;
}
