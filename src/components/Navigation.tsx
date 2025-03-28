
import React from 'react';
import { Heart } from 'lucide-react';

const Navigation = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="sticky top-4 z-10 mx-auto my-4 max-w-md">
      <div className="bg-white/90 backdrop-blur-md rounded-full shadow-md py-2 px-4 flex justify-between items-center">
        <button 
          onClick={() => scrollToSection('how-we-met')}
          className="text-romance-softBrown hover:text-romance-dustyRose transition-colors duration-300 font-romantic text-sm px-2 py-1"
        >
          How We Met
        </button>
        
        <Heart className="text-red-400 animate-heartbeat" size={18} />
        
        <button 
          onClick={() => scrollToSection('first-conversation')}
          className="text-romance-softBrown hover:text-romance-dustyRose transition-colors duration-300 font-romantic text-sm px-2 py-1"
        >
          First Talk
        </button>
        
        <Heart className="text-red-400 animate-heartbeat" size={18} />
        
        <button 
          onClick={() => scrollToSection('what-i-love')}
          className="text-romance-softBrown hover:text-romance-dustyRose transition-colors duration-300 font-romantic text-sm px-2 py-1"
        >
          What I Love
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
