---
name: RestaBee
description: Open-kitchen editorial hospitality with expressive type and legible order details
colors:
  paper: "#faf9f5"
  ink: "#242820"
  muted: "#62665d"
  orange: "#ff8a35"
  orange-ink: "#bd4817"
  orange-light: "#ffe7cf"
  line: "#dedfd5"
  dark: "#252b24"
  focus: "#a53c0e"
  ticket-paper: "#fffefa"
typography:
  display:
    fontFamily: "Display, sans-serif"
    fontSize: "clamp(48px, 5.7vw, 82px)"
    fontWeight: 650
    lineHeight: 1.03
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Display, sans-serif"
    fontSize: "clamp(38px, 4.4vw, 62px)"
    fontWeight: 600
    lineHeight: 1.08
    letterSpacing: "-0.035em"
  title:
    fontFamily: "Display, sans-serif"
    fontSize: "30px"
    fontWeight: 600
    lineHeight: 1.08
    letterSpacing: "-0.035em"
  body:
    fontFamily: "Body, sans-serif"
    fontSize: "16px"
    lineHeight: 1.6
  action:
    fontFamily: "Body, sans-serif"
    fontSize: "14px"
    fontWeight: 600
    lineHeight: 1.25
rounded:
  action: "7px"
  field: "6px"
  panel: "16px"
  panel-mobile: "12px"
  sheet: "10px"
  selector: "8px"
spacing:
  field-gap: "7px"
  panel-gap: "24px"
components:
  button-dark:
    backgroundColor: "{colors.ink}"
    textColor: "#fff"
    rounded: "{rounded.action}"
    padding: "14px 23px"
    typography: "{typography.action}"
  button-orange:
    backgroundColor: "{colors.orange}"
    textColor: "{colors.ink}"
    rounded: "{rounded.action}"
    padding: "14px 23px"
    typography: "{typography.action}"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.action}"
    padding: "14px 23px"
  field:
    backgroundColor: "{colors.ticket-paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.field}"
    padding: "10px 12px"
---
# Design System: RestaBee

## Overview

**Creative North Star: "The Open Kitchen"**

An open-kitchen editorial identity places restaurant work beside clear, expressive typography. Warm paper, green-tinted ink and orange connect hospitality imagery with practical order details. The supplied logo anchors the identity; generated restaurant scenes remain explicitly illustrative.

The system changes density with the material: generous space for the narrative, compact rows for an order or collection example. Dark operational passages belong to the brand palette; they do not define a separate dark-mode theme.

**Key Characteristics:**
- Locally hosted expressive display type and quiet body type.
- Warm hospitality imagery beside labelled operational examples.
- Tonal surfaces, restrained paper shadows and clear interactive selection.

The visual choice is recorded in [decision 0003](docs/decisions/0003-open-kitchen-homepage.md); the homepage expression belongs in [its surface brief](.impeccable/surfaces/home.md). Implementation and verification state belong exclusively in [STATUS](docs/STATUS.md).

## Colors

### Primary
Orange gives actions and selected workflow stages their energy. Orange ink carries accented words and small functional text on light backgrounds; orange light supports hover and selected-detail treatments.

### Neutral
Paper is the page canvas. Ink supports primary text and dark actions; muted supports explanatory text; line divides navigation, disclosures and rows. Dark supplies the operational passage. Ticket paper separates receipts and enquiry fields from their surrounding material. Focus is the dedicated outline color on light surfaces; orange outlines work within the dark passage.

**The Material Contrast Rule.** Keep each operational example's text, surface and divider colors together; reversing only its background breaks its material hierarchy.

## Typography

**Display Font:** Bricolage Grotesque Variable, locally hosted under the `Display` alias, with sans-serif fallback.

**Body Font:** Instrument Sans Variable, locally hosted under the `Body` alias, with sans-serif fallback. Both WOFF2 files use swap and are preloaded by the page layout.

**Character:** Broad, closely tracked display forms give restaurant language an editorial voice. Body type handles descriptions, controls and dense operational details without competing with the display face.

### Hierarchy
- **Display:** the frontmatter display role is the desktop hero; mobile uses `clamp(35px, 8.9vw, 62px)` with line-height (1.06).
- **Headline:** the frontmatter headline role establishes section hierarchy; individual compositions adjust its range to fit their measure.
- **Title:** display type identifies sections within operational examples and plans.
- **Body:** the base role supports reading; main introductory descriptions use (15–17px), with leading up to (1.8).
- **Action:** semibold body type distinguishes buttons. Compact sample captions and ticket metadata use smaller text, separate from persuasive copy.

