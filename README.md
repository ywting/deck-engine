# deck-engine

Reusable engine for browser-editable slide decks. Extracted from the Design-Portfolio deck.

## What it ships

- **Presenter + navigation**: `SlidePresenter`, `DeckNavigation`, TOC/thumbnail/search/grid modals, speaker notes drawer.
- **Visual library**: 40+ `visualType` render components in `src/components/visuals/`.
- **Editing system**: inline click-to-edit (`InlineEditable`, `EditContext`, path-based `setByPath`), form drawer (`EditDrawer`), debounced auto-save.
- **Save API**: `@ywting/deck-engine/plugin` — Vite middleware, `GET/PUT /api/slides`, atomic writes to `slides.json`.
- **Data hook**: `useSlides(bundled)` with live-API + bundled-JSON fallback.
- **Theming**: CSS-variable tokens in `src/theme/tokens.css` (`--deck-*`). Apps override in their own CSS; no component edits.

## Use in a deck app

1. `npm i @ywting/deck-engine` (or a git/`file:` dependency).
2. Tailwind: add `@source` into `node_modules/@ywting/deck-engine/src` so utility classes compile.
3. `vite.config.ts`: `import { slidesApiPlugin } from '@ywting/deck-engine/plugin'` and add to plugins.
4. App shell:
   - `useSlides(bundled)` owns deck state.
   - `DeckDataProvider` mirrors the hook output down to engine components.
   - `EditProvider` wraps the layout and enable inline editing while the drawer is open.
5. Theme: import `@ywting/deck-engine/theme.css` once, override `--deck-*` variables per app.

The deck app keeps its own `App.tsx` (theme state, autoplay, deep-links) and its own `slides.json`; the engine covers shared machinery.
