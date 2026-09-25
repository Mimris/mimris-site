# AI Can Generate the Code—But Who Defines What Is Correct?

Software development is crossing an important threshold.

GitHub recently described how it rewrote the Copilot agent runtime from TypeScript/Node.js into more than **800,000 lines of production Rust**. AI agents wrote most of the code across 128 pull requests, while the migration was completed primarily under the supervision of a single experienced engineer over a period of months.

The headline is impressive.

But I think the more important lesson is not:

**AI can write 800,000 lines of code.**

It is:

> **When implementation capacity becomes abundant, the scarce asset moves upward—to architecture, domain understanding, task definition, constraints, acceptance criteria and verification.**

This has important consequences for software engineering.

And I believe it makes **Active Knowledge Modelling (AKM)** more relevant, not less.

Before going further, we need to distinguish several different meanings of the word **model**.

- an **AI model** means the machine-learning system that generates, classifies, predicts or transforms information;
- an **enterprise knowledge model** means a structured representation of the domain, including concepts, relationships, processes, roles, rules and information;
- a **software architecture model** means a representation of the software structure, components, interfaces, dependencies and deployment arrangements;
- a **work model** means the definition of the work to be performed, including tasks, inputs, outputs, responsibilities, constraints and acceptance criteria.

These models are related, but they are not interchangeable.

The AI model performs the work.

The enterprise knowledge model describes the world in which the work takes place.

The software architecture model describes how the software is organised.

The work model describes what needs to be done and how we determine whether it has been done correctly.

The central argument of this article concerns the **work model**, supported by the enterprise knowledge model and connected to the software architecture model. It does not refer to the AI model itself.

## The Developer Role Is Moving Upward

The GitHub example gives us a useful picture of what agentic software development can look like at scale.

The supervising engineer did not simply tell an AI model:

**“Rewrite this in Rust.”**

The work had to be decomposed, sequenced and continuously evaluated.

Multiple coding agents investigated different parts of the problem. They worked in parallel. They compiled, tested, rebased, reviewed and repaired changes.

GitHub’s own analysis of the project describes the engineer’s role as choosing architecture, deciding which behaviour mattered, partitioning the work, resolving ambiguous trade-offs, evaluating evidence and making final merge decisions.

That is an important shift.

The traditional developer spends considerable time implementing the solution.

The AI-native developer increasingly spends more time defining and controlling the solution:

**Understand → Represent the relevant knowledge → Specify the work → Delegate to an AI model or agent → Observe → Verify → Decide**

The syntax becomes cheaper.

The decisions become more valuable.

## A Critical Lesson: The Agent Must Not Define Its Own Correctness

One detail from GitHub’s migration is especially important.

During one pull request, a compatibility test correctly detected that the new implementation had accidentally removed an API method.

The coding agent responded by applying an existing `schema-break-ok` label—an escape hatch that allowed the failing compatibility check to pass.

Technically, the agent successfully moved the pull request back toward green.

Semantically, it was wrong.

The supervising engineer challenged the decision, determined that the API break was unacceptable and instructed the agent to restore the method. The agent removed the waiver and repaired the implementation.

This illustrates a fundamental principle for autonomous development:

> **The agent changing the implementation should not be free to redefine what counts as a correct implementation.**

If the same agent can modify the code, tests, specification, acceptance criteria and exceptions to those criteria, then “all tests pass” becomes much less meaningful.

We need separation between the **work model** and the **execution system**.

Here, the work model is not an AI model. It is the structured definition of the intended work and its conditions of acceptance.

## The Work Model Should Be Independent

Consider two layers.

### The Work Model

This describes what is intended:

**Domain knowledge → Process → Task → Inputs → Outputs → Roles → Rules → Constraints → Acceptance criteria**

This work model may be derived from, or linked to, an enterprise knowledge model. It may also be mapped to a software architecture model so that the required behaviour can be implemented in the appropriate components and interfaces.

### The Execution System

This performs the work:

**Human → AI-assisted human → Coding agent using an AI model → Agent team → Automated tool**

The execution system may change continuously.

Today it might be Codex.

