import React, { useState, useEffect } from 'react';

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const eventDate = new Date('2025-10-17T19:30:00+01:00');
      const now = new Date();
      const difference = eventDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full bg-gradient-to-b from-black to-transparent py-4 px-4">
      <div className={`${isMobile ? 'max-w-sm' : 'max-w-xl'} mx-auto`}>
        <p className={`text-center text-yellow-500 font-semibold mb-3 tracking-wide ${isMobile ? 'text-[10px]' : 'text-xs'}`}>
          A MASTERCLASS COMEÇA EM:
        </p>
        <div className={`grid grid-cols-4 ${isMobile ? 'gap-2' : 'gap-3'}`}>
          {[
            { value: timeLeft.days, label: 'Dias' },
            { value: timeLeft.hours, label: 'Horas' },
            { value: timeLeft.minutes, label: isMobile ? 'Min' : 'Minutos' },
            { value: timeLeft.seconds, label: isMobile ? 'Seg' : 'Segundos' }
          ].map((item, index) => (
            <div key={index} className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-yellow-600/20 rounded-lg blur" />
              <div className={`relative bg-black/90 backdrop-blur-sm border border-yellow-500/30 rounded-lg ${isMobile ? 'p-2' : 'p-3'}`}>
                <div className={`font-bold text-transparent bg-clip-text bg-gradient-to-br from-yellow-400 to-yellow-600 text-center tabular-nums ${isMobile ? 'text-lg' : 'text-3xl'}`}>
                  {String(item.value).padStart(2, '0')}
                </div>
                <div className={`text-gray-400 text-center uppercase tracking-wider ${isMobile ? 'text-[8px] mt-0.5' : 'text-[10px] mt-1'}`}>
                  {item.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Countdown;