import type { Metadata } from "next";
import { ArrowLink, PageHero } from "../_components/site-shell";
import { products } from "@/content/site";

export const metadata: Metadata = {
  title: "Products",
  description: "Mimris Modelling creates structured models. Mimris AI Workspace puts those models to work.",
  alternates: { canonical: "/products" },
};

export default function ProductsPage() {
  return (
    <>
      <PageHero eyebrow="Mimris products" title="Two different jobs. One shared Universe." lead="Mimris Modelling owns model structure. Mimris AI Workspace connects that structure to documents, decisions, processes, tasks, and results." />
      <section className="product-detail-grid">
        {products.map((product, index) => (
          <article className={`product-card product-${product.accent}`} key={product.name}>
            <span className="card-index">0{index + 1}</span>
            <p className="eyebrow">{product.name}</p>
            <h2>{product.tagline}</h2>
            <p>{product.description}</p>
            <ArrowLink href={product.href}>Explore the product</ArrowLink>
          </article>
        ))}
      </section>
      <section className="boundary-section">
        <p className="section-number">The boundary</p>
        <h2>Structure belongs to Modelling. Work belongs to the Workspace.</h2>
        <div className="boundary-grid">
          <div><strong>Model structure</strong><p>Model semantics, objects, relationships, diagrams, views, hierarchies, TYPE, POPS, and IRTV.</p></div>
          <div><strong>Operational context</strong><p>AI collaboration, documents, notes, planning, processes, tasks, decisions, execution, and deliverables.</p></div>
        </div>
      </section>
    </>
  );
}
