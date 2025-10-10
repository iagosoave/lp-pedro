import React, { useState } from 'react';
import logoCircle from './logo-circle.jpeg';

const GOLD_COLOR = '#DAA520';

const PrimoCircleSection = () => {
  const [hoveredPillar, setHoveredPillar] = useState(null);

  const pillars = [
    {
      title: "Comunidade e Conexão",
      description: "Deixe de caminhar sozinho. O Primo Circle reúne micro e pequenos empreendedores que partilham ambições e desafios, crescendo em conjunto."
    },
    {
      title: "Partilha e Transparência",
      description: "Uma cultura de transparência onde se partilham sucessos e falhas. Aprendemos uns com os outros para evoluir mais rapidamente, sem esconder o jogo."
    },
    {
      title: "Foco em Resultados Reais",
      description: "Não vivemos de teoria. O nosso foco está na execução, no aumento do faturamento, na maximização dos lucros e no crescimento tangível."
    },
    {
      title: "Sucesso Coletivo",
      description: "Quando um membro sobe, todos sobem. Inspiramo-nos mutuamente e trabalhamos com um compromisso coletivo para construir empresas fortes e vidas com mais liberdade."
    }
  ];

  return (
    <section className="relative w-full bg-black py-24 md:py-32 text-white overflow-hidden">
      <div className="container mx-auto max-w-6xl px-6 md:px-8">
        
        {/* Header Section with Logo on Side */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-16 mb-20">
          {/* Left - Text Content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Title */}
            <h2 className="text-3xl md:text-5xl font-bold mb-8">
              <span style={{ color: GOLD_COLOR }}>O Primo Circle:</span>
              <br className="md:hidden" />
              <span className="text-white"> Onde Empreendedores Crescem Juntos</span>
            </h2>
            
            {/* Subtitle */}
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl leading-relaxed">
              Antes de mergulharmos nos "Lobos do Airbnb", queremos apresentar a nossa comunidade exclusiva, 
              desenhada para quem procura escalar o seu negócio e a sua vida.
            </p>
          </div>

          {/* Right - Logo */}
          <div className="order-first lg:order-last">
            <img 
              src={logoCircle} 
              alt="Primo Circle" 
              className="w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 object-contain"
            />
          </div>
        </div>

        {/* Pillars - Minimal List */}
        <div className="space-y-12 md:space-y-16 max-w-5xl mx-auto">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="group relative"
              onMouseEnter={() => setHoveredPillar(index)}
              onMouseLeave={() => setHoveredPillar(null)}
            >
              {/* Number indicator */}
              <div className="flex items-start gap-6 md:gap-8">
                <div className="relative">
                  <span 
                    className="text-5xl md:text-6xl font-bold opacity-10 transition-opacity duration-500"
                    style={{ 
                      color: hoveredPillar === index ? GOLD_COLOR : 'white',
                      opacity: hoveredPillar === index ? 0.3 : 0.1
                    }}
                  >
                    0{index + 1}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1 pt-2">
                  <h3 
                    className="text-xl md:text-2xl font-semibold mb-3 transition-colors duration-300"
                    style={{ color: hoveredPillar === index ? GOLD_COLOR : 'white' }}
                  >
                    {pillar.title}
                  </h3>
                  <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                    {pillar.description}
                  </p>
                  
                  {/* Subtle underline on hover */}
                  <div 
                    className="mt-6 h-px bg-gradient-to-r from-transparent transition-all duration-500"
                    style={{ 
                      background: hoveredPillar === index 
                        ? `linear-gradient(to right, ${GOLD_COLOR}40, transparent)` 
                        : 'linear-gradient(to right, transparent, transparent)'
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PrimoCircleSection;