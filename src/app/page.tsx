import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Resume } from "@/components/Resume";
import { Services } from "@/components/Services";
import { Portfolio } from "@/components/Portfolio";
import { Quotes } from "@/components/Quotes";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Resume />
        <Services />
        <Portfolio />
        <Quotes />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
