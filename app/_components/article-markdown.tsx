import { readFileSync } from "node:fs";
import { join } from "node:path";
import Link from "next/link";

const articleGroups = [
  { label: "Active Knowledge Modelling", links: [
    { href: "/articles/ai-defines-correctness", label: "AI Can Generate the Code—But Who Defines What Is Correct?", date: "25 September 2026", dateTime: "2026-09-25" },
    { href: "/articles/ai-assisted-task-execution", label: "AI-Assisted Task Execution", date: "27 August 2026", dateTime: "2026-08-27" },
    { href: "/articles/mimris-ecosystem", label: "What Is Mimris?", date: "23 August 2026", dateTime: "2026-08-23" },
    { href: "/articles/active-knowledge-modelling", label: "What Is Active Knowledge Modelling?", date: "20 August 2026", dateTime: "2026-08-20" },
    { href: "/articles/modelling-and-workspace", label: "Mimris Modelling and Mimris AI Workspace", date: "20 August 2026", dateTime: "2026-08-20" },
    { href: "/articles/why-ai-needs-models", label: "Why AI Needs Models", date: "19 August 2026", dateTime: "2026-08-19" },
  ] },
  { label: "AI News and Commentary", links: [
    { href: "/articles/process-context-ai-advantage", label: "Why Process Context Is Becoming the Enterprise AI Advantage", date: "2 October 2026", dateTime: "2026-10-02" },
    { href: "/articles/governed-agent-loops", label: "Governed Agent Loops", date: "24 September 2026", dateTime: "2026-09-24" },
    { href: "/articles/from-biological-viability-to-artificial-consciousness", label: "Artificial Consciousness: A Viability-Based Hypothesis", date: "20 August 2026", dateTime: "2026-08-20" },
    { href: "/articles/can-ai-have-consciousness-infographic", label: "Infographic: Can AI Have Consciousness?", date: "20 August 2026", dateTime: "2026-08-20" },
  ] },
  { label: "Examples and worlds", links: [
    { href: "/articles/coffee-shop-universe", label: "The Coffee Shop World", date: "20 August 2026", dateTime: "2026-08-20" },
  ] },
].map((group) => ({ ...group, links: group.links.sort((a, b) => b.dateTime.localeCompare(a.dateTime) || a.label.localeCompare(b.label)) }));

function renderArticleGroups(currentPath?: string) {
  return articleGroups.map((group) => <div className="article-directory-group" key={group.label}><p>{group.label}</p><nav>{group.links.map(({ href, label, date, dateTime }) => <Link key={href} href={href} aria-current={href === currentPath ? "page" : undefined} data-analytics-event="article_opened" data-analytics-destination={href}><span>{label}</span><time dateTime={dateTime}>{date}</time></Link>)}</nav></div>);
}

function escapeHtml(value: string) {
  return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

function inlineMarkdown(value: string) {
  let html = escapeHtml(value);
  html = html.replace(/\[([^\]]+)\]\((https?:[^)]+)\)/g, '<a href="$2">$1</a>');
  html = html.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  return html;
}

