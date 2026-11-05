
# Mimris Core Model Specification

## Purpose

This specification defines the core semantic structure of Mimris AI Workspace.

It explains how Mimris connects domain understanding, formal modelling, reusable work structures, project planning, and collaborative execution.

This specification is the conceptual authority for the Mimris layer model.

Execution UI behavior belongs in the Workplace and Workspace specifications and is out of scope here unless needed for semantic alignment.

## Versioned AKM authority (Phase 1 target)

The Versioned AKM Publication and Consumer Adoption Contracts are authoritative for the planned immutable baseline format. Dedicated source universes author foundation components; `akm-foundation` aggregates approved exact component publications; `akm-world-designer-method` authors Method publications against approved foundation sets; starters are generated from approved Method membership. The current scaffold remains authoritative until the contract's transition gates pass.

For explicitly versioned consumers, Origin is an immutable adopted/effective baseline, not a live reference to mutable source content. Current consumer definitions/models/blueprint remain World-owned; Workspace retains execution. Exact locks and explicit adoption replace mutable fallback semantics for that format only. This reuses the existing Universe/Origin/World/Workspace architecture and does not introduce a second execution model. Shared code upgrades never adopt newer Method/foundation content implicitly. Existing IDs and references are preserved; new identities use UUIDv4 through persisted mapping.

## Core Description

Mimris AI Workspace is a modelling and collaboration environment in which a Universe carries an `originWorld`, an active `workspace` generated or configured from the Origin World's blueprint, and an active subject `world` being observed, modeled, previewed, or realized.

Short form:

Mimris AI Workspace connects `originWorld`, its workspace-generating blueprint, the active `workspace`, a subject `world`, structured world modelling, blueprint derivation, and collaborative execution to support reflective world understanding, design, and realization.

## Model Hierarchy Purpose

The Mimris model hierarchy exists to turn AKM/Mimris models into generated **Operational Workspace Applications** for target-domain tasks.

The hierarchy preserves the current refinement chain:

`Domain Conceptual Description -> Domain Ontology -> Functional Structure (IDEF0) -> Work Context (IRTV) -> Task Patterns -> Project Plan -> Workspace Execution`

Each layer adds structure needed for generation, traceability, and validation. `Workspace Execution` is the operational realization layer of the generated Operational Workspace Application, while `Operational Preview` remains a validation and feedback mechanism used before final generation/export.

## Current Architectural Framing

The current repository is converging on a reflective AKM framing centered on a canonical `Universe -> originWorld + workspace + world` split. The `originWorld` provides the approved AKM source and blueprint for generating or configuring the current `workspace`; the `workspace` works on the active subject `world`; the subject World contains its definition, model, focus, and blueprint; and AI-assisted feedback flows back from preview/generated instances into review.

For the current AKM universe discussion, `Universe` and `World` must be kept distinct:

- `Universe`
  - the whole AKM reflective container
  - contains the inherited `originWorld`, active `workspace`, active subject `world`, and persistence metadata
- `World`
  - the subject being observed or designed through the workspace
  - contains `worldDefinition`, `worldModel`, `focus`, and `blueprint`

### Core Terms

- `AKM Universe`
  - the full reflective container for modeling, generation, configuration, and operational use

- `Origin World`
  - the inherited AKM source world carried by or referenced from the universe
  - has a blueprint that defines the basis for generating or configuring the current workspace
  - may itself be generated and promoted from an approved AKM World revision
  - contains lightweight world-definition guidance plus an `originRef` to the shared foundation source or approved AKM World revision
  - provides both provenance and configuration context to the active workspace and guide flows
  - is not itself the live runnable execution state
  - may include foundation models, templates, vocabulary, and method assumptions

- `Subject World`
  - the domain World opened and worked on through the current workspace
  - may represent the active `As-Is`, active `Ought-To-Be`, a candidate `To-Be`, or the selected `To-Be`
  - is exposed through the current singular runtime field `world`
  - is distinct from the `originWorld` that generated or configured the workspace

- `World Definition`
  - the early definition layer that establishes the intended world/app context
  - currently includes:
    - `Domain`
    - `Plan`
    - `Site Content`
  - `Domain` and `Plan` should carry the world's intent, purpose, goals, and dream
  - `Plan` is the authoritative overall plan from which more detailed plans and checklists may be derived
  - `Site Content` is a derived orientation and entry-content layer extracted from `Domain`, `Plan`, and other helpful universe information
  - `Site Content` should include:
    - a public landing page / homepage
    - a dashboard landing page with guidance for using the universe dashboard
    - starter guides
    - menus and navigation copy
    - helpful universe usage information

- `World Model`
  - the canonical modeled definition of the world
  - maintained through the AKM modeling method
  - evolves from product definition into richer modeled structures such as POPS, IRTV, TYPE, and related design outputs
  - in persisted server-storage shape, the target world's modeled structures belong under `world.worldModel`
  - models belong within `metis`

- `Foundation Universe`
  - a special shared universe root storing canonical foundation models and promoted baseline blueprint packages
  - referenced from ordinary universes through `originWorld.originRef`
  - should not be fully copied into every ordinary project manifest

- `Metis Selection`
  - Mimris may expose multiple metis-bearing model sources from the same universe
  - the canonical selectable locations are:
    - `world.worldModel.metis`
    - foundation-universe TYPE metis resolved via `originWorld.originRef`
    - foundation-universe TEMPLATE metis resolved via `originWorld.originRef`
  - default selection is `world.worldModel.metis`
  - fallback order when target-world metis is missing:
    - foundation-universe TYPE metis resolved via `originWorld.originRef`
    - foundation-universe TEMPLATE metis resolved via `originWorld.originRef`
    - legacy top-level `metis` only as compatibility fallback
  - legacy top-level `metis` is a transitional compatibility source and must not remain the preferred selector default when canonical locations exist
  - remote clients should open these model scopes through explicit scoped universe URIs
  - the canonical remote scope ids are:
    - `world-model`
    - `origin-type-foundation`
    - `origin-template-foundation`
  - see adr-mimris-remote-universe-metis-api.md

