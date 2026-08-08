import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./ui";
import { LocusMark } from "./ui";
import { waLink } from "../config";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden border-t border-line-dark bg-brown">
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
            <LocusMark className="h-16 w-16" tone="dark" />
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
              className="group inline-flex items-center gap-4 bg-ivory px-8 py-4 text-[12px] font-semibold uppercase tracking-[0.28em] text-brown transition-colors duration-300 hover:bg-champagne-bright"
            >
              Conversar sobre o projeto
              <ArrowUpRight
                aria-hidden="true"
                className="h-4 w-4 text-champagne transition-colors duration-300 group-hover:text-brown"
              />
            </a>
          </div>
        </Reveal>

        <Reveal delay={340}>
          <p className="mt-24 text-[10px] font-medium uppercase tracking-[0.3em] text-ivory/50">
            São Paulo — Brasil
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