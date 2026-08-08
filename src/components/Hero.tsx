import { ArrowUpRight, MoveDown } from "lucide-react";
import { waLink } from "../config";
import { Reveal, useParallax } from "./ui";
import { HeroMockup } from "./mocks";

const HERO_IMG = `${import.meta.env.BASE_URL}hero-arch.jpg`;

const STATS = [
  { n: "01", t: "Sites institucionais", v: "Estrutura, texto e direção de arte." },
  { n: "02", t: "Design + desenvolvimento", v: "Do esboço ao ar, por uma pessoa." },
  { n: "03", t: "Contato direto", v: "WhatsApp sem burocracia." },
];

export function Hero() {
  const mediaRef = useParallax(-10);

  return (
    <section
      id="topo"
      className="relative overflow-hidden border-b border-line-dark bg-[#0b1624]"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${HERO_IMG})` }}
      ></div>
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(105deg,rgba(7,18,31,0.96)_0%,rgba(11,22,36,0.88)_40%,rgba(16,27,43,0.55)_78%,rgba(16,27,43,0.35)_100%)]"
      ></div>
      <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_18%_32%,rgba(184,138,74,0.08),transparent_38%),radial-gradient(circle_at_82%_18%,rgba(245,243,238,0.05),transparent_42%)]"></div>

<div className="container-site relative pt-28 md:pt-32 lg:pt-36">
        <Reveal>
          <div className="flex items-center justify-between border-b border-line-dark pb-3.5">
            <span className="micro-label text-ivory/55">Estúdio independente</span>
            <span className="micro-label hidden text-ivory/55 sm:block">Edição 001</span>
            <span className="micro-label text-ivory/55">Web para advocacia</span>
          </div>
        </Reveal>

        <div className="grid gap-14 pt-12 lg:grid-cols-12 lg:items-center lg:gap-16 lg:pb-8 lg:pt-16">
          <div className="lg:col-span-7 lg:pr-6">
            <Reveal delay={40}>
              <p className="font-display italic text-[clamp(1.35rem,2.8vw,2.2rem)] leading-none tracking-[-0.02em] text-[#c79a5a]">
                Locus, Ius
              </p>
            </Reveal>

            <Reveal delay={90}>
              <p className="eyebrow mt-8">
                <span aria-hidden="true" className="h-px w-10 bg-champagne"></span>
                <span className="text-ivory/90">Uma presença digital</span>
              </p>
            </Reveal>

            <Reveal delay={130}>
              <h1 className="mt-6 max-w-3xl font-display text-[clamp(3.2rem,6vw,5.8rem)] leading-[1] tracking-[-0.02em] text-[#f5f3ee]">
                <span className="block">Sites modernos</span>
                <span className="block">para escritórios</span>
                <span className="block">
                  de <em className="font-display text-[#b88a4a]">advocacia</em>.
                </span>
              </h1>
            </Reveal>

            <Reveal delay={180}>
              <p className="mt-8 max-w-[34rem] text-[1.05rem] leading-[1.7] text-[#c8c1b5] md:text-[1.15rem]">
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
                  className="group inline-flex h-[3.25rem] items-center gap-3 rounded-[14px] px-7 text-[11px] font-semibold uppercase tracking-[0.26em] text-[#0b1624] transition-colors duration-200 ease-out hover:bg-[#c79a5a]"
                  style={{ background: "#b88a4a" }}
                >
                  Iniciar conversa
                  <ArrowUpRight
                    aria-hidden="true"
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
                <a
                  href="#portfolio"
                  className="link-underline text-[11px] font-semibold uppercase tracking-[0.26em] text-ivory transition-colors duration-300 hover:text-[#c79a5a]"
                >
                  Ver projetos
                </a>
              </div>
            </Reveal>

            <Reveal delay={300}>
              <p className="mt-14 flex items-center gap-3 micro-label text-ivory/45">
                <MoveDown aria-hidden="true" className="h-3.5 w-3.5 animate-bounce" />
                Scroll
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={160} className="relative">
              <div ref={mediaRef} className="rounded-[18px] border border-[#c79a5a]/25 bg-[#0b1624]/60 p-3 shadow-[0_30px_70px_rgb(0_0_0/0.35)] backdrop-blur-sm">
                <div className="overflow-hidden rounded-[12px] border border-line-dark">
                  <HeroMockup />
                </div>
                <div className="mt-3 flex items-center justify-between px-1">
                  <p className="micro-label text-[#b8b1a6]">Site-modelo · conceito</p>
                  <span className="micro-label text-[#b88a4a]">Laptop view</span>
                </div>
              </div>
            </Reveal>

            <Reveal delay={220}>
              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                {STATS.map((item) => (
                  <div key={item.n} className="rounded-[14px] border border-line-dark bg-[#131e2c]/70 p-4">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#b88a4a]">{item.n}</p>
                    <p className="mt-2 text-[12px] font-semibold uppercase tracking-[0.2em] text-[#f5f3ee]">{item.t}</p>
                    <p className="mt-3 text-[13px] leading-relaxed text-[#b8b1a6]">{item.v}</p>
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
            <div ref={stripRef} className="rounded-[14px] border border-line bg-cream p-4 shadow-[0_18px_50px_rgb(16_27_42/0.06)]">
              <div className="overflow-hidden rounded-[10px] border border-line">
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
