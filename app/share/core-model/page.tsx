import type { Metadata } from "next";
import { SharedDocument } from "../document";

export const metadata: Metadata = { title: "Mimris Core Model", robots: { index: false, follow: false } };
export default function Page() {
  return <SharedDocument slug="core-model" eyebrow="Conceptual model specification" title="Mimris Core Model" description="The concepts and model structure behind Mimris AI Workspace." />;
}
