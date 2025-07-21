import { useEffect, useState } from "react";
import { Download } from "lucide-react";

const FloatingDownloadButton = () => {
  const [showBubble, setShowBubble] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowBubble(true);
      setTimeout(() => setShowBubble(false), 2500); 
    }, 6000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {showBubble && (
        <div
          className="mb-2 bg-white text-black px-3 py-2 text-xs rounded-lg shadow-lg 
                     animate-bounce relative sm:hidden"
        >
          Download my CV
          <div className="absolute -bottom-1 right-3 w-2 h-2 bg-white rotate-45"></div>
        </div>
      )}

      <a
        href="/portfolio.pdf"
        download
        className="bg-gradient-to-r from-blue-600 to-purple-600 
                   text-white px-4 py-4 rounded-full shadow-lg 
                   animate-bounce flex items-center justify-center 
                   hover:from-blue-700 hover:to-purple-700 
                   transition-all duration-300 
                   sm:px-5 sm:py-3 sm:gap-2 sm:rounded-full"
      >
        <Download className="w-5 h-5 sm:w-5 sm:h-5" />
        <span className="hidden sm:inline text-sm font-semibold">Download My CV</span>
      </a>
    </div>
  );
};

export default FloatingDownloadButton;
