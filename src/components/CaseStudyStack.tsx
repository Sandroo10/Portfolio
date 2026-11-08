const stacks = {
  cinema: [
    ['React', 'Component-based interface and interaction'],
    ['TypeScript', 'Typed API data, forms, and booking states'],
    ['Vite', 'Development server and production builds'],
    ['React Router', 'Routes and URL-based session filters'],
    ['TanStack Query', 'Fetching, caching, and query invalidation'],
    ['React Hook Form + Zod', 'Form state and schema validation'],
    ['SCSS Modules + CSS variables', 'Scoped styles and shared design tokens'],
    ['Embla Carousel', 'Carousel interactions'],
    ['React Context', 'Authentication and shared booking workflows'],
    ['Fetch + REST API', 'Integration with the supplied cinema backend'],
    ['Local Storage', 'Recently viewed movie persistence'],
    ['ESLint + Prettier', 'Code checks and formatting'],
    ['Git + GitHub', 'Version control'],
    ['Vercel', 'Frontend hosting'],
  ],
  ev: [
    ['React', 'Reusable storefront and shopping interfaces'],
    ['TypeScript', 'Typed components and application data'],
    ['Vite', 'Development and production tooling'],
    ['Tailwind CSS', 'Responsive layouts and styling'],
    ['Supabase', 'Authentication, database, and backend services'],
    ['React Query', 'Asynchronous fetching and server state'],
    ['React Hook Form', 'Form values and submission handling'],
    ['Zod', 'Schema-based form validation'],
    ['i18next', 'Georgian, English, and Russian localization'],
    ['Bank of Georgia (BOG)', 'Online checkout payment integration'],
    ['Git', 'Version control and collaboration'],
  ],
};

export default function CaseStudyStack({ project }: { project: keyof typeof stacks }) {
  return <dl className="case-tech-grid" aria-label="Technology stack">
    {stacks[project].map(([name, purpose]) => <div key={name}><dt>{name}</dt><dd>{purpose}</dd></div>)}
  </dl>;
}
