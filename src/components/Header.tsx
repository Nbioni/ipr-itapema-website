"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Início", href: "#inicio" },
  { name: "Essência", href: "#essencia" },
  { name: "Cultos", href: "#cultos" },
  { name: "Ministérios", href: "#ministerios" },
  { name: "Projeto Social", href: "#projetos" },
  { name: "Dízimos & Ofertas", href: "#contribuir" },
  { name: "Localização", href: "#localizacao" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-2 sm:px-4 md:px-8",
        isScrolled ? "top-2" : "top-0 md:top-2"
      )}
    >
      <div
        className={cn(
          "mx-auto max-w-[1440px] rounded-2xl transition-all duration-500 backdrop-blur-lg py-2.5 px-3 sm:px-6",
          isScrolled
            ? "bg-background/50 shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
            : "bg-transparent"
        )}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="#inicio" className="flex items-center gap-2 sm:gap-3 group shrink-0">
            <div className="relative w-[clamp(34px,10vw,46px)] xl:w-[58px] h-[clamp(38px,11vw,51px)] xl:h-[64px] transition-all duration-300 group-hover:scale-105 shrink-0">
              <Image
                src="/ipr_itapema_logo_dark.png"
                alt="IPR Itapema Logo"
                fill
                sizes="58px"
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col mt-1">
              <span className="font-serif text-[clamp(11px,3.2vw,14px)] xl:text-lg font-bold tracking-tight text-foreground leading-none block">
                Igreja Presbiteriana
              </span>
              <span className="text-[clamp(9.5px,2.8vw,11px)] xl:text-sm mt-0.5 whitespace-nowrap text-foreground/90 block">
                <span className="tracking-widest text-brand-accent uppercase font-bold">
                  Renovada
                </span> de Itapema
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="p-1 xl:p-2 text-xs xl:text-sm text-foreground hover:text-brand-accent rounded-full hover:bg-white/5 transition-all duration-300 whitespace-nowrap"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA Button & Mobile Menu Toggle */}
          <div className="flex items-center gap-2 sm:gap-4">
            <Link
              href="/visitante"
              className="inline-flex px-2 py-1.5 sm:px-3 sm:py-1.5 xl:px-5 xl:py-2 text-[10px] xl:text-xs font-semibold tracking-wider text-brand-primary uppercase bg-brand-accent hover:bg-brand-accent-hover active:scale-95 rounded-full transition-all duration-300 shadow-[0_4px_20px_rgba(226,194,157,0.2)] shrink-0"
            >
              <span className="block xl:hidden">Visitante</span>
              <span className="hidden xl:block">Sou Visitante</span>
            </Link>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-foreground hover:bg-white/5 rounded-xl transition-all duration-200"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-background/80 backdrop-blur-sm lg:hidden z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Drawer Menu */}
      <div
        className={cn(
          "fixed top-0 bottom-0 right-0 w-80 max-w-full bg-brand-secondary/95 border-l border-white/10 backdrop-blur-xl p-8 lg:hidden z-50 flex flex-col justify-between transition-transform duration-500 ease-out",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div>
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2.5">
              <div className="relative w-7 h-8">
                <Image
                  src="/ipr_itapema_logo_dark.svg"
                  alt="IPR Itapema Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="font-serif text-lg font-bold text-foreground">
                IPR Itapema
              </span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 text-foreground/80 hover:text-foreground hover:bg-white/5 rounded-xl"
              aria-label="Fechar menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="py-3 px-4 text-base text-foreground/80 hover:text-brand-accent hover:bg-white/5 rounded-xl transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-8 flex flex-col gap-4">
          <Link
            href="/visitante"
            onClick={() => setIsOpen(false)}
            className="w-full text-center py-4 text-sm font-semibold tracking-wider text-brand-primary uppercase bg-brand-accent hover:bg-brand-accent-hover rounded-full transition-all duration-300"
          >
            Sou Visitante
          </Link>
          <div className="text-center text-xs text-foreground/40 font-light">
            © {new Date().getFullYear()} IPR Itapema.
          </div>
        </div>
      </div>
    </header>
  );
}
