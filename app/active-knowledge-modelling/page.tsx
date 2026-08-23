import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "../_components/site-shell";
import { MimrisMark } from "../_components/mimris-mark";
import { coreDefinitions, modellingVideoChannel } from "@/content/site";

export const metadata: Metadata = {
  title: "Active Knowledge Modelling",
  description: "Active Knowledge Modelling creates connected, evolvable models that people, applications, and AI can use as context.",
  alternates: { canonical: "/active-knowledge-modelling" },
};

export default function ActiveKnowledgeModellingPage() {
  return (
    <>
      <PageHero
        eyebrow="Active Knowledge Modelling"
        title="Models should do more than document what was once understood."
        lead={coreDefinitions.akm}
      >
        <div className="akm-brand-lockup" aria-label="Mimris — Active Knowledge Modelling">
          <MimrisMark />
          <span>
            <strong>Mimris</strong>
            <small>Active Knowledge Modelling</small>
          </span>
        </div>
        <div className="button-row">
          <Link className="button button-primary" href="/examples/coffee-shop" data-analytics-event="proof_started" data-analytics-destination="coffee-shop-proof">See a World in practice</Link>
          <a
            className="button button-secondary"
            href="https://activeknowledgemodeling.com/"
            target="_blank"
            rel="noreferrer"
            data-analytics-event="external_resource_clicked"
            data-analytics-destination="active-knowledge-modeling"
          >
            Read the AKM overview ↗
          </a>
        </div>
      </PageHero>
      <section className="article-section">
        <div className="article-intro">
          <p className="section-number">Active, not static</p>
          <h2>A model stays connected to the world it describes.</h2>
        </div>
        <div className="principle-grid">
          <article><span>01</span><h3>Explicit</h3><p>Concepts, relationships, rules, and assumptions are visible rather than buried in prose or prompts.</p></article>
          <article><span>02</span><h3>Evolvable</h3><p>The model changes as evidence, decisions, and domain understanding develop.</p></article>
          <article><span>03</span><h3>Operational</h3><p>Structure becomes context for decisions, applications, AI collaboration, and performed work.</p></article>
          <article><span>04</span><h3>Inspectable</h3><p>Humans can examine what the model says, where it came from, and whether it remains valid.</p></article>
        </div>
      </section>
      <section className="loop-section">
        <div className="section-heading">
          <p className="section-number">The operating loop</p>
          <h2>Understanding and action continuously inform one another.</h2>
        </div>
        <ol className="loop-list">
          <li><span>01</span><div><strong>Describe</strong><p>Capture the domain in language people recognize.</p></div></li>
          <li><span>02</span><div><strong>Structure</strong><p>Make concepts, relationships, and rules explicit.</p></div></li>
          <li><span>03</span><div><strong>Use</strong><p>Ground analysis, planning, AI, and execution in the model.</p></div></li>
          <li><span>04</span><div><strong>Learn</strong><p>Feed evidence and results back into the World.</p></div></li>
        </ol>
      </section>
      <section className="video-section">
        <div className="video-section-copy">
          <p className="section-number">Learn through video</p>
          <h2>Explore modelling with Snorre.</h2>
          <p>
            Continue with practical explanations of modelling ideas, methods, and notation on Snorre&apos;s Model Bureau.
          </p>
          <a className="button button-primary" href={modellingVideoChannel.url}>
            Visit the YouTube channel
          </a>
        </div>
        <a className="video-channel-card" href={modellingVideoChannel.url} aria-label={`Open ${modellingVideoChannel.name} on YouTube`}>
          <span className="video-play" aria-hidden="true">▶</span>
          <div>
            <p className="eyebrow">YouTube channel</p>
            <h3>{modellingVideoChannel.name}</h3>
            <p>Modelling concepts explained by Snorre Fossland.</p>
          </div>
          <span className="video-arrow" aria-hidden="true">↗</span>
        </a>
      </section>
    </>
  );
}
