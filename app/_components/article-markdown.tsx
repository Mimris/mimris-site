import { readFileSync } from "node:fs";
import { join } from "node:path";

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

  const flushParagraph = () => {
    if (paragraph.length) {
      blocks.push(`<p>${inlineMarkdown(paragraph.join(" "))}</p>`);
      paragraph = [];
    }
  };

  for (const line of lines) {
    if (line.startsWith("> Draft canonical")) continue;
    if (line.startsWith("```")) {
      if (code) {
        blocks.push(`<pre><code>${escapeHtml(code.join("\n"))}</code></pre>`);
        code = null;
      } else {
        flushParagraph();
        code = [];
      }
      continue;
    }
    if (code) {
      code.push(line);
      continue;
    }
    if (!line.trim()) {
      flushParagraph();
      continue;
    }
    if (line.startsWith("# ")) {
      flushParagraph();
      continue;
    }
    if (line.startsWith("## ")) {
      flushParagraph();
      blocks.push(`<h2>${inlineMarkdown(line.slice(3))}</h2>`);
      continue;
    }
    if (/^\d+\. /.test(line)) {
      flushParagraph();
      blocks.push(`<p class="article-list-item">${inlineMarkdown(line.replace(/^\d+\. /, ""))}</p>`);
      continue;
    }
    paragraph.push(line);
  }
  flushParagraph();

  return <div className="article-body" dangerouslySetInnerHTML={{ __html: blocks.join("\n") }} />;
}
