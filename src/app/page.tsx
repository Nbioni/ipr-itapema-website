import dynamic from "next/dynamic";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

const Essence = dynamic(() => import("@/components/Essence"));
const Services = dynamic(() => import("@/components/Services"));
const Ministries = dynamic(() => import("@/components/Ministries"));
const SocialProject = dynamic(() => import("@/components/SocialProject"));
const Giving = dynamic(() => import("@/components/Giving"));
const Location = dynamic(() => import("@/components/Location"));
const Footer = dynamic(() => import("@/components/Footer"));

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Church",
    "name": "Igreja Presbiteriana Renovada de Itapema",
    "alternateName": "IPR Itapema",
    "url": "https://ipritapema.com.br",
    "logo": "https://ipritapema.com.br/ipr_itapema_logo_dark.png",
    "image": "https://ipritapema.com.br/fotos_PRPR/PRPR_1.jpg",
    "description": "Igreja Presbiteriana Renovada em Itapema, SC. Nossa missão é amar a Deus, amar as pessoas e ajudar cada um a descobrir o seu propósito.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Rua 618, nº 312 - Bairro Tabuleiro",
      "addressLocality": "Itapema",
      "addressRegion": "SC",
      "postalCode": "88220-000",
      "addressCountry": "BR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -27.106014,
      "longitude": -48.620084
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Sunday",
        "opens": "19:00",
        "closes": "21:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Wednesday",
        "opens": "20:00",
        "closes": "21:00"
      }
    ],
    "sameAs": [
      "https://www.instagram.com/ipritapema/",
      "https://www.youtube.com/@ipritapema6081"
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main className="flex-1 flex flex-col">
        <Hero />
        <Essence />
        <Services />
        <Ministries />
        <SocialProject />
        <Giving />
        <Location />
      </main>
      <Footer />
    </>
  );
}
