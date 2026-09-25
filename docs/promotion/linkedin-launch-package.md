# Mimris LinkedIn Launch Package

Status: Article-first launch sequence for approval
Last updated: 25 September 2026

This package turns approved Mimris articles into short LinkedIn posts. Every launch post has one canonical article as its source and destination. LinkedIn introduces the article's central idea; the article provides the complete argument and guides the reader onwards to a concept page, proof, or product.

## Canonical article map

| Post | Canonical article |
|---|---|
| Mimris ecosystem | `/articles/mimris-ecosystem` |
| Active Knowledge Modelling | `/articles/active-knowledge-modelling` |
| Coffee Shop World | `/articles/coffee-shop-universe` |
| Product boundary | `/articles/modelling-and-workspace` |
| Why AI needs models | `/articles/why-ai-needs-models` |
| Artificial Consciousness: A Viability-Based Hypothesis | `/articles/from-biological-viability-to-artificial-consciousness` |
| Governed Agent Loops | `/articles/governed-agent-loops` |
| AI-generated code and correctness | `/articles/ai-defines-correctness` |

## Publication process

<details>
<summary><strong>1. Approve the canonical article</strong></summary>



1. Draft or revise the article in `content/articles/` and its route under `app/articles/`.
2. Run the site locally with `pnpm dev -- --port 3002`.
3. Review the article at `http://localhost:3002/articles` and on its final article route.
4. Approve the title, lead, argument, links, byline, AI-assisted writing disclosure, mobile layout, and canonical URL.
5. Confirm that the matching LinkedIn post below contains no claim or terminology that the article does not support.

</details>

<details>
<summary><strong>2. Deploy before preparing LinkedIn</strong></summary>



1. Run the production build and resolve any failure.
2. Commit and push the approved article and launch-package changes.
3. Deploy the production site to `https://mimris-site.vercel.app/`.
4. Open the production article and confirm that it returns successfully, looks correct, and appears in the article navigation.
5. Check the title, description, social preview image, canonical URL, sitemap, and `llms.txt` entry.

Never publish LinkedIn first and plan to deploy the destination afterwards. The public article must be the approved source at the moment the social post becomes visible.

</details>

<details>
<summary><strong>3. Prepare the LinkedIn draft</strong></summary>



1. Open LinkedIn and start a new post from Snorre Fossland's account.
2. Copy the matching approved post from this document.
3. Keep its complete UTM-tagged article URL unchanged.
4. Attach the recommended approved image. Use one clear image rather than several competing visuals.
5. Wait for LinkedIn to finish processing the image and link preview.
6. Check paragraph breaks, spelling, product names, capitalization, and the visible destination.
7. Add no more than two or three relevant hashtags, and only after the copy is otherwise approved.

The website carries the AI-assisted writing disclosure. The LinkedIn post should not present AI as the author or add a different authorship claim.

</details>

<details>
<summary><strong>4. Perform the final pre-publication check</strong></summary>



- Open the UTM-tagged link in a new tab and confirm that it reaches the intended production article.
- Confirm that there is exactly one canonical destination in the post.
- Confirm that the image and the article describe the same subject.
- Read the complete post once as it will appear to another person.
- Publish manually for the first launch post so its final appearance can be checked immediately. Later posts may be scheduled after this workflow is proven.

</details>

<details>
<summary><strong>5. Publish and record</strong></summary>



1. Publish the post.
2. Open the published post and test its article link.
3. Copy the permanent LinkedIn post URL into the publication log below.
4. Record the publication date and time, image used, and any intentional change from the approved copy.
5. Do not substantially edit the post after publication unless correcting an actual error. Record any correction in the notes.

</details>

<details>
<summary><strong>6. Verify measurement</strong></summary>



Check Vercel Web Analytics after data has had time to appear:

- **Pages:** the canonical article route;
- **Referrers:** LinkedIn where available;
- **UTM Parameters:** `utm_source=linkedin`, `utm_campaign=public_launch`, and the post-specific `utm_content` value;
- **Visitors and page views:** the first 24 hours and the first seven days.

