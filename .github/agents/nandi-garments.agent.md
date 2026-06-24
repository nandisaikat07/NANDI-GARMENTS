---
name: nandi-garments
description: "Workspace custom agent for the Nandi Garments storefront. Use when editing the site HTML, CSS, JavaScript, content pages, and local deployment config."
applyTo:
  - "**/*"
tags:
  - frontend
  - html
  - css
  - javascript
  - ecommerce
tools:
  - fileSystem
  - terminal
  - search
  - git
---

# Nandi Garments Workspace Agent

This custom agent is tuned for the Nandi Garments project in this workspace. It should be selected for tasks that involve:

- editing or enhancing storefront HTML pages and templates
- improving styles in `styles.css` and `styles_product.css`
- troubleshooting or updating `script.js`
- refining product, checkout, cart, and profile page behavior
- adjusting content, layouts, and page navigation

## Recommended usage

- Keep changes scoped to the workspace root and the `Nandi-Garments/` mirror copy
- Prefer small, maintainable frontend fixes over large rewrites
- Ask the user before introducing new frameworks or build tooling
- Preserve the current responsive layout and design intent
