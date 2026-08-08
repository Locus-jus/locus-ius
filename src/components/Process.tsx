import { Reveal } from "./ui";

const STEPS = [
  {
    n: "01",
    t: "Conversa",
    d: "Você me conta sobre o escritório, os objetivos e o que gostaria de melhorar. É o passo mais importante: é de onde sai tudo.",
  },
  {
    n: "02",
    t: "Direção",
    d: "Definimos juntos a estrutura das páginas, o conteúdo e a linguagem visual mais adequada à sua área de atuação.",
  },
  {
    n: "03",
    t: "Design",
    d: "Desenvolvo a interface: tipografia, cores, layout e a forma como cada tela se organiza — sempre olhando também para o celular.",
  },
  {
    n: "04",
    t: "Desenvolvimento",
    d: "Transformo o projeto em um site rápido, leve, responsivo e com os fundamentos de SEO e acessibilidade em ordem.",
  },
  {
    n: "05",
    t: "Publicação",
    d: "Depois dos ajustes finais, colocamos o site no ar — com domínio, hospedagem, e um caminho simples de contato desde o primeiro dia.",
  },
];

export function Process() {
  return (
    <section id="processo" className="paper-grain border-t border-line bg-ivory">
      <div className="container-site py-24 md:py-36">
        <Reveal>
          <div className="flex items-center justify-between border-b border-line pb-3.5">
            <p className="eyebrow">
              <span aria-hidden="true" className="h-px w-10 bg-champagne"></span>
              O processo
            </p>
            <span className="micro-label">Método</span>
          </div>
        </Reveal>

        <div className="mt-10 max-w-4xl lg:pr-[18%]">
          <Reveal delay={80}>
            <h2 className="font-display-xl text-[clamp(2.4rem,5vw,4.7rem)] leading-[1] tracking-[-0.02em] text-charcoal">
              Um caminho de trabalho, <span className="text-champagne">sem mistério.</span>
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <p className="mt-8 max-w-lg text-[15px] leading-relaxed text-stone md:text-base">
              Cinco etapas, conduzidas por uma pessoa. Você sabe o que está acontecendo em cada momento —
              sem burocracia e sem caixa-preta.
            </p>
          </Reveal>
        </div>

        <ol className="mt-16 md:mt-20">
          {STEPS.map((step, i) => (
            <Reveal key={step.n} delay={i * 50}>
              <li className="group grid gap-6 border-t border-line py-10 last:border-b md:grid-cols-12 md:gap-6 md:py-14">
                <div className="md:col-span-2">
                  <span
                    aria-hidden="true"
                    className="font-display text-[clamp(2.8rem,5vw,4.4rem)] italic leading-[0.9] tracking-[-0.02em] text-charcoal/15 transition-colors duration-500 group-hover:text-champagne"
                  >
                    {step.n}
                  </span>
                </div>
                <h3 className="font-display text-[clamp(1.7rem,3.4vw,2.9rem)] uppercase leading-[1] tracking-[-0.02em] text-charcoal transition-transform duration-500 group-hover:translate-x-3 md:col-span-4">
                  {step.t}
                </h3>
                <p className="max-w-xl text-[14.5px] leading-relaxed text-stone md:col-span-6 md:pt-3 md:pl-6">
                  {step.d}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>

        <Reveal delay={100}>
          <p className="mt-12 max-w-2xl text-[15px] leading-relaxed text-charcoal/85">
            O acompanhamento acontece por WhatsApp, de forma simples e direta. Se em alguma etapa algo não
            fizer sentido, paramos e ajustamos — é assim que o trabalho fica melhor.
          </p>
        </Reveal>
      </div>
    </section>
  );
}