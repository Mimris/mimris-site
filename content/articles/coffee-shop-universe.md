# From Domain Understanding to Operational Work

> Draft canonical article for `/examples/coffee-shop` and future editorial use.

Understanding a world starts with the work people are trying to do. We use a coffee shop as an example because it is familiar while still containing the essential elements of operational work. Customers place orders, employees prepare products, and payment, production, inventory, and service depend on one another. This provides a concrete setting for seeing how a connected model grows from shared understanding into operational work.

The article follows that progression from shared understanding to useful work. Each stage adds enough structure for the next one. The Operational Preview is therefore not designed as a separate application prototype; it is derived from the modelled World and its configured operational reality.

![General modelling journey from understanding a coffee shop domain to an operational preview](/assets/coffee-shop-world-progression-general.png)

```text
Understand the domain
  -> Define concepts and boundaries
  -> Structure the process tree
  -> Design workplaces and workflows
  -> Define the operational model
  -> Generate an operational preview
```

## 1. Understand the Domain

The journey starts by describing what the coffee shop is, what it is trying to achieve, and how people talk about the work. The description establishes the scope: customers, products, orders, payment, preparation, service, inventory, and the surrounding environment.

This first step should be understandable before it is technical. It creates shared meaning and makes later choices traceable to the business situation they are intended to improve. People can use AI to synthesize interviews, procedures, and existing material into a first draft, but the domain understanding remains a reviewed expression of the business.

## 2. Define Concepts and Boundaries

Next, the important concepts and their relationships are made explicit. A Coffee Shop World may include Customer, Order, Order Line, Product, Drink, Payment, Barista, Shift, Coffee Bean, and Inventory Item.

A Customer places an Order. An Order contains Order Lines. An Order requests Products. A Payment settles an Order. A Barista prepares a Drink. These relationships give the rest of the model a common vocabulary.

In Mimris, this stage is supported by domain ontology and context definitions. The specific terminology matters, but the general purpose is simple: decide what the concepts mean, where they belong, and how they relate to one another. AI can suggest relationships or identify inconsistent terms; people review and adopt the result.

## 3. Structure the Process Tree

The process tree organizes the work and the capabilities of the coffee shop. It shows how broad responsibilities such as serving customers, preparing products, handling payment, and replenishing stock are related and can be decomposed into more concrete activities.

For example, the tree can lead to activities such as *Take Order*, *Accept Payment*, *Prepare Drink*, *Hand Over Order*, and *Replenish Stock*. It helps answer a practical question: what work must exist for the coffee shop to achieve its purpose?

Mimris currently represents this process-oriented structure through **POPS**. POPS is therefore a formal implementation term for a broader idea: organizing processes together with the people, products, and systems that surround them. The general concept comes first; the notation can evolve without changing the underlying process structure.

## 4. Design Workplaces and Workflows

A process tree explains what work exists. A workplace explains how a person or team can carry out one part of that work. A workflow explains the ordered path through activities, including what happens next, what information is needed, and where decisions or handovers occur.

The *Prepare Drink* workplace can give a Barista the active order, recipe, allergy notes, preparation tasks, quality controls, and a view of order status. The *Take Order* workplace can give a cashier the menu, customer request, pricing rules, payment task, and order-confirmation view.

In Mimris, **IRTV** is the formal structure used to describe information, roles, tasks, and views in a workplace. More detailed process notation such as **IDEF0** and **ICOMs** can describe what an activity receives, what controls it, what it produces, and which people or systems enable it. These are supporting notations for the broader workplace and workflow concepts.

Human and AI task execution is present across these workplaces rather than being a separate step. AI can help explain a procedure, identify missing information, or prepare a draft, while the person remains responsible for direction, review, and approval.

## 5. Define the Operational Model

The operational model brings together two closely related questions:

- What information exists, and how is it structured?
- Which concrete resources are available, and where are they used?

![Information and resources combining into an operational model and contextual human work](/assets/coffee-shop-operational-model-infographic.png)

### Information

Information includes Orders, Products, Payments, Drinks, Employees, Equipment, properties, and relationships. It gives a task view or form a reliable shape and allows different workplaces to refer to the same meaning rather than inventing isolated fields.

In Mimris, **TYPE** is the formal model used for this information structure. TYPE defines the kinds of things, their properties, and their relationships. An order-status view can therefore use defined Order and Order Line relationships, while a preparation checklist can refer to product, recipe, and allergy properties.

### Resources

Resources are the concrete people, equipment, systems, and services that make the work possible. The model can describe an Espresso Machine as a kind of resource; the operational configuration identifies the actual machine in the shop, its settings, and the workplace where it is used.

In Mimris, **OCIM** provides the formal configuration layer for this reality. It connects abstract capabilities to concrete instances and assignments: a particular Barista and espresso machine can support *Prepare Drink*, while a particular POS terminal and payment service can support *Take Order* and *Accept Payment*.

TYPE and OCIM are therefore presented together here because both contribute to the operational model, while retaining their different responsibilities: TYPE describes information semantics; OCIM configures concrete resources and their assignments.

AI assistance uses this modelled context. It does not invent resources, bypass integrations, or replace the access arrangements and human responsibilities governing the work.

## 6. Generate an Operational Preview

The Operational Preview is derived from the connected models and configured resources. It can generate task views, forms, checklists, documents, status and progress, and AI-assisted actions that use the relevant process, workplace, information, controls, and assignments as context.

For a Barista, this might be a preparation view with the current order, recipe, equipment, checklist, and completion status. For a supervisor, it might be a view of progress, exceptions, and available resources.

AI can explain a recipe or allergen control, summarize a handover, identify missing information, draft a stock request, or prepare a customer-facing update. The human directs the work, checks suggestions against the controls, decides what to do, and approves the result.

## Top-Down Intent, Bottom-Up Reality

![Top-down intent and bottom-up reality connected through operational work and continuous model improvement](/assets/coffee-shop-top-down-bottom-up.png)

The Coffee Shop World works in both directions. Top-down modelling expresses future intent:

```text
Domain -> Concepts -> Process Tree -> Workplace -> Workflow -> Operational Model
```

Bottom-up modelling captures the existing reality that the future design must adapt to: current systems, equipment, data, integrations, documents, and working practices. A shop may already have a POS platform, espresso machines, a payment provider, spreadsheets, supplier data, and established ways of working. These are not ignored; they are understood, represented where relevant, and connected to the intended World.

Work also feeds knowledge back upward. Human and AI execution produces results, decisions, and evidence about how work was actually performed. That learning can improve the process tree, workplaces, information, and resource configuration over time.

The point is not the coffee shop itself. It is the continuity from domain understanding to model structure, configured resources, and contextualized human + AI action.

**Canonical links:** [Coffee Shop World](https://mimris-site.vercel.app/examples/coffee-shop) · [Mimris Modelling](https://mimris-site.vercel.app/products/modelling) · [Mimris AI Workspace](https://mimris-site.vercel.app/products/ai-workspace)
