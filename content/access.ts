export type AccessPlan = {
  name: string;
  label: string;
  description: string;
  accent: "green" | "coral" | "blue";
  items: readonly string[];
  href: string;
  cta: string;
  price?: { amount: number; currency: "EUR"; interval: "month"; label: string };
  aiCreditsPerMonth?: number;
};

/** Public capability catalog. Commercial values stay pending until checkout is approved. */
export const accessPlans = [
  { name: "Modelling", label: "Free, no account required", description: "Create and evolve structured models with local persistence.", accent: "green", items: ["Full modelling functionality", "Save and reopen locally", "Import and export models", "No required sign-in"], href: "/products/modelling", cta: "Explore Modelling" },
  { name: "Workspace Free", label: "Explore without a login", description: "Use the Workspace manually and keep temporary Universes in the browser.", accent: "coral", items: ["Manual Workspace use", "Temporary Universes", "One persistent Universe after signup", "25 Mimris AI credits/month"], href: "https://mimris-ai-workspace.vercel.app", cta: "Open Workspace", aiCreditsPerMonth: 25 },
  { name: "Mimris Pro", label: "€9/month early-bird offer", description: "Save up to 10 persistent Universes and use the broader AI options while the early-bird offer is available.", accent: "blue", items: ["Up to 10 persistent Universes", "500 Mimris AI credits/month", "My AI / BYO AI", "User-selected provider authorization"], href: "https://mimris-ai-workspace.vercel.app", cta: "Open Workspace", aiCreditsPerMonth: 500, price: { amount: 9, currency: "EUR", interval: "month", label: "€9/month early bird" } },
] as const satisfies readonly AccessPlan[];

export const workspaceUrl = "https://mimris-ai-workspace.vercel.app";

export const earlyBirdOffer = {
  priceLabel: "€9/month",
  subscriberLimit: 100,
  durationMonths: 6,
  grandfatheredWhileContinuouslySubscribed: true,
  creditReset: "monthly",
  creditsRollOver: false,
} as const;