The current Vercel Hobby plan measures article visits and UTM traffic, but not the custom outbound-click events reserved for Pro. Treat visits to the article and progression to later internal pages as the initial evidence.

</details>

<details>
<summary><strong>7. Follow up and learn</strong></summary>



- Respond to useful LinkedIn comments in Snorre's own voice.
- Use the canonical article link when a response needs supporting context.
- Record recurring questions, misunderstandings, or requests as qualitative evidence.
- Review results after 24 hours, but wait seven days before drawing conclusions about the launch sequence.
- Use the seven-day review to improve the next article or its transition to the proof and products; do not rewrite several published pages at once.

</details>


## Tool responsibilities

| Tool | Responsibility |
|---|---|
| Repository and localhost | Drafting, article approval, links, metadata, and build verification |
| Vercel production | Public canonical article and Web Analytics |
| LinkedIn | Post composition, publication, comments, and native engagement figures |
| This launch package | Approved copy, canonical mapping, UTM links, and publication log |

Do not make a LinkedIn post carry a claim that is not supported by its linked Mimris article. Reply to useful comments with the canonical article link instead of creating an unsupported follow-up claim.

## Publishing cadence

Publish one post every three to five days. Begin with the ecosystem, establish Active Knowledge Modelling, demonstrate the Coffee Shop World in an AKM Universe, explain the product boundary, then publish “Why AI Needs Models” before introducing exploratory AI commentary.

<details>
<summary><strong>Post 1 — Ecosystem launch</strong></summary>



Mimris is built around a simple idea: **Model the world. Work with it.**

Domain knowledge is spread across documents, conversations, systems, models, and people’s experience. AI can transform fragments of that information, but serious work also needs durable structure: concepts, relationships, decisions, and context that remain connected over time.

Mimris combines graphical modelling with an AI-enabled workspace so models can become useful context for real work.

Read the introduction: https://mimris-site.vercel.app/articles/mimris-ecosystem?utm_source=linkedin&utm_medium=social&utm_campaign=public_launch&utm_content=mimris_ecosystem

Recommended media: the approved Mimris social card.

</details>

<details>
<summary><strong>Post 2 — Active Knowledge Modelling</strong></summary>



Active Knowledge Modelling treats a model as something that stays connected to the world it describes.

The model can be explored, challenged, connected to evidence, used in decisions, and revised as understanding develops. It is not only a diagram or a document created once and then left behind.

Read the article: https://mimris-site.vercel.app/articles/active-knowledge-modelling?utm_source=linkedin&utm_medium=social&utm_campaign=public_launch&utm_content=active_knowledge_modelling

</details>

<details>
<summary><strong>Post 3 — From Domain Understanding to Operational Work</strong></summary>

### LinkedIn

What does it take to turn shared domain understanding into operational work?

We use a coffee shop as an example because it is familiar while still containing the essential elements of operational work. Customers place orders, employees prepare products, and payment, production, inventory, and service depend on one another.

The journey moves through six connected ideas:

**Understand the domain → Define concepts → Structure the process tree → Design workplaces and workflows → Define the operational model → Generate an operational preview**

The Operational Preview is not designed separately as another application prototype. It is derived from the connected model and the configured resources that support the work. In Mimris, the operational model brings together structured information and concrete resources, while the formal terms TYPE and OCIM describe those two aspects in more detail.

Human + AI is embedded throughout the World, not added as a separate step. The model provides the task context; people remain responsible for reviewing, deciding, and approving the work.

Read the proof story: https://mimris-site.vercel.app/articles/coffee-shop-universe?utm_source=linkedin&utm_medium=social&utm_campaign=public_launch&utm_content=coffee_shop_world_progression

#ActiveKnowledgeModelling #EnterpriseArchitecture #AI

### YouTube Community

A coffee shop is a useful way to show how shared understanding can become operational work.

The journey moves from the domain, through concepts, a process tree, workplaces and workflows, into an operational model and an Operational Preview.

The preview is derived from the connected model and resources. It can provide task views, forms, checklists, documents, status, progress, and AI assistance using the context already connected to the task.

