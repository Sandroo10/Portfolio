import { Award, Coffee, Code, Users } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Code, value: '2+', label: 'Years Experience' },
    { icon: Award, value: '10+', label: 'Projects Completed' },
    { icon: Coffee, value: '1000+', label: 'Commits' },
    { icon: Users, value: '50+', label: 'Happy Clients' }
  ];

  return (
    <section id="about" className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">Quick Introduction</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="w-full max-w-md mx-auto">
              <div className="relative bg-gradient-to-br from-blue-500 via-purple-500 to-teal-500 p-1 rounded-3xl">
                <div className="bg-background rounded-3xl p-8 h-80 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                      <Code size={48} className="text-white" />
                    </div>
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      Diamond SS
                    </h3>
                    <p className="text-muted-foreground mt-2">Full Stack Developer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                I'm a passionate developer specializing in React, JavaScript, .NET, and building great user experiences. 
                I enjoy solving problems and turning ideas into reality. My work ranges from web apps to creative UIs, 
                always focusing on clean code and modern design principles.
              </p>
              
              <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to open source projects, 
                or sharing knowledge with the developer community.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="bg-background p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border bordernew"
                >
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg text-white">
                      <stat.icon size={24} />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;