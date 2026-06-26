"use client";

import { motion } from "framer-motion";
import { MapPin, Navigation, Clock } from "lucide-react";

export default function Location() {
  const mapUrl = "https://maps.app.goo.gl/qZ4hUEk9t1Dq1PaU8";
  
  // URL de embed do Google Maps com o pino na localização exata
  const embedMapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3551.596555076801!2d-48.620084387963765!3d-27.10601417643455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94d8b1bdbdf4e513%3A0x2f9b1fa7a95190df!2sIgreja%20Presbiteriana%20Renovada!5e0!3m2!1spt-BR!2sbr!4v1782486303564!5m2!1spt-BR!2sbr";

  return (
    <section id="localizacao" className="py-24 relative overflow-hidden bg-brand-secondary/20">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-brand-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-[1440px] px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Contact and Directions info */}
          <div className="lg:col-span-5">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-xs font-semibold tracking-widest text-brand-accent uppercase"
            >
              Planeje sua Visita
            </motion.span>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-serif text-4xl md:text-5xl font-bold tracking-tight text-foreground mt-4"
            >
              Venha nos Conhecer
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-6 text-foreground/70 text-base md:text-lg font-light leading-relaxed"
            >
              Ficaremos muito felizes em receber você e sua família! Nosso templo é confortável, climatizado, possui espaço dedicado para as crianças e equipes preparadas para te acolher.
            </motion.p>

            <div className="mt-10 flex flex-col gap-6">
              {/* Address */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex items-start gap-4"
              >
                <div className="p-3 bg-white/5 rounded-xl border border-white/10 text-brand-accent mt-1">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold tracking-wide text-foreground uppercase">Endereço</h3>
                  <p className="text-foreground/75 font-light mt-1 text-sm md:text-base leading-relaxed">
                    Rua 618, nº 312 – Bairro Tabuleiro<br />
                    Itapema – SC, CEP 88220-000
                  </p>
                </div>
              </motion.div>

              {/* Weekly Meetings */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="flex items-start gap-4"
              >
                <div className="p-3 bg-white/5 rounded-xl border border-white/10 text-brand-accent mt-1">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold tracking-wide text-foreground uppercase">Reuniões Semanais</h3>
                  <p className="text-foreground/75 font-light mt-1 text-sm md:text-base leading-relaxed">
                    <strong>Domingos:</strong> Culto da Família às 19h00<br />
                    <strong>Quartas-feiras:</strong> Culto Espaço para Deus às 20h00
                  </p>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-10"
            >
              <a
                href={mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3.5 font-semibold text-xs tracking-wider text-brand-primary bg-brand-accent hover:bg-brand-accent-hover rounded-full transition-all duration-300"
              >
                <Navigation className="w-4 h-4" />
                Abrir Rota no Google Maps
              </a>
            </motion.div>
          </div>

          {/* Right Column: Google Maps Embed Card */}
          <div className="lg:col-span-7 h-[350px] md:h-[450px]">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full h-full rounded-xl overflow-hidden border border-white/10 shadow-2xl relative"
            >
              {/* Map Iframe */}
              <iframe
                title="Google Maps - IPR Itapema"
                src={embedMapUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="opacity-80 transition-all duration-1000 filter-[grayscale(100%)_invert(92%)_contrast(83%)_brightness(95%)] hover:filter-[grayscale(21%)_invert(7%)_contrast(100%)_brightness(77%)] hover:opacity-100"
              />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
