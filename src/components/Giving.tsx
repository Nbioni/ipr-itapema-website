"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Copy, Check, Building2 } from "lucide-react";

export default function Giving() {
  const [copied, setCopied] = useState(false);
  const formattedPixKey = "76.357.144/0001-61";

  const handleCopy = () => {
    navigator.clipboard.writeText(formattedPixKey);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contribuir" className="py-28 relative overflow-hidden bg-[#060913]">
      {/* Decorative Blur Background */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-brand-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-[1440px] px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Verse & Message */}
          <div className="lg:col-span-5">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-xs font-semibold tracking-widest text-brand-accent uppercase"
            >
              Generosidade
            </motion.span>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-serif text-4xl md:text-5xl font-bold tracking-tight text-foreground mt-4"
            >
              Dízimos e Ofertas
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-6 text-foreground/70 text-base md:text-lg font-light leading-relaxed"
            >
              Acreditamos que a generosidade é um ato de adoração e confiança em Deus. Suas contribuições apoiam o sustento da igreja local, o avanço do evangelho e o impacto social através do projeto *Pelo Reino Pela Rua*.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-8 relative p-8 rounded-3xl border border-white/5 bg-white/1 backdrop-blur-sm"
            >
              <div className="absolute top-4 left-4 text-brand-accent/25">
                <Heart className="w-8 h-8 fill-current" />
              </div>
              <p className="font-serif text-lg text-foreground/90 italic pl-6 leading-relaxed">
                {"\"Cada um dê conforme determinou em seu coração, não com pesar ou por obrigação, pois Deus ama quem dá com alegria.\""}
              </p>
              <p className="text-right text-xs font-semibold tracking-wider text-brand-accent uppercase mt-4">
                2 Coríntios 9:7
              </p>
            </motion.div>
          </div>

          {/* Right Column: Pix Card (Glassmorphic) */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card p-8 md:p-10 border-brand-accent/20 bg-linear-to-b from-brand-accent/3 to-transparent text-center flex flex-col items-center"
            >
              {/* Header inside the card */}
              <div className="mb-6">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-brand-accent/10 border border-brand-accent/20 text-brand-accent uppercase">
                  Contribuição Digital
                </span>
                <h3 className="text-xl font-serif font-bold text-foreground mt-3">
                  Igreja Presbiteriana Renovada de Itapema
                </h3>
              </div>

              {/* QR Code Graphic */}
              <div className="relative p-2 bg-white rounded-2xl mb-6 shadow-lg border border-white/10 w-48 h-48 flex items-center justify-center overflow-hidden">
                <Image 
                  src="/qrcode_pix.png" 
                  alt="QR Code PIX da IPR Itapema"
                  width={180}
                  height={180}
                  className="object-contain"
                />
              </div>

              {/* Pix Key Info */}
              <div className="w-full max-w-md bg-white/5 border border-white/10 rounded-2xl p-4 mb-6">
                <p className="text-[10px] text-foreground/50 uppercase tracking-widest font-semibold">Chave PIX (CNPJ)</p>
                <div className="flex items-center justify-between mt-1 gap-2">
                  <span className="font-mono text-base md:text-lg font-bold text-brand-accent tracking-wide select-all">
                    {formattedPixKey}
                  </span>
                  <button
                    onClick={handleCopy}
                    className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-foreground/80 hover:text-brand-accent border border-white/10 transition-all active:scale-95 flex items-center justify-center"
                    title="Copiar Chave PIX"
                  >
                    <AnimatePresence mode="wait">
                      {copied ? (
                        <motion.div
                          key="check"
                          initial={{ scale: 0.8, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          exit={{ scale: 0.8, opacity: 0 }}
                          className="text-emerald-500"
                        >
                          <Check className="w-4 h-4" />
                        </motion.div>
                      ) : (
                        <motion.div
                          key="copy"
                          initial={{ scale: 0.8, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          exit={{ scale: 0.8, opacity: 0 }}
                        >
                          <Copy className="w-4 h-4" />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </button>
                </div>
              </div>

              {/* Bank Transfer alternative */}
              <div className="flex items-center gap-3 text-xs text-foreground/50 font-light">
                <Building2 className="w-4 h-4 text-brand-accent" />
                <span>Favorecido: Igreja Presbiteriana Renovada de Itapema</span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
