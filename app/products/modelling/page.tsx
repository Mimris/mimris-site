import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "../../_components/site-shell";

export const metadata: Metadata = {
  title: "Mimris Modelling",
  description: "Create, structure, visualize, inspect, and evolve models of complex domains with Mimris Modelling.",
  alternates: { canonical: "/products/modelling" },
};

export default function ModellingPage() {
  return (
    <>
      <PageHero eyebrow="Mimris Modelling" title="Understand and model complex worlds." lead="A specialist modelling environment for defining model semantics and creating connected views of objects, relationships, processes, organizations, systems, and information.">
        <div className="button-row"><a className="button button-primary" href="https://mimris.vercel.app" target="_blank" rel="noreferrer" data-analytics-event="product_demo_clicked" data-analytics-destination="modelling">Open the modelling demo ↗</a><a className="button button-secondary" href="https://github.com/Mimris/mimris" target="_blank" rel="noreferrer" data-analytics-event="source_clicked" data-analytics-destination="mimris-github">View GitHub repo ↗</a></div>
      </PageHero>
      <section className="product-showcase">
        <div className="showcase-copy"><p className="section-number">Model the world</p><h2>Make structure visible and explorable.</h2><ul className="feature-list"><li>Define model types, structures, constraints, and semantics.</li><li>Create objects, relationships, hierarchies, diagrams, and views.</li><li>Navigate conceptual and instance models without losing context.</li><li>Work with Mimris constructs including TYPE, POPS, and IRTV.</li></ul></div>
        <figure className="product-image"><Image src="/assets/mimris-public-home.png" alt="Mimris Modelling interface showing a structured model" width={1440} height={1000} sizes="(max-width: 900px) 100vw, 52vw" /><figcaption>Mimris Modelling provides the specialist model-building experience.</figcaption></figure>
      </section>
    </>
  );
}