- `Operational Preview`
  - an intermediate operational projection of the process/task model
  - belongs conceptually to the target world's `Blueprint`, not to the `originWorld` or active `workspace`
  - renders `world.blueprint.operationalModel` for validation
  - supports two preview profiles:
    - `execution-app`, which compiles POPS activity structure and IRTV workplace realization into a simulated execution-app context and may require BPMN and TYPE overlays before app generation
    - `artifact-workflow`, which uses IRTV as the operational frame for mixed workflow-step previews of documents, models, traces, state records, decisions, generated outputs, and other artifacts that do not require TYPE/forms UI by default
  - currently exposes `Workspace`, `Flow`, and `Inspect` runtime modes for walkthrough and validation
  - should keep `Preview` in the name of the overall projection layer, but not necessarily in the inner runtime entities
  - distinguishes between:
    - global structural preview navigation (`Operations Map` / process tree)
    - local runtime app navigation (process/workflow/step switching inside the simulated app)
  - carries explicit preview trace metadata between POPS activity selection and the resolved IRTV workspace, rather than leaving that mapping implicit in the UI only
  - can project a lightweight simulated step screen from IRTV view/property bindings so the preview behaves like an early execution app, not only a structural model walkthrough
  - can also project read-only artifact surfaces from task/artifact/document/model bindings, using IRTV role, view, information, ICOM, and workflow context for navigation, overlays, traceability, and feedback
  - should treat workflow/task-pattern selection as a first-class runtime concept between process selection and step selection, rather than assuming one workplace always equals one workflow
  - therefore, a durable runtime entity name such as `OperationalWorkflow` is preferred over `OperationalPreviewWorkflow` for the compiled workflow/task-pattern layer
  - can also compile a workspace-specific role/task flow projection for BPMN-style walkthroughs separate from the broader inspect subtree
  - should also emit structured feedback items when a previewed execution surface implies a required design/model change
  - this feedback should enter a dedicated queue first rather than rewriting canonical design artifacts directly or immediately creating work items
  - planned to expand with organization, product, and service/system relations
  - may also include early mockups of the realization spec for walkthrough testing and early validation before full implementation

- `World Realization Spec`
  - the staged realization-definition layer derived from the world model and its operational projections
  - includes artifacts such as:
    - `Spec Document`
    - `Implementation Plan`
    - optional `World App Spec`
    - later app/specification outputs

- `World Instance`
  - a concrete generated and configured realization of the world
  - suitable for app/workspace operation, adaptation, deployment, and export

- `Feedback Item`
  - a captured and reviewed change signal flowing from a world instance back into the design side
  - may originate from `Operational Preview` validation before a full world instance exists
  - should preserve preview/workspace/task/role trace context so downstream review can target the correct design layer

### Canonical Universe Structure

The strongest current structure is:

`Universe`
↓
`originWorld + workspace + active subject world`
↓
`world.blueprint / Operational Preview / realization outputs`
↓
`Exported or realized instances`

More concretely:

1. `Universe`
   - metadata, shared workspace state, persistence container

2. `originWorld`
   - `originRef`
     - reference to the shared foundation universe or promoted origin blueprint package
   - `worldDefinition`
     - inherited domain, plan, and site guidance
   - `blueprint`
     - approved workspace-generation/configuration basis derived from an AKM World
   - gives provenance and configuration context to the active workspace

3. `workspace`
   - the active human and AI working environment
   - generated or configured from `originWorld.blueprint`
   - tracks active process/task/work-item state, context profiles, context values, attachments, collaboration threads, and system prompt state
   - works on the active subject `world`

4. `world`
   - `worldDefinition`
     - Domain
     - Plan
     - Site Content
   - `worldModel`
     - canonical modeled structures in `metis`
     - one semantic model may use named `Modelview` records to represent submodel perspectives without duplicating model objects; optional non-empty `allowedObjectTypeRefs[]` and `allowedRelshipTypeRefs[]` constrain creation palettes, while missing or empty arrays remain unrestricted
   - `focus`
     - active model/modelview/object/relationship focus for modeling and inspection
   - `blueprint`
     - `operationalModel`
       - previewable operational model for the next world
     - `operationalFeedback`
       - feedback queue from preview/testing
     - realization/spec outputs and implementation planning
   - this is the active subject World being inspected or designed through the workspace

5. `World Instance`
   - exported/generated realization when a selected To-Be World is materialized

### Reflective Lifecycle

This architecture is reflective, not only generative.

Downward flow:

- changes in the canonical design side update the derived realization structures and may affect generated world instances

Upward flow:

- changes arising in a world instance are captured as feedback and reviewed for possible generic adoption

The reflective loop is therefore:

`AKM World -> originWorld.blueprint -> generated/configured workspace -> workspace works on subject world -> worldDefinition -> worldModel -> world.blueprint.operationalModel / Operational Preview -> Feedback Item -> workspace review`

`artifact-workflow` previews follow the same reflective loop, but the previewed source remains the artifact, document, trace, or model output being inspected. The Operational Preview stores derived context, overlays, diagnostics, and feedback trace, not the canonical artifact content itself.

### Feedback And Change Classification

Instance-originated change should not automatically rewrite the canonical design.

Each `Feedback Item` should be reviewed and classified as one of:

- `Instance`
  - local to one world instance
- `Blueprint`
  - should improve the derived realization structure
- `World Model`
  - should improve the canonical generic model itself

Feedback review is intended to be AI-assisted, but canonical adoption remains review-driven rather than automatic.

For `Operational Preview` specifically, the current recommended flow is:

- capture structured preview feedback
- persist it in a dedicated preview/blueprint-side queue such as `world.blueprint.operationalFeedback`
- triage and classify likely target models or source artifacts (`POPS`, `IRTV`, later `TYPE`, or the relevant document/model/trace artifact)
- promote reviewed feedback into `operationalFeedback.opportunities[]` when it represents a model, AI model-generation prompt, generation-rule, or reusable platform improvement
- only then promote the item into a change request / work item if needed

An `Improvement Opportunity` is not the canonical model change itself. It is a reviewed decision record that preserves expected generated-workspace impact, proposed change, target layers, source feedback ids, diagnostics, and trace context so model edits and regeneration can remain auditable.

### Blueprint

The subject `world.blueprint` remains the structured realization basis generated from the selected To-Be World, especially from `world.worldModel`.

