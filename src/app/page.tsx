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
  return (
    <>
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
