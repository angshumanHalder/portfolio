# Portfolio Design Skills Installation Plan

## Summary

Install two global Codex skills and use VoltAgent’s design library only inside the portfolio project:

1. `design-taste-frontend` from [Taste Skill](https://github.com/Leonxlnx/taste-skill).
2. A locally pinned version of [Vercel Web Design Guidelines](https://github.com/vercel-labs/agent-skills/tree/main/skills/web-design-guidelines).
3. One selected `DESIGN.md` from [VoltAgent’s library](https://github.com/VoltAgent/awesome-design-md/tree/main/design-md), copied into the portfolio project rather than installed globally.

## Installation

- Review each downloaded `SKILL.md` and supporting file before placing it under `~/.codex/skills`.
- Install Taste Skill using Codex’s bundled GitHub installer:

  ```sh
  python3 ~/.codex/skills/.system/skill-installer/scripts/install-skill-from-github.py \
    --repo Leonxlnx/taste-skill \
    --path . \
    --name design-taste-frontend
  ```

- Create `~/.codex/skills/web-design-guidelines-pinned/` containing:
  - A concise `SKILL.md` adapted from Vercel’s upstream skill.
  - `references/guidelines.md`, holding a reviewed snapshot of Vercel’s current rules.
  - Instructions that read the local snapshot instead of fetching mutable instructions during every audit.
- Validate the pinned skill:

  ```sh
  python3 ~/.codex/skills/.system/skill-creator/scripts/quick_validate.py \
    ~/.codex/skills/web-design-guidelines-pinned
  ```

- Restart Codex or begin a new turn so the newly installed skills are discovered.

## Portfolio Integration

- During implementation, inspect VoltAgent’s available design systems and select the closest match for each planned visual prototype.
- Copy the selected reference into the portfolio root as `DESIGN.md`.
- Use `design-taste-frontend` while creating the interface.
- Use `web-design-guidelines-pinned` as a final accessibility and interface-quality audit.
- Keep `DESIGN.md` project-specific so unrelated projects do not inherit the portfolio’s visual language.

## Verification

- Confirm both global skill directories contain valid `SKILL.md` files.
- Confirm Codex lists both skills on the next turn.
- Invoke each skill explicitly with a small read-only request before using it on the portfolio.
- Confirm the Vercel skill reads only its pinned local reference and performs no runtime rule download.
- Record the upstream repository URL and commit hash in the pinned reference so updates can be reviewed deliberately.

## Assumptions

- Installation will require approval because `~/.codex/skills` is outside the current writable workspace and downloading requires network access.
- No `npx skills` dependency is needed; Codex’s existing installer and creator tools are sufficient.
- VoltAgent’s collection is not itself treated as a Codex skill because it is a library of design documents rather than one skill package.
