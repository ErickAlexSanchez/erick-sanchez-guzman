---
name: Portfolio
description: A commission card for Erick Alexander Sánchez Guzmán. Cream cloth label on charcoal wool, brass only as the pin.
colors:
  wool: "#1A1614"
  label: "#E7DCC8"
  thread: "#F3EADF"
  field-away: "#D4C4AE"
  ink-dim: "#D4C6B4"
  ink-dim-away: "#3E342C"
  brass: "#8C6A32"
  brass-ink: "#E0C48A"
  brass-ink-away: "#5C3F12"
typography:
  display:
    fontFamily: "Commissioner Variable, Segoe UI, sans-serif"
    fontSize: "clamp(2.5rem, 4.4vw, 4.5rem)"
    fontWeight: 640
    lineHeight: 0.92
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Commissioner Variable, Segoe UI, sans-serif"
    fontSize: "clamp(1.85rem, 3vw, 2.8rem)"
    fontWeight: 620
    lineHeight: 1.02
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Commissioner Variable, Segoe UI, sans-serif"
    fontSize: "clamp(1.55rem, 2.5vw, 2.15rem)"
    fontWeight: 620
    lineHeight: 1.12
    letterSpacing: "-0.03em"
  body:
    fontFamily: "Commissioner Variable, Segoe UI, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 430
    lineHeight: 1.5
    letterSpacing: "0"
  label:
    fontFamily: "Commissioner Variable, Segoe UI, sans-serif"
    fontSize: "0.95rem"
    fontWeight: 520
    lineHeight: 1.3
    letterSpacing: "-0.02em"
rounded:
  tag: "2px"
spacing:
  section: "1.7rem"
  study: "clamp(4.25rem, 11vh, 7.5rem)"
  label-pad: "1.6rem"
components:
  button-primary:
    backgroundColor: "{colors.wool}"
    textColor: "{colors.thread}"
    rounded: "{rounded.tag}"
    padding: "0.72rem 0.85rem"
  button-primary-hover:
    backgroundColor: "#2C241E"
    textColor: "{colors.thread}"
    rounded: "{rounded.tag}"
    padding: "0.72rem 0.85rem"
  button-choice:
    backgroundColor: "transparent"
    textColor: "{colors.wool}"
    rounded: "{rounded.tag}"
    padding: "0.18rem 0.4rem"
  button-choice-pressed:
    backgroundColor: "{colors.wool}"
    textColor: "{colors.thread}"
    rounded: "{rounded.tag}"
    padding: "0.18rem 0.4rem"
---

# Design System: Portfolio

## Overview

**Creative North Star: "The Commission"**

The page is one tailor's commission. A cream cloth label carries the name and stays put. The field behind the work is charcoal wool at night, and the light theme is the same commission turned to the uncut cloth. Brass is the pin: the stitch, the focus, and the notch that marks the section in view. Nothing else is allowed to be brass.

The reading column is an order book. About and the Elemental 4 years are short. The six decisions are far apart, each one a cut with its reason, its omissions, and the way to open the demo. The label is fixed on a wide screen and becomes a top bar on a narrow one.

**Key Characteristics:**

- One gothic, Commissioner, from the name down to the notes
- Two cloths only: the label and the field
- Depth is the label laid on the field, not a shadow
- The mail control is a charcoal tag with a brass stitch
- Motion is a 120ms snap of the cloth, and it stops when reduced motion is requested

## Colors

The palette is wool, basting thread, and one brass pin. Dark is the home cloth. Light swaps the field and leaves the label cream.

### Primary

