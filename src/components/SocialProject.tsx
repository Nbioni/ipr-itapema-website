"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Users, HandHelping, ArrowUpRight, Calendar, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

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
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % prprImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImage((prev) => (prev - 1 + prprImages.length) % prprImages.length);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImage((prev) => (prev + 1) % prprImages.length);
  };

  return (
    <section id="projetos" className="py-24 relative overflow-hidden bg-brand-secondary/40">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-[1440px] px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Image Carousel */}
          <div className="lg:col-span-6 order-2 lg:order-1 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 shadow-2xl group/carousel"
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
              <div className="absolute inset-0 z-1 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              
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
              <div className="absolute bottom-6 left-6 right-6 z-10 glass-panel border-white/10 p-4 bg-background/70">
                <span className="text-xs font-semibold uppercase tracking-widest text-brand-accent">Ação e Amor</span>
                <p className="text-sm font-light text-foreground/90 mt-1">{"\"Levar esperança e amparo a quem mais precisa nas ruas de Itapema.\""}</p>
              </div>

              {/* Pagination Dots inside the image container */}
              <div className="absolute top-6 right-6 z-10 flex gap-1.5 bg-black/35 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
                {prprImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className={cn(
                      "w-1.5 h-1.5 rounded-full transition-all duration-300 cursor-pointer",
                      index === currentImage ? "bg-brand-accent w-3" : "bg-white/40 hover:bg-white/60"
                    )}
                    aria-label={`Ir para a foto ${index + 1}`}
                  />
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column: Copy and Stats */}
          <div className="lg:col-span-6 order-1 lg:order-2">
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
              className="font-serif text-4xl md:text-5xl font-bold tracking-tight text-foreground mt-4 flex items-center gap-4"
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

            {/* Stats list */}
            <div className="grid grid-cols-3 gap-4 my-10">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="text-center p-4 rounded-2xl bg-white/[0.02] border border-white/5"
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
