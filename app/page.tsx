import Link from "next/link";
import { ArrowLink } from "./_components/site-shell";
import { coreDefinitions, products } from "@/content/site";

export default function Home() {
  return (
    <>
      <section className="home-hero">
        <div className="home-hero-copy">
          <p className="eyebrow">Active Knowledge Modelling</p>
          <h1>
            Turn knowledge into models <em>AI can work with.</em>
          </h1>
          <p className="hero-lead">
            Mimris makes the structure of a domain explicit—so people, software, and AI can understand the same world and act within it.
          </p>
          <div className="button-row">
            <Link className="button button-primary" href="/active-knowledge-modelling">
              Explore the approach
            </Link>
            <Link className="button button-secondary" href="/products">
              See the products
            </Link>
          </div>
        </div>
        <div className="universe-card" aria-label="Mimris knowledge flow">
          <div className="universe-card-header">
            <span>Coffee Shop Universe</span>
            <span className="status">Active</span>
          </div>
          <div className="universe-core">
            <span className="orbit-label orbit-one">Knowledge</span>
            <span className="orbit-label orbit-two">Models</span>
            <span className="orbit-label orbit-three">Work</span>
            <div className="core-node">
              <span>Universe</span>
              <small>shared context</small>
            </div>
          </div>
          <div className="universe-details">
            <span>12 concepts</span>
            <span>4 processes</span>
            <span>8 work items</span>
          </div>
        </div>
      </section>

      <section className="statement-section">
        <p className="section-number">01 / The problem</p>
        <div>
          <h2>Information is abundant. Understanding is still fragmented.</h2>
          <p>
            Documents, systems, conversations, models, and AI sessions contain knowledge. But the relationships between customers, products, processes, roles, decisions, and work are usually implicit.
          </p>
          <p>
            Mimris gives that knowledge a durable structure—without reducing a living domain to a pile of files or a single prompt.
          </p>
        </div>
      </section>

      <section className="flow-section">
        <div className="section-heading">
          <p className="section-number">02 / The approach</p>
          <h2>Knowledge becomes active when structure can guide action.</h2>
        </div>
        <div className="knowledge-flow" aria-label="Information to results flow">
          {["Information", "Knowledge", "Models", "Context", "Human + AI", "Results"].map((item, index) => (
            <div className="flow-item" key={item}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{item}</strong>
            </div>
          ))}
        </div>
        <div className="definition-callout">
          <p className="eyebrow">Definition</p>
          <p>{coreDefinitions.akm}</p>
          <ArrowLink href="/active-knowledge-modelling">What makes a model active?</ArrowLink>
        </div>
      </section>

      <section className="products-section">
        <div className="section-heading split-heading">
          <div>
            <p className="section-number">03 / Two products, one Universe</p>
            <h2>Model the world. Work with it.</h2>
          </div>
          <p>
            The products serve different jobs within the same ecosystem. One owns model structure; the other connects that structure to real work.
          </p>
        </div>
        <div className="product-grid">
          {products.map((product, index) => (
            <article className={`product-card product-${product.accent}`} key={product.name}>
              <span className="card-index">0{index + 1}</span>
              <p className="eyebrow">{product.name}</p>
              <h3>{product.tagline}</h3>
              <p>{product.description}</p>
              <ArrowLink href={product.href}>Explore {product.name}</ArrowLink>
            </article>
          ))}
        </div>
      </section>

      <section className="proof-section">
        <div className="proof-copy">
          <p className="section-number">04 / A shared proof</p>
          <h2>Start with a world you already understand.</h2>
          <p>
            The Coffee Shop Universe connects people, products, systems, processes, model views, documents, decisions, and work in one familiar example.
          </p>
          <ArrowLink href="/examples/coffee-shop">Follow the Coffee Shop Universe</ArrowLink>
        </div>
        <ol className="proof-path">
          <li><span>01</span><strong>Describe</strong><small>Make the domain explicit</small></li>
          <li><span>02</span><strong>Model</strong><small>Connect concepts and relationships</small></li>
          <li><span>03</span><strong>Plan</strong><small>Ground tasks in context</small></li>
          <li><span>04</span><strong>Perform</strong><small>Produce connected results</small></li>
        </ol>
      </section>

      <section className="closing-section">
        <p className="eyebrow">A shared world for human and artificial intelligence</p>
        <h2>Give AI more than information. Give it a world to work within.</h2>
        <div className="button-row">
          <a className="button button-primary" href="https://mimris-ai-workspace.vercel.app">
            Open the workspace demo
          </a>
          <a className="button button-secondary" href="https://github.com/Mimris/mimris">
            View Mimris on GitHub
          </a>
        </div>
      </section>
    </>
  );
}
