# AI Can Generate the Work. But Can We Prove It Is Correct?

AI is changing the economics of software and systems engineering.

We can ask an agent to write code, generate tests, analyse requirements, create models, and assemble applications. Work that once required days can sometimes be accomplished in hours or minutes.

Yet a fundamental problem remains.

**How do we know that the AI has performed the right work?**

A program may compile successfully while implementing the wrong business process. A generated model may be structurally valid while misrepresenting the domain. An agent may complete its objective while violating a constraint that appeared only in an earlier prompt.

As generated work grows, these are not minor concerns. They increasingly determine whether an enterprise can trust the resulting systems.

The challenge is therefore not simply to generate more work. It is to connect **enterprise intent, explicit knowledge models, execution, and independently verifiable outcomes**.

## The Industrialization of AI-Assisted Engineering

On 23 November 2026, L&T Technology Services announced SDVault.ai, an engineering and assurance toolchain for software-defined vehicles. The company describes more than 250 domain-aware AI agents combined with deterministic automation across 12 engineering domains.

Its proposed engineering thread connects requirements, system architecture, implementation, tests, failures, corrective actions, and release evidence.

This is an important signal: AI is being integrated into a complete engineering lifecycle rather than treated as an isolated coding assistant.

```text
Requirements
    ↓
Architecture
    ↓
System Models
    ↓
Implementation
    ↓
Tests
    ↓
Verification Evidence
    ↓
Approved Release
```

Each stage depends on the meaning and correctness of what precedes it. A system does not become trustworthy because many agents contributed to it.

LTTS reports improvements in engineering capacity in early pilots. These are company-reported results, not independently demonstrated performance guarantees. But the architecture is meaningful: **AI execution is being combined with domain knowledge, traceability, deterministic checks, and human-controlled release decisions.**

## Instructions That Exist Only in Prompts Can Disappear

A related problem appears in newly published research on agent oversight.

*Formalize or Lose It*, released on 23 November 2026, examines what happens when requirements pass between planning agents and worker agents. Its authors examined 84 oversight rules; 39 existed only as natural-language instructions rather than independently enforced conditions.

In limited fault-injection experiments, new host-side checks detected five of six failures that an existing test suite had missed.

The study is preliminary, and the reported results should not be generalized to every agent system. Its underlying problem, however, is familiar to anyone who has worked with complex software.

When a requirement exists only in a prompt, enforcement depends on an agent interpreting, retaining, and transmitting it correctly.

Consider the rule:

**An employee must not approve a transaction that the same employee initiated.**

An agent may interpret this correctly during planning. But what happens when work is delegated, context is compressed, another agent generates the interface, or a later change modifies the approval workflow?

The constraint can be weakened, overlooked, or omitted.

A stronger approach represents the rule explicitly:

```text
Business Rule
    ↓
Modelled Constraint
    ↓
Execution Requirement
    ↓
Independent Check
    ↓
Acceptance Decision
```

The agent can still generate the implementation. But the implementation's correctness no longer depends entirely on the agent remembering its instructions.

## From Prompt Engineering to Model-Driven Engineering

What should be the authoritative description of the enterprise system that AI is asked to create?

We can provide increasingly detailed prompts and documents. Or we can make relevant enterprise knowledge explicit.

An enterprise knowledge model can describe:

- Domain concepts and relationships.
- Processes and their dependencies.
- Roles and responsibilities.
- Tasks, inputs, and expected outputs.
- Information, views, products, and supporting systems.
- Mechanisms that can execute work.
- Rules, constraints, and acceptance criteria.

Instead of repeatedly asking an agent to infer these relationships from prose, we can make them objects and relationships that software can inspect.

Consider a simple customer-order process.

A prompt may say: **Create an application where a cashier accepts an order, the customer pays, and a barista prepares the products.**

That is enough to generate a plausible demonstration. An operational application requires more precise answers.

Who can accept payment? Which product options are valid? What information must be captured? Which event transfers responsibility to the Barista? What happens when payment fails? When is the order fulfilled? Which actions require approval, and which events must be recorded?

These are not mainly coding questions. They are questions about **enterprise knowledge and work**.

**The more precisely we model the work, the less the AI needs to invent.**

## Active Knowledge Modelling as an Executable Specification

