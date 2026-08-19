import type { Metadata } from "next";
import { PageHero } from "../_components/site-shell";
import { modellingVideoChannel } from "@/content/site";

export const metadata: Metadata = {
  title: "About",
  description: "Mimris brings decades of enterprise, process, and knowledge modelling into the AI era.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About Mimris" title="A modelling heritage, reactivated for the AI era." lead="Mimris builds on decades of enterprise, process, and knowledge modelling experience—and applies that foundation to a world where humans and AI increasingly work together." />
      <section className="article-section">
        <div className="article-intro"><p className="section-number">Continuity and change</p><h2>The need for explicit models did not disappear when AI arrived.</h2></div>
        <div className="prose-grid"><p>Generative AI makes information easier to access and transform. It also increases the need to preserve meaning, relationships, constraints, decisions, and provenance across the work.</p><p>Mimris carries forward the discipline of structured modelling while making models active context for AI-assisted work.</p><p><a className="arrow-link" href="/metis-legacy.html">Read From Metis to Mimris <span aria-hidden="true">↗</span></a></p></div>
      </section>
      <section className="about-video-section">
        <div>
          <p className="section-number">Modelling education</p>
          <h2>Learn from Snorre&apos;s modelling work.</h2>
        </div>
        <div className="about-video-copy">
          <p>
            Snorre Fossland shares practical modelling explanations and demonstrations through {modellingVideoChannel.name}. The channel complements the Mimris concepts and product examples with a broader educational perspective.
          </p>
          <a className="arrow-link" href={modellingVideoChannel.url}>
            Watch modelling videos on YouTube <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>
    </>
  );
}
