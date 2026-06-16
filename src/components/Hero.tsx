"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Play, CalendarDays, MapPin, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const slides = [
  "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?q=80&w=1920", // Praia ao entardecer
  "https://images.unsplash.com/photo-1478147427282-58a87a120781?q=80&w=1920", // Litoral crepúsculo
  "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?q=80&w=1920"  // Horizonte do mar
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <section
      id="inicio"
      className="w-full bg-[#060913] pt-28 pb-8 px-4 md:px-8 flex flex-col items-center justify-center"
    >
      {/* Framed Hero Card */}
      <div className="relative w-full max-w-[1440px] max-h-[668px] aspect-16/10 md:aspect-video min-h-[520px] md:min-h-[620px] rounded-[32px] overflow-hidden shadow-2xl flex items-end p-6 md:p-12 lg:p-16 group/card">
        
        {/* Background Slideshow */}
        {slides.map((url, index) => (
          <div
            key={url}
            className={cn(
              "absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-in-out",
              index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-105"
            )}
            style={{
              backgroundImage: `url('${url}')`,
            }}
          />
        ))}

        {/* Gradient Overlay for Text Readability & Smooth Bottom Blend */}
        <div className="absolute inset-0 z-1 bg-linear-to-t from-[#060913] via-[#060913]/10 to-transparent" />
        <div className="absolute inset-0 z-1 bg-linear-to-r from-[#060913]/90 via-30% from-10% to-transparent" />

        {/* Interactive manual navigation buttons (left/right) */}
        <button
          onClick={handlePrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/20 hover:bg-white/15 text-white flex items-center justify-center backdrop-blur-sm transition-all active:scale-90 opacity-80 group-hover/card:opacity-100 duration-300 border border-white/10 cursor-pointer"
          aria-label="Slide anterior"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/20 hover:bg-white/15 text-white flex items-center justify-center backdrop-blur-sm transition-all active:scale-90 opacity-80 group-hover/card:opacity-100 duration-300 border border-white/10 cursor-pointer"
          aria-label="Próximo slide"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Pagination dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={cn(
                "w-2 h-2 rounded-full transition-all duration-300 cursor-pointer",
                index === currentSlide ? "bg-white w-5" : "bg-white/40 hover:bg-white/60"
              )}
              aria-label={`Ir para o slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Main Content inside the Card */}
        <div className="relative z-10 max-w-2xl w-full text-left flex flex-col items-start gap-5">
          {/* Top Tagline */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/10 backdrop-blur-md"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse" />
            <span className="text-[10px] font-medium tracking-widest uppercase text-foreground/90">
              Igreja Presbiteriana Renovada de Itapema
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-7xl font-normal tracking-tight text-white leading-[1.15]"
          >
            Um lugar para <span className="text-brand-accent italic font-bold">PERTENCER</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-sm md:text-base text-white/80 font-light leading-relaxed max-w-lg"
          >
            Seja muito bem-vindo! Conecte-se com Deus, construa relacionamentos profundos e descubra o propósito de sua vida conosco.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-row gap-6 items-center w-full mt-2"
          >
            <a
              href="https://www.youtube.com/@ipritapema6081/streams"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3 font-semibold text-xs tracking-wider text-white uppercase bg-white/10 hover:bg-white/20 backdrop-blur border border-white/15 active:scale-95 rounded-xl transition-all duration-300"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              Assista Ao Vivo
            </a>

            <a
              href="#cultos"
              className="inline-flex items-center justify-center gap-1 font-semibold text-xs tracking-wider text-white hover:text-brand-accent uppercase active:scale-95 transition-all duration-300"
            >
              Nossos Cultos <span className="text-brand-accent ml-1 font-bold font-mono text-sm">&gt;</span>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Floating Info Bar directly below the Hero card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="mt-8 w-full max-w-[1440px] glass-panel p-6 flex flex-col md:flex-row justify-between items-center gap-6 border-white/5 shadow-2xl relative"
      >
        <div className="flex items-center gap-4 text-left w-full md:w-auto">
          <div className="p-3 bg-white/5 rounded-xl border border-white/10 text-brand-accent">
            <CalendarDays className="w-6 h-6" />
          </div>
          <div>
            <p className="text-xs text-foreground/50 uppercase tracking-widest font-semibold">Domingos</p>
            <h3 className="text-lg font-bold text-foreground">Culto da Família</h3>
            <p className="text-sm text-foreground/75 font-light">Às 19:00h</p>
          </div>
        </div>

        <div className="hidden md:block w-px h-12 bg-white/10" />

        <div className="flex items-center gap-4 text-left w-full md:w-auto">
          <div className="p-3 bg-white/5 rounded-xl border border-white/10 text-brand-accent">
            <MapPin className="w-6 h-6" />
          </div>
          <div>
            <p className="text-xs text-foreground/50 uppercase tracking-widest font-semibold">Localização</p>
            <h3 className="text-lg font-bold text-foreground">Itapema / SC</h3>
            <a 
              href="#localizacao" 
              className="text-sm text-brand-accent hover:underline font-light flex items-center gap-1"
            >
              Como chegar nas reuniões
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
