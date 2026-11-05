import type { Metadata } from "next";
import { SharedDocument } from "../document";

export const metadata: Metadata = { title: "Mimris AI Workspace", robots: { index: false, follow: false } };
export default function Page() {
  return <SharedDocument slug="product-presentation" eyebrow="Product presentation" title="Mimris AI Workspace" description="How modeled knowledge becomes operational work, with people and AI working in shared context." />;
}
