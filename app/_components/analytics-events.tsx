"use client";

import { useEffect } from "react";
import { track } from "@vercel/analytics";

const eventNames = new Set([
  "article_opened",
  "proof_started",
  "product_demo_clicked",
  "source_clicked",
  "youtube_clicked",
]);

export function AnalyticsEvents() {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;
      const link = target.closest<HTMLAnchorElement>("a[data-analytics-event]");
      const eventName = link?.dataset.analyticsEvent;
      if (!eventName || !eventNames.has(eventName)) return;

      track(eventName, {
        destination: link.dataset.analyticsDestination ?? link.pathname,
      });
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}
