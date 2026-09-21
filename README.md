# Python // The Journey

Interactive Python learning experience built with React, Vite, TypeScript, Framer Motion and Lucide React. The curriculum is based on the supplied Python Programming course material.

## Run

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Latest interaction updates

- 15 topics across 6 units and 3 learning levels.
- Every topic now has exactly 5 checkpoint tasks: 3 MCQs followed by 2 coding tasks.
- The next task is locked until the current task is answered correctly.
- The next topic is locked until all 5 checkpoint tasks are completed.
- Scrolling into a locked topic redirects back to the last unlocked topic.
- A new v4 progress key prevents older saved progress from bypassing the new task gates.
- Text size applies to course material, code, activity editors and key UI text.
- Appearance control is placed inside the home header flow instead of covering hero content.
- Themes remain available without Tailwind/PostCSS.
- The supplied `the supplied course material` is included in `public/` for project completeness, but there is no visible source-course material button in the learning UI.
## Vercel deployment

This project is configured so Vercel runs the Vite production build directly. TypeScript checking is available separately with `npm run typecheck`, so a TypeScript declaration-package issue cannot block the static Vite deployment. React and React DOM type packages are included for editor/typecheck support.

