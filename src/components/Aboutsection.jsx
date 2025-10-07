import { motion } from 'framer-motion';
import { KeyRound, Hotel, Sparkles } from 'lucide-react';
import pedroImage from './pedro.jpg';

// Cor dourada para consistência
const GOLD_COLOR = '#DAA520';

// Conteúdo dos destaques (stats)
const highlights = [
  {
    icon: <KeyRound size={24} />,
    title: "Estratégias Exclusivas",
    description: "Métodos que abrem as portas para o sucesso em alojamento.",
  },
  {
    icon: <Hotel size={24} />,
    title: "Mestre da Hospitalidade",
    description: "Eleve a experiência dos seus hóspedes e as suas avaliações.",
  },
  {
    icon: <Sparkles size={24} />,
    title: "Resultados Brilhantes",
    description: "Transforme a sua propriedade numa fonte de rendimento de topo.",
  },
];

// Variantes de animação
const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const imageVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.8, ease: 'easeOut' } 
  },
};

const textVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.8, ease: 'easeOut' } 
  },
};

const MasterclassSection = () => {
  return (
    <section 
      id="sobre" 
      className="relative flex min-h-screen w-full items-center justify-center bg-black py-20 text-white"
    >
      {/* Linha decorativa sutil no topo */}
      <div 
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-800/30 to-transparent"
      />

      <motion.div 
        className="container mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-8 md:grid-cols-2 md:gap-16"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        {/* Coluna da Esquerda: Imagem */}
        <motion.div variants={imageVariants} className="relative w-full max-w-sm mx-auto">
          {/* Detalhe dourado sutil atrás da imagem */}
          <div 
            className="absolute -inset-1 rounded-lg opacity-20 blur-2xl"
            style={{ background: `radial-gradient(circle at center, ${GOLD_COLOR}, transparent 70%)` }}
          />
          
          <div className="relative aspect-[4/5] overflow-hidden rounded-lg border border-neutral-900">
            <img
              src={pedroImage}
              alt="Pedro Gomes, especialista em Airbnb e Booking"
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
            />
            {/* Gradiente sutil na base da imagem */}
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
          </div>
        </motion.div>

        {/* Coluna da Direita: Conteúdo */}
        <motion.div variants={textVariants} className="flex flex-col text-left">
          {/* Pequeno acento dourado acima do título */}
          <div 
            className="w-12 h-1 rounded-full mb-6"
            style={{ background: GOLD_COLOR }}
          />

          <h2 
            className="text-4xl font-bold md:text-5xl"
            style={{ color: GOLD_COLOR }}
          >
            Quem é Pedro Gomes?
          </h2>

          <p className="mt-6 text-lg text-gray-300 leading-relaxed">
            Pedro Gomes é um especialista em otimização de alojamento local, reconhecido por ajudar anfitriões a transformar as suas propriedades em fontes de rendimento de sucesso. Com um método comprovado, ele desmistifica os segredos das plataformas digitais.
          </p>
          <p className="mt-4 text-lg text-gray-300 leading-relaxed">
            A sua jornada é a prova de que, com a estratégia certa, qualquer um pode prosperar. Se ele conseguiu, você também consegue.
          </p>

          {/* Destaques / Ícones - Design mais limpo */}
          <div className="mt-12 space-y-6">
            {highlights.map((item, index) => (
              <motion.div 
                key={item.title}
                className="flex items-start gap-4 group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Ícone com container minimalista */}
                <div 
                  className="flex-shrink-0 w-12 h-12 rounded-lg bg-neutral-900 flex items-center justify-center border border-neutral-800 group-hover:border-yellow-900/50 transition-colors duration-300"
                >
                  <div style={{ color: GOLD_COLOR }}>
                    {item.icon}
                  </div>
                </div>
                
                {/* Texto */}
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm text-gray-400">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Linha decorativa sutil no final */}
          <div className="mt-12 flex items-center gap-4">
            <div className="h-px flex-1 bg-gradient-to-r from-yellow-800/30 to-transparent" />
            <div 
              className="w-2 h-2 rounded-full"
              style={{ background: GOLD_COLOR }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default MasterclassSection;