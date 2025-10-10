import { useState } from 'react';
import { KeyRound, Hotel, Sparkles, TrendingUp, Star, DollarSign } from 'lucide-react';
import pedroImage from './pedro.png';
import tiagoImage from './tiago.png';

const GOLD_COLOR = '#DAA520';

const tiagoHighlights = [
  {
    icon: <Sparkles size={24} />,
    title: "Alojamentos Atípicos",
    description: "Criador de espaços que mostram como é possível transformar um alojamento em algo memorável."
  },
  {
    icon: <Star size={24} />,
    title: "Destaque no Mercado",
    description: "Ensina como tornar um alojamento irresistível, criando uma experiência que não se encontra em anúncios \"normais\"."
  },
  {
    icon: <TrendingUp size={24} />,
    title: "Diferenciação",
    description: "Mostra que o mercado não está saturado se souberes dar um toque único ao teu alojamento."
  }
];

const pedroHighlights = [
  {
    icon: <KeyRound size={24} />,
    title: "Exemplo de liberdade",
    description: "Mostra que o alojamento local pode financiar sonhos e dar independência."
  },
  {
    icon: <DollarSign size={24} />,
    title: "Prova de faturação",
    description: "Mais de 50.000 € faturados em apenas 11 meses."
  },
  {
    icon: <Hotel size={24} />,
    title: "História inspiradora",
    description: "Pagou o próprio casamento na Tailândia apenas com o rendimento gerado pelo Airbnb."
  }
];

