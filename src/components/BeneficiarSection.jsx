import React, { useState } from 'react';
import { Home, TrendingUp, Briefcase, Building2, Users, Zap } from 'lucide-react';
import airBookImage from './air_book.png';

const BeneficiarSection = () => {
  const [hoveredItem, setHoveredItem] = useState(null);

  const beneficiarios = [
    {
      icon: <Home className="w-5 h-5" />,
      text: "Iniciantes no alojamento local"
    },
    {
      icon: <TrendingUp className="w-5 h-5" />,
      text: "Quem quer criar rendimento passivo"
    },
    {
      icon: <Building2 className="w-5 h-5" />,
      text: "Proprietários de imóveis parados"
    },
    {
      icon: <Briefcase className="w-5 h-5" />,
      text: "Investidores imobiliários"
    },
    {
      icon: <Users className="w-5 h-5" />,
      text: "Gestores de propriedades"
    },
    {
      icon: <Zap className="w-5 h-5" />,
      text: "Empreendedores que querem escalar rapidamente"
    }
  ];

  return (
    <section className="relative bg-black py-12 md:py-20 w-full overflow-x-hidden">
      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-6xl w-full">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Left side - Image */}
          <div className="relative flex justify-center lg:justify-start order-2 lg:order-1">
            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-xl px-4 sm:px-0">
              {/* Glow effect behind image */}
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/30 to-yellow-600/30 blur-3xl scale-110" />
              
              {/* Image */}
              <img 
                src={airBookImage}
                alt="Airbnb e Booking"
                className="relative w-full h-auto object-contain drop-shadow-2xl"
              />
            </div>
          </div>

          {/* Right side - Content */}
          <div className="order-1 lg:order-2 px-4 sm:px-0">
            {/* Title */}
            <div className="mb-8 md:mb-10 lg:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                Esta Masterclass é para{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
                  ti
                </span>
              </h2>
            </div>

            {/* List */}
            <div className="space-y-3 md:space-y-4 mb-8 md:mb-10">
              {beneficiarios.map((item, index) => (
                <div
                  key={index}
                  onMouseEnter={() => setHoveredItem(index)}
                  onMouseLeave={() => setHoveredItem(null)}
                  className="relative group"
                >
                  <div className="flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-xl transition-all duration-300 border border-gray-900 hover:border-yellow-500/30 hover:bg-yellow-500/5">
                    {/* Icon */}
                    <div className="relative flex-shrink-0">
                      <div className={`absolute inset-0 bg-yellow-500 rounded-full blur-lg transition-opacity duration-300 ${
                        hoveredItem === index ? 'opacity-30' : 'opacity-0'
                      }`} />
                      <div className={`relative w-10 h-10 md:w-11 md:h-11 rounded-full flex items-center justify-center transition-all duration-300 ${
                        hoveredItem === index 
                          ? 'bg-gradient-to-br from-yellow-400 to-yellow-600 scale-110' 
                          : 'bg-black border-2 border-yellow-500/30'
                      }`}>
                        <div className={hoveredItem === index ? 'text-black' : 'text-yellow-500'}>
                          {item.icon}
                        </div>
                      </div>
                    </div>
                    
                    {/* Text */}
                    <p className={`text-sm md:text-base lg:text-lg font-medium transition-colors duration-300 ${
                      hoveredItem === index ? 'text-white' : 'text-gray-300'
                    }`}>
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div>
              <button className="relative group w-full lg:w-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full blur-xl opacity-60 group-hover:opacity-80 transition-opacity" />
                
                <div className="relative bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold text-sm md:text-base px-8 md:px-10 py-3 md:py-4 rounded-full transition-all group-hover:scale-105 flex items-center justify-center gap-2">
                  QUERO INSCREVER-ME AGORA
                  <svg 
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform flex-shrink-0" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default BeneficiarSection;