**The Two Voices Rule.** Use display type for hierarchy and body type for instructions, labels and controls. Do not introduce a third display face.

## Layout

The shared container caps at (1328px), subtracting (112px) from the viewport for desktop gutters. At (701–1100px) it subtracts (64px); at (700px) and below it subtracts (40px); at (380px) and below it subtracts (32px). Narrative sections generally use generous vertical space, while order and publication examples have compact internal rows.

The header is sticky with an (80px) row, reducing to (70px) on mobile. Desktop navigation gives way to native disclosure navigation at (950px). Most paired content stacks at (700px); workflow controls become a two-column grid. The narrowest form stacks its paired fields at (380px). Preserve natural word spacing when hiding line breaks.

## Elevation & Depth

Depth follows physical paper and floating navigation. Large section backgrounds and most panels remain flat; fine dividers, tonal steps and rounded clipping separate them. Receipts may rotate slightly within an illustrative stage.

### Shadow Vocabulary
- **Order paper:** `0 14px 33px -17px #6c432b66` beneath the main ticket.
- **Kitchen slip:** `0 15px 22px -12px #101b1380` beneath the kitchen instruction.
- **Publication sheet:** `0 12px 22px -19px #3e3d2c40` beneath the menu sheet.
- **Mobile navigation:** `0 15px 24px -15px #26301f40` beneath the disclosure menu.

**The Paper Depth Rule.** Reserve illustrative paper shadows for paper objects and the navigation shadow for its overlay; do not apply them indiscriminately to content sections.

## Shapes

Large scenes, plans and enquiry panels use the panel radius, reducing to the mobile panel radius when stacked. Actions, fields and selector trays have their own smaller corners. Receipts are square paper with dashed separators; the main ticket has a serrated lower edge. Circular outlet initials and small status dots serve specific operational roles rather than a global pill treatment.

## Components

### Buttons
Compact, solid actions use the frontmatter variants. Dark actions turn to `#3c4538` on hover; orange actions to `#ff9e56`; outlined actions use a `#babfb2` border and `#e9ece2` hover background. Pointer hover shifts an arrow (3px); active actions move down (1px). Visible focus uses a (3px) outline with (5px) offset, inset for workflow buttons. Color and transform transitions last (.2s).

### Inputs / Fields
Visible labels sit above lightly bordered ticket-paper fields. Fields have a `#cfd2c4` stroke, with placeholders in `#73796a`. The textarea resizes vertically. Mobile field text is (16px), with a minimum field height of (46px). Browser validation and a custom blank-restaurant message support the draft form; there is no separate designed error banner or disabled variant to inherit.

### Navigation
A logo, restrained text links and compact demo action share the header row. The mobile menu uses native `details` and `summary`; choosing a link closes it, and Escape closes it and returns focus. Footer navigation remains a simple link row.

### Disclosures
FAQ rows use fine top and bottom dividers, readable body text and an inline SVG plus that rotates when open. They retain native disclosure behavior and visible keyboard focus.

### Workflow and term selectors
Button groups expose `aria-pressed`. Workflow uses orange selection; the subscription selector uses ink selection on a pale tray. Click, arrow keys, Home and End update selection and focus. The order narrative and price use polite live readouts. Keep illustrative data clearly labelled.

### Paper demonstrations
The order ticket, kitchen slip, publication sheet, floor tables and collection summary use domain-specific material, spacing and labels. They are authored examples rather than screenshots. The main ticket arrives once over (.7s), and selection changes its tilt over (.3s), using `cubic-bezier(.16,1,.3,1)`. Reduced-motion preferences disable animations and transitions, restore automatic scrolling and remove hover arrow motion.

### Enquiry handoff
The form prepares a reviewable email draft, then offers the email app and clipboard fallback. The result explicitly says the enquiry has not been sent. Field changes hide an old draft. Keep preparation, review and delivery distinct in both language and visual hierarchy.

## Do's and Don'ts

### Do:
- Do preserve the supplied logo and recognizable orange accent.
- Do label generated scenes and sample interfaces as illustrative.
- Do keep visible focus, keyboard selection and reduced-motion behavior.
- Do keep real amounts and commercial qualifiers together.

### Don't:
- Don't turn illustrative outlets, orders or scenes into customer proof.
- Don't substitute decorative dashboard controls for meaningful interactions.
- Don't imply an email draft has delivered an enquiry.
- Don't treat the dark operational passage as a dark-mode implementation.
