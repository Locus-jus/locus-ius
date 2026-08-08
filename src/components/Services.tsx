import { Reveal } from "./ui";
import { waLink } from "../config";

const ITEMS = [
  {
    t: "Sites institucionais",
    d: "Para apresentar o escritório, as áreas de atuação, os profissionais e as formas de contato.",
  },
  {
    t: "Landing pages",
    d: "Para uma campanha específica, um serviço marcado ou uma área da prática que merece destaque próprio.",
  },
  {
    t: "Redesign",
    d: "Modernizar um site existente sem descartar o que já funciona — o conteúdo é reaproveitado, a experiência é refeita.",
  },
  {
    t: "Estrutura de conteúdo",
    d: "Texto também é design: organizar a informação para o visitante encontrar o que procura sem esforço.",
  },
  {
    t: "Design responsivo",
    d: "Cada tela é desenhada e testada no celular durante o processo — não é um ajuste no fim do trabalho.",
  },
  {
    t: "Integração com WhatsApp",
    d: "Botões de contato com mensagem já preenchida, para que a conversa comece do jeito certo.",
  },
  {
    t: "SEO técnico básico",
    d: "Títulos, descrições, estrutura semântica e velocidade de carregamento — os fundamentos para aparecer bem.",
  },
];

export function Services() {
  return (
    <section id="servico" className="paper-grain border-t border-line bg-ivory">
      <div className="container-site py-24 md:py-36">
        <Reveal>
          <div className="flex items-center justify-between border-b border-line pb-3.5">
            <p className="eyebrow">
              <span aria-hidden="true" className="h-px w-10 bg-champagne"></span>
              O que eu faço
            </p>
            <span className="micro-label">Escopo</span>
          </div>
        </Reveal>

        <div className="mt-10 max-w-4xl lg:pr-[22%]">
          <Reveal delay={80}>
            <h2 className="font-display-xl text-[clamp(2.4rem,5vw,4.7rem)] leading-[1] tracking-[-0.02em] text-charcoal">
              Design e cuidado de fundo, <span className="text-champagne">em um só processo.</span>
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <p className="mt-8 max-w-xl text-[15px] leading-relaxed text-stone md:text-base">
              Sete frentes de trabalho que costumam aparecer em quase todo projeto. Não precisam vir todas
              juntas — a conversa define o que faz sentido para o seu escritório.
            </p>
          </Reveal>
        </div>

        <ol className="mt-16 md:mt-20">
          {ITEMS.map((item, i) => (
            <Reveal key={item.t} delay={i * 40}>
              <li className="group grid items-baseline gap-4 border-t border-line py-8 last:border-b md:grid-cols-12 md:gap-6 md:py-10">
                <span
                  aria-hidden="true"
                  className="font-display text-xl italic leading-none text-champagne/60 transition-colors duration-300 group-hover:text-champagne md:col-span-1"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-[clamp(1.5rem,2.8vw,2.3rem)] uppercase leading-[1.02] tracking-[-0.01em] text-charcoal transition-transform duration-300 group-hover:translate-x-2 md:col-span-4">
                  {item.t}
                </h3>
                <p className="max-w-xl text-[14px] leading-relaxed text-stone md:col-span-7 md:pl-6">
                  {item.d}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>

        <Reveal delay={100}>
          <div className="mt-14 flex flex-col gap-8 border-t border-line pt-10 md:flex-row md:items-end md:justify-between">
            <p className="max-w-xl text-[15px] leading-relaxed text-charcoal/85">
              Não está na lista o que o seu escritório precisa?{" "}
              <em className="font-display text-champagne">É melhor — o projeto começa do problema, não do menu.</em>
            </p>
            <a
              href={waLink("Olá, quero entender como esse serviço se aplica ao meu escritório.")}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline shrink-0 text-[11px] font-semibold uppercase tracking-[0.26em] text-charcoal transition-colors duration-300 hover:text-champagne"
            >
              Conversar sobre o que eu preciso
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}