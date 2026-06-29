"use client";

import { motion } from "framer-motion";
import { Clock, Video, Users, Sparkles, Smile } from "lucide-react";

const scheduleData = [
  {
    time: "Quarta • 20:00h",
    title: "Culto Espaço para Deus",
    description: "Um momento precioso no meio da semana dedicado à oração, estudo profundo da Palavra e adoração intimista. Fortaleça sua caminhada espiritual.",
    badge: "Presencial + Live",
    duration: "Duração média: 1h",
  },
  {
    time: "Domingo • 19:00h",
    title: "Culto da Família",
    description: "Nossa grande celebração semanal. Toda a comunidade reunida para adorar, ouvir uma mensagem inspiradora para o dia a dia e comunhão em família.",
    badge: "Presencial + Live",
    duration: "Duração média: 2h",
  },
];

const features = [
  {
    icon: Smile,
    title: "Recepção Calorosa",
    description: "Você será recebido por nossa equipe de hospitalidade e receberá um brinde de boas-vindas no final do culto.",
  },
  {
    icon: Users,
    title: "Tempo de Conexão",
    description: "Antes e depois dos cultos, temos um espaço aberto para conversas, comunhão e fortalecimento de relacionamentos.",
  },
  {
    icon: Sparkles,
    title: "Reino Kids",
    description: "Espaço seguro e divertido para crianças de 3 a 12 anos, com atividades bíblicas adaptadas para a idade delas durante os cultos.",
  },
  {
    icon: Video,
    title: "Transmissão Ao Vivo",
    description: "Não consegue estar presente fisicamente? Acompanhe nossos cultos ao vivo pelo YouTube diretamente de onde estiver.",
  },
];

export default function Services() {
  return (
    <section id="cultos" className="py-28 relative overflow-hidden bg-brand-secondary/40">
      {/* Background Glow */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-[1440px] px-3 md:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-semibold tracking-widest text-brand-accent uppercase"
          >
            Reuniões & Encontros
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl font-bold tracking-tight text-foreground mt-4"
          >
            Quando e Onde nos Reunimos
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-foreground/70 text-base md:text-lg font-light"
          >
            Nosso maior ponto de encontro é aos domingos, mas também nos reunimos durante a semana. Confira nossos horários.
          </motion.p>
        </div>

        {/* Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {scheduleData.map((item, index) => (
            <motion.div
              key={item.time}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-6 sm:p-8 md:p-10 flex flex-col justify-between border-white/5 bg-linear-to-br from-white/4 to-transparent hover:scale-[1.01]"
            >
              <div>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-4">
                  <div className="flex items-center gap-2.5 text-brand-accent">
                    <Clock className="w-5 h-5 md:w-6 md:h-6" />
                    <span className="text-xl sm:text-2xl md:text-3xl font-serif font-extrabold tracking-tight">{item.time}</span>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] sm:text-xs font-medium bg-white/5 border border-white/10 text-foreground/85 shrink-0 self-start sm:self-auto">
                    {item.badge}
                  </span>
                </div>
                
                <h3 className="text-lg sm:text-xl md:text-2xl font-serif font-bold text-foreground mb-3">
                  {item.title}
                </h3>
                
                <p className="text-foreground/75 text-sm md:text-base font-light leading-relaxed mb-5">
                  {item.description}
                </p>
              </div>

              <div className="pt-3 border-t border-white/10 flex items-center gap-2 text-[11px] sm:text-xs text-foreground/60">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-accent" />
                {item.duration} • Recomendamos chegar 15 min antes.
              </div>
            </motion.div>
          ))}
        </div>

        {/* What to expect grid */}
        <div>
          <h4 className="text-center font-serif text-2xl font-bold text-foreground mb-12">
            O que esperar da sua primeira visita?
          </h4>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="p-5 sm:p-6 rounded-2xl bg-white/2 border border-white/5 hover:border-brand-accent/20 transition-all duration-300 group"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-accent mb-3 sm:mb-4 group-hover:bg-brand-accent group-hover:text-brand-primary transition-all duration-300">
                  <feature.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <h5 className="text-base sm:text-lg font-serif font-bold text-foreground mb-1.5 sm:mb-2">
                  {feature.title}
                </h5>
                <p className="text-xs sm:text-sm text-foreground/60 font-light leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
