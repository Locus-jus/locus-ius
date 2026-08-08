import { Reveal } from "./ui";
import { waLink } from "../config";
import {
  AndradeLimaMock,
  MartinsMock,
  VasconcelosMock,
  VasconcelosPhoneMock,
  RochaMock,
} from "./mocks";

const R20 = "?auto=format&fit=crop&w=2000&q=80";

const IMG = {
  andrade: `https://images.unsplash.com/photo-1507842217343-583bb7270b66${R20}`,
  martins: `https://images.unsplash.com/photo-1524758631624-e2822e304c36${R20}`,
  vasconcelos: `https://images.unsplash.com/photo-1518005020951-eccb494ad742${R20}`,
  rocha: `https://images.unsplash.com/photo-1504384308090-c894fdcc538d${R20}`,
};

function MiniTag({ children }: { children: string }) {
  return (
    <span className="inline-flex items-center gap-2 px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.24em] text-champagne">
      <span aria-hidden="true" className="h-1 w-1 bg-champagne"></span>
      {children}
    </span>
  );
}

function ChapterRow({
  n,
  name,
  area,
}: {
  n: string;
  name: string;
  area: string;
}) {
  return (
    <Reveal className="border-t border-line pt-6">
      <div className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-4">
        <div className="flex items-baseline gap-6">
          <span aria-hidden="true" className="font-display text-2xl italic leading-none text-champagne">
            {n}
          </span>
          <h3 className="font-display text-[clamp(1.9rem,3.6vw,3.2rem)] uppercase leading-none tracking-[-0.02em] text-charcoal">
            {name}
          </h3>
        </div>
        <div className="flex items-center gap-6">
          <span className="micro-label">{area}</span>
          <MiniTag>Projeto conceitual</MiniTag>
        </div>
      </div>
    </Reveal>
  );
}

function MetaList({ items }: { items: Array<[string, string]> }) {
  return (
    <dl className="border-t border-line">
      {items.map(([k, v]) => (
        <div key={k} className="flex flex-wrap gap-2 border-b border-line py-3.5 text-[11px]">
          <dt className="w-28 shrink-0 font-semibold uppercase tracking-[0.18em] text-taupe">{k}</dt>
          <dd className="uppercase tracking-[0.04em] text-charcoal/85">{v}</dd>
        </div>
      ))}
    </dl>
  );
}

