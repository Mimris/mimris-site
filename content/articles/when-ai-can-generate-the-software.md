# When AI Can Generate the Software, the Model Becomes the Asset

AI is starting to change one of the most fundamental decisions in software development:

**Should we buy an application, or should we build it ourselves?**

McKinsey's 2026 State of AI research reports that **32% of organisations have already decided not to purchase at least one software product or feature because agentic coding tools made building it internally feasible**.

That is a significant change. For decades, custom software development was constrained by implementation cost. AI coding agents are beginning to change that equation.

But this does not make understanding the business less important. It makes it more important.

## The bottleneck is moving

The traditional software-development bottleneck looked approximately like this:

**Requirements → Design → Development → Testing → Application**

As AI generates more of the implementation, the bottleneck moves upstream. The difficult questions become:

- What should the application actually do?
- What concepts exist in the domain, and how are they related?
- Which processes should it support?
- What tasks should humans perform, and what tasks should AI perform?
- What information, rules, tools, and constraints apply?
- What constitutes a correct result?

These are not primarily coding questions. They are modelling questions.

This is where **Active Knowledge Modelling — AKM — becomes increasingly relevant in the AI era.**

## From requirements documents to active knowledge models

Traditional software projects distribute knowledge across requirements documents, diagrams, spreadsheets, tickets, conversations, and source code. The implementation often becomes one of the most complete descriptions of how the system works, which means that organisational knowledge becomes locked in code.

With AKM, that knowledge can be represented explicitly:

**Domain → Processes → Roles → Information → Tasks → Systems → Rules → Relationships → Expected Outcomes**

The model becomes the primary description of what the application is supposed to represent and support. The application becomes an implementation of the knowledge model rather than the only place where that knowledge can be found.

## From knowledge model to generated application

A future AI-assisted development chain could look like this:

**Knowledge Model → Process and Task Model → Application Specification → AI Agent Tasks → Generated Application → Technical Verification → Semantic Verification**

The important step is not merely allowing AI to generate code. It is creating enough structured knowledge that AI knows **what code should be generated**.

A modelled task can include its purpose, required information, responsible role, applicable rules, available tools, expected output, and relationships to preceding and following tasks. That gives an AI system a more precise implementation task than a short natural-language prompt.

There is a major difference between:

**“Build an onboarding application.”**

and:

**“Implement this explicitly modelled onboarding process, with these roles, information objects, task dependencies, constraints, and expected outcomes.”**

The latter is easier to generate reliably and easier to verify.

## Verification becomes more important than generation

As AI lowers the cost of producing software, verification becomes more important. Technical verification can determine whether an application compiles, tests pass, types are correct, security rules are satisfied, and accessibility requirements are met.

AI-generated software also needs **semantic verification**:

- Does the application still represent the intended business model?
- Does a workflow contain all required tasks?
- Does the correct role have authority to perform an action?
- Is the required information available before a task executes?
- Are domain relationships implemented correctly?

The same model used to generate the application can potentially be used to verify it:

**Model → Generate → Verify against Model → Evolve Model → Regenerate**

The model becomes a continuously maintained source of intent.

## Human and AI work can be modelled together

Applications are increasingly not simply tools used by humans. AI agents are becoming participants in the work itself. A process may contain tasks performed by humans, tasks assisted by AI, tasks delegated to AI agents, deterministic automated tasks, and tasks requiring human approval.

AKM can represent these relationships. Instead of adding an AI assistant to the side of an existing application, we can redesign the work:

**Goal → Process → Human Tasks + AI Tasks + Automated Tasks → Verification → Outcome**

Humans remain part of the execution model while AI assists, collaborates, or performs suitable parts of the work using context derived from the model.

## What becomes the intellectual property?

If AI can increasingly regenerate an application, an important question emerges: **where is the real intellectual property?**

The more durable assets may become the domain model, business terminology, process knowledge, task structures, rules, organisational knowledge, integration definitions, evaluation criteria, and historical execution knowledge.

> **The application may become replaceable. The model describing what the application should do may become the durable asset.**

This does not make software engineering irrelevant. It changes what high-value software engineering looks like:

**Understanding → Modelling → Architecture → Specification → Orchestration → Verification**

## AKM as an executable specification

AKM began as a way of making organisational knowledge explicit and collaborative. In an AI-driven development environment, that explicit knowledge can also become machine-actionable.

An AKM model can provide AI with domain context, task definitions, required information, relationships, constraints, tool permissions, expected results, and verification criteria. The model therefore becomes more than documentation. It becomes an **executable specification connecting business knowledge with AI-assisted software development and task execution**.

As AI makes code easier to produce, understanding what should be produced becomes more valuable. The future of AI-assisted software development is therefore not simply about better coding agents. It is about connecting those agents to a precise, active, and continuously evolving model of the enterprise.

**When AI can generate the code, the competitive advantage increasingly becomes the model.**
