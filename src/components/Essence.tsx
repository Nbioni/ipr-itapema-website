"use client";

import { motion } from "framer-motion";
import { Heart, Compass, Users } from "lucide-react";

const pillars = [
  {
    icon: Heart,
    title: "Amar a Deus e às Pessoas",
    description:
      "Acreditamos que o amor é a base de tudo. Nosso maior mandamento é amar a Deus sobre todas as coisas e ao próximo de forma prática.",
  },
  {
    icon: Users,
    title: "Crescer em Comunhão",
    description:
      "Ninguém foi feito para caminhar sozinho. Promovemos relacionamentos profundos, apoio mútuo e discipulado através de nossos grupos.",
  },
  {
    icon: Compass,
    title: "Descobrir o Propósito",
    description:
      "Deus tem um plano singular para cada indivíduo. Apoiamos você a identificar seus dons e servir ativamente na edificação do Reino.",
  },
];

export default function Essence() {
  return (
    <section id="essencia" className="py-28 relative overflow-hidden bg-[#060913]">
      {/* Background decoration */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-brand-accent/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="mx-auto max-w-[1440px] pt-8 px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Heading and Editorial statement */}
          <div className="lg:col-span-5 flex flex-col justify-center text-center lg:text-left items-center lg:items-start">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-xs font-semibold tracking-widest text-brand-accent uppercase"
            >
              Nossa Essência
            </motion.span>
            
            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.1 }}
              className="font-serif text-4xl md:text-5xl font-bold tracking-tight text-foreground mt-4 leading-tight"
            >
              Nós somos uma igreja viva, ativa e avivada. Somos a Renovada!
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.2 }}
              className="mt-6 text-foreground/70 text-base md:text-lg leading-relaxed font-light"
            >
              A IPR Itapema é uma comunidade cristã relevante, dinâmica e acolhedora. Nosso desejo é ser uma ponte entre as pessoas e Deus, vivenciando o evangelho simples, curador e transformador no litoral catarinense.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.3 }}
              className="mt-8 p-6 rounded-2xl border border-brand-accent/15 bg-brand-accent/2 w-full text-center lg:text-left"
            >
              <p className="font-serif italic text-brand-accent text-lg">
                {"\"Não fomos criados apenas para fazer parte de um templo, mas para ser igreja onde quer que estejamos — amando de forma incondicional.\""}
              </p>
            </motion.div>
          </div>

          {/* Right Column: Pillars list */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-8 flex flex-col md:flex-row gap-6 items-start"
              >
                <div className="shrink-0 p-4 bg-brand-accent/10 rounded-2xl border border-brand-accent/20 text-brand-accent">
                  <pillar.icon className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl font-serif font-bold text-foreground mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-foreground/75 font-light leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
