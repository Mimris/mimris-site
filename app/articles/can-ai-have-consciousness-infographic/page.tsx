import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArticleByline, ArticleLayout, AiDisclosure } from "@/app/_components/article-markdown";

export const metadata: Metadata = {
  title: "Infographic: Can AI Have Consciousness?",
  description: "A visual summary of the proposed path from biological viability to artificial self-models.",
  alternates: { canonical: "/articles/can-ai-have-consciousness-infographic" },
};

export default function ConsciousnessInfographicArticle() {
  return (
    <ArticleLayout currentPath="/articles/can-ai-have-consciousness-infographic">
      <header className="article-hero longform-article">
        <Link className="article-back" href="/articles/from-biological-viability-to-artificial-consciousness">← Read the article</Link>
        <p className="eyebrow">AI News and Commentary</p>
        <h1>Infographic: Can AI Have Consciousness?</h1>
        <p className="hero-lead">A visual summary of the proposed path from biological viability to artificial self-models.</p>
        <ArticleByline />
      </header>
      <figure className="article-infographic-page longform-article">
        <Image src="/assets/can-ai-have-consciousness-infographic.png" alt="Infographic showing a proposed progression from biological viability to artificial consciousness" width={2048} height={2048} sizes="(max-width: 1100px) 100vw, 1100px" priority />
        <figcaption>This visual is an exploratory summary, not a settled scientific account of consciousness.</figcaption>
      </figure>
      <AiDisclosure>This visual was developed with assistance from an AI system. The underlying hypothesis and final editorial decisions are the author’s responsibility.</AiDisclosure>
    </ArticleLayout>
  );
}
