import { ArrowUpRight, MoveDown } from "lucide-react";
import { waLink } from "../config";
import { Reveal, useParallax } from "./ui";
import { HeroMockup } from "./mocks";

const HERO_IMG = `${import.meta.env.BASE_URL}hero-arch.jpg`;

const META = [
  { n: "01", t: "Sites institucionais", v: "Estrutura, texto e direção de arte" },
  { n: "02", t: "Design + desenvolvimento", v: "Do esboço ao ar, por uma pessoa" },
  { n: "03", t: "O contato", v: "WhatsApp direto, sem burocracia" },
];

export function Hero() {
  const mediaRef = useParallax(-16);

  return (
    <section id="topo" className="paper-grain relative overflow-hidden bg-ivory">
      {/* Número fantasma de fundo */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-8 top-28 hidden select-none font-display text-[20rem] italic leading-none text-charcoal/[0.05] lg:block"
      >
        01
      </span>

      <div className="container-site pt-24 md:pt-32">
        {/* Micro linha de topo */}
        <Reveal>
          <div className="flex items-center justify-between border-b border-line pb-3.5">
            <span className="micro-label">Estúdio independente</span>
            <span className="micro-label hidden sm:block">Edição 001</span>
            <span className="micro-label">Web para advocacia</span>
          </div>
        </Reveal>

        {/* Epígrafe — palavra de abertura */}
        <Reveal delay={40}>
          <p className="mt-8 font-display italic text-[clamp(1.5rem,3.4vw,3rem)] leading-tight tracking-[-0.01em] text-stone md:mt-10">
            Locus, ius
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-14 pt-10 lg:grid-cols-12 lg:gap-8 lg:pt-14">
          {/* ————— Contracapa ————— */}
          <div className="relative flex flex-col justify-center lg:col-span-7">
            <Reveal>
              <p className="eyebrow">
                <span aria-hidden="true" className="h-px w-10 bg-champagne"></span>
                Uma presença digital
              </p>
            </Reveal>
            <Reveal delay={90}>
              <h1 className="font-display-xl mt-8 text-[clamp(3.1rem,8.2vw,7.6rem)] leading-[0.9] tracking-[-0.03em] text-charcoal">
                <span className="block text-champagne">À altura</span>
                <span className="block">do seu</span>
                <span className="block">escritório.</span>
              </h1>
            </Reveal>
            <Reveal delay={190}>
              <div className="mt-10 h-px w-full max-w-lg bg-gradient-to-r from-line to-transparent"></div>
            </Reveal>
            <Reveal delay={230}>
              <p className="mt-7 max-w-md text-[15px] leading-relaxed text-stone md:text-base">
                A identidade digital de um escritório de advocacia é o seu lugar — Locus, Ius é o estúdio
                que trata esse espaço com a precisão de um escritório jurídico: arquitetura, rigor e cultivo
                editorial.
              </p>
            </Reveal>
            <Reveal delay={300}>
              <div className="mt-10 flex flex-wrap items-center gap-x-12 gap-y-6">
                <a
                  href={waLink("Olá, quero criar um site para o meu escritório de advocacia.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 bg-brown px-7 py-4 text-[11px] font-semibold uppercase tracking-[0.26em] text-ivory transition-colors duration-300 hover:bg-charcoal"
                >
                  Iniciar conversa
                  <ArrowUpRight
                    aria-hidden="true"
                    className="h-4 w-4 text-champagne-bright transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
                <a
                  href="#portfolio"
                  className="link-underline text-[11px] font-semibold uppercase tracking-[0.26em] text-taupe transition-colors duration-300 hover:text-charcoal"
                >
                  Ver projetos
                </a>
              </div>
            </Reveal>

            <Reveal delay={380}>
              <p className="mt-16 flex items-center gap-3 micro-label text-taupe">
                <MoveDown aria-hidden="true" className="h-3.5 w-3.5 animate-bounce" />
                Scroll
              </p>
            </Reveal>
          </div>

          {/* ————— Capa ————— */}
          <div className="relative lg:col-span-5 lg:pl-6">
            <Reveal delay={180} className="relative">
              <div ref={mediaRef} className="media relative aspect-[4/5] w-full overflow-hidden border border-line">
                <img
                  src={HERO_IMG}
                  alt="Fotografia arquitetônica em tons claros de um escritório contemporâneo"
                  loading="eager"
                  decoding="async"
                  className="h-full w-full object-cover"
                />
                <span aria-hidden="true" className="absolute left-3 top-3 h-12 w-12 border-l border-t border-charcoal/40"></span>
                <span aria-hidden="true" className="absolute bottom-3 right-3 h-12 w-12 border-b border-r border-charcoal/40"></span>
                <p className="absolute left-5 top-5 text-[9px] font-semibold uppercase tracking-[0.3em] text-stone">
                  Fig. 01 — Arquitetura
                </p>
                <p className="absolute bottom-5 left-5 text-[9px] font-medium uppercase tracking-[0.28em] text-stone/70">
                  Locus, Ius · loc. est.
                </p>
              </div>

              {/* Mockup escuro sobreposto na base da fotografia */}
              <div className="relative z-10 mx-auto -mt-20 w-[88%] max-w-[380px] lg:absolute lg:bottom-[-3rem] lg:left-0 lg:mx-0 lg:mt-0 lg:w-[68%]">
                <HeroMockup />
                <div className="mt-3 flex items-center justify-between px-1 text-[9px] font-semibold uppercase tracking-[0.26em] text-taupe">
                  <span>Conceito</span>
                  <span className="text-champagne">01 — A&amp;L</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Rodapé do hero — dados da edição */}
        <Reveal delay={160}>
          <div className="mt-24 grid grid-cols-1 border-t border-line pb-20 sm:grid-cols-3 md:mt-28 lg:mt-16">
            {META.map((c, i) => (
              <div
                key={c.n}
                className={
                  "border-b border-line py-6 sm:border-b-0 sm:py-8 " +
                  (i > 0 ? "sm:border-l sm:pl-8" : "")
                }
              >
                <p className="micro-label">
                  <span aria-hidden="true" className="mr-3 font-display italic text-champagne">
                    {c.n}
                  </span>
                  {c.t}
                </p>
                <p className="font-display-soft mt-3 text-[18px] italic leading-snug text-charcoal/75">{c.v}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ============ PRINCÍPIO — monumental ============ */
export function Concept() {
  const stripRef = useParallax(24);

  return (
    <section className="relative overflow-hidden border-t border-line bg-sand py-28 md:py-40">
      <div className="container-site relative">
        <Reveal>
          <div className="flex items-center justify-between border-b border-line pb-3.5">
            <p className="eyebrow">
              <span aria-hidden="true" className="h-px w-10 bg-champagne"></span>
              Princípio
            </p>
            <span className="micro-label">N.º 001</span>
          </div>
        </Reveal>

        <div className="relative mt-14 md:mt-20 lg:pr-[20%]">
          <Reveal delay={90}>
            <h2 className="font-display-xl capitalize text-[clamp(3rem,8.2vw,7.8rem)] uppercase leading-[0.94] tracking-[-0.03em] text-charcoal">
              <span className="block">Seu site</span>
              <span className="block">é parte da</span>
              <span className="relative z-10 block text-champagne">imagem</span>
              <span className="block">do seu</span>
              <span className="block">escritório.</span>
            </h2>
          </Reveal>

          <Reveal delay={200}>
            <div className="mt-14 h-px w-full max-w-md bg-gradient-to-r from-line to-transparent"></div>
            <div className="mt-7 grid max-w-2xl gap-8 md:grid-cols-2">
              <p className="text-[14.5px] leading-relaxed text-stone">
                Um site não substitui a reputação de um advogado — pode reforçá-la, ou enfraquecê-la.
              </p>
              <p className="font-display-soft text-[18px] italic leading-relaxed text-charcoal/85">
                Antes de entrar em contato, quase sempre alguém já passou pelo seu site.
              </p>
            </div>
          </Reveal>

          {/* Fita de arquitetura — desktop, à direita da composição */}
          <Reveal delay={140} className="absolute right-0 top-0 hidden h-full w-[230px] lg:block">
            <div ref={stripRef} className="pointer-events-none h-full">
              <div className="relative h-full overflow-hidden border border-line">
                <img
                  src={`${import.meta.env.BASE_URL}hero-arch.jpg`}
                  alt="Detalhe arquitetônico em tons claros"
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover brightness-[0.96]"
                />
                <span aria-hidden="true" className="absolute inset-0 bg-ivory/10"></span>
                <span aria-hidden="true" className="absolute left-3 top-3 h-8 w-8 border-l border-t border-charcoal/30"></span>
                <p className="absolute bottom-4 left-4 right-4 text-[9px] font-semibold uppercase leading-relaxed tracking-[0.26em] text-stone">
                  Fig. 02 — Textura
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Fita fotográfica — mobile */}
        <Reveal delay={140} className="mt-12 lg:hidden">
          <div className="relative h-[40vh] overflow-hidden border border-line">
            <img
              src={`${import.meta.env.BASE_URL}hero-arch.jpg`}
              alt="Detalhe arquitetônico em tons claros"
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover brightness-[0.96]"
            />
            <span aria-hidden="true" className="absolute left-3 top-3 h-8 w-8 border-l border-t border-charcoal/30"></span>
            <p className="absolute bottom-4 left-4 text-[9px] font-semibold uppercase tracking-[0.26em] text-stone">
              Fig. 02 — Textura
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}