The architecture uses Blueprint recursively at two different reflective levels:

- `originWorld.blueprint` is the approved basis for generating or configuring the current Mimris workspace
- the generated/configured `workspace` works on the active subject `world`
- the subject `world` contains its definition, model, focus, and realization blueprint
- the subject `world.blueprint` contains the previewable operational model and feedback queue used to realize a World Instance

The two blueprint roles must remain explicit. An Origin World blueprint realizes a design Workspace; a subject World blueprint realizes the operational World Instance being designed.

The intended AKM production chain is:

`AKM Method / Model Authoring World -> approved subject-World Blueprint -> generated/promoted Origin World -> empty AKM starter -> new subject World`

The authoring universe remains the governed source of method/model changes and validation evidence. Generation promotes only reusable method structure, generic guided templates, structural metamodel definitions, and workspace configuration into the Origin World. Authoring/test model instances, generated outputs, example content, and Operational Preview data remain in the authoring universe and never become initial state for the new subject World.

### Subject-World Perspectives

`As-Is`, `Ought-To-Be`, and `To-Be` are governed roles of related subject Worlds inside one project Universe. They are not roles of `originWorld`, mutable labels on individual Metis models, or artifact review statuses.

Initial scope:

- one Universe represents one organization and one top-level Domain
- future subdomains may be introduced, but inherit the top-level World perspective until explicit subdomain overrides are specified
- exactly one subject World may be the active `As-Is`
- zero or one subject World may be the active `Ought-To-Be`
- multiple candidate `To-Be` Worlds may coexist
- zero or one candidate `To-Be` may be selected for realization
- the current singular runtime `world` resolves the subject World opened in the workspace; it may be any perspective, although mutation rules depend on its role

Perspective meanings:

- `As-Is`: the approved representation of the Domain as currently understood; inspectable and forkable, but not mutated in place
- `Ought-To-Be`: the current normative or ideal representation that guides evaluation and design
- `To-Be`: a realizable future scenario based on the active As-Is and optionally guided by the active Ought-To-Be

The Universe owns explicit assignments such as `activeAsIsWorldRef`, `activeOughtToBeWorldRef`, `selectedToBeWorldRef`, and `activeWorldRef`. Assignment changes preserve prior Worlds and assignment history. A World keeps immutable revision/provenance identity; `active` and `selected` belong to Universe-level assignments rather than to World content.

Lower model layers such as POPS, IRTV, BPMN, and TYPE inherit the perspective of their containing subject World. The first implementation must not assign independent As-Is/Ought-To-Be/To-Be roles to individual model entries. A coherent World revision is the comparison and promotion boundary.

Canonical relationships are:

- candidate To-Be `basedOnWorldRef` -> active As-Is World revision
- candidate To-Be `guidedByWorldRef` -> active Ought-To-Be World revision, when one exists
- selected To-Be -> `world.blueprint` -> Operational Preview -> generated World Instance

The current persisted singular `world.json` remains the active subject-World sidecar during migration. Multi-World storage, assignment history, and selection are planned extensions; loaders must retain compatibility with universes that contain only `worldRef` and no perspective assignments.

However, implementation and persistence should prefer explicit staged artifacts where precision matters, such as:

- world-definition artifacts (`Domain`, `World Ontology`, `Plan`, `Site Content`)
- `Operational Preview`, including early realization mockups for walkthrough testing
- world-design outputs (`POPS`, `IRTV`, `TYPE`, `META/SEED`)
- realization-spec artifacts (`Spec Document`, `Implementation Plan`)
- optional realization-spec app artifacts (`World App Spec`)
- realization artifacts (`Generated Code`, deployed `World Instance`)

Suggested persisted representations under this framing are:

- sparse project folders with:
  - `documents/`
  - `templates/`
  - `universe.json`
- canonical project manifest shape in:
  - `server-storage-manifest-spec.md`
- optional exported/generated instance artifacts outside the ordinary sparse project save path

### Export Semantics

- `Export Universe`
  - exports the reflective package needed for continued design, maintenance, and regeneration

- `Export World Instance`
  - generates and exports the concrete operational app/instance from the current `Operational Preview`
  - is not a copy of the source universe, `originWorld`, or design workspace

This means the universe remains the reflective authority, while the world instance remains the realized operational result. A world-instance export keeps provenance back to the source universe, world, preview, model ids, compiler/export version, and diagnostics, but it does not carry the source `originWorld` as an active runtime scaffold.

World app export follows a generation pipeline:

`world.worldModel -> Operational Preview -> World App Spec -> App Generation -> Generated World App / World Instance`

The app generation step is explicit. It adds the runtime infrastructure needed by the generated app, such as database/schema configuration, seed/demo data when selected, routes/navigation, role/auth configuration, persistence, and deployment/runtime settings.

With the current repository terminology:

- `metis` remains the repository term closest to the canonical modeled definition set.
- legacy `executionModel` remains accepted only as transitional load/import vocabulary while the repository migrates toward the canonical `originWorld` / `workspace` / `world` framing.
- the persisted server-storage manifest and the running canonical store should prefer `originWorld`, `workspace`, `world`, `world.worldDefinition`, `world.worldModel`, `world.focus`, and `world.blueprint.operationalModel` over raw transitional store terms.

## Layer Structure

Mimris follows a progressive refinement structure:

Universe
↓
originWorld
↓
workspace works on world
↓
world.worldDefinition
↓
world.worldModel + world.focus
↓
world.blueprint.operationalModel / Operational Preview / realization spec
↓
World Instance

Each layer builds on the previous one and introduces a more operational level of structure.

## Layer Definitions

### 1. World Definition

World Definition is the authoritative starting layer for a universe.

It defines the intended world/app before deeper structured model generation begins.

It includes:

- `Domain`
  - the canonical domain definition and scoping basis
  - should express intent, purpose, goals, and dream
- `World Ontology`
  - the formal conceptual structure of the world
  - canonical source is an ontology-role entry in `world.worldModel.metis.models[]`
  - may be previewed as Markdown for reading and review
- `Plan`
  - the authoritative overall plan for realization
  - detailed plans and checklists are derived from it
  - should also express intent, purpose, goals, and dream
- `Site Content`
  - derived orientation and entry content
  - includes homepage, dashboard landing content, starter guides, menus, and helpful usage information

