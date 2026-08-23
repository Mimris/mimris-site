import type { Metadata } from "next";
import { PageHero } from "../../_components/site-shell";

export const metadata: Metadata = {
  title: "Coffee Shop World",
  description: "Follow the Coffee Shop World as it is built in an AKM Universe, from description and model structure to contextualized work.",
  alternates: { canonical: "/examples/coffee-shop" },
};

const steps = [
  ["Describe the domain", "Customers order products. Baristas prepare them. Systems route payment and production information."],
  ["Build the model", "Connect customers, employees, products, systems, roles, information, and processes in Mimris Modelling."],
  ["Open the workspace", "Use that shared structure to understand the End-to-End Store Flow and its operational context."],
  ["Follow connected work", "Move from Order Entry to Payment Checkout, Production Routing, Inventory Ops, documents, and work items."],
];

export default function CoffeeShopPage() {
  return (
    <>
      <PageHero eyebrow="Flagship example" title="The Coffee Shop World" lead="A familiar world makes the AKM Universe concrete: build its structure in Universe.World and the Workspace, then use it to guide work.">
        <div className="button-row"><a className="button button-primary" href="https://mimris-ai-workspace.vercel.app" target="_blank" rel="noreferrer">Open the workspace proof ↗</a><a className="button button-secondary" href="https://mimris.vercel.app/model?universeSlug=coffee-shop-generic&amp;universeApi=https%3A%2F%2Fmimris-ai-workspace.vercel.app&amp;metisScope=world-model&amp;currentModelRef=itrv-coffee-shop-ops-model-v1&amp;currentModelviewRef=c0b26cc8-2a0b-4e30-a8a1-91ffe8a18708" target="_blank" rel="noreferrer">Open the Coffee Shop IRTV model ↗</a></div>
      </PageHero>
      <section className="guided-proof">
        <div className="section-heading"><p className="section-number">A ten-minute proof path</p><h2>One AKM Universe, with its Coffee Shop World, seen through two complementary products.</h2></div>
        <ol className="guided-steps">
          {steps.map(([title, description], index) => <li key={title}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{title}</h3><p>{description}</p></div></li>)}
        </ol>
      </section>
      <section className="universe-map">
        <p className="section-number">Inside the Coffee Shop World</p>
        <div className="map-grid">{["People", "Products", "Systems", "Processes", "Information", "Work"].map((item) => <div key={item}>{item}</div>)}</div>
      </section>
    </>
  );
}
