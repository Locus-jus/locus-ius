import { Reveal } from "./ui";

export function About() {
  return (
    <section id="sobre" className="border-t border-line bg-sand">
      <div className="container-site py-24 md:py-36">
        <Reveal>
          <div className="flex items-center justify-between border-b border-line pb-3.5">
            <p className="eyebrow">
              <span aria-hidden="true" className="h-px w-10 bg-champagne"></span>
              Sobre
            </p>
            <span className="micro-label">Autoria</span>
          </div>
        </Reveal>

        <div className="mt-10 max-w-4xl lg:pr-[22%]">
          <Reveal delay={80}>
            <h2 className="font-display-xl text-[clamp(2.4rem,5vw,4.7rem)] leading-[1] tracking-[-0.02em] text-charcoal">
              Um serviço individual, <span className="text-champagne">do esboço ao ar.</span>
            </h2>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-16 lg:mt-24 lg:grid-cols-12 lg:gap-12">
          {/* Área fotográfica editorial */}
          <div className="lg:col-span-4">
            <Reveal delay={80}>
              <div className="relative mx-auto w-full max-w-[380px] lg:mx-0">
                <div aria-hidden="true" className="absolute -inset-3 border border-charcoal/15"></div>
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-cream">
                  <span aria-hidden="true" className="absolute inset-4 border border-charcoal/15"></span>
                  <span aria-hidden="true" className="absolute left-4 top-4 h-9 w-9 border-l border-t border-champagne/70"></span>
                  <span aria-hidden="true" className="absolute bottom-4 right-4 h-9 w-9 border-b border-r border-champagne/70"></span>
                  <div className="absolute inset-0 grid place-items-center p-10 text-center">
                    <div>
                      <p className="micro-label">Fig. 06 — Retrato</p>
                      <p className="font-display-soft mt-5 text-2xl italic leading-snug text-charcoal/45">
                        [ sua foto aqui ]
                      </p>
                      <span aria-hidden="true" className="mx-auto mt-6 block h-px w-12 bg-champagne"></span>
                    </div>
                  </div>
                  <p className="absolute bottom-5 left-5 text-[9px] font-semibold uppercase tracking-[0.28em] text-stone">
                    Área reservada — retire os parênteses em src/components/About.tsx
                  </p>
                </div>
                <p className="mt-6 text-[12px] leading-relaxed text-stone">
                  Espaço preparado para receber a fotografia final do autor, sem moldura genérica — apenas a
                  própria linguagem do projeto.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Declaração */}
          <div className="lg:col-span-8">
            <Reveal delay={60}>
              <div className="max-w-2xl space-y-8 font-display text-[clamp(1.5rem,2.9vw,2.3rem)] uppercase leading-[1.15] tracking-[-0.015em] text-charcoal">
                <p>
                  Locus, Ius é um estúdio independente focado na criação de sites para profissionais da
                  advocacia.
                </p>
                <p>
                  A proposta é simples: criar sites bem pensados, visualmente sofisticados e claros para
                  quem está procurando{" "}
                  <em className="text-champagne">um advogado ou um escritório.</em>
                </p>
              </div>
            </Reveal>
            <Reveal delay={150}>
              <div className="mt-12 grid max-w-2xl gap-8 md:grid-cols-2">
                <p className="text-[14.5px] leading-relaxed text-stone">
                  Cada projeto é conduzido por uma pessoa, do primeiro esboço à publicação. Isso significa
                  menos reuniões, menos interlocutores e mais responsabilidade com o resultado.
                </p>
                <p className="text-[14.5px] leading-relaxed text-stone">
                  Se o seu escritório já tem o conteúdo pronto, o trabalho fica mais rápido. Se não tem,
                  começamos por aí — com o que você sabe melhor do que ninguém sobre o próprio trabalho.
                </p>
              </div>
            </Reveal>
            <Reveal delay={220}>
              <div className="mt-14 flex flex-wrap items-end justify-between gap-6 border-t border-line pt-7">
                <p className="font-display text-[22px] italic text-charcoal">
                  — <span className="text-champagne">[ Seu nome ]</span>
                </p>
                <span className="micro-label">Direção e execução</span>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}