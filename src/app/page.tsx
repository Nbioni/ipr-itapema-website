import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Essence from "@/components/Essence";
import Services from "@/components/Services";
import Ministries from "@/components/Ministries";
import SocialProject from "@/components/SocialProject";
import Giving from "@/components/Giving";
import Location from "@/components/Location";
import Footer from "@/components/Footer";

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