Implementation alignment:

- `Domain Definition` remains the current repository term closest to `Domain`.
- World Ontology uses the Metis models contract and an explicit ontology metamodel; the earlier separate `world-ontology.json` proposal is superseded.
- `Plan` is authoritative; downstream detailed plans are derived.
- `Site Content` should be derived from authoritative sources rather than invented independently by default.

### 2. POPS World Model With IDEF0 / ICOM Semantics

The target authority and migration order are defined in IDEF0 ICOM and Mechanism Semantics: approved IDEF0 function ICOM will supersede POPS process ICOM, while POPS and recognized legacy task ICOM remain compatibility sources until explicit activation.

The primary structured world model is expressed through POPS, enriched by IDEF0 / ICOM semantics.

Current implementation phase:

- POPS remains the canonical source of hierarchical process structure used to generate IRTV and resolve stable IRTV `processRef` fields.
- ICOM remains anchored to POPS `Process` objects and supplies top-down functional context for leaf-process workplace generation.
- a separate first-class IDEF0 metamodel and generation stage are deferred; no current runtime or persistence flow may require one
- the future architecture may separate POPS world context from an IDEF0 functional model, but that separation must preserve stable process traceability and avoid creating unrelated duplicate process trees

POPS contributes the main object structure of the modeled world, including:

- processes
- organizations
- products
- systems / services

IDEF0 / ICOM contributes functional and dependency semantics across that structure:

- `Input`
- `Control`
- `Output`
- `Mechanism`

ICOM may connect:

- processes
- organizations
- products
- systems / services

This means the world model is not a pure process tree. It is a structured world model where processes and supporting objects are connected through functional semantics.

Execution alignment:

- process decomposition remains hierarchical
- ICOM may be defined at multiple levels and inherited downward
- executable work usually attaches to leaf or near-leaf processes
- supporting POPS objects should preferentially connect to operationally meaningful processes rather than only to the root

### 3. IRTV Workplace Model

IRTV derives the workplace interaction structure from the world model.

IRTV defines:

- `Container` workplace structure
- `subcontainer` workflow structure inside a workplace
- `Information`
- `Property`
- `Role`
- `Task`
- `View`

The intended mapping is:

- `Information` derives from ontology terms and world-model inputs/outputs
- `Role` derives from organizational responsibility and mechanism semantics
- `Task` derives from executable process structure and carries required binding to an executable work item through `taskRef`
- `View` shapes what information and context are relevant for a role performing a task
- `Property` defines the fields owned by an `Information` object and bound into role/task views

IRTV turns the structured world model into a workplace-capable interaction model.

Execution alignment:

- `Task` is derived from `IRTV`, similar to how `Process` is derived from `POPS`
- `IRTV` is the canonical authoring source for workflow/task-pattern structure
- a workplace may contain multiple workflows, represented canonically by `subcontainer` objects inside one `Container`
- every POPS-leaf-derived IRTV `Container` carries that leaf Process id in `processRef`; contained tasks inherit it, while a task may override `processRef` when one workflow intentionally crosses POPS leaf processes
- legacy `Task hasParentProcess <external POPS process id>` links remain explicit process-mapping authority during IRTV loading. Preserve these cross-model references without inventing local process objects; unrelated dangling links and links to excluded local BPMN objects remain filtered.
- every canonical IRTV `Task` must use a UUID `id` and required UUID `taskRef`; when the task realizes a concrete workspace work item, `workItemRef` carries that work item's stable application id without replacing the model-owned UUID identity
- IRTV direction-neutral task-to-information usage is expressed with `Task worksOn Information`; explicit `Task hasInput Information` and `Task hasOutput Information` preserve carried-forward input and produced output semantics. These links complement View-to-Property I/O and are retained during loading
- canonical IRTV information structure is expressed with `Information has Property`
- canonical IRTV `Property.name` is the concise field name within its owning `Information`; it must not repeat the owning Information name as a prefix (`Check ID`, not `Equipment Check Record: Check ID`)
- every canonical IRTV `Information` and `Property` has a non-empty, user-readable description of its business meaning; compatibility normalization may remove an owning-Information prefix and backfill a missing Property description before legacy or generated content is adopted as canonical
- canonical IRTV view-level input/output semantics are expressed with `View hasInput Property` and `View hasOutput Property`; `View hasInput Information` and `View hasOutput Information` must not be persisted
- workflow compilation should derive runtime `OperationalWorkflow` objects from IRTV rather than treating authored `taskPatterns` arrays as the long-term source of truth
- task-level execution bindings should carry resolved `Role`, `View`, and `Information`
- `ICOM` remains anchored to `Process`, not to `Task`
- when a current task/work-item record carries `ICOM`, it should be treated as a misclassified leaf process during migration
- `activities` remains a legacy compatibility term rather than the preferred canonical target term

### 4. TYPE Model

Function-level mechanism requirements resolve through the provider-neutral Mechanism Registry and Capability Resolution; provider/model identity is runtime binding data, not IDEF0, IRTV, or TYPE semantics.

TYPE generation refines the modeled and workplace structures into reusable typed realization structures.

TYPE draft normalization preserves explicit UUID identities for `Property` objects. Equal names alone do not authorize merging saved properties or redirecting their ownership, datatype, default or Modelview references. Authors may deliberately share one Property identity across EntityTypes; legacy symbolic duplicate repair must not collapse distinct UUID-backed properties during review.