- **Brass pin** (#8C6A32): the 1px stitch on the label edge, the mail tag, focus is a separate ink ring, and the empty notch. It is not body text.
- **Brass ink** (#E0C48A on wool, #5C3F12 on the away cloth): the case-study number and the list marker. Large enough, or dark enough, to clear the field.

### Neutral

- **Charcoal wool** (#1A1614): the home field, the mail tag, and the pressed choice.
- **Cream label** (#E7DCC8): the nameplate. It does not invert.
- **Basting thread** (#F3EADF): text on wool, and the text on the mail tag.
- **Uncut cloth** (#D4C4AE): the away field.
- **Dim thread** (#D4C6B4 on wool, #3E342C on the away cloth and on the label): secondary lines such as the repository locator and the place line.

### Named Rules

**The Pin Rule.** Brass marks the active notch, the stitch, and the number. It does not become a background wash.

**The Label Rule.** The nameplate stays cream in both themes. Theme changes the field.

## Typography

**Display Font:** Commissioner Variable (Segoe UI fallback)
**Body Font:** Commissioner Variable (Segoe UI fallback)

**Character:** One shop stamp. The name is heavy and slightly tight. The notes are the same face at text weight. There is no second voice and no monospace costume.

### Hierarchy

- **Display** (640, clamp 2.5rem to 4.5rem, line-height 0.92): the name, stacked on two lines.
- **Headline** (620, clamp 1.85rem to 2.8rem, line-height 1.02): About, Experience, Work, Contact.
- **Title** (620, clamp 1.55rem to 2.15rem, line-height 1.12): the decision headline. Measure stays near 28–40 characters wide before it wraps, and it may run to the reading measure.
- **Body** (430, 1.0625rem, line-height 1.5): the order book. Maximum measure 68ch.
- **Label** (520, 0.95–1.05rem): nav, legends, the repository line.

### Named Rules

**The One Face Rule.** Do not add a serif, a mono, or a second grotesque. Package names and ports stay in the same face.

## Layout

Wide screens: a fixed label `min(23rem, 36vw)` on the left, full viewport height, its own scroll if the ticket is taller than the window. The order book starts to the right of that label, with 1.6rem padding on top and a 68ch measure.

Narrow screens, at 800px and below: the name, role, availability, mail control, nav, and theme/language controls become a sticky top bar. City, phone, and LinkedIn sit under that bar and scroll away. Sections use `scroll-margin-top: 15rem` so an anchor clears the bar.

Sections stack with 1.7rem between About, Experience, and Work. Each case study then opens with `clamp(4.25rem, 11vh, 7.5rem)` above it. Space above a heading is larger than the space before the paragraph under it.

## Elevation & Depth

No shadows. Depth is the cream label lying on the wool, with a 1px brass stitch along the seam. The away theme keeps the same seam: a lighter label on a darker uncut cloth.

### Named Rules

**The Facing Rule.** Do not add a drop shadow, a glow, or a gradient to separate the label from the field.

## Shapes

Corners are 2px, the cut edge of a cloth tag. Notches are 0.48rem squares. The mail control and the pressed theme or language choice are rectangles with a 1px brass border. Links use a brass underline offset 0.18em. Focus is a 2px ink outline, 3px outside the control. On the label the outline is charcoal so it shows on cream.

## Components

### Buttons

- **Shape:** 2px radius.
- **Primary:** the mail tag. Charcoal fill, thread text, 1px brass border, padding 0.72rem 0.85rem. Hover fill #2C241E. No underline.
- **Choice:** theme and language. Transparent until pressed, then the same charcoal tag. Hover underlines the word.

### Navigation

Text links with a square notch. The notch fills brass when `aria-current="true"`. On a wide screen the list is vertical. On a narrow screen it wraps in a row. The current section is the last one whose top has crossed a line just under the sticky bar, or 28% of the viewport on a wide screen.

### Case study

A number, then the decision as a link to the local demo. The brand and repository sit under the headline, not above it. Three headings follow: why it matters, what this version leaves out, and how to open the demo. No card, no icon, no equal grid.

## Do's and Don'ts

### Do:

- **Do** keep the nameplate cream when the field changes.
- **Do** keep body text at 68ch and case studies separated by a deep gap.
- **Do** persist theme and language, with dark as the default when nothing is stored.
- **Do** leave case-study prose in English when the chrome is Spanish, and mark that prose `lang="en"`.

### Don't:

- **Don't** put a label above the name.
- **Don't** use a shadow, a gradient, or a second typeface.
- **Don't** turn the six decisions into equal cards.
- **Don't** invent a client, a metric, a quote, or a star count.
