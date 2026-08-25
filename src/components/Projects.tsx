import { ExternalLink, Github, Star } from 'lucide-react';
import { useState } from 'react';

type ProjectCategory = 'Frontend' | 'QA' | 'Backend';

type Project = {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  categories: ProjectCategory[];
  githubUrl: string;
  liveUrl?: string;
  imageClassName?: string;
  imageFit?: 'contain';
  isFeatured?: boolean;
};

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory | 'All'>('All');
  const filters: Array<ProjectCategory | 'All'> = ['All', 'Frontend', 'QA', 'Backend'];

  const projects: Project[] = [
    {
      title: 'EvCarCharger',
      description: 'My best project by far as a freelancer. Has Supabase, payment systems integration and deployed for usage and with scores of 100 SEO, 95+ in perfromance, acccessebilty and best practices.(Private Repo)',
      image: '/images/EvCarCharger.webp',
      technologies: ['React', 'Supabase', 'Resend', 'Bog Payment'],
      categories: ['Frontend', 'Backend'],
      liveUrl: 'https://evcarcharger.ge',
      githubUrl: 'https://github.com/Sandroo10?tab=repositories',
      isFeatured: true,
    },
    {
      title: 'KIU re-make Website',
      description: 'I participated in KIU re-make website contest and this is the website me and my teammate made. I was chosen as the Co-winner and am working on new website.',
      image: '/images/KIU.webp',
      technologies: ['React','Express', 'Chatbot', 'Tailwind', 'FormSpree', 'Vercel'],
      categories: ['Frontend'],
      liveUrl: 'https://kiu-website.vercel.app/en',
      githubUrl: 'https://github.com/Mosa-5/Kiu_website',
      isFeatured: true,
    },
    {
      title: 'RetailMax (Final for TBC Academy Project) *Updated*',
      description: 'A project that was done in 2 days while I had finals. still rough design but updated as well as new code structure, supabase for backend and database. working cart + login functionality. ',
      image: 'https://di2ponv0v5otw.cloudfront.net/shows/2024/03/09/9/m_65ec9e82849fc2e041077792.png',
      imageClassName: 'scale-110',
      technologies: ['React', 'Tailwind', 'Supabase', 'ShadCn'],
      categories: ['Frontend', 'Backend'],
      liveUrl: 'https://retail-max.vercel.app/',
      githubUrl: 'https://github.com/Sandroo10/RetailMax',
      isFeatured: true,
    },
    {
      title: 'WebdriverIO Practice',
      description: 'A focused WebdriverIO test automation practice project with browser-based test scenarios. This repository contains tests only, with no hosted application.',
      image: '/svgs/webdriverio.svg',
      imageFit: 'contain',
      technologies: ['WebdriverIO', 'JavaScript', 'Automated Testing'],
      categories: ['QA'],
      githubUrl: 'https://github.com/Sandroo10/WebDriverIO-practice',
      isFeatured: true,
    },
    {
      title: 'Playwright Practice',
      description: 'A professional Playwright automation project built around SauceDemo, covering authentication, inventory, sorting, cart management, checkout, and purchase validation. It uses TypeScript, Page Object Model, reusable fixtures, multi-browser testing, CI with GitHub Actions, HTML reports, screenshots, traces, and automated type-checking—demonstrating maintainable, reliable end-to-end test architecture.',
      image: '/svgs/playwright.svg',
      imageFit: 'contain',
      technologies: ['Playwright', 'TypeScript', 'End-to-End Testing'],
      categories: ['QA'],
      githubUrl: 'https://github.com/Sandroo10/PlayWright-Practice',
      isFeatured: true,
    },
    {
      title: 'Marionette MusicBox (Website + Discord Bot)',
      description: 'A FNAF-inspired showcase website for Marionette MusicBox, paired with a working Discord music bot. The bot supports slash commands, per-server queues, and YouTube playback.',
      image: '/images/Marionette-MusicBox.png',
      technologies: ['React', 'TypeScript', 'Tailwind', 'Discord.js', 'Node.js'],
      categories: ['Frontend', 'Backend'],
      liveUrl: 'https://marionette-discordbot.vercel.app/',
      githubUrl: 'https://github.com/Sandroo10/MarionetteBotShowcase'
    },
    {
      title: 'Metro Echoes (Frontend + Backend + Testing)',
      description: 'This is a fan-made concept Artyom metro 2033 chatbot that I made for fun. It is built in React and Express and uses HuggingFace API to generate responses. It also has a testing suite built in Jest and React Testing Library.',
      image: '/images/Artyom.webp',
      technologies: ['Next.js','Express', 'Chatbot', 'Tailwind', 'Jest', 'Vercel'],
      categories: ['Frontend', 'Backend'],
      liveUrl: 'https://artyom-chatbot.vercel.app/',
      githubUrl: 'https://github.com/Sandroo10/ArtyomChatbot'
    },
    {
      title: '.Net WebServerApp',
      description: 'Small webserver application that I designed in .Net very raw but great test for learning.',
      image: '/images/WebApp.webp',
      technologies: ['HTML', '.NET', 'WebServer', 'C#'],
      categories: ['Backend'],
      githubUrl: 'https://github.com/Sandroo10/ProjectWebServerApp'
    },
  ];

  const visibleProjects = activeFilter === 'All'
    ? projects
    : projects.filter((project) => project.categories.includes(activeFilter));

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">Projects I've Built</p>
        </div>

        <div className="mb-10 flex flex-wrap justify-center gap-3" aria-label="Filter projects">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              aria-pressed={activeFilter === filter}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-muted text-muted-foreground hover:bg-muted/70 hover:text-foreground'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleProjects.map((project) => (
            <div
              key={project.title}
              className="relative flex h-auto flex-col overflow-hidden rounded-2xl border bordernew bg-background shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl sm:h-[520px]"
            >
            {project.isFeatured && (
              <div
                title="Featured Project"
                className="absolute top-3 z-10 right-3 bg-yellow-400 text-white rounded-full p-1 shadow-md"
              >
                <Star size={28} className="text-white" />
              </div>

            )}  
              <div className="h-48 relative shrink-0 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className={`absolute inset-0 h-full w-full ${project.imageFit === 'contain' ? 'object-contain p-10' : 'object-cover'} transition-transform duration-500 group-hover:scale-[1.15] ${project.imageClassName ?? ''}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="mb-3 min-h-14 text-xl font-bold text-foreground transition-colors duration-300 group-hover:text-blue-600">
                  {project.title}
                </h3>
                
                <p className="mb-4 min-h-24 text-xs leading-relaxed text-muted-foreground sm:h-24 sm:overflow-hidden sm:text-sm">
                  {project.description}
                </p>

                <div className="mb-2 flex min-h-14 flex-wrap content-start gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-800 dark:text-blue-200 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 text-sm font-medium"
                    >
                      <ExternalLink className="w-2.5 h-2.5 sm:w-5 sm:h-5"  />
                      <span>Live Site</span>
                    </a>
                  )}
                  
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-all duration-300 hover:scale-105 text-sm font-medium"
                  >
                    <Github className="w-2.5 h-2.5 sm:w-5 sm:h-5" />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/Sandroo10"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-full hover:from-gray-900 hover:to-black transition-all duration-300 hover:scale-105 font-medium"
          >
            <Github size={20} />
            <span>View More on GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
