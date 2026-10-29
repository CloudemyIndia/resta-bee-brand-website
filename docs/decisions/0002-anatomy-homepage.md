# 0002 Anatomy homepage composition
Date: 25 October 2026. User-approved prototype and subsequent instruction to proceed.

## Context
The user requested a fresh homepage based on the supplied SEO positioning, combining warm futuristic materials, premium product presentation and restrained isometric storytelling. The approved visual prototype established the countertop's object family and SVG finish.

## Decision
Use a single Astro homepage component for content and composition, with build-time Anatomy geometry in a separate module. Use the approved station illustration and four explicit workflow controls. Visual details are documented in DESIGN.md; content/claim requirements remain in the standalone homepage SEO brief.

The Anatomy illustration is an explanatory synthetic scene. Menu-publication and collection examples must also remain labelled illustrative. Actual product captures can be substituted when approved, without representing invented UI as evidence.

## Rejected
The old landing page is not a design or copy requirement for this direction. A giant perspective-device showroom and generic revenue dashboard do not explain the restaurant handoff. A full realtime 3D engine, background video and continuous animation are unnecessary for the selected interaction and add avoidable performance cost.

## Consequences
Static SVG adds HTML/paint work even with little JavaScript; measure both. Keyboard/touch controls, reduced motion and static readable workflow content are required. The whole homepage can remain one Astro component; geometry and style separation should serve maintainability rather than impose a frontend framework.

## Supersession
None. This adds visual direction without replacing architecture/pricing decision 0001.