export function ArticleMarkdown({ file }: { file: string }) {
  const source = readFileSync(join(process.cwd(), "content/articles", file), "utf8");
  const lines = source.split(/\r?\n/);
  const blocks: string[] = [];
  let paragraph: string[] = [];
  let code: string[] | null = null;
  let codeLanguage = "";
  let diagramIndex = 0;
  let tableRows: string[][] = [];
  let listItems: string[] = [];

  const renderMermaid = () => {
    diagramIndex += 1;
    return `<pre class="mermaid mermaid-diagram-${diagramIndex}">${escapeHtml(code?.join("\n") ?? "")}</pre>`;
  };

  const flushParagraph = () => {
    if (paragraph.length) {
      blocks.push(`<p>${inlineMarkdown(paragraph.join(" "))}</p>`);
      paragraph = [];
    }
  };

  const flushList = () => {
    if (listItems.length) {
      blocks.push(`<ul>${listItems.map((item) => `<li>${inlineMarkdown(item)}</li>`).join("")}</ul>`);
      listItems = [];
    }
  };

  const flushTable = () => {
    if (tableRows.length) {
      const rows = tableRows.filter((row) => !row.every((cell) => /^[-: ]+$/.test(cell)));
      const [header, ...body] = rows;
      blocks.push(`<div class="article-table-wrap"><table><thead><tr>${header.map((cell) => `<th>${inlineMarkdown(cell)}</th>`).join("")}</tr></thead><tbody>${body.map((row) => `<tr>${row.map((cell) => `<td>${inlineMarkdown(cell)}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`);
      tableRows = [];
    }
  };

  for (const line of lines) {
    if (line.startsWith("> Draft canonical")) continue;
    if (line.startsWith("```")) {
      if (code) {
        const codeSource = code.join("\n");
        blocks.push(codeLanguage === "mermaid" ? renderMermaid() : `<pre><code>${escapeHtml(codeSource)}</code></pre>`);
        code = null;
        codeLanguage = "";
      } else {
        flushParagraph();
        code = [];
        codeLanguage = line.slice(3).trim();
      }
      continue;
    }
    if (code) {
      code.push(line);
      continue;
    }
    if (!line.trim()) {
      flushParagraph();
      flushList();
      flushTable();
      continue;
    }
    const image = line.match(/^!\[([^\]]*)\]\((\/assets\/[^)\s]+)\)$/);
    if (image) {
      flushParagraph();
      flushList();
      flushTable();
      blocks.push(`<figure class="article-figure"><img src="${image[2]}" alt="${escapeHtml(image[1])}" loading="lazy" /></figure>`);
      continue;
    }
    if (line.startsWith("# ")) {
      flushParagraph();
      flushList();
      flushTable();
      continue;
    }
    if (line.startsWith("## ")) {
      flushParagraph();
      flushList();
      flushTable();
      blocks.push(`<h2>${inlineMarkdown(line.slice(3))}</h2>`);
      continue;
    }
    if (line.startsWith("### ")) {
      flushParagraph();
      flushList();
      flushTable();
      blocks.push(`<h3>${inlineMarkdown(line.slice(4))}</h3>`);
      continue;
    }
    if (line.trim() === "---") {
      flushParagraph();
      flushList();
      flushTable();
      continue;
    }
    if (line.trim().startsWith("|")) {
      flushParagraph();
      tableRows.push(line.trim().replace(/^\||\|$/g, "").split("|").map((cell) => cell.trim()));
      continue;
    }
    if (line.startsWith("- ")) {
      flushParagraph();
      listItems.push(line.slice(2));
      continue;
    }
    if (/^\d+\. /.test(line)) {
      flushParagraph();
      flushList();
      blocks.push(`<p class="article-list-item">${inlineMarkdown(line.replace(/^\d+\. /, ""))}</p>`);
      continue;
    }
    paragraph.push(line);
  }
  flushParagraph();
  flushList();
  flushTable();

  return <div className="article-body" dangerouslySetInnerHTML={{ __html: blocks.join("\n") }} />;
}

export function ArticleIndex({ currentPath }: { currentPath: string }) {
  const groups = renderArticleGroups(currentPath);

  return (
    <>
      <aside className="article-index-sidebar" aria-label="All articles">
        <p className="eyebrow">All articles</p>
        {groups}
      </aside>
      <details className="mobile-article-index">
        <summary>All articles</summary>
        <div aria-label="All articles">{groups}</div>
      </details>
    </>
  );
}

export function ArticleDirectory() {
  const groups = renderArticleGroups();

  return (
    <>
      <section className="article-directory" aria-label="Article categories">{groups}</section>
      <details className="mobile-article-directory">
        <summary>All articles</summary>
        <div aria-label="Article categories">{groups}</div>
      </details>
    </>
  );
}

export function ArticleByline({ date = "20 August 2026" }: { date?: string }) {
  return <p className="article-byline">By Snorre Fossland · {date} <span className="article-ai-marker">· AI-assisted writing</span></p>;
}

export function AiDisclosure({ children }: { children?: React.ReactNode }) {
  return <aside className="article-disclosure"><strong>AI-assisted writing</strong><p>{children ?? "This article was developed with assistance from an AI system. The final arguments, examples, and editorial decisions are the author’s responsibility."}</p></aside>;
}

export function ArticleLayout({ currentPath, className = "", children }: { currentPath: string; className?: string; children: React.ReactNode }) {
  return <div className={`article-page-layout ${className}`.trim()}><ArticleIndex currentPath={currentPath} /><div className="article-page-content">{children}</div></div>;
}