For the canonical 4EM environment, the seven Domain-defined submodels are first-class operational scopes over one compact semantic core. The core ObjectTypes are `Goal`, `Problem`, `Rule`, `Concept`, `Process`, `Information`, `Actor`, `Role`, `Organisation`, `Resource`, `Product`, `Service`, `System`, and `Requirement`. Shared elements keep one identity across Modelviews: the Technical Components and Requirements Modelview reuses Goal, Problem, and System rather than defining `IS ...` or Component aliases. Published distinctions such as threat, opportunity, external process, material set, individual, organizational unit, non-human resource, component, and feature are represented by CORE_META Properties and notation presets, not separate 4EM EntityTypes. Concept attributes use CORE_META `Property`; `Property`, `Datatype`, `EntityType`, and `relationshipType` are never duplicated as 4EM palette types. The core defines no `isA` relationship because the endpoint ObjectType and its classification already express type identity. Normal semantics are direct lowerCamelCase relationships of CORE type `relationshipType`. They use the Relationship built-ins `name`, `description`, `cardinalityFrom`, `cardinalityTo`, `nameFrom`, `nameTo`, and `id`, without relationship classification Properties. `decomposesTo`, `relatesTo`, and `partOf` replace structural names such as `binaryRelationship`, `and`/`or` variants, and `partOfAnd`/`partOfOr`/`partOfXor`. `RelshipType` objects are reserved for definitions requiring additional modeled fields beyond the built-in Relationship structure. Reflective management types including `SubmodelDefinition`, `ModelSubmodel`, `SubmodelMembership`, `CrossSubmodelRelationship`, and `ViewpointDefinition` remain outside the core component palette.

This layer is responsible for introducing formal typed structures needed by downstream realization, specification, and app generation.

TYPE is also the realization boundary between technology-independent IRTV information requirements and the data structures available to the generated application. Existing database, API, file, or external schemas are imported into TYPE, not into IRTV.

META is the published runtime metamodel generated from approved TYPE and is used to create runtime domain models. OCIM is a separate platform-owned configuration metamodel and its populated configuration model for mechanism realization. The OCIM model exposes one populated `Config` Modelview containing ObjectViews for configuration objects and RelationshipViews for valid OCIM relationships; it does not create a separate MOMM Modelview. OCIM stores references to TYPE and provider TYPE properties in configuration fields; it does not contain copied concrete domain instances such as OrderItem or PaymentTransaction.

OCIM does not author task views or ICOM semantics. POPS, and later IDEF0, remains authoritative for generic enabling mechanisms and their relationships to functions. IRTV remains authoritative for tasks, role-facing views, and information inputs/outputs. Operational Preview derives its forms and ICOM panels from IRTV and the approved model suite, then resolves required runtime behavior through OCIM assignments and the runtime registry.

The first reusable operational-configuration vocabulary is platform-owned and contains:

- `MechanismConfiguration`: identifies a concrete realization of a generic ICOM mechanism through `mechanismRef`, plus its non-secret target reference, configuration version, and lifecycle status.
- `MechanismAssignment`: identifies the IRTV task, view, and I/O relationship to which an operation (`read`, `write`, `validate`, or `invoke`) applies.
- `uses`: connects a `MechanismAssignment` to its `MechanismConfiguration`. Both its OCIM relationship name and semantic `typeName` are `uses`; Preview continues to accept legacy `usesConfiguration` records during migration. This is an OCIM relationship, not a duplicated IRTV association.
- `writes`: connects a `MechanismAssignment` to a domain information object. Its relationship attributes carry `propertyRef` (the authoritative TYPE Property), `ioRelationshipRef` (the authoritative IRTV input/output relationship), `bindingMode`, and operation. The rendered form is, for example, `writes: Amount`; `Amount` is not a separate OCIM object or a distinct `writesAmount` relationship.
- Provider API/schema entities and properties are imported into the existing TYPE graph and retain provider, operation, source, and schema-version provenance. Direct mappings are relationships; merge/split/transform/concatenate mappings are first-class TYPE objects linked to their source and target properties. A dedicated TYPE Mapping Modelview arranges canonical properties on the left and provider properties on the right. OCIM may reference these mapping identities but does not duplicate mapping objects. Mappings supplement `writes` and must not replace the authoritative IRTV/TYPE target.

OCIM references ICOM mechanisms, IRTV tasks/views/I/O, and TYPE properties across model boundaries. It does not add domain relationships between business objects or redefine IRTV input/output semantics. The `Config` Modelview holds the presentation-only ObjectViews and RelationshipViews; icons, fill and stroke remain ObjectType/ObjectView presentation attributes.

These types belong to the stable OCIM configuration metamodel. They do not mutate Mimris's published TYPE-generated META and they do not need to appear as ordinary domain vocabulary in each TYPE model. Each OCIM records its source META identity and revision plus the configuration-metamodel version, so schema changes can trigger explicit mapping review. Secrets, credentials, and vendor connection values remain in secure runtime configuration outside TYPE, META, OCIM, MOMM, IDEF0, and IRTV.

TYPE realization uses three distinct model roles. These roles are not independent metamodels: every TYPE model must conform to the authoritative CORE metamodel and use its permitted object types, relationship types, properties, and constraints.

Runtime META is a generated realization, not another TYPE role. The authoritative transformation is Mimris's native **Generate META from TYPE** command, invoked while managing the approved TYPE model rather than through a separate AKM authoring task. A TYPE model may contain more than one root `Metamodel`; Mimris generates a separately selectable runtime META entry for each root while preserving their shared generation provenance. The OCIM task exposes **Generate Configuration Model** as the visible action: it consumes a matching published META when available, or recovers one provenance-marked META from the approved TYPE source when the persisted runtime catalogue is missing, then creates or updates the stable OCIM configuration metamodel and its mechanism-only configuration model with a populated `Config` Modelview. The action remains available for explicit regeneration. Operational Preview must test generated entries rather than treating the TYPE model or CORE_META as the target modelling language.

- `TYPE_LOGICAL`
  - derived from IRTV `Information` and `Property`
  - formalizes logical entities, properties, datatypes, relationships, identifiers, cardinality, defaults, enumerations, and validation
- `TYPE_PHYSICAL`
  - represents imported existing databases, APIs, files, or other physical schemas
  - records non-secret source/schema identity, physical entities, fields, operations, keys, relationships, and schema version
  - includes provider-provenance `EntityType` and `Property` objects imported into the shared TYPE model
- `TYPE_MAPPING`
  - represents canonical-to-physical mappings in TYPE; a dedicated Modelview presents both sides without creating a separate model
  - records transformations, composition/splitting, key and relationship mappings, null/default handling, access capabilities, data ownership, synchronization policy, confidence/review state, and unmapped requirements
  - imports provider `EntityType`/`Property` definitions into the existing TYPE graph with provider, operation, source, and schema-version provenance; simple mappings are relationships, while merge/split/transform/concatenate mappings are first-class TYPE objects linked to source and target properties

Generated applications may use:

