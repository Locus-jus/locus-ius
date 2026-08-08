import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./ui";
import { BrandLogo } from "./ui";
import { waLink } from "../config";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden border-t border-line-dark bg-[#0b1624]">
      {/* Paisagem corporativa ao fundo */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${import.meta.env.BASE_URL}hero-arch.jpg)` }}
      ></div>
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(135deg,rgba(7,18,31,0.92)_0%,rgba(11,22,36,0.86)_45%,rgba(16,27,42,0.7)_100%)]"
      ></div>
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(184,138,74,0.09),transparent_45%)]"
      ></div>

      {/* Assinatura fantasma ao fundo */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-10 bottom-[-0.08em] hidden select-none whitespace-nowrap font-display text-[16rem] italic leading-none text-ivory/[0.04] lg:block"
      >
        Conversar
      </span>

      <div className="container-site py-32 text-center md:py-48">
        <Reveal>
          <span className="micro-label text-ivory/60">Última página</span>
        </Reveal>

        <Reveal delay={90}>
          <div className="mx-auto mt-10 flex justify-center">
            <BrandLogo tone="dark" />
          </div>
        </Reveal>

        <Reveal delay={130}>
          <h2 className="mx-auto mt-10 max-w-4xl font-display-xl text-[clamp(2.7rem,7vw,6.6rem)] uppercase leading-[0.95] tracking-[-0.03em] text-ivory">
            Se o seu escritório
            <br />
            é extraordinário,
            <br />
            <span className="text-champagne-bright">o site também deveria ser.</span>
          </h2>
        </Reveal>

        <Reveal delay={180}>
          <p className="mx-auto mt-10 max-w-md text-[15px] leading-relaxed text-ivory/65">
            Se você está pensando em criar ou renovar o site do seu escritório, podemos conversar sobre o
            projeto — sem compromisso.
          </p>
        </Reveal>

        <Reveal delay={260}>
          <div className="mt-12">
            <a
              href={waLink("Olá, quero conversar sobre o site do meu escritório de advocacia.")}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex h-[3.25rem] items-center gap-4 rounded-[14px] bg-[#b88a4a] px-8 text-[12px] font-semibold uppercase tracking-[0.28em] text-[#0b1624] transition-all duration-200 ease-out hover:bg-[#c79a5a]"
            >
              Conversar sobre o projeto
              <ArrowUpRight
                aria-hidden="true"
                className="h-4 w-4 text-[#0b1624] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>
        </Reveal>

        <Reveal delay={340}>
          <p className="mt-24 text-[10px] font-medium uppercase tracking-[0.3em] text-ivory/50">
            Brasil
            <span aria-hidden="true" className="mx-3 text-champagne-bright">
              ·
            </span>
            Est. MMXXVI
          </p>
        </Reveal>
      </div>
    </section>
  );
}
