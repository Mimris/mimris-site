import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "../../_components/site-shell";

const architecture = [
  ["Origin World", "Foundation method context, templates, vocabulary, and reusable model assumptions."],
  ["Workspace", "The active human and AI environment for prompting, drafting, reviewing, and modeling."],
  ["World", "The target world containing definition, model, focus, and blueprint."],
  ["Blueprint", "The structured realization package with operational model and feedback queue."],
  ["Operational Preview", "An app-like simulation for tasks, roles, views, flow, and information."],
] as const;

const principles = [
  ["Prompt engineering", "AI requests are assembled from task objectives, templates, controls, artifacts, and user instructions."],
  ["Context engineering", "Mimris chooses full context, compact anchors, current artifacts, or refreshed grounding for each request."],
  ["Model-grounded AI", "POPS, IRTV, BPMN, and TYPE ground process, task, flow, role, view, and information semantics."],
  ["Human-governed loop", "AI drafts and proposes. People review, approve, save, and route feedback into the model."],
] as const;

const methodSteps = [
  ["01", "Understand the world", "Describe the domain, its purpose, boundaries, concepts, and people."],
  ["02", "Model how it works", "Connect processes, roles, information, rules, and technology in shared models."],
  ["03", "Make it operational", "Turn the models into a workspace where people and AI can plan, perform, and improve work."],
] as const;

export const metadata: Metadata = {
  title: "Mimris AI Workspace",
  description: "Use structured models with AI, documents, processes, tasks, decisions, and deliverables in Mimris AI Workspace.",
  alternates: { canonical: "/products/ai-workspace" },
};

export default function AiWorkspacePage() {
  return (
    <>
      <PageHero eyebrow="Mimris AI Workspace" title="Put structured models to work." lead="An AI-enabled environment where an AKM Universe becomes durable context for understanding, planning, performing, and reviewing real work.">
        <div className="button-row"><a className="button button-primary" href="https://mimris-ai-workspace.vercel.app" target="_blank" rel="noreferrer" data-analytics-event="product_demo_clicked" data-analytics-destination="ai-workspace">Open the workspace demo ↗</a><a className="button button-secondary" href="/examples/coffee-shop" data-analytics-event="proof_started" data-analytics-destination="coffee-shop-proof">Follow the guided proof</a></div>
      </PageHero>
      <section className="product-showcase">
        <div className="showcase-copy">
          <p className="section-number">Product architecture</p>
          <h2>From method context to operational preview.</h2>
          <p className="hero-lead">The Workspace connects the origin-world method, a target world, structured blueprints, and an app-like operational preview so AI-assisted work remains grounded and reviewable.</p>
        </div>
        <figure className="product-image">
          <a href="/assets/mimris-product-architecture-infographic.png" target="_blank" rel="noreferrer" aria-label="Open the Mimris product architecture infographic full size">
            <Image src="/assets/mimris-product-architecture-infographic.png" alt="Mimris product architecture showing the path from Origin World and Workspace to World, Blueprint, and Operational Preview" width={1536} height={1024} sizes="(max-width: 900px) 100vw, 52vw" priority />
          </a>
          <figcaption>Explore the Mimris product architecture from method context to operational preview.</figcaption>
        </figure>
      </section>
      <section className="product-showcase">
        <div className="showcase-copy"><p className="section-number">Work with the world</p><h2>Keep AI output connected to domain context.</h2><ul className="feature-list"><li>Collaborate with AI using explicit concepts and relationships.</li><li>Connect domain descriptions, documents, notes, and decisions.</li><li>Design processes, plan tasks, and perform work in context.</li><li>Generate and review deliverables without losing provenance.</li></ul></div>
        <figure className="product-image"><Image src="/assets/mimris-ai-workspace-public-home.png" alt="Mimris AI Workspace showing connected project work" width={1440} height={1000} sizes="(max-width: 900px) 100vw, 52vw" /><figcaption>The Workspace connects the World to documents, decisions, tasks, and results.</figcaption></figure>
      </section>
      <section className="product-detail-grid">
        {architecture.map(([title, description], index) => (
          <article className={`product-card product-${index % 2 === 0 ? "green" : "coral"}`} key={title}>
            <span className="card-index">0{index + 1}</span>
            <p className="eyebrow">AKM architecture</p>
            <h2>{title}</h2>
            <p>{description}</p>
          </article>
        ))}
      </section>
      <section className="contrast-section">
        <div>
          <p className="section-number">The AI difference</p>
          <h2>Prompt and context engineering as product architecture.</h2>
          <p>Mimris is not a prompt box. It assembles AI requests from world definition, model structure, active tasks, controls, current artifacts, prior outputs, and focused user instructions.</p>
        </div>
        <div className="principle-grid">
          {principles.map(([title, description]) => (
            <article key={title}>
              <span>Principle</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="guided-proof">
        <div className="section-heading">
          <p className="section-number">The AKM World Designer method</p>
          <h2>Design a world so people and AI can understand together.</h2>
        </div>
        <ol className="guided-steps">
          {methodSteps.map(([number, title, description]) => (
            <li key={number}><span>{number}</span><div><h3>{title}</h3><p>{description}</p></div></li>
          ))}
        </ol>
      </section>
      <section className="closing-section">
        <p className="section-number">Customer testing</p>
        <h2>Start with the Coffee Shop World, then follow the model into the Workspace.</h2>
        <p>A familiar operational world makes the AKM Universe concrete: see how domain description, model structure, contextualized work, documents, tasks, and results connect.</p>
        <div className="button-row">
          <a className="button button-primary" href="/examples/coffee-shop">Follow the guided proof ↗</a>
          <a className="button button-secondary" href="https://mimris-ai-workspace.vercel.app" target="_blank" rel="noreferrer">Open the workspace ↗</a>
        </div>
      </section>
    </>
  );
}