const Aboutsection = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section 
      id="sobre" 
      className="relative w-full bg-black py-16 md:py-24 text-white"
    >
      {/* Header */}
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 md:px-8 mb-16">
        <div className="text-center">
          <h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
            style={{ color: GOLD_COLOR }}
          >
            Os Mentores
          </h2>
          <p className="text-xl md:text-2xl text-gray-400">
            +15 alojamentos geridos | Estratégias comprovadas
          </p>
        </div>
      </div>

      {/* Pedro Gomes */}
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 md:px-8 mb-20">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Imagem */}
          <div className="w-full md:w-2/5">
            <img
              src={pedroImage}
              alt="Pedro Gomes"
              className="w-full h-auto rounded-lg"
            />
          </div>

          {/* Conteúdo */}
          <div className="w-full md:w-3/5">
            <h3 
              className="text-3xl md:text-4xl font-bold mb-2"
              style={{ color: GOLD_COLOR }}
            >
              Pedro Gomes
            </h3>
            <p className="text-lg font-semibold mb-4" style={{ color: GOLD_COLOR }}>
              Investimento & Imobiliário
            </p>
            <div className="text-gray-300 text-sm leading-relaxed space-y-3">
              <p>
                Pedro Gomes é empreendedor e investidor com foco no mercado imobiliário internacional. A sua abordagem combina visão prática e estratégia financeira, procurando sempre oportunidades de rentabilidade em imóveis com potencial de valorização e rendimento passivo.
              </p>
              <p className="font-medium text-gray-200">
                Especializa-se em: aquisição e gestão de imóveis destinados a arrendamento e turismo; análise de rentabilidade para maximizar o retorno sobre o investimento; gestão de parcerias e redes de contacto no setor imobiliário.
              </p>
              <p>
                Pedro acredita que o imobiliário é uma das formas mais seguras de construir liberdade financeira e dedica-se a partilhar estratégias que demonstram como investir de forma inteligente, mesmo sem grandes capitais iniciais.
              </p>
              <p>
                Com experiência prática em projetos próprios, alia conhecimento de mercado a uma comunicação clara, ajudando outros a perceberem como transformar o imobiliário numa fonte consistente de riqueza e estabilidade.
              </p>
              <p className="font-medium text-gray-200">
                Pedro Gomes dedica-se a mentorias há mais de 10 anos, acompanhando desde quem está a dar os primeiros passos no investimento até figuras reconhecidas do mundo da televisão. A sua missão é simples: tornar o caminho mais claro e acessível para todos, independentemente do ponto de partida.
              </p>
              <p className="italic text-gray-400">
                Pedro conseguiu pagar o seu casamento na Tailândia apenas com os rendimentos do Airbnb.
              </p>
            </div>
          </div>
        </div>

        {/* Cards do Pedro */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-6 mt-12">
          {pedroHighlights.map((topic, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredCard(`pedro-${index}`)}
              onMouseLeave={() => setHoveredCard(null)}
              className="relative group h-full"
            >
              <div className="relative h-full">
                <svg
                  className="absolute inset-0 w-full h-full pointer-events-none"
                  style={{ width: 'calc(100% + 4px)', height: 'calc(100% + 4px)', left: '-2px', top: '-2px' }}
                >
                  <defs>
                    <linearGradient id={`grad-pedro-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#DAA520" />
                      <stop offset="50%" stopColor="#B8860B" />
                      <stop offset="100%" stopColor="#FFD700" />
                    </linearGradient>
                  </defs>
                  
                  <rect
                    x="2"
                    y="2"
                    width="calc(100% - 4px)"
                    height="calc(100% - 4px)"
                    rx="12"
                    ry="12"
                    fill="none"
                    stroke={`url(#grad-pedro-${index})`}
                    strokeWidth="2"
                    strokeDasharray="100 1900"
                    className={hoveredCard === `pedro-${index}` ? "opacity-100" : "opacity-30"}
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

                  {hoveredCard === `pedro-${index}` && (
                    <rect
                      x="2"
                      y="2"
                      width="calc(100% - 4px)"
                      height="calc(100% - 4px)"
                      rx="12"
                      ry="12"
                      fill="none"
                      stroke={`url(#grad-pedro-${index})`}
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

                <div className="relative bg-black/90 backdrop-blur-sm rounded-xl p-5 md:p-6 lg:p-8 h-full border border-gray-900/50">
                  <div className="flex justify-center mb-4 md:mb-5 lg:mb-6">
                    <div className="relative">
                      <div 
                        className="absolute inset-0 blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"
                        style={{ background: `radial-gradient(circle, ${GOLD_COLOR}, transparent)` }}
                      />
                      <div 
                        className="relative w-12 h-12 md:w-13 md:h-13 lg:w-14 lg:h-14 bg-gradient-to-br from-gray-900 to-black rounded-lg flex items-center justify-center border group-hover:scale-110 transition-all duration-300"
                        style={{ borderColor: `${GOLD_COLOR}30` }}
                        onMouseEnter={(e) => e.currentTarget.style.borderColor = `${GOLD_COLOR}60`}
                        onMouseLeave={(e) => e.currentTarget.style.borderColor = `${GOLD_COLOR}30`}
                      >
                        <div style={{ color: GOLD_COLOR }}>
                          {topic.icon}
                        </div>
                      </div>
                    </div>
                  </div>

                  <h3 
                    className="text-base md:text-lg lg:text-xl font-bold text-white text-center mb-2 md:mb-3 transition-colors duration-300"
                    style={hoveredCard === `pedro-${index}` ? { color: GOLD_COLOR } : {}}
                  >
                    {topic.title}
                  </h3>
                  
                  <p className="text-gray-400 text-center text-xs md:text-sm leading-relaxed">
                    {topic.description}
                  </p>

                  <div 
                    className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: `linear-gradient(to right, transparent, ${GOLD_COLOR}, transparent)` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tiago Gomes */}
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 md:px-8 mb-16">
        <div className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-12">
          {/* Imagem */}
          <div className="w-full md:w-2/5">
            <img
              src={tiagoImage}
              alt="Tiago Gomes"
              className="w-full h-auto rounded-lg"
            />
          </div>

          {/* Conteúdo */}
          <div className="w-full md:w-3/5">
            <h3 
              className="text-3xl md:text-4xl font-bold mb-2"
              style={{ color: GOLD_COLOR }}
            >
              Tiago Gomes
            </h3>
            <p className="text-lg font-semibold mb-4" style={{ color: GOLD_COLOR }}>
              Oncle Rich - Criador de Conteúdo & Investidor
            </p>
            <div className="text-gray-300 text-sm leading-relaxed space-y-3">
              <p>
                Tiago Gomes, conhecido como Oncle Rich, é empreendedor e criador de conteúdo focado em investimentos imobiliários e desenvolvimento pessoal. Através de uma comunicação inspiradora e prática, partilha conhecimentos que ajudam pessoas a: tomar decisões mais conscientes sobre investir em imóveis; construir liberdade financeira com base em estratégias reais e acessíveis; aplicar princípios de mentalidade e crescimento pessoal ao mundo dos negócios.
              </p>
              <p>
                O projeto Oncle Rich posiciona-se como uma voz próxima e provocadora, desmistificando crenças erradas sobre riqueza e mostrando, com exemplos práticos, que investir é possível para qualquer pessoa preparada.
              </p>
              <p>
                Combinando experiência empresarial e visão estratégica, Tiago aposta em conteúdo digital e em formatos educativos (posts, histórias, workshops) que inspiram e, ao mesmo tempo, dão ferramentas concretas para criar resultados.
              </p>
              <p className="font-medium text-gray-200">
                Tiago Gomes distingue-se no mercado imobiliário pela sua visão criativa e fora do comum. Para ele, investir não é apenas comprar e arrendar — é criar experiências memoráveis que fazem os hóspedes querer voltar.
              </p>
              <p>
                Gosta de desenvolver quartos temáticos e de oferecer serviços complementares que transformam uma simples estadia em algo marcante. Seja através da decoração diferenciada, da atenção ao detalhe ou de pequenas surpresas pensadas para o hóspede, Tiago acredita que o segredo do sucesso está em proporcionar valor além do esperado.
              </p>
              <p className="font-medium text-gray-200">
                O seu lema é simples: <span className="italic">clientes satisfeitos voltam sempre</span>. Esta abordagem não só aumenta a rentabilidade, como cria um círculo de confiança e fidelidade que o distingue no setor.
              </p>
              <p className="italic text-gray-400">
                Acredita que o mercado imobiliário nunca estará saturado, apenas basta uma ideia diferenciada do normal para se destacar.
              </p>
              <p className="italic text-gray-400">
                Autor de um livro de educação financeira para crianças: "As Aventuras Financeiras de Lili e Leo"
              </p>
            </div>
          </div>
        </div>

        {/* Cards do Tiago */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-6 mt-12">
          {tiagoHighlights.map((topic, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredCard(`tiago-${index}`)}
              onMouseLeave={() => setHoveredCard(null)}
              className="relative group h-full"
            >
              <div className="relative h-full">
                <svg
                  className="absolute inset-0 w-full h-full pointer-events-none"
                  style={{ width: 'calc(100% + 4px)', height: 'calc(100% + 4px)', left: '-2px', top: '-2px' }}
                >
                  <defs>
                    <linearGradient id={`grad-tiago-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#DAA520" />
                      <stop offset="50%" stopColor="#B8860B" />
                      <stop offset="100%" stopColor="#FFD700" />
                    </linearGradient>
                  </defs>
                  
                  <rect
                    x="2"
                    y="2"
                    width="calc(100% - 4px)"
                    height="calc(100% - 4px)"
                    rx="12"
                    ry="12"
                    fill="none"
                    stroke={`url(#grad-tiago-${index})`}
                    strokeWidth="2"
                    strokeDasharray="100 1900"
                    className={hoveredCard === `tiago-${index}` ? "opacity-100" : "opacity-30"}
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

                  {hoveredCard === `tiago-${index}` && (
                    <rect
                      x="2"
                      y="2"
                      width="calc(100% - 4px)"
                      height="calc(100% - 4px)"
                      rx="12"
                      ry="12"
                      fill="none"
                      stroke={`url(#grad-tiago-${index})`}
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

                <div className="relative bg-black/90 backdrop-blur-sm rounded-xl p-5 md:p-6 lg:p-8 h-full border border-gray-900/50">
                  <div className="flex justify-center mb-4 md:mb-5 lg:mb-6">
                    <div className="relative">
                      <div 
                        className="absolute inset-0 blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"
                        style={{ background: `radial-gradient(circle, ${GOLD_COLOR}, transparent)` }}
                      />
                      <div 
                        className="relative w-12 h-12 md:w-13 md:h-13 lg:w-14 lg:h-14 bg-gradient-to-br from-gray-900 to-black rounded-lg flex items-center justify-center border group-hover:scale-110 transition-all duration-300"
                        style={{ borderColor: `${GOLD_COLOR}30` }}
                        onMouseEnter={(e) => e.currentTarget.style.borderColor = `${GOLD_COLOR}60`}
                        onMouseLeave={(e) => e.currentTarget.style.borderColor = `${GOLD_COLOR}30`}
                      >
                        <div style={{ color: GOLD_COLOR }}>
                          {topic.icon}
                        </div>
                      </div>
                    </div>
                  </div>

                  <h3 
                    className="text-base md:text-lg lg:text-xl font-bold text-white text-center mb-2 md:mb-3 transition-colors duration-300"
                    style={hoveredCard === `tiago-${index}` ? { color: GOLD_COLOR } : {}}
                  >
                    {topic.title}
                  </h3>
                  
                  <p className="text-gray-400 text-center text-xs md:text-sm leading-relaxed">
                    {topic.description}
                  </p>

                  <div 
                    className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: `linear-gradient(to right, transparent, ${GOLD_COLOR}, transparent)` }}
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

export default Aboutsection;