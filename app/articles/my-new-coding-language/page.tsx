import type { Metadata } from "next";
import Link from "next/link";
import { ArticleByline, ArticleLayout, ArticleMarkdown, AiDisclosure } from "@/app/_components/article-markdown";

export const metadata: Metadata = {
  title: "My New Coding Language: “Let’s Discuss” and “Proceed”",
  description:
    "A personal take on vibe coding and spec-driven development: how a few conversational commands connect exploration, decisions, implementation, and verification.",
  alternates: { canonical: "/articles/my-new-coding-language" },
};

export default function MyNewCodingLanguageArticle() {
  return (
    <ArticleLayout currentPath="/articles/my-new-coding-language">
      <header className="article-hero longform-article">
        <Link className="article-back" href="/articles">← All articles</Link>
        <p className="eyebrow">Vibe coding and spec-driven development</p>
        <h1>My New Coding Language: “Let’s Discuss” and “Proceed”</h1>
        <p className="hero-lead">
          A few conversational commands can take an idea from exploration to implementation. The precision comes from the context, decisions, and evidence behind them.
        </p>
        <ArticleByline date="20 October 2026" />
      </header>
      <ArticleMarkdown file="my-new-coding-language.md" />
      <AiDisclosure />
    </ArticleLayout>
  );
}
