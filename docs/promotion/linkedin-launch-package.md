# Mimris LinkedIn Launch Package

Status: Article-first launch sequence for approval
Last updated: 27 August 2026

This package turns approved Mimris articles into short LinkedIn posts. Every launch post has one canonical article as its source and destination. LinkedIn introduces the article's central idea; the article provides the complete argument and guides the reader onwards to a concept page, proof, or product.

## Canonical article map

| Post | Canonical article |
|---|---|
| Mimris ecosystem | `/articles/mimris-ecosystem` |
| Active Knowledge Modelling | `/articles/active-knowledge-modelling` |
| Coffee Shop World | `/articles/coffee-shop-universe` |
| Product boundary | `/articles/modelling-and-workspace` |
| Why AI needs models | `/articles/why-ai-needs-models` |
| AI-Assisted Task Execution | `/articles/ai-assisted-task-execution` |
| Can AI Have Consciousness? | `/articles/from-biological-viability-to-artificial-consciousness` |

## Publication process

### 1. Approve the canonical article

1. Draft or revise the article in `content/articles/` and its route under `app/articles/`.
2. Run the site locally with `pnpm dev -- --port 3002`.
3. Review the article at `http://localhost:3002/articles` and on its final article route.
4. Approve the title, lead, argument, links, byline, AI-assisted writing disclosure, mobile layout, and canonical URL.
5. Confirm that the matching LinkedIn post below contains no claim or terminology that the article does not support.

### 2. Deploy before preparing LinkedIn

1. Run the production build and resolve any failure.
2. Commit and push the approved article and launch-package changes.
3. Deploy the production site to `https://mimris-site.vercel.app/`.
4. Open the production article and confirm that it returns successfully, looks correct, and appears in the article navigation.
5. Check the title, description, social preview image, canonical URL, sitemap, and `llms.txt` entry.

Never publish LinkedIn first and plan to deploy the destination afterwards. The public article must be the approved source at the moment the social post becomes visible.

### 3. Prepare the LinkedIn draft

1. Open LinkedIn and start a new post from Snorre Fossland's account.
2. Copy the matching approved post from this document.
3. Keep its complete UTM-tagged article URL unchanged.
4. Attach the recommended approved image. Use one clear image rather than several competing visuals.
5. Wait for LinkedIn to finish processing the image and link preview.
6. Check paragraph breaks, spelling, product names, capitalization, and the visible destination.
7. Add no more than two or three relevant hashtags, and only after the copy is otherwise approved.

The website carries the AI-assisted writing disclosure. The LinkedIn post should not present AI as the author or add a different authorship claim.

### 4. Perform the final pre-publication check

- Open the UTM-tagged link in a new tab and confirm that it reaches the intended production article.
- Confirm that there is exactly one canonical destination in the post.
- Confirm that the image and the article describe the same subject.
- Read the complete post once as it will appear to another person.
- Publish manually for the first launch post so its final appearance can be checked immediately. Later posts may be scheduled after this workflow is proven.

### 5. Publish and record

1. Publish the post.
2. Open the published post and test its article link.
3. Copy the permanent LinkedIn post URL into the publication log below.
4. Record the publication date and time, image used, and any intentional change from the approved copy.
5. Do not substantially edit the post after publication unless correcting an actual error. Record any correction in the notes.

### 6. Verify measurement

Check Vercel Web Analytics after data has had time to appear:

- **Pages:** the canonical article route;
- **Referrers:** LinkedIn where available;
- **UTM Parameters:** `utm_source=linkedin`, `utm_campaign=public_launch`, and the post-specific `utm_content` value;
- **Visitors and page views:** the first 24 hours and the first seven days.

The current Vercel Hobby plan measures article visits and UTM traffic, but not the custom outbound-click events reserved for Pro. Treat visits to the article and progression to later internal pages as the initial evidence.

### 7. Follow up and learn

- Respond to useful LinkedIn comments in Snorre's own voice.
- Use the canonical article link when a response needs supporting context.
- Record recurring questions, misunderstandings, or requests as qualitative evidence.
- Review results after 24 hours, but wait seven days before drawing conclusions about the launch sequence.
- Use the seven-day review to improve the next article or its transition to the proof and products; do not rewrite several published pages at once.

## Tool responsibilities

| Tool | Responsibility |
|---|---|
| Repository and localhost | Drafting, article approval, links, metadata, and build verification |
| Vercel production | Public canonical article and Web Analytics |
| LinkedIn | Post composition, publication, comments, and native engagement figures |
| This launch package | Approved copy, canonical mapping, UTM links, and publication log |

Do not make a LinkedIn post carry a claim that is not supported by its linked Mimris article. Reply to useful comments with the canonical article link instead of creating an unsupported follow-up claim.

## Publishing cadence

Publish one post every three to five days. Begin with the ecosystem, establish Active Knowledge Modelling, demonstrate the Coffee Shop World in an AKM Universe, explain the product boundary, then publish “Why AI Needs Models.” Follow with the AI-Assisted Task Execution series before introducing exploratory AI commentary.

## Post 1 — Ecosystem launch

Mimris is built around a simple idea: **Model the world. Work with it.**

Domain knowledge is spread across documents, conversations, systems, models, and people’s experience. AI can transform fragments of that information, but serious work also needs durable structure: concepts, relationships, decisions, and context that remain connected over time.

Mimris combines graphical modelling with an AI-enabled workspace so models can become useful context for real work.

Read the introduction: https://mimris-site.vercel.app/articles/mimris-ecosystem?utm_source=linkedin&utm_medium=social&utm_campaign=public_launch&utm_content=mimris_ecosystem

