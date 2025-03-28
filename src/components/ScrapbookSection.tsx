
import React, { useEffect, useRef, useState } from 'react';

interface ScrapbookSectionProps {
  title: string;
  children: React.ReactNode;
  delay?: number;
  id: string;
}

const ScrapbookSection: React.FC<ScrapbookSectionProps> = ({ 
  title, 
  children, 
  delay = 0,
  id 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [delay]);

  return (
    <section 
      id={id}
      ref={sectionRef}
      className={`mb-20 max-w-4xl mx-auto transition-opacity duration-1000 ease-in-out filigree-border
        ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-6 md:p-8">
        <h2 className="text-3xl md:text-4xl font-handwriting text-romance-dustyRose mb-6 text-center candlelit-glow">
          {title}
        </h2>
        <div className="prose prose-lg max-w-none">
          {children}
        </div>
      </div>
    </section>
  );
};

export default ScrapbookSection;
