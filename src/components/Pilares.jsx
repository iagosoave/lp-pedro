import React, { useState } from 'react';

// Lembre-se de ajustar o caminho para as suas imagens
import imagem1 from './imagem1.png'; 
import imagem2 from './imagem2.png';
import imagem3 from './imagem3.png'; 
import imagem4 from './imagem4.png'; 

const GOLD_COLOR = '#DAA520';

const Pilares = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const methods = [
    {
      title: "Estratégia e Execução Orientada",
      description: "Escalamos negócios através de estratégias bem definidas e acompanhamento detalhado em cada passo da execução, garantindo que as suas ideias se tornam realidade.",
      image: imagem1
    },
    {
      title: "Metas Claras e Lucros Maximizados",
      description: "Ajudamos a definir objetivos ambiciosos, a simplificar processos e a otimizar operações, tudo para que consiga aumentar significativamente os seus lucros.",
      image: imagem2
    },
    {
      title: "Aconselhamento e Partilha Exclusiva",
      description: "Beneficie de aconselhamento direto e da partilha de experiências entre empreendedores, obtendo perspetivas valiosas e planos de ação práticos para os seus desafios.",
      image: imagem3
    },
    {
      title: "Resultados Reais",
      description: "Aqui, o crescimento não é apenas um conceito. É um método comprovado, com acompanhamento contínuo e a dedicação para alcançar resultados tangíveis e duradouros.",
      image: imagem4
    }
  ];

  return (
    <section className="relative w-full bg-black py-24 md:py-32 text-white overflow-hidden">
      <div className="container mx-auto max-w-6xl px-6 md:px-8">

        <div className="text-center mb-16">
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            O Nosso Método para o <span style={{ color: GOLD_COLOR }}>Sucesso</span>
          </h3>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            No Primo Circle, transformamos a ambição em ação com uma abordagem estruturada e focada em resultados. Veja como:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {methods.map((method, index) => {
            const isHovered = hoveredCard === index;
            
            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                className="group relative aspect-[9/16] w-full rounded-2xl overflow-hidden transition-all duration-300 border-2"
                style={{
                  borderColor: GOLD_COLOR, // Borda dourada fixa
                  boxShadow: isHovered ? `0 0 40px -10px ${GOLD_COLOR}B0` : 'none', // Brilho no hover
                }}
              >
                {/* Imagem de fundo */}
                <img
                  src={method.image}
                  alt={method.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                />
                
                {/* Gradiente sutil para legibilidade do texto */}
                <div className="absolute bottom-0 left-0 right-0 h-2/5 bg-gradient-to-t from-black/90 via-black/50 to-transparent pointer-events-none"></div>

                {/* Texto: Título e Descrição ajustados para ficarem mais para baixo e menores */}
                <div className="absolute bottom-0 left-0 right-0 p-6 pb-4 flex flex-col justify-end"> {/* Ajustado pb-4 */}
                  <h4 
                    className="text-xl font-bold uppercase tracking-wide transition-colors duration-300 mb-1" // Tamanho do título para 'xl', mb-1
                  >
                    {method.title}
                  </h4>
                  <p className="text-xs text-gray-300 leading-relaxed"> {/* Tamanho da descrição para 'xs' */}
                    {method.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Pilares;