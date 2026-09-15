# The Coffee Shop World: An AKM Universe Proof

> Draft canonical article for `/examples/coffee-shop` and future editorial use.

A coffee shop is familiar enough to make the modelling method visible. Customers place orders. Employees prepare products. Payment, production, inventory, and service work depend on one another.

The Coffee Shop World is built in an AKM Universe as one connected progression. Each stage adds enough structure for the next one, so the Operational Preview is not designed separately as an application prototype. It is derived from the modelled World and its configured operational reality.

![Illustrated progression from Coffee Shop domain description to an Operational Preview](/assets/coffee-shop-world-progression-infographic.png)

```text
Domain Conceptual Description
  -> Domain Ontology
  -> POPS
  -> IDEF0 with ICOMs
  -> IRTV Workplaces
  -> TYPE
  -> OCIM instance configuration
  -> Operational Preview
```

## 1. Describe the Coffee Shop Domain

The journey starts with a **Domain Conceptual Description**: what a coffee shop is, what it is trying to achieve, and the vocabulary people use when they work in it. It describes the scope, rules, customers, products, orders, payment, drink preparation, service, inventory, and the environment in which the shop operates.

This is deliberately understandable before it is technical. It gives the model a shared meaning and makes later choices traceable to the business situation they are intended to improve. People can use AI to help synthesize interviews, procedures, and existing material into a first draft, but the domain description remains a reviewed expression of the business understanding.

## 2. Make Meaning Explicit in the Domain Ontology

The **Domain Ontology** turns the conceptual description into explicit concepts and semantic relationships. In the Coffee Shop World, this can include Customer, Order, Order Line, Product, Drink, Payment, Barista, Shift, Coffee Bean, and Inventory Item.

For example, a Customer places an Order; an Order contains Order Lines; an Order requests Products; a Payment settles an Order; and a Barista prepares a Drink. AI can help propose relationships or identify inconsistent terminology, while people review and adopt the resulting ontology. The ontology then ensures that the same concepts are understood consistently across process models, workspaces, data structures, and operational views.

## 3. Organize the World with POPS

**POPS** brings together the Processes, Organization, Products, and Systems that shape the coffee shop. It identifies the store flow and its participants: customers and staff; products such as drinks and food; and systems such as a point-of-sale service, payment service, inventory source, or kitchen display.

POPS connects the semantic vocabulary to the operating environment. It makes it possible to ask not only “what is an Order?” but also “which process handles it, who is responsible, which product is being delivered, and which systems are involved?” AI can help analyze existing procedures, system descriptions, and data sources, but the resulting model remains grounded in the people and systems that actually operate the shop.

## 4. Model Work with IDEF0 and ICOMs

The **IDEF0 process model** describes how the work is performed. Activities such as *Take Order*, *Accept Payment*, *Prepare Drink*, *Hand Over Order*, and *Replenish Stock* can be decomposed until the required work is sufficiently concrete.

Each activity uses ICOMs to show its operational context:

- **Inputs** are what the activity works on, such as an order or selected product.
- **Controls** govern the work, such as recipes, pricing, food-safety rules, and customer requests.
- **Outputs** are what the activity produces, such as a paid order, prepared drink, receipt, or updated stock position.
- **Mechanisms** are the people, systems, equipment, and services that enable the work.

For *Prepare Drink*, a paid order may be the input; the recipe and quality standard are controls; the completed drink is the output; and the barista, espresso machine, grinder, order display, and ingredients are mechanisms. AI can help draft or check the ICOM description, but people validate the controls, responsibilities, and intended outcomes. This makes the process model more than a sequence of boxes: it captures what work needs and what it produces.

## 5. Derive IRTV Workplaces from Leaf Activities

When an IDEF0 activity reaches a leaf level, it can provide the basis for an **IRTV Workplace**. A workplace brings together the Information, Roles, Tasks, and Views required to carry out that specific area of work.

