"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Cross, ChevronLeft, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export default function VisitorPage() {
  const [formData, setFormData] = useState({
    nome: "",
    dataNascimento: "",
    email: "",
    celular: "",
    endereco: "",
    consentimento: false,
  });

  const [decisions, setDecisions] = useState({
    membro: false,
    reconciliar: false,
    salvador: false,
    batismo: false,
    conhecendo: false,
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    
    if (type === "checkbox") {
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else if (name === "celular") {
      // Máscara de telefone (99) 99999-9999
      const nums = value.replace(/\D/g, "");
      let formatted = nums;
      if (nums.length > 2) {
        formatted = `(${nums.slice(0, 2)}) ` + nums.slice(2);
      }
      if (nums.length > 7) {
        formatted = `(${nums.slice(0, 2)}) ${nums.slice(2, 7)}-${nums.slice(7, 11)}`;
      }
      setFormData((prev) => ({ ...prev, [name]: formatted.slice(0, 15) }));
    } else if (name === "dataNascimento") {
      // Máscara de data DD/MM/AAAA
      const nums = value.replace(/\D/g, "");
      let formatted = nums;
      if (nums.length > 2) {
        formatted = `${nums.slice(0, 2)}/` + nums.slice(2);
      }
      if (nums.length > 4) {
        formatted = `${nums.slice(0, 2)}/${nums.slice(2, 4)}/${nums.slice(4, 8)}`;
      }
      setFormData((prev) => ({ ...prev, [name]: formatted.slice(0, 10) }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleDecisionChange = (name: keyof typeof decisions) => {
    setDecisions((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.nome || !formData.celular || !formData.dataNascimento) {
      setErrorMessage("Por favor, preencha os campos obrigatórios (Nome, Nascimento e Celular).");
      setStatus("error");
      return;
    }
    if (!formData.consentimento) {
      setErrorMessage("Você precisa aceitar a autorização de contato para prosseguir.");
      setStatus("error");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    // Compila as decisões selecionadas
    const selectedDecisions: string[] = [];
    if (decisions.membro) selectedDecisions.push("Já sou evangélico e quero ser membro da IPRI");
    if (decisions.reconciliar) selectedDecisions.push("Reconciliar-me com Cristo");
    if (decisions.salvador) selectedDecisions.push("Aceitar Jesus Cristo como Salvador");
    if (decisions.batismo) selectedDecisions.push("Ser batizado em águas");
    if (decisions.conhecendo) selectedDecisions.push("Apenas visitando / Conhecendo");

    try {
      const response = await fetch("/api/visitor", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nome: formData.nome,
          dataNascimento: formData.dataNascimento,
          email: formData.email || "Não informado",
          celular: formData.celular,
          endereco: formData.endereco || "Não informado",
          decisao: selectedDecisions.join(", ") || "Nenhuma decisão marcada",
        }),
      });

      const result = await response.json();

      if (response.ok && result.status === "success") {
        setStatus("success");
      } else {
        throw new Error(result.message || "Erro desconhecido ao salvar os dados.");
      }
    } catch (err) {
      const error = err instanceof Error ? err : new Error("Erro desconhecido");
      setErrorMessage(error.message || "Ocorreu um erro ao conectar com o servidor. Tente novamente.");
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen bg-[#060913] text-foreground flex flex-col px-4 py-8 relative">
      {/* Background gradients */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-brand-accent/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-brand-primary/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header Bar */}
      <div className="w-full max-w-md mx-auto flex items-center justify-between mb-8 z-10">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs text-foreground/50 hover:text-brand-accent transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          Voltar ao início
        </Link>
        
        <div className="flex items-center gap-1.5">
          <Cross className="w-4 h-4 text-brand-accent" />
          <span className="font-serif text-sm font-bold tracking-wider">IPR ITAPEMA</span>
        </div>
      </div>

      <main className="flex-1 flex flex-col justify-center w-full max-w-md mx-auto z-10">
        <AnimatePresence mode="wait">
          {status === "success" ? (
            <motion.div
              key="success-card"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="glass-card p-8 text-center border-emerald-500/20 bg-gradient-to-b from-emerald-500/[0.02] to-transparent shadow-2xl"
            >
              <div className="w-16 h-16 bg-emerald-500/10 border border-emerald-500/30 rounded-full flex items-center justify-center text-emerald-400 mx-auto mb-6">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              
              <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
                Seja muito bem-vindo!
              </h2>
              
              <p className="text-foreground/75 font-light leading-relaxed mb-8">
                Recebemos suas informações com carinho. É um privilégio ter você hoje conosco adorando ao Senhor!
              </p>

              <div className="p-5 rounded-2xl bg-brand-accent/10 border border-brand-accent/30 text-brand-accent mb-8">
                <p className="text-sm font-semibold uppercase tracking-wider">Presente de Boas-Vindas</p>
                <p className="text-xs font-light text-foreground/90 mt-1 leading-relaxed">
                  Apresente esta tela na recepção da igreja ao final do culto para retirar o seu brinde de boas-vindas.
                </p>
              </div>

              <Link
                href="/"
                className="inline-flex items-center justify-center w-full py-4 text-xs font-bold tracking-widest text-brand-primary uppercase bg-brand-accent hover:bg-brand-accent-hover rounded-full transition-all duration-300"
              >
                Conhecer a Igreja
              </Link>
            </motion.div>
          ) : (
            <motion.div
              key="form-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="glass-card p-6 md:p-8 shadow-2xl border-white/5 bg-gradient-to-b from-white/[0.02] to-transparent"
            >
              <div className="text-center mb-8">
                <h1 className="font-serif text-3xl font-bold text-foreground">
                  Cartão de Boas-Vindas
                </h1>
                <p className="text-xs text-foreground/60 font-light mt-2 max-w-xs mx-auto">
                  Preencha os dados abaixo e retire seu brinde especial na recepção após o culto.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Section: Decisions */}
                <div className="space-y-3">
                  <label className="text-xs font-semibold text-brand-accent uppercase tracking-wider block mb-2">
                    Qual foi sua decisão hoje?
                  </label>
                  
                  <div className="space-y-2">
                    {[
                      { key: "membro", label: "Já sou evangélico e quero ser membro da IPRI" },
                      { key: "reconciliar", label: "Reconciliar-me com Cristo" },
                      { key: "salvador", label: "Aceitar Jesus Cristo como Salvador" },
                      { key: "batismo", label: "Ser batizado em águas" },
                      { key: "conhecendo", label: "Apenas visitando / Conhecendo" },
                    ].map((decision) => (
                      <label
                        key={decision.key}
                        className={cn(
                          "flex items-center gap-3 p-3 rounded-xl border transition-all duration-200 cursor-pointer select-none",
                          decisions[decision.key as keyof typeof decisions]
                            ? "bg-brand-accent/5 border-brand-accent text-brand-accent"
                            : "bg-white/[0.01] border-white/5 hover:border-white/10 text-foreground/70"
                        )}
                      >
                        <input
                          type="checkbox"
                          checked={decisions[decision.key as keyof typeof decisions]}
                          onChange={() => handleDecisionChange(decision.key as keyof typeof decisions)}
                          className="sr-only"
                        />
                        <div
                          className={cn(
                            "w-4 h-4 rounded border flex items-center justify-center transition-all",
                            decisions[decision.key as keyof typeof decisions]
                              ? "border-brand-accent bg-brand-accent text-brand-primary"
                              : "border-white/20 bg-transparent"
                          )}
                        >
                          {decisions[decision.key as keyof typeof decisions] && (
                            <span className="text-[10px] leading-none font-bold">✓</span>
                          )}
                        </div>
                        <span className="text-xs font-light">{decision.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Section: Personal Info */}
                <div className="space-y-4">
                  <label className="text-xs font-semibold text-brand-accent uppercase tracking-wider block">
                    Dados Pessoais
                  </label>

                  {/* Nome */}
                  <div>
                    <input
                      type="text"
                      name="nome"
                      value={formData.nome}
                      onChange={handleInputChange}
                      placeholder="Nome Completo *"
                      required
                      className="w-full bg-white/5 border border-white/10 focus:border-brand-accent focus:ring-1 focus:ring-brand-accent/50 rounded-xl px-4 py-3 text-sm text-foreground placeholder-foreground/30 transition-all outline-none"
                    />
                  </div>

                  {/* Nascimento e Celular Row */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <input
                        type="text"
                        name="dataNascimento"
                        value={formData.dataNascimento}
                        onChange={handleInputChange}
                        placeholder="Nascimento * (DD/MM/AAAA)"
                        required
                        className="w-full bg-white/5 border border-white/10 focus:border-brand-accent focus:ring-1 focus:ring-brand-accent/50 rounded-xl px-4 py-3 text-sm text-foreground placeholder-foreground/30 transition-all outline-none"
                      />
                    </div>
                    <div>
                      <input
                        type="tel"
                        name="celular"
                        value={formData.celular}
                        onChange={handleInputChange}
                        placeholder="Celular * (99) 99999-9999"
                        required
                        className="w-full bg-white/5 border border-white/10 focus:border-brand-accent focus:ring-1 focus:ring-brand-accent/50 rounded-xl px-4 py-3 text-sm text-foreground placeholder-foreground/30 transition-all outline-none"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="E-mail (opcional)"
                      className="w-full bg-white/5 border border-white/10 focus:border-brand-accent focus:ring-1 focus:ring-brand-accent/50 rounded-xl px-4 py-3 text-sm text-foreground placeholder-foreground/30 transition-all outline-none"
                    />
                  </div>

                  {/* Endereço */}
                  <div>
                    <input
                      type="text"
                      name="endereco"
                      value={formData.endereco}
                      onChange={handleInputChange}
                      placeholder="Endereço (Rua, Nº, Bairro, Cidade)"
                      className="w-full bg-white/5 border border-white/10 focus:border-brand-accent focus:ring-1 focus:ring-brand-accent/50 rounded-xl px-4 py-3 text-sm text-foreground placeholder-foreground/30 transition-all outline-none"
                    />
                  </div>
                </div>

                {/* Consent checkbox */}
                <label className="flex gap-3 items-start select-none cursor-pointer text-foreground/60 hover:text-foreground/85 transition-colors">
                  <input
                    type="checkbox"
                    name="consentimento"
                    checked={formData.consentimento}
                    onChange={handleInputChange}
                    className="sr-only"
                    required
                  />
                  <div
                    className={cn(
                      "w-4.5 h-4.5 rounded border flex items-center justify-center mt-0.5 transition-all flex-shrink-0",
                      formData.consentimento
                        ? "border-brand-accent bg-brand-accent text-brand-primary"
                        : "border-white/20 bg-transparent"
                    )}
                  >
                    {formData.consentimento && (
                      <span className="text-[10px] leading-none font-bold">✓</span>
                    )}
                  </div>
                  <span className="text-[10px] leading-relaxed font-light">
                    Ao preencher e entregar esse formulário autorizo a Igreja Presbiteriana Renovada e/ou parte selecionada de uma membresia a entrar em contato comigo por telefone, e-mail ou WhatsApp por meio das informações fornecidas.
                  </span>
                </label>

                {/* Status displays */}
                {status === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/25 text-rose-400 text-xs flex items-center gap-2"
                  >
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    <span>{errorMessage}</span>
                  </motion.div>
                )}

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className={cn(
                    "w-full py-4 text-xs font-semibold tracking-wider text-brand-primary uppercase bg-brand-accent hover:bg-brand-accent-hover rounded-full transition-all duration-300 active:scale-98 flex items-center justify-center gap-2",
                    status === "loading" && "opacity-75 cursor-not-allowed"
                  )}
                >
                  {status === "loading" ? (
                    <>
                      <div className="w-4 h-4 border-2 border-brand-primary border-t-transparent rounded-full animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      Confirmar Presença
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Footer copyright */}
      <footer className="w-full max-w-md mx-auto text-center mt-8 text-[10px] text-foreground/30 font-light z-10">
        © {new Date().getFullYear()} IPR Itapema • Termos em conformidade com a LGPD.
      </footer>
    </div>
  );
}