Recommended media: the approved Mimris social card.

## Post 2 — Active Knowledge Modelling

Active Knowledge Modelling treats a model as something that stays connected to the world it describes.

The model can be explored, challenged, connected to evidence, used in decisions, and revised as understanding develops. It is not only a diagram or a document created once and then left behind.

Read the article: https://mimris-site.vercel.app/articles/active-knowledge-modelling?utm_source=linkedin&utm_medium=social&utm_campaign=public_launch&utm_content=active_knowledge_modelling

## Post 3 — Coffee Shop World proof

A coffee shop is a useful test of model-driven work because everyone understands the domain.

The Coffee Shop World connects customers, products, employees, payment, production, inventory, information, views, documents, and work items. It is built in an AKM Universe, where its structure can be inspected in Mimris Modelling and used as context in Mimris AI Workspace.

Read the proof story: https://mimris-site.vercel.app/articles/coffee-shop-universe?utm_source=linkedin&utm_medium=social&utm_campaign=public_launch&utm_content=coffee_shop_universe

Recommended media: an approved Coffee Shop or workspace screenshot.

## Post 4 — Product boundary

Mimris Modelling and Mimris AI Workspace are complementary products with different jobs.

Mimris Modelling asks: **What is the world, and how is it structured?**

Mimris AI Workspace asks: **What do we do within the world we have modelled?**

One creates and evolves model structure. The other uses that structure with documents, processes, tasks, decisions, and AI-assisted work.

Read how the responsibilities divide: https://mimris-site.vercel.app/articles/modelling-and-workspace?utm_source=linkedin&utm_medium=social&utm_campaign=public_launch&utm_content=modelling_and_workspace

Recommended media: the approved Mimris Modelling screenshot.

## Post 5 — Why AI needs models

AI can process more information than any person. But access to information is not the same as understanding the world that information describes.

Documents remain essential evidence. Models add explicit concepts, relationships, constraints, and provenance that people and AI can inspect and use together.

Read the article: https://mimris-site.vercel.app/articles/why-ai-needs-models?utm_source=linkedin&utm_medium=social&utm_campaign=public_launch&utm_content=why_ai_needs_models

## Post 6 — AI-Assisted Task Execution: Generic Task Execution

What happens after you have modelled a process?

In Mimris, the model can become the context for actually performing the work.

**Process → Workplace → Task → AI-Assisted Execution → Result**

The important part is that Task Execution is generic. A Task might create a document, develop a model, perform an analysis, create a diagram, review a result, support a decision, or interact with another system.

The execution pattern remains essentially the same:

**Task → Context → Perform → Result → Review → Complete**

Because the Task belongs to a modelled Workplace, AI can receive relevant process, information, model and document context instead of starting from an isolated prompt.

**The model provides the context. The Task defines the work. AI assists in performing it.**

Read the article: https://mimris-site.vercel.app/articles/ai-assisted-task-execution?utm_source=linkedin&utm_medium=social&utm_campaign=public_launch&utm_content=generic_task_execution

#Mimris #AI #ProcessModelling

## Post 7 — AI-Assisted Task Execution: Top-Down + Bottom-Up

A new solution has to answer two different questions:

**What do we want?**

and

**What do we already have?**

Mimris approaches the first top-down:

**Domain → Process → Workplace → Task**

And the second bottom-up:

**Existing systems + data + documents + models + working practices → As-Is**

The future solution emerges between these perspectives.

But there is another bottom-up flow. Once people start performing Tasks, execution tells us what actually happens:

**Task → AI-Assisted Execution → As-Performed → Learning**

So we can connect:

**What exists → What we want → What actually happens**

Read the article: https://mimris-site.vercel.app/articles/ai-assisted-task-execution?utm_source=linkedin&utm_medium=social&utm_campaign=public_launch&utm_content=top_down_bottom_up

#Mimris #EnterpriseModelling #AI

## Post 8 — AI-Assisted Task Execution: Model-Driven AI

Much of today's AI starts with a prompt.

But what if AI already understood the work surrounding that prompt?

A Mimris Task can exist within a modelled Workplace with knowledge about the process, Inputs, Controls, expected Outputs, available Mechanisms, Information, Roles, and related documents and models.

Mimris can use this knowledge to assemble the context required for the Task.

**Task + Model-Derived Context + User Request → AI-Assisted Execution**

The same architecture can assist with creating a document, developing a model, analysing information, reviewing an output, or many other kinds of work.

The objective is not simply AI added to process modelling.

It is **model-driven, AI-assisted work**.

Read the article: https://mimris-site.vercel.app/articles/ai-assisted-task-execution?utm_source=linkedin&utm_medium=social&utm_campaign=public_launch&utm_content=model_driven_ai

#Mimris #AI #KnowledgeModelling

## Post 9 — AI News and Commentary: Can AI Have Consciousness?

What would an artificial system need before it could be meaningfully compared with a conscious living system?

One exploratory hypothesis begins with viability: internal state, sensing, prediction, alternatives, action, feedback, memory, and a continuing self-model. That architecture may be a more useful starting point than language alone.

This is an exploratory essay, not a claim that an AI system is conscious or that the scientific questions are settled.

Read the article: https://mimris-site.vercel.app/articles/from-biological-viability-to-artificial-consciousness?utm_source=linkedin&utm_medium=social&utm_campaign=public_launch&utm_content=ai_consciousness

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
| AI-Assisted Task Execution — Generic Task Execution |  |  |  |
| AI-Assisted Task Execution — Top-Down + Bottom-Up |  |  |  |
| AI-Assisted Task Execution — Model-Driven AI |  |  |  |
| Can AI Have Consciousness? |  |  |  |
