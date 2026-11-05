# Can the AKM Designer Design Itself?

An application that helps people model a world could use the same approach to describe its own work.

That sounds like a loop: the designer creates itself, and then uses itself to improve itself. The idea is more practical—and more interesting—when we separate what the model can define from what the software must provide.

Mimris Modelling is the product for creating, exploring, and evolving structured models. In this article, **AKM Designer** means that modelling environment and the capabilities that support it. The proposal is that its own tasks, concepts, rules, and user experiences could be described in an AKM model, then used to guide how the designer is configured and improved.

This is a direction to explore, not a claim that the current product can generate or rewrite itself. Mimris already supports modelling and workspace capabilities, but a complete model-driven generation process is still being developed.

## Start with the work of modelling

The AKM Designer has work of its own. A modeller may create a concept, define a relationship, inspect a diagram, compare alternative structures, or check whether a model follows agreed rules.

Each activity has a purpose, information it needs, decisions a person makes, and a result. For example, adding a relationship involves choosing its meaning, identifying the concepts it connects, and checking whether the relationship is valid in that domain.

These are not merely buttons or screens. They are parts of the modelling work. An AKM model could describe the concepts involved, the tasks people perform, the constraints that apply, and the views that help them understand the result.

Once that understanding is explicit, it can become useful context for the designer itself.

## Let the model shape the designer

Imagine that the AKM Designer’s model describes a task called **Define a Relationship**. It could identify:

- the concepts that may be connected;
- the relationship type and its constraints;
- the information the modeller must supply;
- the checks that determine whether the definition is valid;
- the views that help someone inspect the change.

The product could use this definition to assemble parts of the experience: a task guide, an editing form, a diagram view, or validation messages. A modeller could then review the proposed experience against the intended modelling work.

This would not mean that every screen or line of code is generated from a model. Reusable software components would still provide the reliable editing, drawing, storage, and interaction mechanisms. The model would describe the domain and the intended work; software would interpret that description within defined limits.

The useful question is not “Can a model replace the designer?” It is “Which parts of the designer can be made clearer, more consistent, and easier to evolve by describing them explicitly?”

## A product that can inspect its own design

The stronger version of the idea is a feedback loop:

**Model the designer → Generate a proposed experience → Review it → Learn from use → Refine the model**

Suppose modellers repeatedly struggle to understand why a relationship is rejected. The product could record that as feedback. A person could decide whether the problem is unclear guidance, a confusing rule, or a missing capability. The relevant model or shared component could then be changed, and the resulting experience reviewed again.

The model would help connect a visible problem to the part of the design responsible for it. It could also help explain what a change affects and what should be tested before it is accepted.

AI could assist by summarizing feedback, suggesting a clearer task description, or proposing a model change. It should not silently change the rules of modelling or approve its own proposal. Domain experts and product engineers remain responsible for deciding whether the change is sound.

## Avoid the self-building paradox

“The designer builds itself” can suggest that a product must somehow generate every part of its own foundation. That is not necessary.

A practical system begins with a trusted foundation: software for storing and editing models, rendering views, enforcing permissions, and applying changes safely. The AKM model can then describe selected parts of the designer and guide the generation or configuration of experiences on top of that foundation.

This boundary matters. The product needs dependable mechanisms for interpreting a model; otherwise, the model would have to provide the very machinery needed to interpret itself. The foundation can be implemented and verified as software, while more of the product’s domain-specific behavior becomes model-described over time.

There is also a difference between the **design environment** and the **applications it helps create**. A generated operational application should preserve its connection to the source model, but it should not need to carry the designer’s editing workspace or reflective modelling machinery as active runtime behavior.

## Keep the loop governed

A self-describing designer could make change easier to understand, but it would not make every proposed change correct.

The product would still need:

- clear ownership of model semantics and shared components;
- validation before a model change is accepted;
- tests for generated experiences and their underlying software;
- a record of what changed, why, and who approved it;
- a way to return to a known-good version if an update fails.

AI can help people explore alternatives and prepare changes. It cannot establish that an alternative preserves the meaning of a model or is safe for production. That requires explicit criteria, technical verification, and human judgment.

## A model of the modeller

The AKM Designer generating parts of its own experience would be an example of Active Knowledge Modelling applied reflexively: using a model not only to describe an external domain, but also to make the modelling work itself more explicit.

The ambition is not an autonomous application that invents and approves its own rules. It is a product whose important concepts, tasks, constraints, and feedback can be inspected and improved through models—while a reliable software foundation and accountable people remain in control.

That is how the designer could help build a better version of itself: not by escaping engineering, but by making more of its design understandable, testable, and evolvable.
