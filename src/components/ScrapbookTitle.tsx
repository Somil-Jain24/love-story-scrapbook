
import React, { useEffect, useState } from 'react';
import { Heart } from 'lucide-react';

const ScrapbookTitle = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`text-center mb-12 ${isVisible ? 'opacity-100 transition-opacity duration-1000' : 'opacity-0'}`}>
      <h1 className="font-handwriting text-6xl md:text-7xl text-romance-dustyRose drop-shadow-md mb-2">
        Our Love Story
      </h1>
      <div className="flex items-center justify-center gap-3 text-xl md:text-2xl font-romantic text-romance-softBrown">
        <span>For Aditi</span>
        <Heart className="text-red-400 animate-heartbeat" size={24} />
        <span>With Love</span>
      </div>
    </div>
  );
};

export default ScrapbookTitle;
