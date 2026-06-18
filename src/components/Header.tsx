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
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-4 md:px-8",
        isScrolled ? "top-2" : "top-0 md:top-2"
      )}
    >
      <div
        className={cn(
          "mx-auto max-w-[1440px] transition-all duration-500 glass-panel backdrop-blur-md py-3 px-6",
          isScrolled
            ? "bg-background/60 shadow-[0_10px_30px_rgba(0,0,0,0.3)]"
            : "bg-transparent"
        )}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="#inicio" className="flex items-center gap-3 group">
            <div className="relative w-[58px] h-[64px] transition-all duration-300 group-hover:scale-105">
              <Image
                src="/ipr_itapema_logo_dark.png"
                alt="IPR Itapema Logo"
                fill
                className="object-contain"
                priority
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

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="p-2 text-sm text-foreground/80 hover:text-brand-accent rounded-full hover:bg-white/5 transition-all duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA Button & Mobile Menu Toggle */}
          <div className="flex items-center gap-4">
            <Link
              href="/visitante"
              className="hidden sm:inline-flex px-5 py-2 text-xs font-semibold tracking-wider text-brand-primary uppercase bg-brand-accent hover:bg-brand-accent-hover active:scale-95 rounded-full transition-all duration-300 shadow-[0_4px_20px_rgba(226,194,157,0.2)]"
            >
              Sou Visitante
            </Link>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-foreground/80 hover:text-foreground hover:bg-white/5 rounded-xl transition-all duration-200"
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
