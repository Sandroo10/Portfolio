import { Award, Coffee, Code, Users } from 'lucide-react';
import { useState } from 'react';
import CertificateModal from './CertificateModal';
import Timeline from './Timeline';

const About = () => {
  const [showUdemy, setShowUdemy] = useState(false);
  const [showTbc, setShowTbc] = useState(false);

  const stats = [
    { icon: Code, value: '2+', label: 'Years Experience' },
    { icon: Award, value: '10+', label: 'Projects Completed' },
    { icon: Coffee, value: '200+', label: 'Commits' },
    { icon: Users, value: '10+', label: 'Happy Clients' }
  ];
  
  

  return (
    <section id="about" className="py-20 sm:px-6 px-2 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">Quick Introduction</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 sm:h-[560px]">
          <Timeline />
          <div>
            <div className="prose prose-lg max-w-none mb-10">
              <p className="sm:text-lg text-muted-foreground leading-relaxed">
                I'm a passionate developer specializing in React, JavaScript, .NET, and building great user experiences. 
                I enjoy solving problems and turning ideas into reality. My work ranges from web apps to creative UIs, 
                always focusing on clean code and modern design principles. I also hold certifications from 
                <strong 
                  onClick={() => setShowUdemy(true)} 
                  className="cursor-pointer underline text-foreground"
                >
                  {' '}Udemy
                </strong> 
                {' '}and
                <strong 
                  onClick={() => setShowTbc(true)} 
                  className="cursor-pointer underline text-foreground"
                >
                  {' '}TBC Academy
                </strong>.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to open source projects, 
                or sharing knowledge with the developer community.
              </p>

              {showUdemy && (
                <CertificateModal
                  title="Udemy Certificate"
                  pdfSrc="/certs/udemy-cert.pdf"
                  onClose={() => setShowUdemy(false)}
                />
              )}

              {showTbc && (
                <CertificateModal
                  title="TBC Academy Certificate"
                  pdfSrc="/certs/tbc-cert.pdf"
                  onClose={() => setShowTbc(false)}
                />
              )}
            </div>



            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="bg-background p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border bordernew"
                >
                  <div className="flex sm:flex-row flex-col items-center space-x-4">
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