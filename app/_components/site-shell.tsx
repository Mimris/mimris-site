import Link from "next/link";
import type { ReactNode } from "react";
import { modellingVideoChannel } from "@/content/site";

const navigation = [
  { href: "/why-mimris", label: "Why Mimris" },
  { href: "/active-knowledge-modelling", label: "Active Knowledge Modelling" },
  { href: "/products", label: "Products" },
  { href: "/examples/coffee-shop", label: "Coffee Shop" },
  { href: "/articles", label: "Articles" },
  { href: "/about", label: "About" },
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="Mimris home">
        <span className="brand-mark" aria-hidden="true">
          M
        </span>
        <span>Mimris</span>
      </Link>
      <nav className="site-nav" aria-label="Primary navigation">
        {navigation.map((item) => (
          <Link href={item.href} key={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>
      <a className="header-cta" href="https://mimris-ai-workspace.vercel.app">
        Open workspace
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
            M
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
        <a href={modellingVideoChannel.url}>Modelling videos ↗</a>
        <a href="https://github.com/Mimris/mimris">GitHub</a>
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
