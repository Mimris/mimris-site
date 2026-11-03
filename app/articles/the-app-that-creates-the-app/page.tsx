import type { Metadata } from "next";
import Link from "next/link";
import { ArticleByline, ArticleLayout, ArticleMarkdown, AiDisclosure } from "@/app/_components/article-markdown";

export const metadata: Metadata = {
  title: "Mimris: The App That Creates the App",
  description:
    "How Mimris uses models of the work to design a Generated Application, try it in Operational Preview, and improve it through human review.",
  alternates: { canonical: "/articles/the-app-that-creates-the-app" },
};

export default function TheAppThatCreatesTheAppArticle() {
  return (
    <ArticleLayout currentPath="/articles/the-app-that-creates-the-app">
      <header className="article-hero longform-article">
        <Link className="article-back" href="/articles">← All articles</Link>
        <p className="eyebrow">From understanding the work to a Generated Application</p>
        <h1>Mimris: The App That Creates the App</h1>
        <p className="hero-lead">
          Describe the work, model how it should happen, and use that design to create an application people can try, review, and improve.
        </p>
        <ArticleByline date="25 October 2026" />
      </header>
      <ArticleMarkdown file="the-app-that-creates-the-app.md" />
      <AiDisclosure />
    </ArticleLayout>
  );
}