Active Knowledge Modelling (AKM) offers an approach to making enterprise knowledge explicit.

In Mimris, the intended modelling and generation lifecycle is:

```text
Domain
  ↓
Ontology
  ↓
Plan
  ↓
POPS
  ↓
IRTV
  ↓
BPMN + TYPE
  ↓
META / OCIM
  ↓
Operational Preview
  ↓
Application
```

Each stage contributes something different.

The Domain Ontology defines concepts and semantic relationships. POPS models Processes, Organizations, Products, and Systems. IRTV connects Information, Roles, Tasks, and Views to the work performed in a Process. BPMN can describe flow, while TYPE represents object and relationship structures. META/OCIM supports configuration of operational mechanisms and application behaviour.

The Operational Workspace Application is intended to derive its behaviour from these connected definitions.

For example:

```text
Process: Handle Customer Order
           ↓
Task: Capture Order
           ↓
Role: Cashier
           ↓
Required Information
           ↓
Operational View
           ↓
Configured Mechanism
           ↓
Generated Workplace
```

This changes the role of enterprise modelling. The model is not merely a description for people to inspect. It can become the source of an executable specification.

It also gives us a basis for verifying whether the generated application faithfully implements the approved model.

## Correctness Has More Than One Dimension

A single "passed" result cannot establish the correctness of an AI-generated operational application.

We need to distinguish at least four dimensions.

### Structural correctness

Does the generated artifact conform to the required metamodel? For IRTV, this includes valid objects, identifiers, references, and relationship types. Many such checks can be deterministic.

### Semantic correctness

Does the generated model accurately represent the originating domain and Process?

An IRTV model can contain valid Role, Task, View, and Information objects while still describing the wrong business behaviour. Structural validity alone does not establish semantic fidelity.

### Execution correctness

Did the Task execute using authorized information, mechanisms, and actions?

A plausible output does not prove that the process used to produce it was authorized.

### Operational fidelity

Does the generated application behave according to the approved models?

A correctly generated interface does not establish that runtime state, permissions, Process transitions, failures, and recovery are handled correctly.

These checks belong to different parts of the lifecycle:

```text
Approved AKM World
        ↓
Generated Models
        ↓
Structural Verification
        ↓
Semantic Verification
        ↓
Operational Application
        ↓
Execution Verification
        ↓
Operational Fidelity Tests
        ↓
Accepted Outcome
```

Some requirements can be checked deterministically. Others need a reviewed semantic rubric or human judgment. The important point is that **the generating agent should not also be the sole authority that defines correctness**.

## As-Agreed and As-Performed

Enterprise modelling has long distinguished between intended and actual work.

This becomes especially important when AI agents execute Tasks autonomously.

**As-Agreed** describes what should happen.

**As-Performed** records what actually happened.

An Execution Contract connects the two. It can specify the objective, required inputs, expected outputs, responsible Role, authorized actions, required capabilities, acceptance criteria, and verification rules.

A separate execution record can capture observable actions and results.

```text
As-Agreed
    ↓
Execution Contract
    ↓
Human / Agent / Tool
    ↓
Execution Record
    ↓
As-Performed
    ↓
Independent Comparison
```

Did the correct Task execute? Was the expected information used? Was the mechanism authorized? Did the result pass validation? Were deviations recorded?

An agent's own claim that it complied is not sufficient evidence.

## Test the Application Against the Enterprise Model

Traditional software testing checks implementation behaviour against test cases.

Model-driven generation offers an additional opportunity: **test cases can be traced back to approved enterprise objects and relationships**.

Consider the Coffee Shop World used in Mimris.

```text
Cashier captures Order
         ↓
Product options validated
         ↓
Payment confirmed
         ↓
Responsibility transferred
         ↓
Barista prepares Order
         ↓
Preparation verified
         ↓
Customer receives Product
         ↓
Order fulfilled
```

Each transition can be connected to a Process, Task, Role, Information object, or configured Mechanism.

If preparation starts before a required payment confirmation, the discrepancy should be detected. If an action is available to the wrong Role, it should be detected. If fulfillment is recorded without the required handover, it should be detected.

The approved model defines expected behaviour. The generated application produces observable behaviour. Independent verification compares the two.

This is stronger than simply generating a convincing user interface from a business description.