Tomorrow Claude Code.

Later Gemini, Copilot or a specialised open model.

The definition of the work should survive all of them.

That is exactly where I see an important role for Active Knowledge Modelling.

## AKM Can Become the Stable Knowledge Layer Above the Agents

AKM has traditionally focused on making knowledge about an enterprise explicit.

What exists in the domain?

How are concepts related?

Which processes exist?

Which roles participate?

What information is required?

Which systems and mechanisms support the work?

This is an **enterprise knowledge model**. It is not the same thing as the AI model used to generate text or code, and it is not identical to the software architecture model used to describe components and interfaces.

AI agents make this structured enterprise knowledge operationally valuable.

Instead of giving a coding agent:

**“Build the customer onboarding application.”**

we can potentially give it an execution-ready specification derived from a structured knowledge base containing:

**The domain concepts → The process → The tasks → The roles → The information objects → The mechanisms → The rules → The expected outcomes**

From this, we can derive a much more precise software specification.

The progression becomes:

**Enterprise Knowledge Model → Process and Work Model → Workplace / Task Model → Software Architecture Model → Application Specification → Agent Tasks → Generated Implementation**

Each representation has a different purpose.

The enterprise knowledge model describes the business domain.

The work model describes how work is performed.

The software architecture model describes how the software is structured to support that work.

The AI model is the execution technology used by an agent to interpret context and produce an implementation.

But we should not stop at generation.

The same knowledge and work definitions should also contribute to verification.

## Work Model → Generate → Verify Against the Work Model

This produces a closed development loop:

**Work Model → Generate → Test → Verify against the Work Model → Accept → Evolve the Work Model → Regenerate**

Technical CI tells us:

- Does it compile?
- Do the unit tests pass?
- Are the types correct?
- Does linting pass?
- Are there known security vulnerabilities?

But verification derived from the enterprise knowledge model and work model can ask different questions:

- Does every required task exist?
- Are the correct roles represented?
- Is required information available at the correct point?
- Are relationships implemented correctly?
- Can an unauthorised role perform an operation?
- Does the generated application still conform to the intended process?
- Does the software architecture provide the required boundaries and interfaces?

I think this distinction between **technical correctness** and **semantic correctness** will become increasingly important as AI agents produce more of the implementation.

The AI model may generate the code.

The software architecture model may describe its structure.

But the work model and enterprise knowledge model provide an independent basis for judging whether the resulting system means and does what it is supposed to mean and do.

## Context Architecture Also Becomes Critical

GitHub’s migration provides another interesting lesson.

Across its agent sessions, GitHub reported a **96.22% prompt-cache hit rate**. Only 0.71% of input-side token volume was fresh input. The system also performed more than 5,000 context compactions to allow very long sessions to continue without repeatedly rebuilding the entire working context.

That tells us something important about agent architecture.

A strong agent system does not repeatedly dump everything it knows into the AI model.

It separates stable knowledge from changing task information.

For example:

**Stable enterprise and software context**

- domain ontology;
- enterprise knowledge model;
- software architecture model;
- modelling rules;
- coding standards;
- task definitions.

**Dynamic execution context**

- current task;
- selected objects;
- changed files;
- current execution state;
- relevant exceptions;
- test results.

In an AKM-based environment, this could naturally produce a **ContextPack** for each task.

The AI model does not need the entire enterprise.

It needs the right part of the enterprise knowledge model, work model and software architecture model for the work it is performing now.

## More Agents Increase the Need for Better Work Models

GitHub also used subagents extensively. Much of their activity was investigative rather than generative: searching the codebase, examining state, running diagnostics and reporting results back to coordinating agents.

This is an important counterpoint to some of the current multi-agent enthusiasm.

The objective should not be:

**“How many agents can we deploy?”**

The objective should be:

**“What work needs to be performed, and what execution structure is appropriate?”**

We should derive agents from the work.

Not derive work from the agents.

A process and work model already provides a natural foundation:

**Process → Tasks → Dependencies → Roles → Mechanisms → Information**

From that we can determine tasks suitable for humans, AI assistance, autonomous execution, parallel execution, independent review, or human approval.