- `native` realization, where storage is generated from `TYPE_LOGICAL`
- `mapped` realization, where existing structures are accessed through reviewed `TYPE_MAPPING` adapters
- `hybrid` realization, where mapped external structures are combined with generated local extension storage

IRTV remains authoritative for operational information needs. Physical mapping constraints must not silently rewrite IRTV; unresolved conflicts produce diagnostics or explicit refinement proposals. Connection credentials are runtime secrets and must not be stored in TYPE models.

CORE evolution rule:

- reuse existing CORE vocabulary for logical, physical, and mapping structures wherever it can express the required semantics
- distinguish TYPE roles and provenance through CORE-conformant model metadata rather than ad hoc persistent `typeName` values
- when a required TYPE capability cannot be represented by CORE, record a CORE capability gap and propose a reviewed CORE metamodel enhancement
- update the canonical CORE metamodel, validators, normalization, prompts, and compatibility rules before TYPE models persist or generate the new construct
- TYPE generation must not silently extend CORE or treat input-tolerated aliases as new canonical vocabulary

Canonical trace direction:

`POPS Process / ICOM -> IRTV Task / View / Information / Property -> TYPE_LOGICAL -> TYPE_MAPPING -> TYPE_PHYSICAL or generated native storage -> generated app element`

Implementation note:

- TYPE remains a first-class staged world-design output
- its detailed schema may evolve only within the current CORE metamodel or through an approved CORE metamodel enhancement
- TYPE output must conform to the CORE_META vocabulary used by the current foundation metamodel:
  - each TYPE draft model has exactly one domain-specific root `Metamodel` object
  - the root `Metamodel` directly `contains` only `EntityType` objects
  - information/class concepts are `EntityType`
  - every `EntityType` supplies presentation input that is placed on its synthesized TYPE `ObjectView`: six-digit hex `fillcolor` and `strokecolor`, positive numeric `strokewidth`, and a non-empty domain-appropriate `icon`; Mimris Generate Metamodel transfers those values to an `ObjectTypeView`, and the generated `ObjectType.typeviewRef` points to it; legacy TYPE models without presentation metadata remain readable
  - attributes/properties are `Property`
  - property value typing uses `Property` `isOf` `Datatype`
  - datatype enumerations/defaults use `Datatype` `hasAllowed` `Value` and `Datatype` `isDefault` `Value`
  - domain relationship semantics are direct `relationshipType` relationships between source and target `EntityType` objects
  - each domain `EntityType` has at least one direct relationship to another `EntityType`; the relationship uses a business verb that states the domain meaning
  - the relationship `name` is the semantic verb, for example `Actor` — `makes` → `Decision`
  - each such relationship is derived from the identically directed and named relationship between the corresponding IRTV `Information` objects; TYPE does not add independent relationship semantics
  - optional behavior/calculation/validation operations may use `Method`
  - non-core aliases such as `Entity`, `Attribute`, and `Relationship` are input-tolerated only as normalization aliases and must not persist as final `typeName` values
- TYPE generation should be compact: generated `modelviews` are omitted and synthesized by the app, while `Value` and `Method` objects are created only from explicit enum/default or behavior/method source semantics.
- TYPE normalization must not preserve a generic `Property` named `Relationships` or separate `RelshipType` objects; explicit domain relationship semantics belong in directly named `relationshipType` relationships between `EntityType` objects.
- Mimris runtime-META generation must not copy TYPE `Property` objects named `name`, `description`, or `id` (case-insensitive) onto generated ObjectTypes. These are intrinsic Mimris object fields; regeneration also removes legacy generated duplicates while preserving domain properties such as `Definition` and `Status`.
- TYPE object `name` values must be CamelCase with no spaces, for example `CustomerOrder` and `OrderLineItem`.
- Mimris **Generate Metamodel** transfers each EntityType TYPE `ObjectView`'s presentation into the generated `ObjectTypeView`; the generated `ObjectType.typeviewRef` points to that view. Model `ObjectView` records inherit each presentation field from the ObjectTypeView unless that individual field has an explicit non-empty ObjectView override.
- User-defined labels remain unchanged in authored models and Operational Preview. Generated OCIM object instances may use a deterministic label of at most 18 characters for both `name` and `typeName`; the full source type name is retained in the description. MOMM presents those objects through its ObjectViews. Reserved vocabulary and UUID/reference fields remain unchanged.
- A new object instantiated from a generated ObjectType defaults its object name and ObjectView name to the ObjectType name. Explicit non-empty instance names take precedence; import/render repair applies this fallback to legacy generated objects whose persisted names are blank.
- TYPE and other model-pipeline outputs must use UUID identifiers for models, objects, relationships, and all view records, including `modelviews[]`, `objectviews[]`, and `relshipviews[]`.
- Relationship records should use semantic `typeName`/`name` values. If no explicit relationship name is provided, `name` must default to `typeName`; ID-like names are not meaningful model names.
- BPMN is represented as canonical model JSON (`objects` + `relationships`) with participant/lane/task/event/gateway/data-object semantics, so model inspection and swimlane rendering work through the same Metis-style pipeline as POPS/IRTV/TYPE.

### 5. SEED Model

For the OSDU Seismic Interpretation integration, physical/reference and execution concerns are governed by OSDU Data Access, Versioned References, Lineage, and Controlled Publish. Operational Preview resolves and traces those requirements without external side effects under Operational Preview Mechanism Resolution and Trace.

`SEED` means `Seed Model`.

It replaces the earlier `MOTM` wording as the preferred term for instantiated metamodel-shaped seed content.

SEED content is reusable prefilled instance content that can be copied into generated apps/world instances, including:

- standard data
- prefilled task-pattern data
- other starter instance content

This means generation may involve both:

- deriving structure from the canonical world model
- copying/prefilling reusable seed content from `SEED`

### 6. World Realization Spec

World Realization Spec turns the world-design outputs into realization-ready specifications and plans.

This layer includes artifacts such as:

- `Operational Preview`
  - an intermediate operational projection of the process/task model
  - may include early realization mockups for walkthrough testing
