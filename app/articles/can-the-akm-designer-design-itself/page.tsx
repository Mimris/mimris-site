import type { Metadata } from "next";
import Link from "next/link";
import { ArticleByline, ArticleLayout, ArticleMarkdown, AiDisclosure } from "@/app/_components/article-markdown";

export const metadata: Metadata = {
    title: "Can the AKM Designer Design Itself?",
    description:
        "How models could make the AKM Designer’s own concepts, tasks, constraints, and feedback explicit while keeping people and a reliable software foundation in control.",
    alternates: { canonical: "/articles/can-the-akm-designer-design-itself" },
};

export default function CanTheAkmDesignerDesignItselfArticle() {
    return (
        <ArticleLayout currentPath="/articles/can-the-akm-designer-design-itself">
            <header className="article-hero longform-article">
                <Link className="article-back" href="/articles">← All articles</Link>
                <p className="eyebrow">A model of the modeller</p>
                <h1>Can the AKM Designer Design Itself?</h1>
                <p className="hero-lead">
                    Explore how models could make the designer’s own concepts, tasks, constraints, and feedback explicit, while people and a reliable software foundation remain in control.
                </p>
                <ArticleByline date="5 November 2026" />
            </header>
            <ArticleMarkdown file="can-the-akm-designer-design-itself.md" />
            <AiDisclosure />
        </ArticleLayout>
    );
}