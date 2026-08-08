import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./ui";
import { waLink } from "../config";

const ITEMS = [
  "Você ainda não tem um site.",
  "Seu site atual parece antigo.",
  "O visual não acompanha o nível do seu trabalho.",
  "As informações são difíceis de encontrar.",
  "O site não funciona bem no celular.",
];

export function Problem() {
  return (
    <section id="problema" className="border-t border-line-dark bg-brown">
      <div className="container-site py-24 md:py-36">
        <Reveal>
          <div className="flex items-center justify-between border-b border-line-dark pb-3.5">
            <p className="eyebrow">
              <span aria-hidden="true" className="h-px w-10 bg-champagne-bright"></span>
              O problema
            </p>
            <span className="micro-label text-ivory/60">Diagnóstico</span>
          </div>
        </Reveal>

        <div className="mt-10 max-w-4xl lg:pr-[18%]">
          <Reveal delay={80}>
            <h2 className="font-display-xl text-[clamp(2.4rem,5vw,4.7rem)] leading-[1] tracking-[-0.02em] text-ivory">
              Um escritório excelente não deveria parecer{" "}
              <span className="text-champagne-bright">genérico na internet.</span>
            </h2>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-16 lg:mt-24 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="micro-label text-ivory/50">Talvez seu escritório esteja aqui</p>
            </Reveal>
            <ul className="mt-8">
              {ITEMS.map((item, i) => (
                <Reveal key={item} delay={i * 60}>
                  <li className="group flex items-baseline gap-6 border-t border-line-dark py-7 last:border-b">
                    <span
                      aria-hidden="true"
                      className="font-display text-lg italic leading-none text-champagne-bright/70 transition-colors duration-300 group-hover:text-champagne-bright"
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="font-display text-[clamp(1.35rem,2.6vw,2.1rem)] uppercase leading-[1.05] tracking-[-0.01em] text-ivory transition-transform duration-300 group-hover:translate-x-1.5">
                      {item}
                    </p>
                  </li>
                </Reveal>
              ))}
            </ul>
            <Reveal delay={140}>
              <p className="mt-12 font-display text-[clamp(1.7rem,3.2vw,2.6rem)] uppercase leading-[1.05] tracking-[-0.01em] text-ivory">
                É exatamente aí que <span className="text-champagne-bright">entra o projeto.</span>
              </p>
            </Reveal>
          </div>

          <aside className="lg:col-span-5 lg:pl-12">
            <Reveal delay={120}>
              <div className="border-l border-line-dark pl-8 lg:pl-10">
                <p className="micro-label text-champagne-bright">Se dois destes casos fazem sentido</p>
                <p className="font-display mt-6 text-[clamp(1.6rem,2.8vw,2.3rem)] uppercase leading-[1.06] tracking-[-0.01em] text-ivory">
                  O resto do projeto vira mais simples do que parece.
                </p>
                <a
                  href={waLink("Olá, encontrei meu escritório em algumas destas situações e quero resolver isso.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-10 inline-flex items-center gap-3 border-b border-champagne-bright/60 pb-1.5 text-[11px] font-semibold uppercase tracking-[0.26em] text-champagne-bright transition-colors duration-300 hover:border-champagne-bright"
                >
                  Começar por uma conversa
                  <ArrowUpRight
                    aria-hidden="true"
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
                <p className="mt-8 max-w-xs text-[13px] leading-relaxed text-ivory/60">
                  Sem compromisso na primeira mensagem: o objetivo do primeiro contato é entender se faz
                  sentido trabalharmos juntos.
                </p>
              </div>
            </Reveal>
          </aside>
        </div>
      </div>
    </section>
  );
}