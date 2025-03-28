import React from 'react';
import ScrapbookTitle from '../components/ScrapbookTitle';
import ScrapbookSection from '../components/ScrapbookSection';
import CountdownTimer from '../components/CountdownTimer';
import Navigation from '../components/Navigation';
import TypewriterText from '../components/TypewriterText';
import { Heart } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen p-4 md:p-8">
      <ScrapbookTitle />
      
      <Navigation />
      
      <div className="mt-8 container px-4 mx-auto">
        <ScrapbookSection title="How We Met" delay={300} id="how-we-met">
          <TypewriterText 
            text="It was during that college event when time seemed to stand still. Raveena introduced us, a moment that felt both ordinary and extraordinary at once. Though we exchanged only a few words that day, something unspoken connected us – a spark, a feeling, a beginning."
            delay={500}
            className="mb-4 text-romance-softBrown"
          />
          
          <TypewriterText 
            text="I remember how you smiled, how the light caught in your eyes, how the entire room seemed to fade around you. That day, though our conversation was brief, was the start of everything beautiful in my life."
            delay={3000}
            className="mb-4 text-romance-softBrown"
          />
          
          <div className="flex justify-center my-6">
            <Heart className="text-romance-dustyRose animate-heartbeat" size={40} />
          </div>
          
          <TypewriterText 
            text="Little did I know that this chance encounter would bloom into the most precious relationship of my life. It all began with a simple introduction – 'This is Aditi' – words that would change my world forever."
            delay={5500}
            className="mb-4 text-romance-softBrown"
          />
        </ScrapbookSection>
        
        <ScrapbookSection title="Our First Conversation" delay={600} id="first-conversation">
          <TypewriterText 
            text="After our first meeting, I couldn't stop thinking about you. Days passed, and finally, you send me message on snapchat. Do you remember? Those initial messages, hesitant yet hopeful, each word carefully chosen."
            delay={500}
            className="mb-4 text-romance-softBrown"
          />
          
          <TypewriterText 
            text="Our conversations flowed naturally, as if we'd known each other for years. We talked about everything and nothing – our dreams, our fears, our favorite books, and the little things that make us who we are."
            delay={3000}
            className="mb-4 text-romance-softBrown"
          />
          
          <div className="flex justify-center my-6">
            <Heart className="text-romance-dustyRose animate-heartbeat" size={40} />
          </div>
          
          <TypewriterText 
            text="With each exchange, I found myself falling deeper, drawn to your wit, your wisdom, and the beautiful way you see the world. Those early conversations laid the foundation for what we have now – a love built on understanding, respect, and genuine connection."
            delay={5500}
            className="mb-4 text-romance-softBrown"
          />
        </ScrapbookSection>
        
        <ScrapbookSection title="What I Love About You, Aditi" delay={900} id="what-i-love">
          <TypewriterText 
            text="Aditi, where do I begin? I love your kind heart, how you care deeply for others, often putting their needs before your own. I love the way your eyes light up when you're passionate about something, the sound of your laughter that feels like home."
            delay={500}
            className="mb-4 text-romance-softBrown"
          />
          
          <TypewriterText 
            text="I love your strength and resilience, how you face challenges with grace and determination. I love your intelligence, the way your mind works, always curious, always seeking to understand more about the world around you."
            delay={3000}
            className="mb-4 text-romance-softBrown"
          />
          
          <div className="flex justify-center my-6">
            <Heart className="text-romance-dustyRose animate-heartbeat" size={40} />
          </div>
          
          <TypewriterText 
            text="But most of all, I love how you make me want to be a better person every day. With you, I've learned what it means to truly love – completely, unconditionally, with every fiber of my being. You are my muse, my inspiration, my heart's delight."
            delay={5500}
            className="mb-4 text-romance-softBrown"
          />
        </ScrapbookSection>
        
        <div className="max-w-lg mx-auto mb-20">
          <CountdownTimer />
        </div>
      </div>
      
      <footer className="text-center p-6 text-romance-softBrown font-romantic">
        <p className="animate-fade-in">Created with love, for the love of my life.</p>
      </footer>
    </div>
  );
};

export default Index;
