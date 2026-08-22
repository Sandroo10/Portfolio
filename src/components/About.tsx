import { Award, Code, Users } from 'lucide-react';
import { useState } from 'react';
import CertificateModal from './CertificateModal';
import CertificationListModal, { type Certificate } from './CertificationListModal';
import Timeline from './Timeline';

const certificates: Certificate[] = [
  { title: 'Full Stack Web Development', issuer: 'Udemy', pdfSrc: '/certs/udemy-cert.pdf', category: 'Frontend' },
  { title: 'TBC IT React Accelerator', issuer: 'TBC Academy', pdfSrc: '/certs/tbc-cert.pdf', category: 'Frontend' },
  { title: 'Data Structures & Algorithms: Binary Search', issuer: 'Scrimba', pdfSrc: '/certs/data-structures-cert.pdf', category: 'Backend' },
  { title: 'Learn Python', issuer: 'Scrimba', pdfSrc: '/certs/python-cert.pdf', category: 'Backend' },
  { title: 'Create a Front-End App with React', issuer: 'Codecademy', pdfSrc: '/certs/codecademy-create-react-app-cert.pdf', category: 'Frontend' },
  { title: 'Learn TypeScript', issuer: 'Codecademy', pdfSrc: '/certs/codecademy-typescript-cert.pdf', category: 'Frontend' },
  { title: 'Learn JavaScript: Asynchronous Programming', issuer: 'Codecademy', pdfSrc: '/certs/codecademy-asynchronous-programming-cert.pdf', category: 'Frontend' },
  { title: 'Learn JavaScript Unit Testing', issuer: 'Codecademy', pdfSrc: '/certs/codecademy-unit-testing-cert.pdf', category: 'Automated Testing' },
  { title: 'Learn WebdriverIO', issuer: 'Codecademy', pdfSrc: '/certs/codecademy-webdriverio-cert.pdf', category: 'Automated Testing' },
  { title: 'UI Automation with WebdriverIO v7', issuer: 'Test Automation University', pdfSrc: '/certs/tau-webdriverio-cert.pdf', category: 'Automated Testing' },
  { title: 'Cucumber with JavaScript', issuer: 'Test Automation University', pdfSrc: '/certs/tau-cucumber-javascript-cert.pdf', category: 'Automated Testing' },
];

const About = () => {
  const [showCertifications, setShowCertifications] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);

  const stats = [
    { icon: Code, value: '2+', label: 'Years Experience Frontend' },
    { icon: Users, value: '10+', label: 'Projects Completed' },
    { icon: Code, value: '1+', label: 'Years Experience QA Engineer' },
    { icon: Award, value: '11', label: 'Professional Certifications', isCertificateCard: true }
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

        <div className="grid grid-cols-1 sm:grid-cols-[1.1fr_1fr] gap-12 sm:h-[590px]">
          <Timeline />
          <div>
            <div className="prose prose-lg max-w-none mb-10">
              <p className="sm:text-lg text-muted-foreground leading-relaxed">
                I'm a passionate developer specializing in React, JavaScript, .NET, and building great user experiences. 
                I enjoy solving problems and turning ideas into reality. My work ranges from web apps to creative UIs, 
                always focusing on clean code and modern design principles. I also hold certifications from 
                <button
                  type="button"
                  onClick={() => setShowCertifications(true)}
                  className="font-semibold text-amber-600 underline decoration-2 underline-offset-4 transition-colors hover:text-amber-500 dark:text-amber-300 dark:hover:text-amber-200"
                >
                  {' '}Udemy, TBC Academy, and other professional certification courses
                </button>.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to open source projects, 
                or sharing knowledge with the developer community.
              </p>

            </div>



            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => {
                const cardContent = (
                  <div className="flex sm:flex-row flex-col items-center space-x-4">
                    <div className={`p-3 rounded-lg text-white ${stat.isCertificateCard ? 'bg-gradient-to-br from-amber-500 to-orange-600' : 'bg-gradient-to-br from-blue-500 to-purple-500'}`}>
                      <stat.icon size={24} />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </div>
                  </div>
                );

                return stat.isCertificateCard ? (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setShowCertifications(true)}
                    className="bg-gradient-to-br from-amber-500/15 via-orange-500/10 to-transparent p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-amber-500/50 text-left ring-1 ring-amber-400/20"
                  >
                    {cardContent}
                  </button>
                ) : (
                  <div
                    key={index}
                    className="bg-background p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border bordernew"
                  >
                    {cardContent}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      {showCertifications && (
        <CertificationListModal
          certificates={certificates}
          onClose={() => setShowCertifications(false)}
          onOpenCertificate={setSelectedCertificate}
        />
      )}
      {selectedCertificate && (
        <CertificateModal
          title={selectedCertificate.title}
          pdfSrc={selectedCertificate.pdfSrc}
          onClose={() => setSelectedCertificate(null)}
        />
      )}
    </section>
  );
};

export default About;
