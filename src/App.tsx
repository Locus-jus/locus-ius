import { Header } from "./components/Header";
import { Hero, Concept } from "./components/Hero";
import { Portfolio } from "./components/Portfolio";
import { Problem } from "./components/Problem";
import { Services } from "./components/Services";
import { Process } from "./components/Process";
import { About } from "./components/About";
import { Faq } from "./components/Faq";
import { FinalCta } from "./components/FinalCta";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <>
      <a href="#conteudo" className="skip-link">
        Pular para o conteúdo
      </a>
      <Header />
      <main id="conteudo">
        <Hero />
        <Concept />
        <Portfolio />
        <Problem />
        <Services />
        <Process />
        <About />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}