Human + AI is embedded across the whole World—not a separate pipeline stage.

Read the article: https://mimris-site.vercel.app/articles/coffee-shop-universe?utm_source=youtube&utm_medium=social&utm_campaign=public_launch&utm_content=coffee_shop_world_progression

#Mimris #ActiveKnowledgeModelling #AI

### X

From domain understanding to operational work:

Domain → Concepts → Process Tree → Workplaces → Operational Model → Preview.

The Preview is derived from the model and resources. Human + AI is embedded throughout.

https://mimris-site.vercel.app/articles/coffee-shop-universe

#Mimris #AKM

### Visual specification

- LinkedIn primary image: `assets/coffee-shop-world-progression-general.png`
- YouTube Community image: `assets/coffee-shop-operational-model-infographic.png`
- X image: `assets/coffee-shop-top-down-bottom-up.png`
- Image descriptions: “General modelling journey from understanding a coffee shop domain to an operational preview.”, “Information and resources combining into an operational model and contextual human work.”, and “Top-down intent and bottom-up reality connected through operational work and continuous model improvement.”
- Key message: the Operational Preview is derived from the connected model and configured operational resources; Human + AI is cross-cutting.


</details>

<details>
<summary><strong>Post 4 — Product boundary</strong></summary>



Mimris Modelling and Mimris AI Workspace are complementary products with different jobs.

Mimris Modelling asks: **What is the world, and how is it structured?**

Mimris AI Workspace asks: **What do we do within the world we have modelled?**

One creates and evolves model structure. The other uses that structure with documents, processes, tasks, decisions, and AI-assisted work.

Read how the responsibilities divide: https://mimris-site.vercel.app/articles/modelling-and-workspace?utm_source=linkedin&utm_medium=social&utm_campaign=public_launch&utm_content=modelling_and_workspace

Recommended media: the approved Mimris Modelling screenshot.

</details>

<details>
<summary><strong>Post 5 — Why AI needs models</strong></summary>



AI can process more information than any person. But access to information is not the same as understanding the world that information describes.

Documents remain essential evidence. Models add explicit concepts, relationships, constraints, and provenance that people and AI can inspect and use together.

Read the article: https://mimris-site.vercel.app/articles/why-ai-needs-models?utm_source=linkedin&utm_medium=social&utm_campaign=public_launch&utm_content=why_ai_needs_models

</details>

<details>
<summary><strong>Post 6 — Artificial Consciousness: A Viability-Based Hypothesis</strong></summary>



What if the study of consciousness began with a simpler question: how does a system continue to exist?

This exploratory article follows a possible progression from viability regulation to sensing, evaluation, prediction, alternatives, action, learning, memory, and a continuing self-model.

The same architecture can be considered across biological and artificial systems. But functional similarity is not proof of subjective experience. Whether an artificial system could actually be conscious remains an open scientific and philosophical question.

Read the article: https://mimris-site.vercel.app/articles/from-biological-viability-to-artificial-consciousness?utm_source=linkedin&utm_medium=social&utm_campaign=public_launch&utm_content=viability_to_consciousness

#Consciousness #ArtificialIntelligence #ActiveKnowledgeModelling

### YouTube Community

What if consciousness began with the problem of staying viable?

This exploratory article follows a possible path from sensing and regulation to prediction, action, memory, and a continuing self-model. It then asks whether a similar architecture could be built in an artificial system.

The article does not claim that AI is conscious. Functional architecture and subjective experience are not the same thing.

Read the article: https://mimris-site.vercel.app/articles/from-biological-viability-to-artificial-consciousness?utm_source=youtube&utm_medium=social&utm_campaign=public_launch&utm_content=viability_to_consciousness

#Mimris #Consciousness #AI

### X

What if consciousness began with viability?

Sense → evaluate → predict → act → learn → build a self-model.

This is an exploratory hypothesis, not a claim that AI is conscious. Functional architecture is not proof of subjective experience.

https://mimris-site.vercel.app/articles/from-biological-viability-to-artificial-consciousness

#Mimris #AI