- `Spec Document`
- `Implementation Plan`
- optional `World App Spec`
  - generated from the approved four-model suite: `POPS`, `IRTV`, `BPMN`, and `TYPE`
  - generated from the compiled `Operational Preview` realization, not from a universe copy
  - `POPS` drives operational coverage, app/module structure, and traceability to the world process map
  - `IRTV` is the executable base and drives workspaces, task/step structure, roles, views, information usage, and responsibility framing
  - `BPMN` is a required executable-flow overlay; it can disagree with IRTV, but disagreement is represented as diagnostics instead of silent correction
  - `TYPE` is a required data-semantics overlay; it hardens information/property meaning, record relationships, and validation hints without forcing the preview demo database into a strict generated schema
  - mapping starts with explicit ids/references and falls back to normalized-name inference only with diagnostics:
    - one major POPS branch -> one app module
    - one IRTV `Container` -> one workspace
    - one IRTV `Task` -> BPMN `Task`/activity when linked by `taskRef`, trace metadata, or inferred normalized name
    - one IRTV `Role` -> BPMN `Lane`/`Participant` when linked by role reference or inferred normalized name
    - one IRTV `Information` -> TYPE `EntityType`
    - one IRTV `Property` -> TYPE `Property`
  - Operational Preview compilation emits an `alignmentMap` with source/target ids, model/kind labels, confidence (`explicit` or `inferred`), and reason text for POPS->IRTV, IRTV->BPMN, and IRTV->TYPE mappings, including IRTV task-flow -> BPMN sequence-flow path entries with endpoint ids.
  - BPMN gateway/event traversal may compile into multiple executable `nextTaskChoices`; preview scenario navigation records the selected branch without rewriting the canonical model.
  - Both canonical `isFollowedBy` and legacy `sequenceFlow` BPMN edges participate in execution and alignment tracing. Explicit saved routes remain authoritative: normalization does not invent a second route through an isolated gateway based on serialized object order. Flow-less legacy lane recovery remains available.
  - A named TYPE mapping View scopes provider data to its explicit provider occurrences. Legacy recovery can add a single unambiguous populated provider subtree; multiple historical providers with the same direction are not combined.
  - phase-1 output should exist as both:
    - machine-readable `World App Spec JSON`
    - human-readable `World App Spec MD`
  - the generated app package should include app-generation configuration for database/schema, navigation, routes, roles/auth, persistence, seed/demo data, diagnostics, and deployment/runtime settings.
  - generated app packages should preserve provenance to the source universe/model/preview and should not copy `originWorld`, AKM designer tasks, design workspace state, or reflective modeling machinery as active runtime state.

This layer is where the world design becomes realization-ready without yet being the final running app.

### 7. World Instance

World Instance is the concrete generated and configured realization of the world.

It is the operational app/workspace result derived from the staged design and realization pipeline.

A World Instance supports:

- configuration
- execution
- adaptation
- deployment
- monitoring
- export

Within Workspace Execution:

- the Workbench is a task execution environment for manual and AI-assisted production
- execution context is grounded in the underlying world-model and workplace-model structures
- artifacts represent information used, produced, reviewed, or exchanged during execution
- deliverables may be compound products assembled from multiple artifacts produced across one or more tasks

## Modeling Outputs And Product-Universe Export

Modeling outputs are local-first artifacts in the current universe.

This means a modeling task should first persist its result as part of the current universe, where that result can be:

- reused as context for later modeling tasks
- reviewed or edited locally
- selected as input to a later product-universe export

The same modeling result may therefore play more than one role.

Examples:

- `Domain Definition` is:
  - a local modeling output artifact
  - a context source for later modeling tasks
  - a carried artifact in exported product universes

- `Manage Process Tree (POPS)` may produce:
  - a local model artifact such as `metis.json`
  - compiled runnable structure for an exported universe such as `processes.json` and `tasks.json`

Semantic rule:

- current-universe modeling outputs and exported product universes are distinct
- exported product/test universes should be materialized as separate universe roots
- exported universes should keep provenance linking them back to the source universe and source modeling outputs

## TODO: Artifact Lifecycle And Baseline Handling

The current repository is moving toward explicit runtime task-artifact handling rather than relying only on continuity pointers and inferred artifact state.

Planned direction:

- Treat baseline selection as a first-class runtime concept.
- Allow a runtime task/work-item to select a baseline from:
  - template
  - current artifact version
  - earlier artifact version
  - upstream artifact version
- Preserve artifact history by default when rebasing work.
- Add soft lifecycle state for artifacts:
  - `active`
  - `archived`
  - `deleted`
- Treat template reset/rebase as non-destructive baseline selection, not as artifact/version deletion.

See ADR:

- `adr-artifact-lifecycle-and-baseline-driven-work-handling.md`

## Complementary Role Of IDEF0 And IRTV

IDEF0 and IRTV serve complementary purposes.

- IDEF0 describes functional transformations.
- IRTV describes work interaction with information.

Together they connect:

- conceptual domain understanding
- transformation logic
- collaborative work structure

IDEF0 should not be treated as a substitute for IRTV, and IRTV should not be treated as a substitute for IDEF0.

## Traceability Principle

A central principle of Mimris AI Workspace is semantic traceability.

Operational elements should be traceable back to the World Definition.

Traceability chain:

Workspace Activity
↓
IRTV Task / View
↓
POPS Process with IDEF0 / ICOM semantics
↓
World Ontology Element
↓
World Definition

Traceability supports:

- consistency across projects
- reuse of knowledge structures
- explainable modelling
- structured AI assistance

## Implementation Alignment

The current repository implements this model only partially.

Current alignment:

- World Definition:
  - partially implemented through Domain Definition artifacts, planning-oriented documents, and emerging site-content/template assets
- World Ontology:
  - implemented experimentally as a Metis ontology-role model with local foundation revision governance; see `ontology-foundation-evolution-spec.md`
- POPS World Model With IDEF0 / ICOM Semantics:
  - partially represented through existing model/parity structures and generated POPS artifacts
- IRTV Workplace Model:
  - partially represented through existing model/parity structures and work-item semantics
- TYPE Model:
  - partially represented through model-generation pipeline structures
- SEED Model:
  - conceptually clarified, but not yet formalized as a first-class persisted layer under that final name
- World Realization Spec:
  - partially represented through specification, planning, and preview-oriented artifacts
