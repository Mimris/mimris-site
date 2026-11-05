import { readFileSync } from "node:fs";
import { join } from "node:path";
import "./document.css";

export function SharedDocument({ slug, eyebrow, title, description }: { slug: "core-model" | "product-presentation"; eyebrow: string; title: string; description: string }) {
  const html = readFileSync(join(process.cwd(), "content/share", `${slug}.html`), "utf8");
  return <div className="share-document"><header className="share-header"><p className="share-eyebrow">{eyebrow}</p><h1>{title}</h1><p className="share-intro">{description}</p></header><div className="share-layout" dangerouslySetInnerHTML={{ __html: html }} /></div>;
}
