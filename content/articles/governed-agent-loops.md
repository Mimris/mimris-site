# When AI Agents Can Keep Working: Governed Loops for AKM Enterprise-Model-Based Execution


AI agents are becoming good at producing useful outputs. The harder question is whether they can continue working over time without losing context, violating boundaries, or creating work that people cannot confidently review.

Atlassian’s announcement of governed agent loops for the AI-native software development lifecycle is significant because it addresses this question at the level of the work system.

The new capabilities connect Jira work items, organizational knowledge, coding agents, standards, review and measurement. Atlassian describes agent loops that can continuously identify sufficiently defined and unassigned backlog items, delegate them to a coding agent for implementation and testing, and open a pull request for human review.

This is different from asking an AI assistant to write a piece of code. The agent is placed inside a continuing process:

**Backlog item → Agent execution → Testing → Pull request → Human review**

![Governed AI work loop: AKM enterprise task, readiness check, ContextPack, AI-assisted execution, verification, and human approval](/assets/governed-agent-loops-infographic.png)

The loop is also grounded in context. Atlassian’s Code Context uses the Teamwork Graph to provide agents with information from repositories, architecture, documentation and organizational knowledge. Agent Context Controls determine which agents may operate in a space and what they are allowed to see.

This matters because an agent can be technically capable and still be operationally unreliable. Without the right context, it may misunderstand the architecture. Without boundaries, it may access information or systems it should not use. Without a review point, it may produce changes that are difficult to trust. Without measurement, the organization cannot tell whether more agent activity is producing better results.

Atlassian is therefore combining five elements that are often treated separately:

1. Structured work that can be assigned.
2. Context that explains the work and its environment.
3. An agent that can perform a bounded task.
4. Controls and standards that constrain execution.
5. Human review and measurement of the result.

This is closely related to the direction of Mimris AI Workspace.

Mimris starts with an AKM enterprise model of the domain and its work. Its intended refinement path is:

**Domain Conceptual Description → Domain Ontology → IDEF0 → IRTV → Task Patterns → Project Plan → Workspace Execution**

The purpose is not merely to document a process. The AKM enterprise model should help generate an operational workspace in which people and AI can work with the process, its tasks, information and expected outcomes.

Mimris already provides a Workbench for manual and AI-assisted draft production, with task context grounded in modeled process and activity semantics. Its AI iteration policy also supports stage-specific context, compact model representations, domain anchors and traceability during model generation.

The Atlassian pattern suggests a possible next step: a model-derived task should be able to declare when it is ready for execution, what context is required, what actions are permitted, what output is expected and where human review is required.

For Mimris, that could lead to a governed loop such as:

**AKM enterprise task → Readiness check → ContextPack → AI-assisted execution → Verification → Human approval**

The AKM enterprise model would remain the durable description of the work. The AI model would be one component of an agent that participates in the task—alongside a human, a system or a combination of them. The resulting artifact, decision or enterprise-model change would be linked back to the task and its originating process context.

This distinction is important. Mimris does not currently provide a general autonomous agent loop that continuously scans tasks, delegates work and opens external pull requests. Those capabilities are a future or inferred integration direction. What is implemented today is the AKM enterprise-model-driven workspace foundation: domain and process structures, task-oriented execution, AI-assisted production and context-aware iteration.

The architectural lesson is that autonomy should be attached to a well-defined task, not granted to an agent in isolation. A useful enterprise agent needs more than an AI model, a prompt and a tool. It needs the AKM enterprise model of the work, relevant context, explicit boundaries, a defined outcome and a reviewable record of what happened.

The next phase of AI-assisted work may therefore be less about making agents act independently and more about making them part of processes that remain understandable, governed and improvable.

**The strongest agent is not the one that works alone. It is the one that works inside a well-modeled loop.**

**Primary source:** [Atlassian — We’re bringing governed agent loops to the AI-Native SDLC](https://www.atlassian.com/blog/jira/governed-agent-loops)
