"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function MermaidBootstrap() {
  const pathname = usePathname();

  useEffect(() => {
    const render = () => {
      const mermaid = (window as typeof window & { mermaid?: { initialize: (options: object) => void; run: (options: object) => Promise<void> } }).mermaid;
      if (!mermaid) return;
      mermaid.initialize({ startOnLoad: false, securityLevel: "strict", theme: "base", themeVariables: { primaryColor: "#eef5ee", primaryTextColor: "#17302a", primaryBorderColor: "#176b50", lineColor: "#176b50", fontFamily: "Arial, sans-serif", fontSize: "20px", nodePadding: "14" } });
      const nodes = Array.from(document.querySelectorAll<HTMLElement>(".mermaid:not([data-mermaid-rendered])"));
      if (!nodes.length) return;
      nodes.forEach((node) => node.dataset.mermaidRendered = "true");
      void mermaid.run({ nodes });
    };
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/mermaid@11/dist/mermaid.min.js";
    script.async = true;
    script.addEventListener("load", render);
    document.head.appendChild(script);
    const observer = new MutationObserver(render);
    observer.observe(document.body, { childList: true, subtree: true });
    const routeTimer = window.setTimeout(render, 150);
    return () => {
      window.clearTimeout(routeTimer);
      observer.disconnect();
      script.remove();
    };
  }, [pathname]);

  return null;
}
