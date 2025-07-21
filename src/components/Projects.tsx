import { ExternalLink, Github, Star } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'EvCarCharger',
      description: 'My best project by far as freelancers. Deployed for usage and with scores of 100 SEO, 95+ in perfromance, acccessebilty and best practices.(Private Repo)',
      image: '/images/EvCarCharger.webp',
      technologies: ['React', 'Supabase', 'Resend', 'Bog Payment'],
      liveUrl: 'https://evcarcharger.ge',
      githubUrl: 'https://github.com/Sandroo10?tab=repositories'
    },
    {
      title: 'EduLeveling',
      description: 'A collaborative learning platform for mathematics, physics and programming developed as hackathon idea (Only visual no backend until further development)',
      image: '/images/EduLeveling.webp',
      technologies: ['React', 'ShadCn', 'Tailwind', 'Responsivness'],
      liveUrl: 'https://tankistebivart.vercel.app/',
      githubUrl: 'https://github.com/Sandroo10/tankistebivart'
    },
    {
      title: 'E-Commerce Website',
      description: 'Simple E-commerce Website for sellings clothes given as a freelancer. Built in React.Js and using css modules(such where the requirements)',
      image: `https://static.vecteezy.com/system/resources/previews/001/421/483/non_2x/clothes-on-hangers-free-photo.jpeg`,
      technologies: ['React', 'CSS.Modules', 'JavaScript', 'Figma'],
      liveUrl: 'https://e-commerce-psi-pink-86.vercel.app/men',
      githubUrl: 'https://github.com/Sandroo10/E-commerce'
    },
    {
      title: 'RetailMax (Final for TBC Academy Project)',
      description: 'A project that was done in 2 days while I had finals. Very rough design but working backend in supabase(may be down due to inactivity) and all functionality of a cart',
      image: 'https://di2ponv0v5otw.cloudfront.net/shows/2024/03/09/9/m_65ec9e82849fc2e041077792.png',
      technologies: ['React', 'Tailwind', 'Supabase', 'ShadCn'],
      liveUrl: 'https://retail-max.vercel.app/',
      githubUrl: 'https://github.com/Sandroo10/RetailMax'
    },
    {
      title: 'Portfolio Website',
      description: 'In the flesh. A responsive portfolio website showcasing modern design principles, smooth animations, and interactive elements.',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500&h=300&fit=crop',
      technologies: ['React', 'Tailwind', 'FormSpree', 'Vercel'],
      liveUrl: '/',
      githubUrl: 'https://github.com/Sandroo10/Portfolio'
    },
    {
      title: '.Net WebServerApp',
      description: 'Small webserver application that I designed in .Net very raw but great test for learning.',
      image: '/images/WebApp.webp',
      technologies: ['HTML', '.NET', 'WebServer', 'C#'],
      githubUrl: 'https://github.com/Sandroo10/ProjectWebServerApp'
    }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">Websites I've Built</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex flex-col h-[450px] relative group bg-background rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] border bordernew overflow-hidden"
            >
            {(index === 0 || index === 2) && (
              <div
                title="Featured Project"
                className="absolute top-3 z-10 right-3 bg-yellow-400 text-white rounded-full p-1 shadow-md"
              >
                <Star size={28} className="text-white" />
              </div>

            )}  
              <div className="h-48 relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="p-6 flex flex-col h-[318px] justify-around">
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 sm:text-sm text-xs leading-relaxed h-24">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 sm:mb-6 mb-3">
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
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 text-sm font-medium"
                  >
                    <ExternalLink className="w-2.5 h-2.5 sm:w-5 sm:h-5"  />
                    <span>Live Site</span>
                  </a>
                  
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