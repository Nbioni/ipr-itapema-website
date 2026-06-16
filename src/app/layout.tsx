import type { Metadata, Viewport } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "IPR Itapema | Igreja Presbiteriana Renovada",
  description: "Bem-vindo à Igreja Presbiteriana Renovada de Itapema, SC. Nossa missão é amar a Deus, amar as pessoas e ajudar cada um a descobrir o seu propósito. Participe do nosso culto da família aos domingos às 19h.",
  keywords: ["IPR Itapema", "Igreja Presbiteriana Renovada", "Igreja Itapema", "Culto de domingo Itapema", "JC3 Jovens", "Pelo Reino Pela Rua", "Igreja em Itapema"],
  authors: [{ name: "IPR Itapema" }],
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "IPR Itapema | Igreja Presbiteriana Renovada",
    description: "Conecte-se conosco! Culto da Família aos domingos às 19h e Espaço para Deus às quartas às 20h.",
    url: "https://ipritapema.com.br",
    siteName: "IPR Itapema",
    locale: "pt_BR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${montserrat.variable} h-full scroll-smooth`}
    >
      <body className="min-h-full flex flex-col antialiased">
        {children}
      </body>
    </html>
  );
}