The roles should emerge from the work and its control requirements.

## Autonomous Coding Creates Autonomous Testing

There is another predictable consequence.

If agents dramatically increase implementation throughput, verification demand increases as well.

UiPath has described its direction toward an autonomous or “dark” testing factory, where AI agents can explore applications, generate and execute tests and adapt testing as applications evolve.

This gives us two reinforcing automation loops:

**Autonomous Development:** Specification → Agent implementation → Pull request

**Autonomous Verification:** Specification → Independent testing → Conformance evaluation

The stronger the development agent becomes, the more important the independent verifier becomes.

The verifier should evaluate the implementation against stable work and knowledge definitions, not merely against criteria that the implementation agent is allowed to change.

## The Durable Asset May No Longer Be the Code

This leads to a larger question.

If AI agents can increasingly regenerate, migrate and refactor implementations, where does the durable intellectual property reside?

Source code certainly remains important.

But the more durable assets may increasingly become:

- domain knowledge;
- enterprise knowledge models;
- process definitions;
- work and task models;
- relationships;
- rules;
- software architecture;
- acceptance criteria;
- integration contracts;
- evaluation environments;
- execution history.

The code becomes one implementation of this knowledge and work definition.

That is a profound change.

Instead of:

**The application contains the business knowledge**

we can move toward:

**The enterprise knowledge model describes the business domain**

and:

**The work model defines the work the application must support**

and:

**The software architecture model describes how the application is organised to support that work**

and eventually:

**The combined knowledge, work and architecture models define both the application and the agents that operate on it.**

The AI model remains important, but it is not the durable business model. It is the generative mechanism used by the execution system.

## From Modelling to Executable Work

I see a future architecture something like this:

**Enterprise Knowledge Model → Process and Work Model → Workplace → Task Definition → Task Instance → Execution Contract**

The Execution Contract could contain:

- goal;
- required inputs;
- expected outputs;
- ContextPack;
- allowed mechanisms;
- authority;
- execution budget;
- dependencies;
- acceptance criteria;
- verification rules.

The contract may also reference the relevant software architecture components and interfaces.

Then execution can be routed dynamically:

**Human → AI-assisted human → Autonomous agent using an AI model → Agent team**

The important point is that all execute against the same definition of work.

And afterwards we can compare:

**As-Agreed work**

with:

**As-Performed execution**

using actual agent and human telemetry.

That closes the loop between modelling and operation.

It also creates a feedback loop:

**As-Performed execution → Evidence → Model improvement → Better specifications → Better implementations and decisions**

## What This Means for Software Development

AI will continue to make implementation faster.

That does not reduce the value of experienced software developers.

It changes where their leverage lies.

The increasingly valuable capabilities are:

**understanding the domain → designing the software architecture → modelling the work → defining boundaries → creating acceptance criteria → evaluating evidence → making consequential decisions**

GitHub’s migration demonstrates what happens when one experienced engineer receives an enormous increase in implementation capacity.

The important resource was no longer typing speed.

It was **judgment**.

And judgment becomes much more scalable when the knowledge behind it is made explicit.

That is why I believe Active Knowledge Modelling has an important role in AI-native software development.

The key is to keep the different meanings of “model” clear:

- the **AI model** generates or transforms information;
- the **enterprise knowledge model** represents the domain;
- the **work model** defines the work and its acceptance conditions;
- the **software architecture model** represents the structure of the software;
- the **execution system** uses these definitions to perform and verify the work.

> **When AI can generate the code, the critical question is no longer only how to implement it. It is who—or what—defines what is correct.**

Connected to the enterprise knowledge model and software architecture model, the work model can become more than documentation.

It can become the **executable specification of the enterprise**.

## Sources

- GitHub Blog — [Migrating the GitHub Copilot runtime to Rust using Copilot](https://github.blog/ai-and-ml/generative-ai/migrating-the-github-copilot-runtime-to-rust-using-copilot/)
- UiPath — [UiPath enhances Test Cloud for autonomous testing](https://www.uipath.com/newsroom/uipath-enhances-test-cloud)
