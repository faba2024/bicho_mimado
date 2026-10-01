import { About } from "@/components/about";
import { Benefits } from "@/components/benefits";
import { Categories } from "@/components/categories";
import { Delivery } from "@/components/delivery";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Instagram } from "@/components/instagram";
import { Location } from "@/components/location";
import { Medications } from "@/components/medications";
import { Products } from "@/components/products";
import { RevealObserver } from "@/components/reveal-observer";
import { WhatsAppCta } from "@/components/whatsapp-cta";

export default function Home() {
  return (
    <>
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-white focus:px-5 focus:py-3 focus:font-semibold focus:text-navy"
      >
        Pular para o conteúdo
      </a>
      <Header />
      <main id="conteudo">
        <Hero />
        <Delivery />
        <Categories />
        <Products />
        <Medications />
        <Benefits />
        <About />
        <Instagram />
        <WhatsAppCta />
        <Location />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <RevealObserver />
    </>
  );
}