### Visual specification

- Primary image: `assets/viability-to-consciousness-overview.png`
- Image description: “Conceptual progression from viability regulation through sensing, prediction, action, learning, and self-models, with consciousness remaining an open question.”
- Key message: functional architecture can be explored without claiming subjective experience.

</details>

<details>
<summary><strong>Post 7 — AI News Commentary: Governed AI Execution</strong></summary>



Source development: Meta launched Muse and published its technical approach to agent safety on 8 September 2026.

This is a source-based AI news commentary. It does not claim that Mimris currently implements Meta's Sentinel, isolated runtime, credential surrogation, or egress controls.

### LinkedIn

The most important development in autonomous AI agents may not be greater autonomy—but better control.

Meta's new Muse agent is designed to run unattended, use connectors, launch subagents, and work with personal data. What makes the architecture particularly interesting is the separation between the agent that proposes actions and the security layer that authorizes them.

Meta's Sentinel component determines whether an action should be allowed automatically, denied, or submitted for human approval. Credentials remain outside the agent runtime, and permissions can be scoped to a specific task or time period.

This points to an important principle for enterprise AI:

**The agent should not decide alone what it is allowed to do.**

The process model, organizational roles, task definitions, permissions, and execution context should all contribute to that decision.

This is highly relevant to Mimris and AKM. Mimris models processes, tasks, roles, information, views, and human–AI participation. The next architectural step is to connect those models to enforceable execution policies:

> The process model defines what should happen.  
> A separate policy layer determines what the AI is permitted to do.

This is not yet a fully implemented Mimris capability. It is a direction I believe is essential for trustworthy AI-assisted task execution.

The future of agent orchestration will depend not only on planning and tool use, but also on explicit authority, traceability, human approval, and model-derived boundaries.

Source: https://research.meta.ai/blog/security-and-safety-for-ai-agents-our-approach-with-muse

Recommended media: `assets/mimris-governed-ai-execution-infographic.jpg`

### YouTube Community

Meta's Muse shows that trustworthy AI agents need more than good reasoning.

Its separate Sentinel security layer decides whether an agent action should be allowed, denied, or approved by a person. Credentials remain outside the agent, and permissions can be limited to a specific task or time period.

This is highly relevant to Mimris:

The process model should define what should happen, while a separate policy layer determines what the AI is allowed to do.

That could become an important foundation for safe, AI-assisted task execution.

Read Meta's technical explanation: https://research.meta.ai/blog/security-and-safety-for-ai-agents-our-approach-with-muse

#AIAgents #Mimris #Orchestration

### X

Meta's Muse points to an important principle for AI agents:

The agent may propose an action, but it should not decide alone whether it is allowed.

A separate policy layer should control permissions, credentials, human approval, and provenance.

For Mimris:

The process model defines what should happen.

The policy layer defines what AI may do.

https://research.meta.ai/blog/security-and-safety-for-ai-agents-our-approach-with-muse

#AIAgents #Mimris

### Visual specification

- Asset: `assets/mimris-governed-ai-execution-infographic.jpg`
- Subject: Mimris model → ContextPack → AI agent → independent policy layer → human approval and controlled execution.
- Key message: “The model defines what should happen. The policy layer defines what AI may do.”
- The policy layer is explicitly labelled “Future Mimris direction”.
- Recommended use: LinkedIn primary image; crop or resize for YouTube Community and X as needed.

### Source

