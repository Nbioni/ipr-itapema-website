"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { InstagramIcon } from "./Icons";

const ministryList = [
  {
    title: "JC3",
    subtitle: "Ministério de Jovens & Adolescentes",
    description: "Um movimento focado em viver o Evangelho de forma autêntica, intensa e relevante. Nossos encontros reúnem adoração, palavra viva, conexão real e muita comunhão. Se você busca o seu lugar, este é o JC3.",
    link: "https://www.instagram.com/jc3jovens",
    linkText: "Seguir JC3 no Instagram",
    logo: "/jc3_logo.png",
  },
  {
    title: "Reino Kids",
    subtitle: "Ministério Infantil",
    description: "Cuidamos da próxima geração guiando os corações das crianças a amar a Jesus através de uma linguagem lúdica, teatro, música e ensinamentos práticos que fazem sentido para eles.",
    link: "https://www.instagram.com/ipritapema/",
    linkText: "Acompanhar no Instagram",
    logo: "/reino_kids_logo.png",
  },
  {
    title: "Rede Calebe",
    subtitle: "Ministério de Homens",
    description: "Um espaço dedicado ao fortalecimento do homem cristão em suas responsabilidades como líder, pai, esposo e profissional. Nossos encontros visam o discipulado e a comunhão mútua.",
    link: "https://www.instagram.com/ipritapema/",
    linkText: "Acompanhar Rede Calebe no Instagram",
    logo: "/rede_calebe_logo.png",
  },
  {
    title: "Rede Ester",
    subtitle: "Ministério Feminino",
    description: "Encontros especiais projetados para fortalecer a identidade da mulher cristã, promover a cura interior, a comunhão e edificação através de painéis, chás e estudos focados.",
    link: "https://www.instagram.com/ipritapema/",
    linkText: "Acompanhar Rede Ester no Instagram",
    logo: "/rede_ester_logo.png",
  },
];

export default function Ministries() {
  return (
    <section id="ministerios" className="py-24 relative overflow-hidden bg-[#060913]">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-[1440px] px-4 md:px-8 relative z-10">
        
        {/* Title */}
        <div className="max-w-3xl mb-16">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-xs font-semibold tracking-widest text-brand-accent uppercase"
          >
            Nossa Vida Comunitária
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl font-bold tracking-tight text-foreground mt-4"
          >
            Ministérios & Conexões
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-foreground/70 text-base md:text-lg font-light max-w-2xl"
          >
            Temos espaços preparados para todas as idades e fases da vida. Descubra onde você se encaixa e faça parte da nossa família.
          </motion.p>
        </div>

        {/* Ministries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 items-stretch">
          {ministryList.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="glass-card p-8 border-white/5 bg-linear-to-b from-white/2 to-transparent flex flex-col justify-between hover:scale-[1.02] hover:border-brand-accent/25 hover:from-brand-accent/2 hover:to-transparent transition-all duration-500 relative overflow-hidden group"
            >
              {/* Highlight background glow */}
              <div className="absolute -right-20 -top-20 w-40 h-40 bg-brand-accent/5 rounded-full blur-3xl pointer-events-none transition-all duration-500 group-hover:scale-125" />

              <div>
                <div className="w-24 h-24 rounded-2xl overflow-hidden border border-white/10 mb-6 relative z-10 flex items-center justify-center bg-white/5 transition-colors group-hover:border-brand-accent/25">
                  <Image
                    src={item.logo}
                    alt={item.title}
                    width={96}
                    height={96}
                    className="object-cover w-full h-full"
                  />
                </div>

                <h3 className="text-2xl font-serif font-bold text-foreground mb-1 relative z-10">
                  {item.title}
                </h3>
                <h4 className="text-xs font-semibold tracking-wider text-foreground/50 uppercase mb-4 relative z-10">
                  {item.subtitle}
                </h4>
                <p className="text-foreground/70 font-light leading-relaxed text-sm mb-8 relative z-10">
                  {item.description}
                </p>
              </div>

              <div className="relative z-10">
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-brand-accent hover:text-brand-accent-hover transition-colors group/link"
                >
                  <InstagramIcon className="w-4 h-4 transition-transform group-hover/link:scale-110" />
                  {item.linkText}
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
