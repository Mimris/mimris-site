export type AccessPlan = {
  name: string;
  label: string;
  description: string;
  accent: "green" | "coral" | "blue";
  items: readonly string[];
  href: string;
  cta: string;
};

/** Public capability catalog. Commercial values stay pending until checkout is approved. */
export const accessPlans = [
  { name: "Modelling", label: "Free, no account required", description: "Create and evolve structured models with local persistence.", accent: "green", items: ["Full modelling functionality", "Save and reopen locally", "Import and export models", "No required sign-in"], href: "/products/modelling", cta: "Explore Modelling" },
  { name: "Workspace Free", label: "Explore without a login", description: "Use the Workspace manually and keep temporary Universes in the browser.", accent: "coral", items: ["Manual Workspace use", "Temporary Universes", "One persistent Universe after signup", "Limited Mimris AI allowance"], href: "https://mimris-ai-workspace.vercel.app", cta: "Open Workspace" },
  { name: "Mimris Pro", label: "For ongoing account-backed work", description: "Save multiple Universes and use the broader AI options when the deployed plan is available.", accent: "blue", items: ["Multiple persistent Universes", "Ongoing or larger Mimris AI allowance", "My AI / BYO AI", "User-selected provider authorization"], href: "https://mimris-ai-workspace.vercel.app", cta: "Open Workspace" },
] as const satisfies readonly AccessPlan[];

export const workspaceUrl = "https://mimris-ai-workspace.vercel.app";
