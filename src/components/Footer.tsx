import { Github, Linkedin, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/30 py-12 px-6 border-t bordernew">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
              Sandro Saralidze
            </h3>
            <p className="text-muted-foreground">
              Building the future, one line of code at a time.
            </p>
          </div>

          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/Sandroo10"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-background border bordernew rounded-lg hover:border-blue-600 hover:scale-110 transition-all duration-300"
            >
              <Github size={24} className="text-muted-foreground hover:text-blue-600 transition-colors duration-300" />
            </a>
            <a
              href="https://www.linkedin.com/in/sandro-saralidze-04430532a/" 
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-background border bordernew rounded-lg hover:border-blue-600 hover:scale-110 transition-all duration-300"
            >
              <Linkedin size={24} className="text-muted-foreground hover:text-blue-600 transition-colors duration-300" />
            </a>
          
          </div>

          {/* Back to Top */}
          <div className="text-center md:text-right">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-105"
            >
              <ArrowUp size={20} />
              <span>Back to Top</span>
            </button>
          </div>
        </div>

        <div className="border-t bordernew mt-8 pt-8 text-center">
          <p className="text-muted-foreground">
            © {currentYear} Diamond SS. All rights reserved. Built with ❤️ using React & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;