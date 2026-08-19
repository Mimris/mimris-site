export const coreDefinitions = {
  mimris:
    "An approach and product ecosystem for turning domain knowledge into explicit models that people, software, and AI can understand and use.",
  akm:
    "The practice of creating connected, evolvable models that remain usable as context for exploration, decisions, applications, AI, and work.",
  universe:
    "A bounded, coherent representation of a domain or world that humans and AI can work within.",
} as const;

export const products = [
  {
    name: "Mimris Modelling",
    tagline: "Understand and model complex worlds.",
    description:
      "Create, structure, visualize, inspect, and evolve model objects, relationships, diagrams, views, and semantics.",
    href: "/products/modelling",
    accent: "green",
  },
  {
    name: "Mimris AI Workspace",
    tagline: "Put structured models to work.",
    description:
      "Use models with AI, documents, processes, tasks, decisions, and deliverables to design and perform real work.",
    href: "/products/ai-workspace",
    accent: "coral",
  },
] as const;

export const modellingVideoChannel = {
  name: "Snorre's Model Bureau",
  url: "https://www.youtube.com/@SnorresModelBureau",
} as const;
