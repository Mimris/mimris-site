# Mimris Social Launch Package

Status: Article-first launch sequence for approval
Last updated: 23 August 2026

This package turns approved Mimris articles into channel-specific social posts. Every launch post has one canonical article as its source and destination. LinkedIn, YouTube, and X introduce the article's central idea in formats suited to their audiences; the article provides the complete argument and guides the reader onwards to a concept page, proof, or product.

## Canonical article map

| Post | Canonical article |
|---|---|
| What Is Mimris? | `/articles/mimris-ecosystem` |
| Active Knowledge Modelling | `/articles/active-knowledge-modelling` |
| Coffee Shop World | `/articles/coffee-shop-universe` |
| Mimris Modelling and Mimris AI Workspace | `/articles/modelling-and-workspace` |
| Why AI Needs Models, Not Just More Documents | `/articles/why-ai-needs-models` |
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

## YouTube Community posts and X posts

Use the same article-first workflow for YouTube and X, but do not copy the full LinkedIn text unchanged. Keep the article as the canonical destination and give each channel its own UTM source.

### YouTube Community post

1. Sign in to the SnorresModelBureau channel. See [YouTube's Community posts guide](https://support.google.com/youtube/answer/7124474?hl=en_ID) for the current interface.
2. Select **Create → Create post**.
3. Paste the approved YouTube version below and publish or schedule it.
4. Use a text-and-link post unless a square image variant has been approved. The current Mimris launch cards are landscape and may crop in a YouTube image post.
5. Open the published post and test the article link.

If **Create post** is unavailable for the channel, use the same copy and link in the description or pinned comment of a relevant modelling video.

### X post

1. Sign in to the Mimris account on X and select **Post**. See [X's posting guide](https://help.x.com/en/using-x/how-to-post) for current limits and controls.
2. Paste the approved short version below.
3. Attach the approved launch card and add an image description.
4. Confirm the preview, link, and character count, then publish or schedule it.
5. Open the published post and test the article link.

X links are shortened by the platform for character-count purposes. Keep each X version concise; do not paste the longer LinkedIn copy into a standard post.

### Cross-channel publication record

Record each published URL and date in the publication log. Use `linkedin`, `youtube`, and `x` as the respective `utm_source` values. This keeps channel performance separate in Web Analytics while preserving a single article destination.

## Tool responsibilities

| Tool | Responsibility |
|---|---|
| Repository and localhost | Drafting, article approval, links, metadata, and build verification |
| Vercel production | Public canonical article and Web Analytics |
| LinkedIn | Post composition, publication, comments, and native engagement figures |
| YouTube | Community post composition, publication, comments, and native engagement figures |
| X | Short post composition, publication, replies, and native engagement figures |
| This launch package | Approved copy, canonical mapping, UTM links, and publication log |

Do not make a LinkedIn post carry a claim that is not supported by its linked Mimris article. Reply to useful comments with the canonical article link instead of creating an unsupported follow-up claim.

## Publishing cadence

Publish one post every three to five days. Begin with the ecosystem, establish Active Knowledge Modelling, demonstrate the Coffee Shop World in an AKM Universe, explain the product boundary, then publish “Why AI Needs Models, Not Just More Documents” before introducing exploratory AI commentary.

## Post 1 — What Is Mimris?

### LinkedIn version

What is Mimris?

Mimris is built around a simple idea: Model the world. Work with it.

Domain knowledge is spread across documents, conversations, systems, models, and people’s experience. AI can transform fragments of that information, but serious work also needs durable structure: concepts, relationships, decisions, and context that remain connected over time.

Mimris combines graphical modelling with an AI-enabled workspace so models can become useful context for real work.

Read the introduction: https://mimris-site.vercel.app/articles/mimris-ecosystem?utm_source=linkedin&utm_medium=social&utm_campaign=public_launch&utm_content=mimris_ecosystem

Publishing note: attach [`assets/mimris-ecosystem-launch-card.png`](../../assets/mimris-ecosystem-launch-card.png). Do not copy this note into LinkedIn.

### YouTube version

What is Mimris?

Mimris connects domain models to AI-assisted work.

The idea is simple: Model the world. Work with it.

Read the introduction: https://mimris-site.vercel.app/articles/mimris-ecosystem?utm_source=youtube&utm_medium=social&utm_campaign=public_launch&utm_content=mimris_ecosystem

Publishing note: use a text-and-link Community post unless a square image variant is approved.

### X version

What is Mimris?

Model the world. Work with it.

Mimris connects domain models to AI-assisted work, so concepts, relationships, decisions, and context stay connected.

https://mimris-site.vercel.app/articles/mimris-ecosystem?utm_source=x&utm_medium=social&utm_campaign=public_launch&utm_content=mimris_ecosystem

Publishing note: attach the approved launch card and add this image description: “Launch card reading ‘What Is Mimris? Model the world. Work with it.’ A circular diagram connects World, Model, AI, and Work.”

## Post 2 — Active Knowledge Modelling

### LinkedIn version

Active Knowledge Modelling treats a model as something that stays connected to the world it describes.

The model can be explored, challenged, connected to evidence, used in decisions, and revised as understanding develops. It is not only a diagram or a document created once and then left behind.

Read the article: https://mimris-site.vercel.app/articles/active-knowledge-modelling?utm_source=linkedin&utm_medium=social&utm_campaign=public_launch&utm_content=active_knowledge_modelling

Publishing note: attach [`assets/mimris-akm-launch-card.png`](../../assets/mimris-akm-launch-card.png). Do not copy this note into LinkedIn.

### YouTube version

Active Knowledge Modelling treats a model as something that stays connected to the world it describes.

Read the article: https://mimris-site.vercel.app/articles/active-knowledge-modelling?utm_source=youtube&utm_medium=social&utm_campaign=public_launch&utm_content=active_knowledge_modelling

### X version

Active Knowledge Modelling keeps a model connected to the world it describes—evidence, decisions, and learning included.

https://mimris-site.vercel.app/articles/active-knowledge-modelling?utm_source=x&utm_medium=social&utm_campaign=public_launch&utm_content=active_knowledge_modelling

## Post 3 — Coffee Shop World proof

### LinkedIn version

A coffee shop is a useful test of model-driven work because everyone understands the domain.

The Coffee Shop World connects customers, products, employees, payment, production, inventory, information, views, documents, and work items. It is built in an AKM Universe, where its structure can be inspected in Mimris Modelling and used as context in Mimris AI Workspace.

Read the proof story: https://mimris-site.vercel.app/articles/coffee-shop-universe?utm_source=linkedin&utm_medium=social&utm_campaign=public_launch&utm_content=coffee_shop_universe

Recommended media: an approved Coffee Shop or workspace screenshot.

### YouTube version

The Coffee Shop World is a practical demonstration of model-driven work: customers, products, employees, payment, inventory, information, and work in one connected universe.

Explore the proof story: https://mimris-site.vercel.app/articles/coffee-shop-universe?utm_source=youtube&utm_medium=social&utm_campaign=public_launch&utm_content=coffee_shop_universe

### X version

What happens when a familiar coffee shop becomes a connected model?

The Coffee Shop World links people, products, processes, information, and work in one inspectable universe.

https://mimris-site.vercel.app/articles/coffee-shop-universe?utm_source=x&utm_medium=social&utm_campaign=public_launch&utm_content=coffee_shop_universe

## Post 4 — Mimris Modelling and Mimris AI Workspace

### LinkedIn version

Mimris Modelling and Mimris AI Workspace belong to one ecosystem, but they have different primary jobs.

Mimris Modelling asks: **What is the world, and how is it structured?**

Mimris AI Workspace asks: **How do we run the AKM method within the world we have modelled?**

Mimris Modelling is the specialist environment for visualizing, managing, inspecting, and evolving model semantics, objects, relationships, diagrams, and views. Mimris AI Workspace runs the Active Knowledge Modelling method through documents, evidence, processes, tasks, decisions, deliverables, and AI-assisted work.

The boundary is practical, not a hard wall: modelling capabilities primarily change model structure, while workspace capabilities primarily help people and AI perform work using models and context.

Read how the responsibilities divide: https://mimris-site.vercel.app/articles/modelling-and-workspace?utm_source=linkedin&utm_medium=social&utm_campaign=public_launch&utm_content=modelling_and_workspace

Recommended media: the approved Mimris Modelling screenshot.

### YouTube version

Mimris Modelling visualizes and manages model structure. Mimris AI Workspace runs AKM in day-to-day work, turning models into context for documents, processes, tasks, decisions, deliverables, and AI-assisted collaboration.

The boundary is about primary responsibility, not separation: work in the workspace can lead to new questions, decisions, and model changes.

Read the product boundary: https://mimris-site.vercel.app/articles/modelling-and-workspace?utm_source=youtube&utm_medium=social&utm_campaign=public_launch&utm_content=modelling_and_workspace

### X version

Mimris Modelling asks: “What is the world, and how is it structured?”

Mimris AI Workspace asks: “How do we run AKM within the world we have modelled?”

They are complementary, not competing products.

https://mimris-site.vercel.app/articles/modelling-and-workspace?utm_source=x&utm_medium=social&utm_campaign=public_launch&utm_content=modelling_and_workspace

## Post 5 — Why AI Needs Models, Not Just More Documents

### LinkedIn version

AI can process more information than any person. But access to information is not the same as understanding the world that information describes.

Documents remain essential evidence. Models add explicit concepts, relationships, constraints, and provenance that people and AI can inspect and use together.

Read the article: https://mimris-site.vercel.app/articles/why-ai-needs-models?utm_source=linkedin&utm_medium=social&utm_campaign=public_launch&utm_content=why_ai_needs_models

### YouTube version

AI can process information, but information is not the same as a shared model of the world it describes.

Read the article: https://mimris-site.vercel.app/articles/why-ai-needs-models?utm_source=youtube&utm_medium=social&utm_campaign=public_launch&utm_content=why_ai_needs_models

### X version

AI can read more documents. Models make concepts, relationships, constraints, and provenance explicit.

https://mimris-site.vercel.app/articles/why-ai-needs-models?utm_source=x&utm_medium=social&utm_campaign=public_launch&utm_content=why_ai_needs_models

## Post 6 — AI News and Commentary: Can AI Have Consciousness?

### LinkedIn version

What would an artificial system need before it could be meaningfully compared with a conscious living system?

One exploratory hypothesis begins with viability: internal state, sensing, prediction, alternatives, action, feedback, memory, and a continuing self-model. That architecture may be a more useful starting point than language alone.

This is an exploratory essay, not a claim that an AI system is conscious or that the scientific questions are settled.

Read the article: https://mimris-site.vercel.app/articles/from-biological-viability-to-artificial-consciousness?utm_source=linkedin&utm_medium=social&utm_campaign=public_launch&utm_content=ai_consciousness

### YouTube version

Could artificial consciousness begin with viability—sensing, prediction, action, feedback, memory, and a continuing self-model? This is an exploratory essay, not a settled scientific conclusion.

Read it here: https://mimris-site.vercel.app/articles/from-biological-viability-to-artificial-consciousness?utm_source=youtube&utm_medium=social&utm_campaign=public_launch&utm_content=ai_consciousness

### X version

Could artificial consciousness begin with viability: sensing, prediction, action, feedback, memory, and a continuing self-model?

An exploratory essay, not a settled conclusion:
https://mimris-site.vercel.app/articles/from-biological-viability-to-artificial-consciousness?utm_source=x&utm_medium=social&utm_campaign=public_launch&utm_content=ai_consciousness

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

| Post | LinkedIn URL | YouTube URL | X URL | Published date | Notes |
|---|---|---|---|---|---|
| What Is Mimris? | https://www.linkedin.com/posts/snorre-fossland-1b0897307_what-is-mimris-mimris-is-built-around-a-activity-7497309490845958144-curm | https://www.youtube.com/post/UgkxCiugxcpVipBqSEBIFIQT6ut7GYOMYxj2 | https://x.com/FosslandSnorre/status/2091555991150047677 | 23 August 2026 | LinkedIn published from Snorre Fossland’s account; link supplied for the launch log. |
| Active Knowledge Modelling | https://www.linkedin.com/posts/snorre-fossland-1b0897307_active-knowledge-modelling-treats-a-model-share-7497985233284165633-Q-t6/ | https://www.youtube.com/post/UgkxdkAMVp1zuzVslKS0tL1RPK-sVzDn3OVT |  | 25 August 2026 | LinkedIn published from Snorre Fossland’s account; tracking parameters removed from the permanent URL. |
| Coffee Shop World |  |  |  |  |  |
| Mimris Modelling and Mimris AI Workspace |  |  |  |  |  |
| Why AI Needs Models, Not Just More Documents |  |  |  |  |  |
| Can AI Have Consciousness? |  |  |  |  |  |
