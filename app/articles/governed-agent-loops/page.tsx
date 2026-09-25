import type { Metadata } from "next";
import Script from "next/script";
import Image from "next/image";
import Link from "next/link";
import { ArticleByline, ArticleLayout, AiDisclosure } from "@/app/_components/article-markdown";

const title = "When AI Agents Can Keep Working: Governed Loops for AKM Enterprise-Model-Based Execution";
const description =
  "What governed agent loops reveal about context, boundaries, verification, and human review in AKM enterprise-model-based work.";
const canonicalPath = "/articles/governed-agent-loops";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: canonicalPath },
  openGraph: {
    type: "article",
    title,
    description,
    publishedTime: "2026-09-24T00:00:00+02:00",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: title,
  description,
  datePublished: "2026-09-24",
  dateModified: "2026-09-24",
  author: { "@type": "Organization", name: "Mimris" },
  publisher: { "@type": "Organization", name: "Mimris" },
  mainEntityOfPage: `https://mimris-site.vercel.app${canonicalPath}`,
};

export default function GovernedAgentLoopsPage() {
  return (
    <>
      <ArticleLayout currentPath={canonicalPath}>
        <article className="longform-article">
          <header className="article-hero">
            <Link className="article-back" href="/articles">← All articles</Link>
            <p className="eyebrow">AI news commentary · AKM enterprise-model-driven work</p>
            <h1>{title}</h1>
            <p className="hero-lead">AI agents become more useful when they work inside a process that remains understandable, bounded, and reviewable.</p>
            <ArticleByline date="24 September 2026" />
            <div className="article-meta"><span>7 minute read</span></div>
          </header>

          <div className="article-body">
            <p className="article-deck">The next question for AI agents is not whether they can produce one useful output. It is whether they can keep working over time without losing context or crossing boundaries.</p>

            <h2>From one prompt to a continuing work loop</h2>
            <p>Atlassian’s announcement of governed agent loops for the AI-native software development lifecycle addresses that question at the level of the work system. The capabilities connect Jira work items, organizational knowledge, coding agents, standards, review, and measurement.</p>
            <p>The pattern is:</p>
            <div className="article-flow" aria-label="Governed agent loop"><span>Backlog item</span><i>→</i><span>Agent execution</span><i>→</i><span>Testing</span><i>→</i><span>Pull request</span><i>→</i><span>Human review</span></div>
            <p>This is different from asking an AI assistant to write code once. The agent is placed inside a continuing process with a defined starting point, relevant context, checks, and a reviewable result.</p>
            <figure className="article-figure"><Image src="/assets/governed-agent-loops-infographic.png" alt="Governed AI work loop from an AKM enterprise task through human approval and learning" width={2048} height={1152} sizes="(max-width: 1100px) 100vw, 1100px" priority /><figcaption>Governed work loops connect AKM enterprise tasks, context, execution, verification, human approval, and learning.</figcaption></figure>

            <h2>Context and boundaries shape the result</h2>
            <p>Atlassian describes Code Context built from repositories, architecture, documentation, and organizational knowledge. Agent Context Controls determine which agents can operate in a space and what they may see.</p>
            <p>These controls matter because technical capability does not guarantee operational reliability. Without context, an agent can misunderstand the architecture. Without boundaries, it can access information or systems it should not use. Without review, its changes can be difficult to trust. Without measurement, an organization cannot tell whether more agent activity is producing better outcomes.</p>

            <h2>What a governed loop needs</h2>
            <ol>
              <li>Structured work that can be assigned.</li>
              <li>Context that explains the work and its environment.</li>
              <li>An agent that can perform a bounded task.</li>
              <li>Controls and standards that constrain execution.</li>
              <li>Human review and measurement of the result.</li>
            </ol>

            <h2>How this connects to Mimris</h2>
            <p>Mimris starts with an AKM enterprise model of a domain and its work. Its intended refinement path is:</p>
            <div className="article-flow" aria-label="Mimris refinement path"><span>Domain</span><i>→</i><span>Processes</span><i>→</i><span>Roles</span><i>→</i><span>Tasks</span><i>→</i><span>Workspace execution</span></div>
            <p>The purpose is not only to document a process. The AKM enterprise model should help generate an operational workspace in which people and AI can work with tasks, information, responsibilities, and expected outcomes.</p>
            <p>A possible future Mimris loop is:</p>
            <div className="article-flow" aria-label="Possible Mimris governed loop"><span>AKM enterprise task</span><i>→</i><span>Readiness check</span><i>→</i><span>ContextPack</span><i>→</i><span>AI-assisted execution</span><i>→</i><span>Verification</span><i>→</i><span>Human approval</span></div>
            <p>Mimris already provides a Workbench for manual and AI-assisted task production grounded in AKM enterprise-modelled process and activity semantics. A general autonomous loop that continuously delegates work to external agents is a future integration direction, not a current Mimris capability.</p>

            <h2>Attach autonomy to the task</h2>
            <p>The AKM enterprise model should be able to declare when a task is ready, what context it requires, what actions are permitted, what output is expected, and where human review is required. The AI model is one component of an agent that participates in the task, alongside a person, a system, or a combination of them.</p>
            <blockquote>The strongest agent is not the one that works alone. It is the one that works inside a well-modeled loop.</blockquote>
            <p>The broader lesson is that autonomy should be attached to a well-defined task. A useful enterprise agent needs an AI model, a prompt, and a tool, plus the AKM enterprise model of the work, relevant context, explicit boundaries, a defined outcome, and a reviewable record of what happened.</p>

            <p className="article-source"><strong>Primary source:</strong> <a href="https://www.atlassian.com/blog/jira/governed-agent-loops">Atlassian — We’re bringing governed agent loops to the AI-Native SDLC</a></p>
            <AiDisclosure />
          </div>
        </article>
      </ArticleLayout>
      <Script id="governed-agent-loops-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
    </>
  );
}
