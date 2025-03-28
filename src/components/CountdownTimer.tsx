
import React, { useState, useEffect } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const calculateTimeLeft = (): TimeLeft => {
  // Set the date to April 4th of next year
  const currentYear = new Date().getFullYear();
  let year = currentYear;
  
  // If we're past April 4th of this year, use next year
  if (new Date() > new Date(`April 4, ${currentYear}`)) {
    year = currentYear + 1;
  }
  
  const difference = +new Date(`April 4, ${year}`) - +new Date();

  let timeLeft: TimeLeft = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  };

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  return timeLeft;
};

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents = Object.keys(timeLeft).map((interval) => {
    const value = timeLeft[interval as keyof TimeLeft];
    
    return (
      <div key={interval} className="flex flex-col items-center">
        <div className="text-3xl md:text-4xl font-bold text-romance-gold animate-twinkle">
          {value}
        </div>
        <div className="text-xs md:text-sm uppercase text-romance-softBrown mt-1">
          {interval}
        </div>
      </div>
    );
  });

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-md p-6 filigree-border">
      <h3 className="text-2xl font-romantic text-romance-dustyRose text-center mb-6 candlelit-glow">
        Countdown to Our Special Day
      </h3>
      
      <div className="grid grid-cols-4 gap-4 text-center">
        {timerComponents}
      </div>
      
      <p className="mt-6 text-center font-handwriting text-xl text-romance-softBrown">
        April 4th - The day we first met
      </p>
    </div>
  );
};

export default CountdownTimer;
