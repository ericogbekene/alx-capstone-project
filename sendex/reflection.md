### Building a Full Stack Application with the aid of A.I tools has been really fascinating

It was exciting building this project with all the knowledge gained through this program. It was interesting to see how rapid Development can be with proper use of A.I Solutions.


#### Lessons Learned
A major lesson for me was dealing with tailwindcss installation and directive to have the styling show up properly.

In Hindsight, i believe i should have configured the project manually and setup all dependencies instead of allowing the Cursor agent do this. I realized it missed installing some critical dependencies. 

#### Tailwind styling issue and how it was resolved
- Problem: Tailwind classes were not reflected in the UI despite having directives in `globals.css`.
  - Missing `postcss.config.js` and dev deps (`postcss`, `autoprefixer`).
  - Tailwind `content` globs did not include the top-level `@` directory where UI components lived.
  - Imports referenced `@/components/ui/*` directly from app code; better to expose re-exports under `src/components/*` matching the tsconfig alias.

- Fixes applied:
  - Added `postcss.config.js` with `tailwindcss` and `autoprefixer`; installed the dev dependencies.
  - Expanded `tailwind.config.ts` `content` to include `'./@/**/*.{ts,tsx}'` so class scanning catches UI components.
  - Created re-export shims: `src/components/button.tsx`, `src/components/input.tsx`, `src/components/card.tsx`, and updated imports in pages to use `@/components/*`.
  - Restarted the dev server and hard-refreshed the browser.

- Result: Tailwind compiled properly, the generated CSS loaded, and the components rendered with the expected styles.