The *Prepare Drink* workplace, for example, can give a Barista the active order, recipe, allergy notes, quality controls, preparation tasks, and a view of order status. The *Take Order* workplace can give a cashier or service employee the menu, customer request, pricing rules, payment task, and order-confirmation view.

The workplace is therefore an execution-oriented view of a modelled process, not a separate design exercise. It gives both the person performing the task and any AI assistance the right model-derived context: the activity, its ICOMs, information, role, task, and view.

## 6. Define the Information with TYPE

The **TYPE model** defines the structured information the workplaces and tasks manipulate: types, properties, and relationships for Orders, Payments, Products, Drinks, Employees, Equipment, and other operational objects.

TYPE provides the reliable shape for the data behind a task view or form. An order-status view can therefore use defined Order and Order Line relationships; a drink-preparation checklist can refer to product, recipe, and allergy properties; and a document or AI-assisted task can draw on the same modelled information rather than an isolated template.

## 7. Configure Concrete Resources in OCIM

The **OCIM model** bridges abstract design and a configured operational World. IDEF0 Mechanisms and TYPE definitions state the kinds of capability that work requires. OCIM configures the concrete instances that are actually available and assigns them to the tasks and workplaces they support.

For the Coffee Shop World, that means configuring specific baristas, espresso machines, POS terminals, grinders, payment services, order displays, inventory sources, and other resources from their mechanism or type definitions. Each instance can carry its relevant properties and configuration: a barista's role or shift, an espresso machine's location and supported settings, a POS terminal's store and connection, a grinder's calibration, or a payment service's supported payment methods and integration details.

Those configured instances are then assigned to the relevant work. A particular barista and espresso machine can support the *Prepare Drink* workplace; a particular POS terminal and payment service can support *Take Order* and *Accept Payment*. AI assistance uses that assignment as context; it does not invent resources or bypass the systems, integrations, access arrangements, and human responsibilities governing the task. This is how abstract mechanisms become usable, accountable resources in a real operational setting.

## 8. Generate an Operational Preview

The **Operational Preview** is derived from the connected models and configured instances. It can generate task views, forms, checklists, documents, status and progress, and AI-assisted actions that use the relevant process, workplace, information, controls, and assigned resources as context.

For a barista, this might be a preparation view with the current order, recipe, equipment, checklist, and completion status. For a supervisor, it might be a view of operational progress, exceptions, and available resources. AI assistance is embedded in these views and tasks wherever it is useful: it can explain a recipe or allergen control, summarize a handover, identify missing information, draft a stock request, or prepare a customer-facing update from the relevant modelled context. The human directs the work, checks suggestions against the controls, decides what to do, and approves the result.

![Human and AI embedded across every stage of the World, with feedback from operational work into improvement](/assets/human-ai-across-world-infographic.png)

## Top-Down Intent, Bottom-Up Reality

The Coffee Shop World works in both directions. Top-down modelling expresses the future intent:

```text
Domain -> Ontology -> Process -> Workplace -> Task
```

Bottom-up modelling captures the existing reality that the future design must adapt to: current systems, equipment, data, integrations, documents, and working practices. A shop may already have a POS platform, particular espresso machines, a payment provider, spreadsheets, supplier data, and established ways of working. These are not ignored; they are understood, represented where relevant, and connected to the intended World.

Work also feeds knowledge back upward. Human and AI execution produces results, decisions, and evidence about how work was actually performed. That learning can improve the processes, workplaces, types, and configurations over time.

The point is not the coffee shop itself. It is the continuity from domain understanding to model structure, configured resources, and contextualized human + AI action.

**Canonical links:** [Coffee Shop World](https://mimris-site.vercel.app/examples/coffee-shop) · [Mimris Modelling](https://mimris-site.vercel.app/products/modelling) · [Mimris AI Workspace](https://mimris-site.vercel.app/products/ai-workspace)
