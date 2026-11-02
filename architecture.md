# Architecture — U.P. Kirana Seva Samiti Balika Vidyalaya Website

## 1. Goal
Build a modular Next.js frontend prototype that can later connect to a secure backend without requiring a full UI rewrite.

## 2. Phase 1 stack
- Next.js App Router
- React
- TypeScript
- Tailwind CSS (created by the Next.js starter)
- Motion / Motion Primitives for selected UI animations
- Local typed data for events, notices, facilities and achievements
- Git for version control

## 3. High-level structure
Browser → Next.js routes/layouts → reusable React components → local data in Phase 1.
Future: reusable UI → API/backend → secure relational database.

No backend is required for the initial prototype.

## 4. Project structure (target)
```text
upkssbv-school-website/
├── PRD.md
├── architecture.md
├── design.md
├── README.md
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   ├── about/page.tsx
│   ├── academics/page.tsx
│   ├── faculty/page.tsx
│   ├── campus/page.tsx
│   ├── events/page.tsx
│   ├── notices/page.tsx
│   ├── achievements/page.tsx
│   ├── gallery/page.tsx
│   ├── alumni/page.tsx
│   ├── parent-corner/page.tsx
│   ├── school-ai/page.tsx
│   └── contact/page.tsx
├── components/
├── data/
└── public/
    ├── images/
    └── logo/
```

This is a target structure, not a requirement to create every route immediately.

## 5. Routes
Use Next.js App Router. Each route is represented by a folder and a `page.tsx`, for example `app/about/page.tsx` maps to `/about`. `app/page.tsx` maps to `/`.

## 6. Data approach
For Phase 1, store prototype content in typed local files such as `data/events.ts` and `data/notices.ts`. Keep data separate from visual components when practical.

Example event fields: `id`, `title`, `date`, `category`, `summary`, `location`.
Example notice fields: `id`, `title`, `date`, `category`, `summary`.

## 7. Future database model
When approved, separate a student's permanent identity from yearly enrolment. Model entities such as Student, AcademicYear, Class, Section and Enrollment. A student's class should not be overwritten as if it were permanent identity data.

## 8. Future security
Before handling real student or parent information, design role-based access, strong authentication, audit logs, data minimisation, secure sessions, encryption in transit/at rest, appropriate consent and retention controls.

## 9. Future notification flow
Website/admin content → notification service → approved email/push/SMS channels. Phase 1 only shows demo notice/notification UI.

## 10. Motion
Motion is a presentation layer, not business logic. Keep animations subtle, performant and accessible; respect reduced-motion preferences and never hide essential information behind animation.

## 11. Performance and responsiveness
Optimise images, lazy-load large galleries, use responsive layouts, avoid excessive client-side JavaScript and test at mobile, tablet and desktop sizes.

## 12. Content reliability
Treat school diary content as planning material. Confirm dates, timings, contacts, staff names, counts and facilities with the school before publishing publicly.
