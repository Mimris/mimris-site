"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const productLinks = [
  { href: "/products/modelling", label: "Mimris Modelling", description: "Create and evolve structured models." },
  { href: "/products/ai-workspace", label: "Mimris AI Workspace", description: "Use models and context to perform work." },
  { href: "/active-knowledge-modelling", label: "Active Knowledge Modelling", description: "Explore the approach behind the ecosystem." },
];

const primaryLinks = [
  { href: "/examples/coffee-shop", label: "Demo" },
  { href: "/articles", label: "Articles" },
  { href: "/about", label: "About" },
];

export function SiteNavigation() {
  const [productOpen, setProductOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const productRootRef = useRef<HTMLDivElement>(null);
  const productTriggerRef = useRef<HTMLButtonElement>(null);
  const mobileRootRef = useRef<HTMLDivElement>(null);
  const mobileTriggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    function handlePointerDown(event: PointerEvent) {
      const target = event.target as Node;
      if (productOpen && !productRootRef.current?.contains(target)) setProductOpen(false);
      if (mobileOpen && !mobileRootRef.current?.contains(target)) setMobileOpen(false);
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key !== "Escape") return;
      if (productOpen) {
        setProductOpen(false);
        productTriggerRef.current?.focus();
      }
      if (mobileOpen) {
        setMobileOpen(false);
        mobileTriggerRef.current?.focus();
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileOpen, productOpen]);

  function closeMenus() {
    setProductOpen(false);
    setMobileOpen(false);
  }

  return (
    <>
      <nav className="site-nav" aria-label="Primary navigation">
        <div className="product-menu" ref={productRootRef}>
          <button
            aria-controls="product-menu-panel"
            aria-expanded={productOpen}
            className="product-menu-trigger"
            onClick={() => setProductOpen((open) => !open)}
            ref={productTriggerRef}
            type="button"
          >
            Product <span aria-hidden="true">⌄</span>
          </button>
          {productOpen ? (
            <div className="product-menu-panel" id="product-menu-panel">
              <p>Products &amp; approach</p>
              {productLinks.map((item) => (
                <Link href={item.href} key={item.href} onClick={closeMenus}>
                  <strong>{item.label}</strong>
                  <span>{item.description}</span>
                </Link>
              ))}
            </div>
          ) : null}
        </div>
        {primaryLinks.map((item) => (
          <Link href={item.href} key={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="mobile-menu" ref={mobileRootRef}>
        <button
          aria-controls="mobile-menu-panel"
          aria-expanded={mobileOpen}
          className="mobile-menu-trigger"
          onClick={() => setMobileOpen((open) => !open)}
          ref={mobileTriggerRef}
          type="button"
        >
          Menu <span aria-hidden="true">{mobileOpen ? "▴" : "▾"}</span>
        </button>
        {mobileOpen ? (
          <div className="mobile-menu-panel" id="mobile-menu-panel">
            <nav aria-label="Mobile primary navigation">
              <p>Products &amp; approach</p>
              {productLinks.map((item) => (
                <Link href={item.href} key={item.href} onClick={closeMenus}>
                  {item.label}
                </Link>
              ))}
              <div className="mobile-menu-divider" />
              {primaryLinks.map((item) => (
                <Link href={item.href} key={item.href} onClick={closeMenus}>
                  {item.label}
                </Link>
              ))}
            </nav>
            <a
              className="mobile-menu-cta"
              data-analytics-destination="ai-workspace"
              data-analytics-event="product_demo_clicked"
              href="https://mimris-ai-workspace.vercel.app"
              onClick={closeMenus}
              rel="noreferrer"
              target="_blank"
            >
              Open Workspace ↗
            </a>
          </div>
        ) : null}
      </div>
    </>
  );
}
