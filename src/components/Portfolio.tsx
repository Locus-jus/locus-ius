import { ArrowUpRight } from "lucide-react";
import { waLink } from "../config";
import { Reveal } from "./ui";
import { AndradeLimaMock, MartinsMock, RochaMock, VasconcelosMock } from "./mocks";

const STUDIES = [
  {
    n: "01",
    name: "Andrade & Lima",
    area: "Direito empresarial",
    tone: "Mais escuro, direto e corporativo.",
    desc: "Print de site-modelo com foco em autoridade, contraste e leitura rápida.",
    render: AndradeLimaMock,
  },
  {
    n: "02",
    name: "Martins Advocacia",
    area: "Direito de família",
    tone: "Mais humano e acolhedor.",
    desc: "Print de site-modelo com composição suave, texto central e ritmo calmo.",
    render: MartinsMock,
  },
  {
    n: "03",
    name: "Vasconcelos Jurídico",
    area: "Direito imobiliário",
    tone: "Arquitetônico e institucional.",
    desc: "Print de site-modelo pensado para parecer preciso, sólido e bem organizado.",
    render: VasconcelosMock,
  },
  {
    n: "04",
    name: "Rocha Previdenciário",
    area: "Direito previdenciário",
    tone: "Claro, simples e confiável.",
    desc: "Print de site-modelo com linguagem acessível, CTA visível e baixa fricção.",
    render: RochaMock,
  },
] as const;

export function Portfolio() {
  return (
    <section id="portfolio" className="border-t border-line bg-ivory">
      <div className="container-site py-24 md:py-32">
        <Reveal>
          <div className="flex items-center justify-between border-b border-line pb-3.5">
            <p className="eyebrow">
              <span aria-hidden="true" className="h-px w-10 bg-champagne"></span>
              Modelos conceituais
            </p>
            <span className="micro-label">Prints de site-modelo</span>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-10 max-w-4xl">
            <h2 className="font-display-xl text-[clamp(2.7rem,5.8vw,5.4rem)] leading-[0.96] tracking-[-0.05em] text-charcoal">
              Estudos apresentados como prints de sites-modelo.
            </h2>
            <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-stone md:text-base">
              Aqui o objetivo é deixar claro que cada peça é um conceito. Não são páginas finais nem imagens soltas: são
              simulações de abertura de um site, com barra de navegador, rótulo de modelo e identidade própria.
            </p>
          </div>
        </Reveal>

        <ol className="mt-16 grid gap-8 lg:grid-cols-2">
          {STUDIES.map((study) => {
            const Mock = study.render;

            return (
              <li key={study.n}>
                <Reveal>
                  <article className="rounded-[2rem] border border-line bg-cream p-4 shadow-[0_20px_60px_rgb(15_23_42/0.05)]">
                    <div className="flex items-center justify-between px-1 pb-4">
                      <div>
                        <p className="micro-label text-champagne">{study.area}</p>
                        <h3 className="mt-2 font-display text-[clamp(1.8rem,2.8vw,2.4rem)] leading-[0.98] tracking-[-0.04em] text-charcoal">
                          {study.name}
                        </h3>
                      </div>
                      <span className="rounded-full border border-line bg-ivory px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.26em] text-taupe">
                        Modelo conceitual
                      </span>
                    </div>

                    <div className="rounded-[1.5rem] border border-line bg-ivory p-3">
                      <div className="overflow-hidden rounded-[1.1rem]">
                        <Mock />
                      </div>
                    </div>

                    <div className="space-y-4 px-1 pt-5">
                      <div className="flex flex-wrap items-center justify-between gap-4">
                        <p className="max-w-xs text-[11px] font-medium uppercase leading-relaxed tracking-[0.22em] text-taupe">
                          {study.tone}
                        </p>
                        <span className="text-[10px] font-semibold uppercase tracking-[0.26em] text-champagne">
                          Print 0{study.n}
                        </span>
                      </div>
                      <p className="text-[14.5px] leading-relaxed text-stone">{study.desc}</p>
                      <a
                        href={waLink(`Olá, quero conversar sobre um site-modelo parecido com ${study.name}.`)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.26em] text-champagne transition-colors duration-300 hover:text-charcoal"
                      >
                        Quero este caminho
                        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </a>
                    </div>
                  </article>
                </Reveal>
              </li>
            );
          })}
        </ol>

        <Reveal delay={120}>
          <div className="mt-10 border-t border-line pt-8">
            <p className="max-w-3xl text-[13px] leading-relaxed text-stone">
              Todos os modelos são conceituais e fictícios. A intenção é demonstrar direção visual, não representar
              clientes reais.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