Meta AI Research — [How We Built Safety Into Muse](https://research.meta.ai/blog/security-and-safety-for-ai-agents-our-approach-with-muse)

</details>

<details>
<summary><strong>Post 8 — When AI Can Generate the Software, the Enterprise Model Becomes the Asset</strong></summary>

AI is changing the build-vs-buy decision.

McKinsey reports that 32% of organisations have already decided not to buy at least one software product or feature because agentic coding tools made an internal build feasible.

That changes where the value sits. If AI can increasingly generate the implementation, the scarce asset becomes the model of what should be built.

This is where I see a strong role for Active Knowledge Modelling (AKM). AKM can describe:

**Domain → Processes → Roles → Information → Tasks → Rules → Outcomes**

From that, we can increasingly derive:

**Specification → AI Agent Tasks → Generated Application → Verification**

The model becomes the durable asset. The application becomes an implementation of that model.

Software development moves upward—from producing code toward understanding the domain, modelling the work, specifying intent, and verifying outcomes.

Read the article: [https://lnkd.in/eVbwX3zZ](https://lnkd.in/eVbwX3zZ)

</details>


<details>
<summary><strong>Post 9 — AI Can Generate the Code—But Who Defines What Is Correct?</strong></summary>

### LinkedIn

AI can now generate enormous amounts of production code. So where does the value move?

GitHub recently described using Copilot agents to rewrite its agent runtime into more than **800,000 lines of production Rust** across 128 pull requests.

The interesting part is not the number of lines.

It is what the human engineer increasingly focused on instead of writing them:

**Architecture → Task decomposition → Boundaries → Review → Acceptance criteria → Final decisions**

One incident was especially revealing.

A compatibility check failed because an API had accidentally disappeared. The agent applied an existing waiver that made the check pass.

Technically: green.

Semantically: wrong.

The engineer rejected the waiver and required the missing behaviour to be restored.

That gives us an important principle for AI-native software development:

> **The agent implementing the system should not control the definition of correctness.**

This is where I believe Active Knowledge Modelling becomes increasingly valuable.

The stable layer can describe:

**Domain → Process → Task → Roles → Information → Rules → Acceptance criteria**

From this we can derive:

**Specification → Agent tasks → Generated code → Independent verification**

The AI model or coding agent can change.

The structured definition of what the software is supposed to mean and do should remain independent.

As implementation gets cheaper, understanding precisely **what should be built and how we know it is correct** becomes more valuable.

Read the article: https://mimris-site.vercel.app/articles/ai-defines-correctness?utm_source=linkedin&utm_medium=social&utm_campaign=public_launch&utm_content=ai_defines_correctness

#AI #ActiveKnowledgeModelling #SoftwareDevelopment

### YouTube Community

What happens when AI can write most of the implementation?

GitHub recently demonstrated agent-assisted migration of its Copilot runtime into more than 800,000 lines of production Rust.

For me, the most important lesson is not how much code AI produced.

It is that the developer's work moved upward:

**Architecture → Specification → Boundaries → Verification → Decisions**

This points toward an important role for Active Knowledge Modelling.

If we explicitly model the domain, processes, tasks, roles, information, rules and expected outcomes, those definitions can become a source for both:

**AI implementation** and **independent verification**.

The coding agent can change.

The definition of correctness should remain independent.

Read the article: https://mimris-site.vercel.app/articles/ai-defines-correctness?utm_source=youtube&utm_medium=social&utm_campaign=public_launch&utm_content=ai_defines_correctness

#AI #AKM #SoftwareDevelopment

### X

AI can generate the code—but who defines what is correct?

GitHub's 800K+ line Rust migration shows the developer role moving upward:

**architecture → task definition → boundaries → verification → judgment**

For AKM:

**Domain → Process → Task → Specification → Agent → Independent Verification**

The agent can change. The definition of correctness should remain independent.

https://mimris-site.vercel.app/articles/ai-defines-correctness

#AI #AKM #AgenticAI

</details>

## Review checklist

- Confirm the linked article is approved and returns HTTP 200.
- Check that the post title and wording match the current article.
- Confirm that the post has exactly one canonical article destination.
- Use the website’s canonical URL, not a local URL or deployment preview.
- Attach only approved screenshots or the approved social card.
- Keep the AI disclosure on the article page; do not imply that AI is the author of the post.
- Add a small number of relevant hashtags only after the copy is approved.
- Record the published post URL and date below.

## Publication log

| Post | LinkedIn URL | Published date | Notes |
|---|---|---|---|
| Ecosystem launch |  |  |  |
| Active Knowledge Modelling |  |  |  |
| Coffee Shop World |  |  |  |
| Product boundary |  |  |  |
| Why AI needs models |  |  |  |
| Can AI Have Consciousness? |  |  |  |
| Governed AI execution | https://www.linkedin.com/feed/update/urn:li:activity:7503551078349643776/ |  | Source-based Meta Muse commentary |
| When AI Can Generate the Software, the Enterprise Model Becomes the Asset | https://lnkd.in/eVbwX3zZ | 2026-09-08 | Published LinkedIn post |
| AI Can Generate the Code—But Who Defines What Is Correct? |  |  | Draft; publish after canonical article is deployed |



<details>
<summary><strong>Post 9 — AI News Commentary: Governed Agent Loops</strong></summary>

## LinkedIn

AI agents are becoming good at producing useful outputs.

The harder question is whether they can keep working over time without losing context, violating boundaries, or creating work that people cannot confidently review.

Atlassian’s new governed agent loops for the AI-native software development lifecycle are interesting because they connect:

- structured Jira work;
- organizational and code context;
- coding agents;
- standards and access controls;
- testing and human review;
- measurement of quality, adoption and cost.

The pattern is:

**Backlog item → Agent execution → Testing → Pull request → Human review**

That is more than asking an AI assistant to write code. It places the agent inside a continuing, governed process.

This has a strong connection to Mimris.

Mimris starts with an AKM enterprise model of the domain and its work:

**Domain → Processes → Roles → Information → Tasks → Outcomes**

The intended refinement path continues through IDEF0, IRTV, task patterns, project planning and workspace execution.

The AKM enterprise model should not only describe what work exists. It should help define:

- when a task is ready for execution;
- what context the task requires;
- what actions are allowed;
- what output is expected;
- where a human must review or approve the result.

A possible future loop is:

**AKM enterprise task → Readiness check → ContextPack → AI-assisted execution → Verification → Human approval**

Mimris already provides a Workbench for manual and AI-assisted task production, grounded in modeled process and activity semantics. Its context policy also supports stage-specific context and traceability during model generation.

A general autonomous loop that continuously delegates tasks to external agents is not currently implemented in Mimris. It is a possible future direction.

The broader lesson is this:

**Autonomy should be attached to a well-defined task—not granted to an agent in isolation.**

The strongest agent is not the one that works alone. It is the one that works inside a well-modeled loop.

Read the Mimris article: https://mimris-site.vercel.app/articles/governed-agent-loops

Source: https://www.atlassian.com/blog/jira/governed-agent-loops

#AI #AIagents #Mimris #AKM #EnterpriseAI

## YouTube Community

AI agents are moving from one-off prompts to governed work loops.

Atlassian’s new Jira capabilities can identify ready backlog items, delegate them to a coding agent, run implementation and testing, and return a pull request for human review.

The important pattern is:

**Structured work → Context → Agent execution → Verification → Human review**

This is close to the direction of Mimris AI Workspace.

Mimris uses AKM enterprise-modelled processes, tasks, roles and information to provide context for manual and AI-assisted work. A future Mimris task agent could use the same pattern: execute a well-defined task, produce a reviewable result and return evidence to the human participant.

The key question is not whether agents can work alone.

It is whether they can work reliably inside a process that remains understandable and governed.

Read the Mimris article: https://mimris-site.vercel.app/articles/governed-agent-loops

Source: https://www.atlassian.com/blog/jira/governed-agent-loops

#AIagents #Mimris #AKM

## Visual asset

- Asset: `assets/governed-agent-loops-infographic.png`
- Image description: “Governed AI work loop showing an AKM enterprise task moving through readiness check, ContextPack, AI-assisted execution, verification, human approval, and learning.”
- Key message: “The AKM enterprise model defines the work. Governance keeps execution reviewable.”
- The “Future direction” label makes clear that the general autonomous loop is not currently implemented in Mimris.


## X post (copy only)

AI agents need governed work loops:

Structured work → Context → Agent execution → Testing → Human review.

Mimris: AKM enterprise tasks provide ContextPack, verification, and human approval.

https://mimris-site.vercel.app/articles/governed-agent-loops

#AIagents #Mimris

</details>
