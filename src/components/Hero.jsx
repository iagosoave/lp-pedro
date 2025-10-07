import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Video } from 'lucide-react';
import bannerImage from './banner.jpg';
import mobileImage from './mobile.jpg';
import student1 from './pessoa1.png';
import student2 from './pessoa2.png';
import student3 from './pessoa3.png';
import logo from './logo.png';

const HeroSection = () => {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const fadeInLeft = {
    initial: { opacity: 0, x: -30 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8, delay: 0.2, ease: "easeOut" }
  };

  const buttonGlow = {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.6, delay: 0.4 }
  };

  const studentBadge = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay: 0.6 }
  };

  const logoFade = {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  // Mobile Version
  if (isMobile) {
    return (
      <section className="relative h-screen bg-black text-white overflow-hidden flex flex-col">
        {/* Background Image Container */}
        <div className="relative h-[45%] overflow-hidden">
          <img 
            src={mobileImage}
            alt="Banner" 
            className="w-full h-full object-cover"
          />
          
          {/* Extra gradient for smoother transition */}
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black to-transparent"></div>
        </div>
        
        {/* Content Container */}
        <div className="relative z-10 flex-1 px-5 py-6 flex flex-col justify-start bg-black">
          <div className="w-full max-w-md mx-auto space-y-4">
            {/* Logo */}
            <motion.div 
              {...logoFade}
              className="flex justify-center mb-1"
            >
              <img 
                src={logo} 
                alt="Logo" 
                className="h-14 w-auto"
              />
            </motion.div>

            {/* Badge Data/Hora/Local */}
            <motion.div 
              {...logoFade}
              className="flex justify-center"
            >
              <div className="border-2 border-yellow-500 rounded-full px-4 py-2 flex items-center gap-2">
                <Calendar className="w-3.5 h-3.5 text-yellow-500" />
                <p className="text-white text-xs font-bold tracking-wide">
                  17/10 | 19H30 | ZOOM
                </p>
              </div>
            </motion.div>

            {/* Título Principal */}
            <motion.h1 
              {...fadeInUp}
              className="text-2xl font-bold text-white leading-tight text-center pt-2"
            >
              Masterclass{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
                Airbnb & Booking
              </span>
            </motion.h1>

            {/* Subtítulo */}
            <motion.p 
              {...fadeInLeft}
              className="text-sm text-gray-300 leading-relaxed text-center px-2"
            >
              Descobre como criar um negócio lucrativo com alojamento local mesmo sem teres imóveis próprios. Estratégias práticas e comprovadas.
            </motion.p>

            {/* Botão CTA com Brilho Premium */}
            <motion.div {...buttonGlow} className="pt-2">
              <motion.button
                className="relative group w-full"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Glow de fundo */}
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full blur-lg opacity-50 group-hover:opacity-70 transition-opacity" />
                
                {/* Botão principal */}
                <div className="relative bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold text-xs px-5 py-3.5 rounded-full shadow-2xl overflow-hidden">
                  
                  {/* Efeito shimmer */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                  
                  {/* Conteúdo do botão */}
                  <span className="relative z-10 flex items-center justify-center gap-1">
                    GARANTIR A MINHA VAGA AGORA
                    <svg 
                      className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </div>
              </motion.button>
            </motion.div>

            {/* Badge de Alunos */}
            <motion.div 
              {...studentBadge}
              className="flex items-center gap-2.5 justify-center pt-1"
            >
              {/* Fotos dos alunos empilhadas */}
              <div className="flex -space-x-2">
                <img 
                  src={student1} 
                  alt="Participante 1" 
                  className="w-9 h-9 rounded-full border-2 border-white shadow-lg object-cover"
                />
                <img 
                  src={student2} 
                  alt="Participante 2" 
                  className="w-9 h-9 rounded-full border-2 border-white shadow-lg object-cover"
                />
                <img 
                  src={student3} 
                  alt="Participante 3" 
                  className="w-9 h-9 rounded-full border-2 border-white shadow-lg object-cover"
                />
              </div>

              {/* Texto */}
              <p className="text-white text-xs font-medium">
                Junta-te a <span className="font-bold">centenas de participantes</span>
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    );
  }

  // Desktop Version
  return (
    <section 
      className="relative h-screen flex items-center overflow-hidden bg-black"
      style={{
        backgroundImage: `url(${bannerImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-xl">
          
          {/* Logo */}
          <motion.div 
            {...logoFade}
            className="mb-3"
          >
            <img 
              src={logo} 
              alt="Logo" 
              className="h-20 lg:h-24 w-auto"
            />
          </motion.div>

          {/* Badge Data/Hora/Local */}
          <motion.div 
            {...logoFade}
            className="mb-4"
          >
            <div className="inline-flex items-center gap-2.5 border-2 border-yellow-500 rounded-full px-5 py-2.5">
              <Calendar className="w-4 h-4 text-yellow-500" />
              <p className="text-white text-sm font-bold tracking-wide">
                17/10 | 19H30 | ZOOM
              </p>
            </div>
          </motion.div>

          {/* Título Principal */}
          <motion.h1 
            {...fadeInUp}
            className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight mb-4"
          >
            Masterclass{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
              Airbnb & Booking
            </span>
          </motion.h1>

          {/* Subtítulo */}
          <motion.p 
            {...fadeInLeft}
            className="text-base lg:text-lg text-gray-200 leading-relaxed mb-6 max-w-xl"
          >
            Descobre como criar um negócio lucrativo com alojamento local mesmo sem teres imóveis próprios. Estratégias práticas e comprovadas que podes aplicar de imediato.
          </motion.p>

          {/* Botão CTA com Brilho Premium */}
          <motion.div {...buttonGlow} className="mb-5">
            <motion.button
              className="relative group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Glow de fundo */}
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full blur-xl opacity-60 group-hover:opacity-80 transition-opacity" />
              
              {/* Botão principal */}
              <div className="relative bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold text-sm lg:text-base px-7 lg:px-9 py-3.5 lg:py-4 rounded-full shadow-2xl overflow-hidden">
                
                {/* Efeito shimmer */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                
                {/* Conteúdo do botão */}
                <span className="relative z-10 flex items-center justify-center gap-2">
                  GARANTIR A MINHA VAGA AGORA
                  <svg 
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </div>
            </motion.button>
          </motion.div>

          {/* Badge de Alunos */}
          <motion.div 
            {...studentBadge}
            className="flex items-center gap-3"
          >
            {/* Fotos dos alunos empilhadas */}
            <div className="flex -space-x-2">
              <img 
                src={student1} 
                alt="Participante 1" 
                className="w-10 h-10 rounded-full border-2 border-white shadow-lg object-cover"
              />
              <img 
                src={student2} 
                alt="Participante 2" 
                className="w-10 h-10 rounded-full border-2 border-white shadow-lg object-cover"
              />
              <img 
                src={student3} 
                alt="Participante 3" 
                className="w-10 h-10 rounded-full border-2 border-white shadow-lg object-cover"
              />
            </div>

            {/* Texto */}
            <p className="text-white text-sm lg:text-base font-medium">
              Junta-te a <span className="font-bold">centenas de participantes</span>
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;