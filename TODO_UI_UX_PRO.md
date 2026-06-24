# TODO_UI_UX_PRO (UI/UX Enhancement)

## Step 1 — Verify baseline design & scope
- [x] Reviewed existing global `styles.css` and product/cart/dark-mode styling.
- [x] Reviewed `index.html` and `product.html` markup patterns (header/nav/search/footer/cards).
- [x] Reviewed `checkout.html` (inline styles) to ensure visual consistency.

## Step 2 — Plan professional UI refresh (graphics-only)
- [x] Create a design token system (colors, spacing, shadows, radii, typography) while preserving current variables.
- [ ] Unify button/input/card styles across pages (remove “random” inline styling where possible).
- [ ] Improve header/nav/search responsiveness and spacing.
- [x] Enhance product grid/card visuals (hover, badges, quick view, wishlist).
- [ ] Upgrade hero + section headings (consistent gradients, borders, typography).
- [ ] Professionalize footer (current already upgraded; ensure alignment with light theme too).

## Step 3 — Implementation (CSS only where possible)
- [ ] Update `styles.css` with reusable components: `.section`, `.card`, `.btn`, inputs, headings.
- [ ] Ensure dark theme remains stable with `:root.dark` overrides.
- [ ] Add subtle global polish: focus rings, transitions, skeleton/loading states (CSS-only).

## Step 4 — Page consistency pass
- [ ] Add minimal shared utility styles to cover page-specific inline blocks (esp. `checkout.html`).
- [ ] Ensure accessibility: contrast, focus visibility, reduced motion.

## Step 5 — QA & testing
- [ ] Test major pages: index, product, checkout, wishlist, track, blog, policies, login.
- [ ] Validate mobile breakpoints (640px, 900px, 1000px existing).

## Step 6 — Final delivery
- [ ] Provide summary of what changed.

