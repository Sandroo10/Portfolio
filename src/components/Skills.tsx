import { RefreshCw, X, type LucideIcon } from 'lucide-react';
import { useState } from 'react';

type Skill = {
  name: string;
  icon?: string;
  iconComponent?: LucideIcon;
  darkInvert?: boolean;
};

const skillCategories: { title: string; description: string; skills: Skill[] }[] = [
  {
    title: 'Frontend',
    description: 'Modern interfaces and responsive web experiences',
    skills: [
      { name: 'React', icon: '/svgs/react.svg' },
      { name: 'Next.js', icon: '/svgs/nextjs.svg', darkInvert: true },
      { name: 'TypeScript', icon: '/svgs/ts.svg' },
      { name: 'JavaScript', icon: '/svgs/js.svg' },
      { name: 'HTML5', icon: '/svgs/html5.svg' },
      { name: 'CSS3', icon: '/svgs/css3.svg' },
    ],
  },
  {
    title: 'Backend, Data & Tooling',
    description: 'Application services, databases, and source control',
    skills: [
      { name: '.NET', icon: '/svgs/dotnet.svg', darkInvert: true },
      { name: 'Node.js', icon: '/svgs/nodejs.svg', darkInvert: true },
      { name: 'C#', icon: '/svgs/csharp.svg' },
      { name: 'Python', icon: '/svgs/python.svg' },
      { name: 'Supabase', icon: '/svgs/supabase.svg' },
      { name: 'MongoDB', icon: '/svgs/mongodb.svg' },
      { name: 'PostgreSQL', icon: '/svgs/postgresql.svg' },
      { name: 'Git', icon: '/svgs/git.svg' },
    ],
  },
  {
    title: 'Automation Testing',
    description: 'End-to-end, API, and behaviour-driven testing',
    skills: [
      { name: 'Mocha', icon: '/svgs/mocha.svg' },
      { name: 'WebdriverIO', icon: '/svgs/webdriverio.svg' },
      { name: 'SpecFlow', icon: '/images/specflow-logo.png' },
      { name: 'Reqnroll', icon: '/images/reqnroll-logo.png' },
      { name: 'NUnit', icon: '/svgs/nunit.svg' },
    ],
  },
  {
    title: 'Workflow & Collaboration',
    description: 'Planning, delivery, and team coordination',
    skills: [
      { name: 'ClickUp', icon: '/svgs/clickup.svg' },
      { name: 'Agile Scrum', iconComponent: RefreshCw },
    ],
  },
];

const SkillLogo = ({ skill, large = false }: { skill: Skill; large?: boolean }) => {
  const Icon = skill.iconComponent;
  const sizeClass = large ? 'h-16 w-16' : 'h-8 w-8';

  return skill.icon ? (
    <img
      src={skill.icon}
      alt=""
      className={`${sizeClass} object-contain ${skill.darkInvert ? 'dark:invert' : ''}`}
    />
  ) : Icon ? (
    <Icon className={`${large ? 'h-14 w-14' : 'h-7 w-7'} text-sky-500`} aria-hidden="true" />
  ) : null;
};

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState<(typeof skillCategories)[number] | null>(null);

  return (
    <section id="skills" className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">Technologies I use to build and test reliable products</p>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          {skillCategories.map((category) => (
            <button
              key={category.title}
              type="button"
              onClick={() => setSelectedCategory(category)}
              className="group rounded-2xl border border-border bg-background p-5 text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/60 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-bold text-foreground">{category.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{category.description}</p>
                </div>
                <span className="shrink-0 text-xs font-semibold text-blue-600 opacity-0 transition-opacity group-hover:opacity-100 dark:text-blue-300">
                  Explore
                </span>
              </div>

              <div className="mt-5 flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-muted/30 p-2"
                    title={skill.name}
                  >
                    <SkillLogo skill={skill} />
                  </span>
                ))}
              </div>
            </button>
          ))}
        </div>
      </div>

      {selectedCategory && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="skill-category-title"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setSelectedCategory(null);
            }
          }}
        >
          <div className="relative w-full max-w-2xl rounded-3xl border border-border bg-background p-7 shadow-2xl sm:p-9">
            <button
              type="button"
              onClick={() => setSelectedCategory(null)}
              aria-label="Close skills category"
              className="absolute right-4 top-4 rounded-full p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              <X className="h-5 w-5" />
            </button>
            <p className="text-sm font-semibold text-blue-600 dark:text-blue-300">Skills category</p>
            <h3 id="skill-category-title" className="mt-1 text-3xl font-bold text-foreground">
              {selectedCategory.title}
            </h3>
            <p className="mt-2 text-muted-foreground">{selectedCategory.description}</p>

            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
              {selectedCategory.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="group flex flex-col items-center rounded-2xl border border-border bg-muted/30 p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/60 hover:bg-blue-500/10 hover:shadow-lg"
                >
                  <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-background p-2 ring-1 ring-border transition-transform duration-300 group-hover:scale-110">
                    <SkillLogo skill={skill} large />
                  </div>
                  <span className="mt-3 text-sm font-semibold text-foreground transition-colors group-hover:text-blue-600 dark:group-hover:text-blue-300">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Skills;
