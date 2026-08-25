# Portfolio Website Plan

## Summary

Create a responsive, single-page portfolio presenting Angshuman Halder as a Lead Frontend Engineer specializing in AI products and complex B2B platforms.

Use native HTML, CSS, and minimal JavaScript—no framework, package manager, dependencies, build step, backend, analytics, or contact form.

During implementation, build two switchable visual prototypes around identical content:

- Editorial minimal: light, typography-led, spacious.
- Technical dark: dark, precise, subtly code-inspired.

## Content and Experience

- Opening section:
  - Name and Lead Frontend Engineer title.
  - Concise positioning around AI products, frontend architecture, and data-intensive B2B applications.
  - Links to selected work and contact information.
- Selected work:
  - Primary VoC case study covering versions 1.0, 1.5, and 2.0.
  - Outcomes: standalone product evolution, positive customer feedback, scalable data flow, performance work, legacy cleanup, and junior mentoring.
  - Additional highlights for Alerts UI, Conversation Tag v3, and AI-quality feedback workflows.
  - Prominent NDA note explaining that sensitive details and visuals are omitted.
- Leadership:
  - Frontend ownership across VoC, Metrics, Surveys, and related AI products.
  - Cross-pod collaboration, mentoring, interviewing, standardized hiring evaluation, and frontend lifecycle documentation.
- Experience and capabilities:
  - Concise career summary rather than a full résumé transcript.
  - React, TypeScript, Redux, Node.js, Python, SQL, MongoDB, and Go.
- Contact:
  - Email, LinkedIn, and GitHub.
  - No résumé download until the document is updated and privacy-reviewed.
- Footer:
  - Copyright using the current year and a short note that the site is built without a framework.

## Implementation

- Create one semantic `index.html`, one `styles.css`, and only the small amount of JavaScript needed to switch between the two prototypes.
- Keep all portfolio content shared; visual switching must not duplicate or alter the information.
- Provide an accessible theme-direction control labeled “Editorial” and “Technical.”
- Use system fonts, CSS custom properties, fluid type with `clamp()`, responsive grid/flex layouts, and a constrained readable content width.
- Make the navigation compact and sticky where space permits, with anchor links to Work, Leadership, Experience, and Contact.
- Add restrained transitions while honoring `prefers-reduced-motion`.
- Ensure visible keyboard focus, sufficient contrast, semantic headings, descriptive links, and touch targets of at least 44px.
- Use no stock imagery or fabricated product screenshots. Visual character will come from typography, spacing, borders, restrained gradients, and abstract CSS decoration.
- Keep employer/product claims limited to the supplied résumé and promotion evidence; do not invent metrics, customer counts, revenue impact, or confidential implementation details.
- Include standard metadata: title, description, canonical placeholder, Open Graph fields, theme color, and responsive viewport.
- Deployment remains platform-neutral so the folder can later be hosted directly on GitHub Pages, Cloudflare Pages, Netlify, or equivalent static hosting.

## Design Workflow

Keep the three design resources in distinct roles rather than combining their instructions:

1. Select one VoltAgent reference that can support both prototypes, then copy it into the project as `DESIGN.md`. Record any prototype-specific departures in that file instead of adding a second design system.
2. Use `design-taste-frontend` while implementing the shared page and both visual variants.
3. Use `web-design-guidelines-pinned` only after implementation as the final accessibility and interface-quality audit; resolve findings without expanding the site scope.

Before implementation, confirm both global skills are installed and discoverable, and record the VoltAgent source URL and commit hash in `DESIGN.md`. Do not fetch mutable design instructions during implementation or audit.

## Delivery Sequence

1. Content pass: map every public claim to the résumé or promotion evidence, reduce overlapping evidence into one concise statement, and flag anything confidential for omission.
2. Design reference pass: choose and pin the single VoltAgent reference, then define the shared typography, spacing, color, border, and motion rules for Editorial and Technical modes in `DESIGN.md`.
3. Build pass: create the semantic shared content first, add the Editorial presentation, then express Technical as CSS-variable and presentation overrides.
4. Audit pass: run the pinned Vercel guidelines review, complete the manual checks below, and fix only verified issues.

The implementation gate is an approved content outline with source-backed wording and confirmed public contact links. No visual build should begin from inferred résumé details.

## Current Roadmap

Complete the remaining work in this order:

1. Update the résumé with the Lead Frontend Engineer position and current work. **Completed.**
2. Polish the public GitHub projects `Orbita`, `orgcal`, and `Ferride`. **Orbita and Orgcal completed; Ferride CI fix in progress.**
3. Add only the polished, repository-backed projects to a separate portfolio section. **Implemented; final visual review in progress.**

`Klara` is explicitly excluded because reaching a presentable level would take too long. `Rustle` remains a GitHub-only tutorial-inspired learning project. The featured project set is Orbita, Orgcal, and Ferride.

## Verification

- Check layouts at approximately 320px, 768px, 1024px, and 1440px widths.
- Confirm both visual variants work without horizontal overflow or content differences.
- Verify keyboard navigation, focus visibility, heading order, contrast, reduced-motion behavior, and readable text scaling.
- Test all section anchors, email, LinkedIn, and GitHub links.
- Validate HTML and CSS and confirm the browser console has no errors.
- Confirm the page remains readable if JavaScript is disabled; the editorial version will be the default fallback.

## Assumptions

- Level AI and Voice of the Customer may be named publicly; confidential screenshots and technical details will not be included.
- The site will use a single page and English content.
- Editorial minimal will be the default visual direction; the technical-dark prototype remains available for comparison.
- Contact details will include the email, LinkedIn, and GitHub URLs from the supplied résumé, but not the phone number.
- Domain purchase, deployment, analytics, a CMS, and a contact form are deferred until separately requested.