export function Portfolio() {
  return (
    <section id="portfolio" className="paper-grain relative border-t border-line bg-ivory">
      {/* Cabeçalho da série */}
      <div className="container-site pt-20 md:pt-28">
        <Reveal>
          <div className="flex items-center justify-between border-b border-line pb-3.5">
            <p className="eyebrow">
              <span aria-hidden="true" className="h-px w-10 bg-champagne"></span>
              Estudos
            </p>
            <span className="micro-label">Série 01 — conceitos</span>
          </div>
          <h2 className="font-display-xl mt-10 max-w-5xl text-[clamp(2.6rem,5.6vw,5.2rem)] leading-[0.98] tracking-[-0.02em] text-charcoal">
            Quatro direções visuais, uma só linguagem de trabalho.
          </h2>
          <p className="mt-8 max-w-xl text-[15px] leading-relaxed text-stone md:text-base">
            Cada estudo parte de um problema e de uma estética próprios. Conceitos, criados para demonstrar
            como um site pode servir a diferentes áreas do direito — o que importa é o resultado.
          </p>
        </Reveal>
      </div>

      {/* Os quatro estudos */}
      <ol className="mt-20 md:mt-24">
        {/* ———————————— 01 · ANDRADE & LIMA ———————————— */}
        <li className="pb-24 md:pb-36">
          <div className="container-site mb-12 md:mb-16">
            <ChapterRow n="01" name="Andrade &amp; Lima" area="Direito empresarial" />
          </div>

          <div className="media group relative h-[56vh] overflow-hidden md:h-[68vh] lg:h-[74vh]">
            <img
              src={IMG.andrade}
              alt="Biblioteca jurídica clássica, com estantes de madeira escura"
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover saturate-[0.9]"
            />
            <span aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-brown/85 via-brown/25 to-transparent"></span>
            <span
              aria-hidden="true"
              className="absolute right-8 top-10 hidden select-none font-display text-[22rem] italic leading-none text-ivory/[0.06] lg:block"
            >
              01
            </span>
            <span aria-hidden="true" className="absolute left-5 top-5 h-12 w-12 border-l border-t border-ivory/50"></span>
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-12">
              <div className="max-w-[680px]">
                <span className="micro-label text-champagne-bright">Camada — herdada &amp; sóbria</span>
                <p className="font-display mt-4 text-[clamp(2.2rem,5.6vw,5rem)] uppercase leading-[0.92] tracking-[-0.02em] text-ivory">
                  Andrade &amp; Lima
                </p>
              </div>
            </div>
          </div>

          <div className="container-site mx-auto grid gap-12 pt-14 md:pt-24 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-5">
              <Reveal>
                <p className="text-[14.5px] leading-relaxed text-stone">
                  Estudo para um escritório boutique: caderno escuro, tipografia marcante e uma hierarquia
                  que coloca a confiança antes de tudo — o site funciona como um parecer: ordenado, sério e
                  sem ruído.
                </p>
              </Reveal>
              <Reveal delay={120}>
                <div className="mt-9">
                  <MetaList
                    items={[
                      ["Direção", "escura · corporativa"],
                      ["Ton", "sério, preciso"],
                      ["Extras", "serif editorial"],
                    ]}
                  />
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-7">
              <Reveal delay={140}>
                <div className="relative">
                  <span
                    aria-hidden="true"
                    className="absolute -right-6 -top-16 hidden select-none font-display text-[15rem] italic leading-none text-charcoal/[0.05] lg:block"
                  >
                    01
                  </span>
                  <AndradeLimaMock />
                  <p className="mt-4 flex items-center justify-between text-[9px] font-semibold uppercase tracking-[0.26em] text-taupe">
                    <span>Viewport — 1440</span>
                    <span className="text-champagne">01 / 04</span>
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </li>

        {/* ———————————— 02 · MARTINS ———————————— */}
        <li className="border-t border-line py-16 md:py-28">
          <div className="container-site mb-12 md:mb-16">
            <ChapterRow n="02" name="Martins Advocacia" area="Direito de família" />
          </div>

          <div className="container-site grid gap-14 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-7">
              <Reveal>
                <div className="media group relative aspect-[4/3] w-full max-w-[640px] overflow-hidden border border-line">
                  <img
                    src={IMG.martins}
                    alt="Interior minimalista contemporâneo com luz natural quente"
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover"
                  />
                  <span aria-hidden="true" className="absolute left-5 top-5 h-11 w-11 border-l border-t border-charcoal/30"></span>
                  <span
                    aria-hidden="true"
                    className="absolute -bottom-2 left-1/3 hidden select-none font-display text-[16rem] italic leading-none text-charcoal/[0.05] lg:block"
                  >
                    02
                  </span>
                  <p className="absolute bottom-5 left-5 text-[9px] font-semibold uppercase tracking-[0.28em] text-stone">
                    Fig. 03 — Luz mínima
                  </p>
                </div>
              </Reveal>
              <Reveal delay={150}>
                <div className="relative -mt-10 ml-auto w-[88%] max-w-[540px] md:-mt-16">
                  <MartinsMock />
                  <p className="mt-4 flex items-center justify-between text-[9px] font-semibold uppercase tracking-[0.26em] text-taupe">
                    <span>Viewport — 1440</span>
                    <span className="text-champagne">02 / 04</span>
                  </p>
                </div>
              </Reveal>
            </div>

            <div className="flex flex-col justify-start lg:col-span-5 lg:pt-6">
              <Reveal delay={60}>
                <p className="text-[14.5px] leading-relaxed text-stone">
                  Abordagem mais humana: tons de papel e terracota, texto centrado e um ritmo de leitura
                  lento, para um momento sensível — onde clareza é o único adorno.
                </p>
              </Reveal>
              <Reveal delay={140}>
                <div className="mt-9">
                  <MetaList
                    items={[
                      ["Direção", "clara, humana"],
                      ["Ton", "acolhedor"],
                      ["Detalhe", "tipografia serifada"],
                    ]}
                  />
                </div>
              </Reveal>
              <Reveal delay={200}>
                <p className="mt-10 font-display-soft text-[19px] italic leading-relaxed text-charcoal/85">
                  “A cada família, um rumo que respeita o que já foi construído.”
                </p>
              </Reveal>
            </div>
          </div>
        </li>

        {/* ============ 03 · VASCONCELOS — imobiliário ============ */}
        <li className="pb-24 md:pb-36">
          <div className="container-site mb-12 md:mb-16">
            <ChapterRow n="03" name="Vasconcelos Jurídico" area="Direito imobiliário" />
          </div>

          <div className="media group relative h-[52vh] overflow-hidden md:h-[62vh]">
            <img
              src={IMG.vasconcelos}
              alt="Arranha-céus fotografados em preto e branco, olhando para cima"
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover grayscale"
            />
            <span aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-brown/70 via-brown/10 to-transparent"></span>
            <span aria-hidden="true" className="absolute left-5 top-5 h-px w-24 bg-ivory/70"></span>
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-12">
              <div className="flex flex-wrap items-end justify-between gap-6">
                <div>
                  <span className="micro-label text-champagne-bright">Camada — arquitetônica</span>
                  <p className="font-display mt-3 text-[clamp(2rem,5vw,4.4rem)] uppercase leading-[0.92] tracking-[-0.02em] text-ivory">
                    Vasconcelos
                  </p>
                </div>
                <p className="max-w-[220px] text-right text-[10px] font-medium uppercase leading-relaxed tracking-[0.2em] text-ivory/70">
                  Rigor rigoroso · baixo · precisão até o registro
                </p>
              </div>
            </div>
          </div>

          <div className="container-site grid gap-12 pt-16 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-5">
              <Reveal>
                <div className="lg:pt-8">
                  <MetaList
                    items={[
                      ["Direção", "arquitetônica"],
                      ["Ton", "institucional"],
                      ["Extra", "desktop + mobile"],
                    ]}
                  />
                </div>
              </Reveal>
              <Reveal delay={120}>
                <p className="mt-9 text-[14.5px] leading-relaxed text-stone">
                  Estética arquitetônica: grid rigoroso, cores baixas e um senso de precisão que combina com
                  o universo imobiliário — da incorporação ao último registro.
                </p>
              </Reveal>
            </div>

            <div className="lg:col-span-7">
              <Reveal delay={140}>
                <div className="relative">
                  <VasconcelosMock />
                  <p className="mt-4 flex items-center justify-between text-[9px] font-semibold uppercase tracking-[0.26em] text-taupe">
                    <span>Viewport — 1440</span>
                    <span className="text-champagne">03 / 04</span>
                  </p>
                </div>
              </Reveal>
              <Reveal delay={200}>
                <div className="mt-10 grid gap-8 sm:grid-cols-2 sm:items-end">
                  <p className="text-[13px] leading-relaxed text-stone">
                    O mesmo conceito, adaptado ao celular — a hierarquia não muda, o conteúdo é o mesmo.
                  </p>
                  <VasconcelosPhoneMock />
                </div>
              </Reveal>
            </div>
          </div>
        </li>

        {/* ============ 04 · ROCHA — previdenciário ============ */}
        <li className="border-t border-line pb-24 pt-16 md:pb-36 md:pt-28">
          <div className="container-site mb-12 md:mb-16">
            <ChapterRow n="04" name="Rocha Previdenciário" area="Direito previdenciário" />
          </div>

          <div className="container-site grid gap-14 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-5">
              <Reveal delay={30}>
                <p className="text-[14.5px] leading-relaxed text-stone">
                  Linguagem mais acessível e clara: sem jargão, botões que explicam o próximo passo e uma
                  paleta de confiança — para que qualquer pessoa entenda antes de decidir.
                </p>
              </Reveal>
              <Reveal delay={120}>
                <div className="mt-9">
                  <MetaList
                    items={[
                      ["Direção", "simples, clara"],
                      ["Ton", "acessível"],
                      ["Detalhe", "alta legibilidade"],
                    ]}
                  />
                </div>
              </Reveal>
              <Reveal delay={190}>
                <a
                  href={waLink("Olá, quero um site claro e confiável para o meu escritório de previdência.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline mt-10 inline-flex items-baseline gap-2 font-display text-xl italic text-champagne"
                >
                  Conversar sobre um projeto assim <span aria-hidden="true">→</span>
                </a>
              </Reveal>
            </div>

            <div className="lg:col-span-7">
              <Reveal delay={100}>
                <div className="media group relative aspect-[16/10] w-full overflow-hidden border border-line">
                  <img
                    src={IMG.rocha}
                    alt="Ambiente empresarial contemporâneo, mesa de reunião"
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover"
                  />
                  <span aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-brown/60 via-transparent to-transparent"></span>
                  <span
                    aria-hidden="true"
                    className="absolute right-6 -top-6 hidden select-none font-display text-[18rem] italic leading-none text-charcoal/[0.06] lg:block"
                  >
                    04
                  </span>
                  <p className="absolute left-5 top-5 text-[9px] font-semibold uppercase tracking-[0.28em] text-charcoal/70">
                    Fig. 05 — Ambiente de trabalho
                  </p>
                </div>
              </Reveal>
              <Reveal delay={180}>
                <div className="relative -mt-10 ml-0 w-[92%] max-w-[620px] md:-mt-14 lg:ml-auto">
                  <RochaMock />
                  <p className="mt-4 flex items-center justify-between text-[9px] font-semibold uppercase tracking-[0.26em] text-taupe">
                    <span>Viewport — 1440</span>
                    <span className="text-champagne">04 / 04</span>
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </li>
      </ol>

      {/* Nota final — série conceitual */}
      <div className="container-site mt-4 pb-24 md:pb-32">
        <Reveal>
          <div className="border-t border-line pt-8">
            <div className="flex items-baseline gap-5">
              <span aria-hidden="true" className="font-display text-sm italic text-champagne">
                Nota.
              </span>
              <p className="max-w-2xl text-sm leading-relaxed text-stone">
                Todos os projetos desta página são conceitos, criados para demonstrar direções de design.
                Os nomes dos escritórios e as fotografias são fictícios — não representam clientes reais.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}