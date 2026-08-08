import { ArrowUpRight } from "lucide-react";
import { waLink } from "../config";
import { Reveal } from "./ui";

const PROJECTS = [
  {
    n: "01",
    name: "Andrade & Lima",
    area: "Direito empresarial",
    img: `${import.meta.env.BASE_URL}projects/andrade.jpg`,
    tone: "Escuro, corporativo e preciso.",
    desc: "Uma interface sóbria com leitura rápida, foco em autoridade e hierarquia clara para um escritório boutique.",
  },
  {
    n: "02",
    name: "Martins Advocacia",
    area: "Direito de família",
    img: `${import.meta.env.BASE_URL}projects/martins.jpg`,
    tone: "Mais humana, aberta e acolhedora.",
    desc: "Tons suaves, espaçamento generoso e uma composição que transmite cuidado sem perder objetividade.",
  },
  {
    n: "03",
    name: "Vasconcelos Jurídico",
    area: "Direito imobiliário",
    img: `${import.meta.env.BASE_URL}projects/vasconcelos.jpg`,
    tone: "Arquitetônica e institucional.",
    desc: "Grid preciso, contraste controlado e uma composição pensada para parecer sólida em telas grandes e pequenas.",
  },
  {
    n: "04",
    name: "Rocha Previdenciário",
    area: "Direito previdenciário",
    img: `${import.meta.env.BASE_URL}projects/rocha.jpg`,
    tone: "Clara, simples e confiável.",
    desc: "Textos diretos e chamadas visíveis para reduzir atrito e deixar o próximo passo claro já na primeira visita.",
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="border-t border-line bg-ivory">
      <div className="container-site py-24 md:py-32">
        <Reveal>
          <div className="flex items-center justify-between border-b border-line pb-3.5">
            <p className="eyebrow">
              <span aria-hidden="true" className="h-px w-10 bg-champagne"></span>
              Estudos
            </p>
            <span className="micro-label">Série 01 · conceitos</span>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-10 max-w-4xl">
            <h2 className="font-display-xl text-[clamp(2.7rem,5.8vw,5.4rem)] leading-[0.96] tracking-[-0.05em] text-charcoal">
              Quatro direções visuais, uma linguagem moderna de trabalho.
            </h2>
            <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-stone md:text-base">
              Cada estudo mostra um caminho diferente para o mesmo objetivo: parecer atual, confiável e fácil de usar.
              Sem blocos soltos, sem sobreposições instáveis, sem composição que briga com a leitura.
            </p>
          </div>
        </Reveal>

        <ol className="mt-16 grid gap-6 md:grid-cols-2 lg:gap-8">
          {PROJECTS.map((project) => (
            <li key={project.n}>
              <Reveal>
                <article className="group overflow-hidden rounded-[2rem] border border-line bg-cream shadow-[0_20px_60px_rgb(15_23_42/0.05)] transition-transform duration-300 hover:-translate-y-1">
                  <div className="relative aspect-[16/11] overflow-hidden border-b border-line bg-sand">
                    <img
                      src={project.img}
                      alt={project.name}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brown/25 via-transparent to-transparent"></div>
                    <div className="absolute left-5 top-5 rounded-full border border-white/50 bg-white/80 px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.28em] text-charcoal backdrop-blur-sm">
                      {project.n}
                    </div>
                    <div className="absolute bottom-5 left-5 rounded-full bg-brown/85 px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.24em] text-ivory backdrop-blur-sm">
                      {project.area}
                    </div>
                  </div>

                  <div className="space-y-5 p-6 md:p-7">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="micro-label">{project.area}</p>
                        <h3 className="font-display mt-3 text-[clamp(1.9rem,3vw,2.6rem)] leading-[0.98] tracking-[-0.045em] text-charcoal">
                          {project.name}
                        </h3>
                      </div>
                      <span className="rounded-full border border-line px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.26em] text-taupe">
                        Projeto 0{project.n}
                      </span>
                    </div>

                    <p className="text-[14.5px] leading-relaxed text-stone">{project.desc}</p>

                    <div className="flex flex-wrap items-center justify-between gap-4 border-t border-line pt-4">
                      <p className="max-w-xs text-[11px] font-medium uppercase leading-relaxed tracking-[0.22em] text-taupe">
                        {project.tone}
                      </p>
                      <a
                        href={waLink(`Olá, quero conversar sobre um projeto parecido com ${project.name}.`)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.26em] text-champagne transition-colors duration-300 hover:text-charcoal"
                      >
                        Ver direção
                        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </a>
                    </div>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ol>

        <Reveal delay={120}>
          <div className="mt-10 border-t border-line pt-8">
            <p className="max-w-3xl text-[13px] leading-relaxed text-stone">
              Os projetos acima são conceituais e fictícios, criados para demonstrar direção visual, composição e tom.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
