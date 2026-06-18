"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUp } from "lucide-react";
import { InstagramIcon, YoutubeIcon } from "./Icons";

const socialLinks = [
  { name: "Instagram Principal", href: "https://www.instagram.com/ipritapema/", icon: InstagramIcon },
  { name: "Instagram Jovens JC3", href: "https://www.instagram.com/jc3jovens", icon: InstagramIcon },
  { name: "Instagram Projeto Social", href: "https://www.instagram.com/peloreinopelarua", icon: InstagramIcon },
  { name: "YouTube", href: "https://www.youtube.com/@ipritapema6081/streams", icon: YoutubeIcon },
];

const menuLinks = [
  { name: "Início", href: "#inicio" },
  { name: "Essência", href: "#essencia" },
  { name: "Cultos", href: "#cultos" },
  { name: "Ministérios", href: "#ministerios" },
  { name: "Projeto Social", href: "#projetos" },
  { name: "Dízimos & Ofertas", href: "#contribuir" },
  { name: "Localização", href: "#localizacao" },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#04060d] border-t border-white/5 pt-16 pb-12 overflow-hidden">
      {/* Decorative ocean background image pattern at the very bottom (optional, using pure css grid or subtle glow) */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="mx-auto max-w-[1440px] px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          
          {/* Logo & Info column */}
          <div className="md:col-span-5 flex flex-col items-start gap-4">
            <Link href="#inicio" className="flex flex-col items-center gap-3 group">
              <div className="relative w-32 h-32 overflow-hidden shrink-0">
                <Image 
                  src="/ipr_itapema_logo_dark.png" 
                  alt="Logo IPR Itapema" 
                  fill
                  sizes="128px"
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col mt-1 text-sm md:text-md">
                <span className="font-serif text-sm md:text-lg font-bold tracking-tight text-foreground leading-none">
                  Igreja Presbiteriana
                </span>
                <span><span className="tracking-widest text-brand-accent uppercase font-bold mt-0.5">
                  Renovada
                </span> de Itapema</span>
              </div>
            </Link>
            <p className="text-foreground/75 text-sm font-normal leading-relaxed max-w-sm mt-2">
              Uma comunidade vibrante em Itapema, SC. Proclamando o evangelho da graça, amparando os necessitados e vivendo em família.
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-4">
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-6">
              Navegação
            </h4>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-3">
              {menuLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-md text-foreground/60 hover:text-brand-accent hover:underline transition-all"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials Column */}
          <div className="md:col-span-3">
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-6">
              Conecte-se
            </h4>
            <div className="flex flex-col gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-foreground/60 hover:text-brand-accent transition-colors group"
                >
                  <social.icon className="w-4 h-4" />
                  <span className="font-light">{social.name}</span>
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start gap-1">
            <p className="text-xs text-foreground/60 text-center md:text-left">
              &copy; {new Date().getFullYear()} Igreja Presbiteriana Renovada de Itapema. Todos os direitos reservados.
            </p>
            <p className="text-[10px] text-foreground/60 font-mono">
              CNPJ: 76.357.144/0001-61
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="p-3 rounded-full hover:cursor-pointer bg-white/5 border border-white/10 hover:border-brand-accent text-foreground/80 hover:text-brand-accent transition-all duration-300 active:scale-95 flex items-center justify-center shadow-lg hover:bg-white/10"
            title="Voltar ao Topo"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
