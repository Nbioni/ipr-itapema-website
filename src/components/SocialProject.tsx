"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Users, HandHelping, ArrowUpRight, Calendar, ChevronLeft, ChevronRight, Music } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

function SkateboardIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M3 17L4.20414 18.3379C4.58342 18.7594 5.12375 19 5.69073 19H18.3093C18.8762 19 19.4166 18.7594 19.7959 18.3379L21 17" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"/>
      <circle opacity="0.5" cx="7" cy="21" r="1" fill="currentColor"/>
      <circle opacity="0.5" cx="17" cy="21" r="1" fill="currentColor"/>
      <circle cx="19" cy="4" r="2" stroke="currentColor" strokeWidth={1.5}/>
      <path d="M15 16.5004V15.2496C15 15.1657 15 15.1237 14.999 15.0843C14.9732 14.1062 14.4721 13.2021 13.6563 12.6619C13.6234 12.6401 13.5842 12.6155 13.5057 12.5665C13.4089 12.506 13.3604 12.4757 13.3291 12.4545C12.241 11.7158 12.1498 10.1461 13.145 9.2863C13.1735 9.2616 13.2125 9.23044 13.2903 9.16819L13.7358 8.81177C14.7607 7.99187 14.5413 6.37526 13.3349 5.85825C12.8119 5.6341 12.2123 5.68028 11.7297 5.98186L8.5 8.00044" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round"/>
      <path opacity="0.5" d="M7 15.5H7.37868C8.73694 15.5 10.0396 14.9604 11 14" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round"/>
      <path opacity="0.5" d="M16.5 10C17.8131 10.3283 19.1869 10.3283 20.5 10" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round"/>
    </svg>
  );
}

const prprImages = [
  "/fotos_PRPR/PRPR_1.jpg",
  "/fotos_PRPR/PRPR_2.jpg",
  "/fotos_PRPR/PRPR_3.jpg",
  "/fotos_PRPR/PRPR_4.jpg",
  "/fotos_PRPR/PRPR_5.jpg",
  "/fotos_PRPR/PRPR_6.jpg",
  "/fotos_PRPR/PRPR_7.jpg",
  "/fotos_PRPR/PRPR_8.jpg",
  "/fotos_PRPR/PRPR_9.jpg",
  "/fotos_PRPR/PRPR_10.jpg",
];

const stats = [
  { icon: Calendar, value: "10 Anos", label: "De Projeto" },
  { icon: HandHelping, value: "15+", label: "Voluntários Ativos" },
  { icon: Users, value: "100+", label: "Famílias Apoiadas" },
];

