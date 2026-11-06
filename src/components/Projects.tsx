import { ExternalLink, Github, Star } from 'lucide-react';
import { useState } from 'react';

import { projects, type ProjectCategory } from '../data/projects';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory | 'All'>('All');
  const filters: Array<ProjectCategory | 'All'> = ['All', 'Frontend', 'QA', 'Backend'];
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
              className="relative flex h-auto flex-col overflow-hidden rounded-2xl border bordernew bg-background shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
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

                <div className="relative z-10 mt-auto flex flex-wrap gap-4">
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
                  
                  {project.githubUrl ? <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-all duration-300 hover:scale-105 text-sm font-medium"
                  >
                    <Github className="w-2.5 h-2.5 sm:w-5 sm:h-5" />
                    <span>GitHub</span>
                  </a> : <span className="flex items-center px-4 py-2 text-sm text-muted-foreground">Private repository</span>}
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
