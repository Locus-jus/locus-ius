import { ArrowUpRight, MoveDown } from "lucide-react";
import { waLink } from "../config";
import { Reveal, useParallax } from "./ui";

const HERO_IMG = `${import.meta.env.BASE_URL}hero-arch.jpg`;

const STATS = [
  { n: "01", t: "Sites institucionais", v: "Estrutura, texto e direção de arte." },
  { n: "02", t: "Design + desenvolvimento", v: "Do esboço ao ar, por uma pessoa." },
  { n: "03", t: "Contato direto", v: "WhatsApp sem burocracia." },
];

export function Hero() {
  const mediaRef = useParallax(-10);

  return (
    <section id="topo" className="relative overflow-hidden border-b border-line bg-ivory">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.08),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(96,165,250,0.05),transparent_24%)]"></div>

      <div className="container-site relative pt-28 md:pt-32 lg:pt-36">
        <Reveal>
          <div className="flex items-center justify-between border-b border-line pb-3.5">
            <span className="micro-label">Estúdio independente</span>
            <span className="micro-label hidden sm:block">Edição 001</span>
            <span className="micro-label">Web para advocacia</span>
          </div>
        </Reveal>

        <div className="grid gap-14 pt-12 lg:grid-cols-12 lg:items-start lg:gap-12 lg:pt-16">
          <div className="lg:col-span-7 lg:pr-4">
            <Reveal delay={40}>
              <p className="font-display text-[clamp(1.35rem,2.8vw,2.2rem)] italic leading-none tracking-[-0.03em] text-stone">
                Locus, Ius
              </p>
            </Reveal>

            <Reveal delay={90}>
              <p className="eyebrow mt-8">
                <span aria-hidden="true" className="h-px w-10 bg-champagne"></span>
                Uma presença digital
              </p>
            </Reveal>

            <Reveal delay={130}>
              <h1 className="font-display-xl mt-6 max-w-3xl text-[clamp(3.3rem,8vw,7.8rem)] leading-[0.92] tracking-[-0.055em] text-charcoal">
                <span className="block text-champagne">Sites modernos</span>
                <span className="block">para escritórios</span>
                <span className="block">de advocacia.</span>
              </h1>
            </Reveal>

            <Reveal delay={180}>
              <p className="mt-8 max-w-xl text-[15px] leading-relaxed text-stone md:text-base">
                Identidade visual, conteúdo e desenvolvimento reunidos num site claro, atual e confiável.
                Cada tela é pensada para parecer contemporânea, leve e fácil de navegar em qualquer aparelho.
              </p>
            </Reveal>

            <Reveal delay={230}>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href={waLink("Olá, quero criar um site moderno para o meu escritório de advocacia.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 rounded-full bg-brown px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.26em] text-ivory transition-colors duration-300 hover:bg-charcoal"
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

            <Reveal delay={300}>
              <p className="mt-14 flex items-center gap-3 micro-label text-taupe">
                <MoveDown aria-hidden="true" className="h-3.5 w-3.5 animate-bounce" />
                Scroll
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={160} className="relative">
              <div ref={mediaRef} className="media overflow-hidden rounded-[2rem] border border-line bg-cream shadow-[0_24px_70px_rgb(15_23_42/0.08)]">
                <div className="relative aspect-[4/5]">
                  <img
                    src={HERO_IMG}
                    alt="Fotografia arquitetônica em tons claros de um escritório contemporâneo"
                    loading="eager"
                    decoding="async"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/10 via-transparent to-transparent"></div>
                  <div className="absolute left-5 top-5 rounded-full border border-white/50 bg-white/75 px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.28em] text-charcoal backdrop-blur-sm">
                    Fig. 01 · arquitetura
                  </div>
                  <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4">
                    <p className="max-w-[15rem] text-[11px] font-medium uppercase tracking-[0.22em] text-charcoal/80">
                      Imagem limpa, moderna e sem composição instável.
                    </p>
                    <span className="rounded-full border border-charcoal/10 bg-white/80 px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.26em] text-taupe backdrop-blur-sm">
                      Studio view
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={220}>
              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                {STATS.map((item) => (
                  <div key={item.n} className="rounded-2xl border border-line bg-cream p-4 shadow-[0_16px_40px_rgb(15_23_42/0.04)]">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-champagne">{item.n}</p>
                    <p className="mt-2 text-[12px] font-semibold uppercase tracking-[0.2em] text-charcoal">{item.t}</p>
                    <p className="mt-3 text-[13px] leading-relaxed text-stone">{item.v}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Concept() {
  const stripRef = useParallax(12);

  return (
    <section className="border-b border-line bg-sand">
      <div className="container-site py-20 md:py-28 lg:py-32">
        <Reveal>
          <div className="flex items-center justify-between border-b border-line pb-3.5">
            <p className="eyebrow">
              <span aria-hidden="true" className="h-px w-10 bg-champagne"></span>
              Princípio
            </p>
            <span className="micro-label">N.º 001</span>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-12">
          <div className="lg:col-span-7 lg:pr-10">
            <Reveal delay={80}>
              <h2 className="font-display-xl text-[clamp(2.8rem,7vw,6.6rem)] leading-[0.95] tracking-[-0.05em] text-charcoal">
                Seu site é parte da imagem do seu escritório.
              </h2>
            </Reveal>

            <Reveal delay={140}>
              <div className="mt-8 max-w-2xl space-y-5 border-l-2 border-champagne/50 pl-6 text-[15px] leading-relaxed text-stone md:text-base">
                <p>Um site não substitui a reputação de um advogado. Ele reforça, organiza e traduz o que já existe.</p>
                <p>Antes de entrar em contato, quase sempre alguém já passou pelo seu site. A experiência precisa parecer clara e atual.</p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={120} className="lg:col-span-5">
            <div ref={stripRef} className="rounded-[2rem] border border-line bg-cream p-4 shadow-[0_18px_50px_rgb(15_23_42/0.06)]">
              <div className="overflow-hidden rounded-[1.5rem] border border-line">
                <img
                  src={HERO_IMG}
                  alt="Detalhe arquitetônico em tons claros"
                  loading="lazy"
                  decoding="async"
                  className="h-[28rem] w-full object-cover brightness-[0.98]"
                />
              </div>
              <div className="mt-4 flex items-center justify-between px-1 text-[9px] font-semibold uppercase tracking-[0.28em] text-taupe">
                <span>Textura · arquitetura</span>
                <span className="text-champagne">01</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
