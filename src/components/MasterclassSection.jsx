import React, { useState } from 'react';
import { Home, TrendingUp, Users, Zap } from 'lucide-react';

const MasterclassSection = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const learningTopics = [
    {
      icon: <Home className="w-7 h-7" />,
      title: "Gestão Remota",
      description: "Aprende a gerir propriedades à distância com sistemas automatizados"
    },
    {
      icon: <TrendingUp className="w-7 h-7" />,
      title: "Escalar Rápido",
      description: "Estratégias para multiplicar o teu portefólio em tempo recorde"
    },
    {
      icon: <Users className="w-7 h-7" />,
      title: "Parcerias Win-Win",
      description: "Como criar acordos lucrativos com proprietários de imóveis"
    },
    {
      icon: <Zap className="w-7 h-7" />,
      title: "Automação Total",
      description: "Sistemas que trabalham 24/7 enquanto dormes"
    }
  ];

  return (
    <section className="relative bg-black min-h-screen py-8 md:py-16 overflow-hidden">
      {/* Background effect */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-yellow-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        {/* Title */}
        <div className="text-center mb-6 md:mb-12 px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
            Transforma Conhecimento em{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
              Rendimento Passivo
            </span>
          </h2>
          <p className="text-gray-400 text-base md:text-lg mt-4 max-w-3xl mx-auto">
            Domina as estratégias que os top hosts usam para escalar no Airbnb e Booking
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-6 md:mb-12">
          {learningTopics.map((topic, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              className="relative group h-full"
            >
              {/* Animated Border SVG - ALWAYS ANIMATING */}
              <div className="relative h-full">
                <svg
                  className="absolute inset-0 w-full h-full pointer-events-none"
                  style={{ width: 'calc(100% + 4px)', height: 'calc(100% + 4px)', left: '-2px', top: '-2px' }}
                >
                  <defs>
                    <linearGradient id={`grad-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#facc15" />
                      <stop offset="50%" stopColor="#eab308" />
                      <stop offset="100%" stopColor="#ca8a04" />
                    </linearGradient>
                  </defs>
                  
                  {/* Base rotating border - ALWAYS visible and rotating */}
                  <rect
                    x="2"
                    y="2"
                    width="calc(100% - 4px)"
                    height="calc(100% - 4px)"
                    rx="12"
                    ry="12"
                    fill="none"
                    stroke={`url(#grad-${index})`}
                    strokeWidth="2"
                    strokeDasharray="100 1900"
                    className={hoveredCard === index ? "opacity-100" : "opacity-30"}
                  >
                    <animateTransform
                      attributeName="transform"
                      type="rotate"
                      from="0 50% 50%"
                      to="360 50% 50%"
                      dur="4s"
                      repeatCount="indefinite"
                    />
                  </rect>

                  {/* Secondary faster rotation on hover */}
                  {hoveredCard === index && (
                    <rect
                      x="2"
                      y="2"
                      width="calc(100% - 4px)"
                      height="calc(100% - 4px)"
                      rx="12"
                      ry="12"
                      fill="none"
                      stroke={`url(#grad-${index})`}
                      strokeWidth="2"
                      strokeDasharray="80 1920"
                      className="opacity-60"
                    >
                      <animateTransform
                        attributeName="transform"
                        type="rotate"
                        from="360 50% 50%"
                        to="0 50% 50%"
                        dur="3s"
                        repeatCount="indefinite"
                      />
                    </rect>
                  )}
                </svg>

                {/* Card */}
                <div className="relative bg-black/90 backdrop-blur-sm rounded-xl p-6 md:p-8 h-full border border-gray-900/50">
                  {/* Icon at top center */}
                  <div className="flex justify-center mb-4 md:mb-6">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-600 blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
                      <div className="relative w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-gray-900 to-black rounded-lg flex items-center justify-center border border-yellow-500/30 group-hover:border-yellow-500/60 group-hover:scale-110 transition-all duration-300">
                        <div className="text-yellow-500">
                          {topic.icon}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Title centered */}
                  <h3 className="text-lg md:text-xl font-bold text-white text-center mb-2 md:mb-3 group-hover:text-yellow-400 transition-colors duration-300">
                    {topic.title}
                  </h3>
                  
                  {/* Description centered */}
                  <p className="text-gray-400 text-center text-xs md:text-sm leading-relaxed">
                    {topic.description}
                  </p>

                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-yellow-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="text-center">
          <button className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full blur-xl opacity-60 group-hover:opacity-80 transition-opacity" />
            
            <div className="relative bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold text-sm md:text-base px-8 md:px-10 py-3 md:py-4 rounded-full transition-all group-hover:scale-105">
              
              <span className="relative flex items-center justify-center gap-2">
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
          </button>

         
        </div>
      </div>
    </section>
  );
};

export default MasterclassSection;