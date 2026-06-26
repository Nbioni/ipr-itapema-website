"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { InstagramIcon } from "./Icons";

const ministryList = [
  {
    title: "JC3",
    subtitle: "Jovens & Adolescentes",
    description: "Movimento dinâmico focado em adoração, conexão real e comunhão para jovens viverem o Evangelho com relevância.",
    link: "https://www.instagram.com/jc3jovens",
    linkText: "Acompanhar no Instagram",
    logo: "/jc3_logo.png",
  },
  {
    title: "Reino Kids",
    subtitle: "Ministério Infantil",
    description: "Ensino bíblico criativo e acolhedor para crianças, despertando o amor por Jesus de forma lúdica e prática.",
    link: "https://www.instagram.com/ipritapema/",
    linkText: "Acompanhar no Instagram",
    logo: "/reino_kids_logo.png",
  },
  {
    title: "Rede Calebe",
    subtitle: "Ministério de Homens",
    description: "Encontros de comunhão e discipulado focados no crescimento espiritual e papel do homem na sociedade.",
    link: "https://www.instagram.com/ipritapema/",
    linkText: "Acompanhar no Instagram",
    logo: "/rede_calebe_logo.png",
  },
  {
    title: "Rede Ester",
    subtitle: "Ministério Feminino",
    description: "Edificação e fortalecimento da identidade da mulher cristã através de comunhão, chás e painéis temáticos.",
    link: "https://www.instagram.com/ipritapema/",
    linkText: "Acompanhar no Instagram",
    logo: "/rede_ester_logo.png",
  },
  {
    title: "Aliança dos Para Sempre",
    subtitle: "Rede de Casais",
    description: "Fortalecimento do casamento e das famílias com base em princípios bíblicos, conexão prática e comunhão.",
    link: "https://www.instagram.com/ipritapema/",
    linkText: "Acompanhar no Instagram",
    logo: "/alianca_dos_para_sempre.png",
  },
];

export default function Ministries() {
  return (
    <section id="ministerios" className="py-28 relative overflow-hidden bg-[#060913]">
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
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 items-stretch">
          {ministryList.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="glass-card p-4 lg:p-6 border-white/5 bg-linear-to-b from-white/2 to-transparent flex flex-col justify-between hover:scale-[1.02] hover:border-brand-accent/25 hover:from-brand-accent/2 hover:to-transparent transition-all duration-500 relative overflow-hidden group"
            >
              {/* Highlight background glow */}
              <div className="absolute -right-20 -top-20 w-40 h-40 bg-brand-accent/5 rounded-full blur-3xl pointer-events-none transition-all duration-500 group-hover:scale-125" />

              <div>
                <div className="relative w-full aspect-square mb-6 z-10 rounded-2xl overflow-hidden">
                  <Image
                    src={item.logo}
                    alt={item.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 20vw"
                    className="object-contain rounded-2xl"
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