- World Instance:
  - implemented through the current workspace and workplace UI/state model

Architecture alignment note:

- `metis` is the current repository term closest to the canonical model suite.
- `operationalModel` is the canonical term for instantiated and locally editable runtime structure.
- `executionModel` and legacy `domainModel` remain accepted only as load/import compatibility aliases during migration.
- Legacy aliases should be converted at load time and must not remain in the running Redux store.
- IDEF0 `icom` belongs primarily to POPS process structures and may semantically connect supporting world objects.
- Execution `task` should align more closely with IRTV semantics, while `workItem` is best treated as the runtime task-artifact work packet rather than as the task record itself.
- Runtime `workItem` context may be derived from a Task plus Artifact state rather than requiring a fully separate persisted collection during the migration.
- `Task` should converge toward definition-only structure:
  - process link
  - role/view/information bindings
  - template/context expectations
- `Task` should not remain the canonical owner of:
  - runtime `status`
  - embedded `inputContent`
  - embedded `draftContent`
  - process `ICOM`
- That derived runtime `workItem` context is responsible for artifact continuity concerns such as preferred version, current artifact binding, and source-task provenance.
- Runtime content should instead be held through `artifact` records and referenced from `workItem`:
  - baseline/input artifact
  - draft artifact
  - approved/output artifact(s)
- Temporary AI draft buffers are not durable modeling artifacts. A generated AI draft becomes durable only when saved as a draft artifact or approved as an output artifact. Refresh and cross-task navigation may clear unsaved AI draft buffers.
- The migration rule is:
  - `task/workItem + ICOM` -> `leaf process + task binding`
- Migration should prefer selector-based compatibility so UI surfaces consume semantic values rather than branching across old and new store shapes.
- Templates remain canonical `control` artifacts, but first-run execution may materialize a template-derived initial work artifact when no current artifact exists yet.
- Effective input/current-document resolution should therefore prefer:
  - explicit baseline/current artifact
  - existing draft/current work artifact
  - existing approved/output artifact when showing the saved result of a completed task
  - template-derived first-iteration seed artifact
- Runtime `documents` are now best understood as a derived compatibility view over `operationalModel.artifacts`; document and template bodies persist to repo markdown files, but the runtime semantic family is `artifacts`.
- See `adr-canonical-model-and-execution-universe.md` for the target architecture, minimal JSON shape, and migration plan.

Persistence alignment:

- The semantic model is currently realized through a combination of persisted repo artifacts and runtime workspace state.
- During a session, runtime Redux/application state is the working source of truth for interaction.
- Explicit save, load, import, and export flows bridge between runtime state and persisted repo/snapshot representations.
- The canonical server-storage manifest contract in `server-storage-manifest-spec.md` is a locked boundary for both Redux canonical shape and persisted `universe.json` shape.
- Canonical path ownership must not change unless the manifest spec is updated as part of the same intentional schema change.
- Backward compatibility aliases are load/import normalization only and must not be re-persisted as canonical fields.

This specification does not require that every layer already be implemented. It defines the intended semantic architecture and terminology for future implementation.

## Scope Notes

This specification defines conceptual meaning and layer relationships.

It does not define:

- detailed UI layout
- panel behavior
- modal behavior
- import/export mechanics
- persistence file formats
- implementation-specific data schemas

Those concerns belong in implementation and execution specifications.

### Canonical TYPE names

Canonical TYPE `EntityType.name` and `Property.name` use UpperCamelCase (PascalCase) without spaces, for example `LogSegmentName`, `SamplingStartIndex`, and `UnitOfMeasure`. Keep the readable wording in `displayLabel` when useful. Provider Properties retain exact source-schema names and paths. Renaming preserves object identity and mapping endpoints.

The TYPE save boundary enforces this convention for canonical EntityTypes and Properties on both validated saves and incomplete draft saves. AI normalization applies the same rule; provider schema names remain unchanged. Object IDs and relationship endpoints are preserved, and modelview occurrence labels follow the canonical names.

Relationship type names MUST contain only the semantic predicate (for example has, owns, produces, partOf). Never concatenate, prefix or suffix endpoint object type names; endpoint identities belong exclusively in from/to references. Reuse predicates across compatible endpoint pairs. Metamodel validation rejects endpoint type names embedded in predicates. Ontology palette types require icons and explicit Generalization links for inherited relationship availability.

## References to modeled entities

- Semantic references to modeled entities MUST be represented as typed relationships with stable endpoint IDs. This applies to ownership, responsibility, provenance, membership, dependency and mappings, including references across model boundaries.
- Generators and metamodel authors MUST NOT encode these connections as scalar attributes such as `ownerRef`, `sourceRef`, `parentRef` or comma-separated IDs when the referenced entity exists in the model graph. Such attributes hide connections from traversal, validation and diagrams.
- Attributes describe intrinsic values: descriptions, dates, quantities, aspects and external locators. A source document may carry its external URL or document identifier as an attribute; an entity supported by that modeled Source connects to it through a relationship.
- Metis structural fields remain explicit references: `typeRef`, `metamodelRef`, relationship endpoints, ObjectView/RelationshipView bindings and other serialization/presentation identities. They are storage structure, not substitutes for semantic relationships.
- An existing integration contract that requires an attribute reference is an explicit compatibility exception. It MUST document the target identity, why a relationship cannot yet be used, and its migration or adapter policy. Exceptions are not precedent for new metamodels.
- A relationship is the single authority for each semantic connection. Do not maintain a competing attribute copy. Derived compatibility fields must be generated from the relationship and must not be independently editable.
- Metamodel review MUST check reference-bearing attributes and reject undocumented semantic reference attributes. Relationship type names remain predicate-only; endpoint type names belong in endpoint references.

Implementation boundary: this is a normative authoring and review requirement. Existing reference attributes, including documented OCIM integration fields, require explicit compatibility review before migration; this specification update does not claim that all runtime validators or existing models already enforce the rule.

The semantic-reference contract applies to ALL model tasks, templates, prompt helpers and generation paths: POPS, IRTV, TYPE, BPMN, Ontology, OCIM/MOMM and generated metamodels. Shared developer guidance carries the rule even when a task uses a custom template. Task-specific prompts may add compatibility exceptions but may not silently weaken this contract.
