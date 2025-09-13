import { Github, Linkedin, ArrowDown } from 'lucide-react';
import MyPic from "../../public/Me.jpg"
import { Typewriter } from 'react-simple-typewriter';

const Hero = () => {
  const roles = [
    "Full Stack Developer",
    "React & .NET Specialist" 
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          
          <div className="hidden lg:flex flex-col space-y-6">
            <a 
              href="https://www.linkedin.com/in/sandro-saralidze-04430532a/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300 hover:scale-110"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="https://github.com/Sandroo10" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-800 text-white hover:bg-gray-900 transition-all duration-300 hover:scale-110"
            >
              <Github size={24} />
            </a>
            
          </div>

          <div className="text-center lg:text-left lg:flex-1 lg:ml-12">
            <div className="animate-fade-in">
              <h1 className="text-5xl lg:text-7xl font-bold mb-4">
                <span className="text-gray-600 dark:text-gray-400 text-2xl lg:text-3xl block mb-2">Hi, I'm</span>
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">
                  Sandro
                </span>
              </h1>
              
              <div className="h-20 mb-6">
                <h2 className="text-2xl lg:text-4xl font-semibold text-foreground">
                  <span className="inline-block min-w-0">
                    <Typewriter
                      words={roles}
                      loop={0} 
                      cursor
                      cursorStyle="|"
                      typeSpeed={100}
                      deleteSpeed={50}
                      delaySpeed={1000}
                    />
                  </span>
                </h2>
              </div>

              <p className="text-lg lg:text-xl text-muted-foreground mb-8 max-w-2xl">
                I love building full-stack applications and clean, modern UIs. 
                Passionate about turning ideas into reality through code.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-6">
                <button
                  onClick={() => scrollToSection('#contact')}
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Say Hi 👋
                </button>
                
                <div className="flex lg:hidden space-x-4">
                  <a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a 
                    href="https://github.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-gray-800 text-white hover:bg-gray-900 transition-all duration-300"
                  >
                    <Github size={20} />
                  </a>
                  
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 lg:mt-0 lg:ml-12">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 relative">
                <svg viewBox="0 0 400 400" className="absolute inset-0 w-full h-full">
                  <defs>
                    <linearGradient id="blobGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#3B82F6" />
                      <stop offset="50%" stopColor="#8B5CF6" />
                      <stop offset="100%" stopColor="#06B6D4" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M60,200 C60,120 120,60 200,60 C280,60 340,120 340,200 C340,280 280,340 200,340 C120,340 60,280 60,200 Z"
                    fill="url(#blobGradient)"
                    className="animate-pulse"
                  />
                </svg>
                <div className="absolute inset-4 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center text-white text-6xl font-bold">
                  <img src={MyPic} className='rounded-full h-68 '/>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-muted-foreground" size={24} />
        </div>
      </div>
    </section>
  );
};

export default Hero;