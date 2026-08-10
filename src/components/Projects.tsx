import { ExternalLink, Github, Star } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'EvCarCharger',
      description: 'My best project by far as a freelancer. Has Supabase, payment systems integration and deployed for usage and with scores of 100 SEO, 95+ in perfromance, acccessebilty and best practices.(Private Repo)',
      image: '/images/EvCarCharger.webp',
      technologies: ['React', 'Supabase', 'Resend', 'Bog Payment'],
      liveUrl: 'https://evcarcharger.ge',
      githubUrl: 'https://github.com/Sandroo10?tab=repositories'
    },
    {
      title: 'KIU re-make Website',
      description: 'I participated in KIU re-make website contest and this is the website me and my teammate made. I was chosen as the Co-winner and am working on new website which i cannot disclose yet. (Private Repo)',
      image: '/images/KIU.webp',
      technologies: ['React','Express', 'Chatbot', 'Tailwind', 'FormSpree', 'Vercel'],
      liveUrl: 'https://kiu-website.vercel.app/en',
      githubUrl: 'https://github.com/Mosa-5/Kiu_website'
    },
    {
      title: 'RetailMax (Final for TBC Academy Project) *Updated*',
      description: 'A project that was done in 2 days while I had finals. still rough design but updated as well as new code structure, supabase for backend and database. working cart + login functionality. ',
      image: 'https://di2ponv0v5otw.cloudfront.net/shows/2024/03/09/9/m_65ec9e82849fc2e041077792.png',
      imageClassName: 'scale-110',
      technologies: ['React', 'Tailwind', 'Supabase', 'ShadCn'],
      liveUrl: 'https://retail-max.vercel.app/',
      githubUrl: 'https://github.com/Sandroo10/RetailMax'
    },
    {
      title: 'Metro Echoes (Frontend + Backend + Testing)',
      description: 'This is a fan-made concept Artyom metro 2033 chatbot that I made for fun. It is built in React and Express and uses HuggingFace API to generate responses. It also has a testing suite built in Jest and React Testing Library.',
      image: '/images/Artyom.webp',
      technologies: ['Next.js','Express', 'Chatbot', 'Tailwind', 'Jest', 'Vercel'],
      liveUrl: 'https://artyom-chatbot.vercel.app/',
      githubUrl: 'https://github.com/Sandroo10/ArtyomChatbot'
    },
    {
      title: 'Marionette MusicBox (Website + Discord Bot)',
      description: 'A FNAF-inspired showcase website for Marionette MusicBox, paired with a working Discord music bot. The bot supports slash commands, per-server queues, and YouTube playback.',
      image: '/images/Marionette-MusicBox.png',
      technologies: ['React', 'TypeScript', 'Tailwind', 'Discord.js', 'Node.js'],
      liveUrl: 'https://marionette-discordbot.vercel.app/',
      githubUrl: 'https://github.com/Sandroo10/MarionetteBotShowcase'
    },
    {
      title: 'KIU football tournament (As a part of event Co-Organizers)',
      description: 'A football tournament website for KIU students. I built this website as a part of team of organizers of the tournament. It has a simple design and is built in Next.js and Tailwind CSS. It is also fully responsive.',
      image: '/images/KIU_Football_Tournament.webp',
      imageClassName: 'scale-125',
      technologies: ['Next.js', 'Tailwind', 'Responsivness'],
      liveUrl: 'https://kiu-football-tournament-2026.vercel.app/',
      githubUrl: 'https://github.com/Sandroo10'
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
              className="flex h-[520px] flex-col relative group bg-background rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] border bordernew overflow-hidden"
            >
            {(index === 0 || index === 1 || index === 2) && (
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
                  className={`absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.15] ${project.imageClassName ?? ''}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="mb-3 min-h-14 text-xl font-bold text-foreground transition-colors duration-300 group-hover:text-blue-600">
                  {project.title}
                </h3>
                
                <p className="mb-4 h-24 overflow-hidden text-muted-foreground sm:text-sm text-xs leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-6 flex min-h-14 flex-wrap content-start gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-800 dark:text-blue-200 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex space-x-4">
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
