import Link from "next/link";
import type { ReactNode } from "react";
import { modellingVideoChannel } from "@/content/site";
import { MimrisMark } from "./mimris-mark";
import { SiteNavigation } from "./site-navigation";

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="Mimris ecosystem home">
        <span className="brand-mark" aria-hidden="true">
          <MimrisMark />
        </span>
        <span>Mimris</span>
      </Link>
      <SiteNavigation />
      <a className="header-cta" href="https://mimris-ai-workspace.vercel.app" target="_blank" rel="noreferrer" data-analytics-event="product_demo_clicked" data-analytics-destination="ai-workspace">
        Open Workspace ↗
      </a>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div>
        <Link className="brand" href="/">
          <span className="brand-mark" aria-hidden="true">
            <MimrisMark />
          </span>
          <span>Mimris</span>
        </Link>
        <p>Model the world. Work with it.</p>
      </div>
      <div className="footer-links">
        <Link href="/products/modelling">Mimris Modelling</Link>
        <Link href="/products/ai-workspace">Mimris AI Workspace</Link>
        <Link href="/articles">Articles</Link>
        <a href="/press.html">Press kit</a>
        <a href="/metis-legacy.html">From Metis to Mimris</a>
        <a href={modellingVideoChannel.url} data-analytics-event="youtube_clicked" data-analytics-destination="modelling-channel">Modelling videos ↗</a>
        <a href="https://github.com/Mimris/mimris" data-analytics-event="source_clicked" data-analytics-destination="mimris-github">GitHub</a>
      </div>
    </footer>
  );
}

type PageHeroProps = {
  eyebrow: string;
  title: string;
  lead: string;
  children?: ReactNode;
};

export function PageHero({ eyebrow, title, lead, children }: PageHeroProps) {
  return (
    <section className="page-hero">
      <div className="hero-orbit" aria-hidden="true" />
      <div className="page-hero-copy">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="hero-lead">{lead}</p>
        {children}
      </div>
    </section>
  );
}

export function ArrowLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link className="arrow-link" href={href}>
      {children} <span aria-hidden="true">↗</span>
    </Link>
  );
}