It is a model-derived application with **testable operational fidelity**.

## Improve the Model Without Surrendering Authority

Once operational execution produces reliable evidence, the enterprise model itself can improve.

An Operational Workspace might reveal that a Task repeatedly requires information missing from the current model, that an approval creates unnecessary delay, or that a configured Mechanism regularly fails acceptance criteria.

Such observations can become proposals:

```text
Approved World
      ↓
Operational Application
      ↓
Execution Evidence
      ↓
Deviation or Opportunity
      ↓
Proposed Model Change
      ↓
Human Review
      ↓
Approved Revision
      ↓
Regenerated Application
```

The governance boundary is essential. **Operational evidence should not automatically rewrite approved enterprise knowledge.**

Observed behaviour, accepted evidence, proposed improvements, and approved model changes are distinct decisions.

This creates a governed learning loop without losing control of the enterprise's own definitions.

## The Business Opportunity: Model-Driven Engineering Assurance

AI makes code, interfaces, workflows, and documents cheaper to generate. It does not make understanding the enterprise equally cheap, nor does it eliminate the cost of verifying complex behaviour.

This suggests an opportunity for **model-driven engineering assurance**.

An enterprise could use connected models to establish:

1. Which system should exist.
2. What work it must perform.
3. Which information, responsibilities, and rules apply.
4. Which mechanisms may execute the work.
5. What constitutes an acceptable result.
6. What evidence establishes actual compliance.

The deliverable would not merely be source code or an application. It would be connected enterprise knowledge, operational specifications, implementation artifacts, tests, and evidence.

This could be particularly useful in engineering-intensive and regulated domains where traceability matters.

The commercial proposition is:

**We do not only generate applications from enterprise models. We establish whether those applications faithfully implement the enterprise models.**

That is a stronger promise than faster software development. It is also a more demanding promise, requiring working implementations and measurable evidence.

## What Mimris Must Prove

The immediate priority for Mimris should not be another agent framework.

It should be independently repeatable evidence.

Mimris AI Workspace already has foundations for Semantic Context Resolution, Execution Contracts, validation, and execution evidence. These capabilities must now be evaluated together across the modelling-to-application lifecycle.

The Coffee Shop World is a useful reference case.

An evaluation should demonstrate that approved model references remain traceable; generated IRTV and TYPE conform to their constraints; UI components derive from approved definitions; runtime actions respect Role and Task authority; operational state survives expected transitions; and invalid behaviour cannot be accepted merely because an AI reports success.

The objective is not a claim of perfect correctness. No finite collection of tests can establish that a system satisfies every unstated or possible requirement.

The objective is to make requirements explicit, execution observable, and verification repeatable.

## Conclusion: The Model Becomes More Valuable as Execution Becomes Cheaper

AI is reducing the cost of generating software and performing complex engineering work.

But it is not eliminating the need to understand the enterprise.

It increases the value of defining intended work precisely enough that its implementation can be checked.

A powerful model cannot guarantee that an application represents the correct business Process. An autonomous agent cannot establish its own authority simply by completing an action. And a working application cannot prove its fidelity to enterprise intent when that intent is left implicit.

A connected AKM World can define the knowledge, work, responsibilities, constraints, and expected outcomes from which an application is generated. Independent verification can then determine how closely its structure and observed behaviour conform to those definitions.

The longer-term opportunity is an enterprise environment where modelling, execution, verification, and improvement form one traceable lifecycle.

**When AI makes execution cheap, the durable value moves toward defining the work, preserving its meaning, and proving that the resulting system does what the enterprise intended.**

The question is no longer only: **Can AI generate the application?**

It is:

**Can we prove that the generated application implements the right enterprise model—and continues to behave accordingly?**

## References

- [L&T Technology Services — SDVault.ai launch, 23 November 2026](https://www.ltts.com/press-release/launches-sdvault-ai). Company-reported features and pilot results.
- [Formalize or Lose It — research release, 23 November 2026](https://discuss.huggingface.co/t/research-release-formalize-or-lose-it-experimental-results-on-executable-oversight-in-agent-swarms/192381). Preliminary experimental work; findings are not an industry standard.
- [Formalize or Lose It — code, data, and reproducibility materials](https://github.com/nimayshah123/dar-executable-constraints).