export default function SocialProject() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentImage((prev) => (prev + 1) % prprImages.length);
    }, 5000);
    return () => clearTimeout(timer);
  }, [currentImage]);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImage((prev) => (prev - 1 + prprImages.length) % prprImages.length);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImage((prev) => (prev + 1) % prprImages.length);
  };

  return (
    <section id="projetos" className="py-28 relative overflow-hidden bg-brand-secondary/40">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-[1440px] px-3 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Image Carousel */}
          <div className="lg:col-span-6 order-2 lg:order-1 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative aspect-4/3.5 rounded-3xl overflow-hidden border border-white/10 shadow-2xl group/carousel"
            >
              {prprImages.map((src, index) => (
                <div
                  key={src}
                  className={cn(
                    "absolute inset-0 z-0 transition-all duration-1000 ease-in-out",
                    index === currentImage ? "opacity-100 scale-100" : "opacity-0 scale-105"
                  )}
                >
                  <Image
                    src={src}
                    alt={`Ação do projeto Pelo Reino Pela Rua ${index + 1}`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                    priority={index === 0}
                  />
                </div>
              ))}

              {/* Dark Gradient Overlay inside the image */}
              <div className="absolute inset-0 z-1 bg-linear-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              
              {/* Manual navigation buttons (prev/next) */}
              <button
                onClick={handlePrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/30 hover:bg-white/15 text-white flex items-center justify-center backdrop-blur-sm transition-all active:scale-90 opacity-80 md:opacity-80 md:group-hover/carousel:opacity-100 duration-300 border border-white/10 cursor-pointer"
                aria-label="Foto anterior"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/30 hover:bg-white/15 text-white flex items-center justify-center backdrop-blur-sm transition-all active:scale-90 opacity-80 md:opacity-80 md:group-hover/carousel:opacity-100 duration-300 border border-white/10 cursor-pointer"
                aria-label="Próxima foto"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Floating Badge on Image */}
              <div className="absolute bottom-6 left-6 right-6 z-10 glass-panel backdrop-blur-xs border-white/10 p-4 bg-background/70">
                <span className="text-xs font-semibold uppercase tracking-widest text-brand-accent">Ação e Amor</span>
                <p className="text-sm font-light text-foreground/90 mt-1">{"\"Levar esperança e amparo a quem mais precisa nas ruas de Itapema.\""}</p>
              </div>

              {/* Pagination Dots inside the image container */}
              <div className="absolute top-6 right-6 z-10 flex gap-1.5 bg-black/35 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
                {prprImages.map((_, index) => (
                  <div
                    key={index}
                    className={cn(
                      "w-1.5 h-1.5 rounded-full transition-all duration-300",
                      index === currentImage ? "bg-brand-accent w-3" : "bg-white/40"
                    )}
                  />
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column: Copy and Stats */}
          <div className="lg:col-span-6 order-1 lg:order-2 flex flex-col items-center lg:items-start text-center lg:text-left">
            <motion.span
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-xs font-semibold tracking-widest text-brand-accent uppercase"
            >
              Fé em Ação
            </motion.span>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground mt-4 flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left"
            >
              <div className="relative w-24 h-24 rounded-full overflow-hidden border border-white/10 shrink-0 bg-white/5 p-0.5">
                <Image
                  src="/pelo_reino_pela_rua_logo.png"
                  alt="Logo Pelo Reino Pela Rua"
                  width={96}
                  height={96}
                  className="object-contain w-full h-full rounded-full"
                />
              </div>
              <span>Pelo Reino Pela Rua</span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-6 text-foreground/70 text-base md:text-lg font-light leading-relaxed"
            >
              O Pelo Reino Pela Rua é um projeto social da IPR Itapema que, há 10 anos, oferece aulas gratuitas de música e skate para as crianças e jovens da comunidade. Contando com o apoio de mais de 15 voluntários ativos, acreditamos que o amor de Jesus se manifesta através de ações práticas, promovendo acolhimento, arte, esporte e inclusão em nosso município.
            </motion.p>

            {/* Horários */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25 }}
              className="mt-8"
            >
              <h3 className="text-sm font-semibold tracking-wide text-foreground/60 uppercase mb-4">Horários (Sábados)</h3>
              <div className="flex flex-wrap gap-4 text-sm font-light leading-relaxed">
                
                {/* Card Música */}
                <div className="flex-1 min-w-[240px] px-4 py-2 rounded-2xl bg-linear-to-b from-white/10 to-white/2 border border-brand-accent/15 hover:border-brand-accent/30 hover:bg-white/5 hover:-translate-y-0.5 transition-all duration-300 group/card">
                  <div className="flex items-center justify-between mb-2">
                    <strong className="text-brand-accent text-lg font-semibold block transition-colors group-hover/card:text-brand-accent-hover">Aulas de Música</strong>
                    <Music className="w-6 h-6 text-brand-accent/50 group-hover/card:text-brand-accent transition-colors" />
                  </div>
                  <div className="space-y-3">
                    <div className="flex flex-col gap-0.5">
                      <span className="text-sm font-medium text-foreground/90">8h às 10h</span>
                      <span className="text-sm text-foreground/50">Turma de 7 a 11 anos</span>
                    </div>
                    <div className="h-px bg-white/5" />
                    <div className="flex flex-col gap-0.5">
                      <span className="text-sm font-medium text-foreground/90">9h30 às 11h30</span>
                      <span className="text-sm text-foreground/50">Turma de 12+ anos</span>
                    </div>
                  </div>
                </div>

                {/* Card Skate */}
                <div className="flex-1 min-w-[240px] px-4 py-2 rounded-2xl bg-linear-to-b from-white/10 to-white/2 border border-brand-accent/15 hover:border-brand-accent/30 hover:bg-white/5 hover:-translate-y-0.5 transition-all duration-300 group/card">
                  <div className="flex items-center justify-between mb-2">
                    <strong className="text-brand-accent text-lg font-semibold block transition-colors group-hover/card:text-brand-accent-hover">Aula de Skate</strong>
                    <SkateboardIcon className="w-6 h-6 text-brand-accent/50 group-hover/card:text-brand-accent transition-colors" />
                  </div>
                  <div className="space-y-3">
                    <div className="flex flex-col gap-0.5">
                      <span className="text-sm font-medium text-foreground/90">14h às 17h</span>
                      <span className="text-sm text-foreground/50">A partir de 6 anos</span>
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>

            {/* Stats list */}
            <div className="grid grid-cols-3 gap-4 my-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="text-center p-4 rounded-2xl bg-white/2 border border-white/5"
                >
                  <stat.icon className="w-5 h-5 mx-auto text-brand-accent mb-2" />
                  <p className="text-2xl font-serif font-bold text-foreground">{stat.value}</p>
                  <p className="text-[10px] uppercase tracking-wider text-foreground/50 mt-1 font-medium">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <a
                href="https://www.instagram.com/peloreinopelarua"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-brand-accent hover:text-brand-accent-hover border-b border-brand-accent/30 pb-1 transition-colors group"
              >
                Conheça o projeto no Instagram
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
