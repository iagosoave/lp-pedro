import React from 'react';
import { X, Calendar, Clock, Video } from 'lucide-react';

const CTASection = () => {
  const benefits = [
    "Método passo a passo para começar no Airbnb e Booking do zero",
    "Estratégias para criar rendimento passivo todos os dias",
    "Técnicas de otimização que já geraram múltiplos 5 dígitos",
    "Comunidade exclusiva com hosts de sucesso em Portugal",
    "Ferramentas e automações para ter um negócio que funciona sozinho",
    "Garantia: Aplica o método ou devolve-se o investimento"
  ];

  return (
    <section className="relative bg-black py-12 md:py-16 lg:py-20 w-full overflow-x-hidden">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-center">
          
          {/* Left side - Text */}
          <div className="order-2 lg:order-1">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 md:mb-8 leading-tight">
              Essa é a{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
                tua oportunidade
              </span>
              {' '}de entrar no alojamento local e ter acesso a:
            </h2>

            <div className="space-y-3 md:space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <X className="w-5 h-5 text-yellow-500 stroke-[2.5]" />
                  </div>
                  <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Price Card */}
          <div className="relative order-1 lg:order-2">
            {/* Card */}
            <div className="relative bg-black border-2 border-yellow-500/30 rounded-2xl p-6 md:p-8 text-center max-w-md mx-auto lg:max-w-none">
              
              {/* Badge */}
              <div className="inline-block mb-4">
                <div className="px-4 py-1.5 bg-yellow-500/10 border border-yellow-500/30 rounded-md">
                  <span className="text-yellow-500 font-medium text-xs uppercase tracking-wider">
                    OFERTA
                  </span>
                </div>
              </div>

              {/* Price title */}
              <p className="text-white text-xl md:text-2xl mb-4 font-semibold">
                Por apenas 12x de:
              </p>

              {/* Price */}
              <div className="mb-4">
                <div className="text-6xl sm:text-7xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
                  €XXX
                </div>
              </div>

              {/* Subtitle */}
              <p className="text-gray-400 text-base md:text-lg mb-6 md:mb-8">
                ou €XXX à vista
              </p>

              {/* Event details box */}
              <div className="bg-black/50 rounded-xl p-4 md:p-5 mb-6 border border-gray-800">
                <div className="space-y-2 md:space-y-3 text-gray-300 text-xs md:text-sm">
                  <div className="flex items-center justify-center gap-2">
                    <Calendar className="w-4 h-4 text-yellow-500 flex-shrink-0" />
                    <p><span className="font-semibold">Data:</span> 17 de Outubro de 2025</p>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Clock className="w-4 h-4 text-yellow-500 flex-shrink-0" />
                    <p><span className="font-semibold">Hora:</span> 19h30 (Horário de Portugal)</p>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Video className="w-4 h-4 text-yellow-500 flex-shrink-0" />
                    <p><span className="font-semibold">Formato:</span> Masterclass Online no Zoom</p>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <button className="relative group w-full">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full blur-lg opacity-50 group-hover:opacity-70 transition-opacity" />
                
                <div className="relative bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold text-base md:text-lg px-6 md:px-8 py-3 md:py-4 rounded-full transition-all group-hover:scale-105 flex items-center justify-center gap-2">
                  QUERO ME INSCREVER
                  <svg 
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform flex-shrink-0" 
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

export default CTASection;