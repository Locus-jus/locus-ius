import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./ui";
import { waLink } from "../config";

const FAQS = [
  {
    q: "Quanto custa um site?",
    a: "O investimento depende do escopo: número de páginas, estrutura, integrações e materiais disponíveis. Depois da primeira conversa, você recebe uma proposta fechada, com escopo e prazo — sem acréscimos escondidos no caminho.",
  },
  {
    q: "Quanto tempo leva?",
    a: "Para um site institucional completo, o prazo típico fica entre 3 e 4 semanas, contando com o retorno dos materiais do escritório a tempo. Prazos maiores ou menores são definidos na proposta.",
  },
  {
    q: "Vocês criam o conteúdo?",
    a: "Posso estruturar as seções e redigir os textos de apoio. Já o conteúdo sensível — como a forma de descrever honorários ou detalhes da prática — fica por conta do escritório, com a minha revisão e o cuidado de organizar tudo.",
  },
  {
    q: "Posso usar meu domínio atual?",
    a: "Sim. Você mantém o domínio e a hospedagem, e eu acompanho a migração para o novo site, preservando as URLs e os e-mails já existentes.",
  },
  {
    q: "O site funciona no celular?",
    a: "Sim. Responsividade não é um recurso que se acrescenta no fim: é parte do projeto. Cada tela é desenhada e testada também no celular antes de ir ao ar.",
  },
  {
    q: "Vocês fazem manutenção?",
    a: "Sim. Após a publicação, você pode manter o conteúdo sozinho ou combinar um suporte mensal leve para ajustes e novidades. Nada de contrato de longo prazo obrigatório.",
  },
  {
    q: "Como começo?",
    a: "É só enviar uma mensagem pelo WhatsApp contando um pouco sobre o escritório. A partir da primeira conversa, eu proponho um caminho simples, sem compromisso.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="paper-grain border-t border-line bg-ivory">
      <div className="container-site py-24 md:py-36">
        <Reveal>
          <div className="flex items-center justify-between border-b border-line pb-3.5">
            <p className="eyebrow">
              <span aria-hidden="true" className="h-px w-10 bg-champagne"></span>
              Perguntas frequentes
            </p>
            <span className="micro-label">FAQ</span>
          </div>
        </Reveal>

        <div className="mt-10 max-w-4xl lg:pr-[22%]">
          <Reveal delay={80}>
            <h2 className="font-display-xl text-[clamp(2.4rem,5vw,4.7rem)] leading-[1] tracking-[-0.02em] text-charcoal">
              Dúvidas que costumam <span className="text-champagne">aparecer na conversa.</span>
            </h2>
          </Reveal>
        </div>

        <div className="mt-16 max-w-4xl md:mt-20">
          <div className="border-b border-line">
            {FAQS.map((item, i) => {
              const isOpen = open === i;
              return (
                <Reveal key={item.q} delay={i * 30}>
                  <div className="border-t border-line">
                    <h3>
                      <button
                        type="button"
                        aria-expanded={isOpen}
                        aria-controls={`faq-panel-${i}`}
                        id={`faq-trigger-${i}`}
                        onClick={() => setOpen(isOpen ? null : i)}
                        className="group flex w-full items-center justify-between gap-8 py-8 text-left"
                      >
                        <span className="font-display text-[clamp(1.15rem,2.2vw,1.7rem)] uppercase leading-[1.08] tracking-[-0.01em] text-charcoal transition-colors duration-300 group-hover:text-champagne">
                          {item.q}
                        </span>
                        <span aria-hidden="true" className="relative block h-4 w-4 shrink-0 text-champagne">
                          <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-current"></span>
                          <span
                            className={
                              "absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-current transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] " +
                              (isOpen ? "rotate-90 scale-y-0" : "")
                            }
                          ></span>
                        </span>
                      </button>
                    </h3>
                    <div
                      id={`faq-panel-${i}`}
                      role="region"
                      aria-labelledby={`faq-trigger-${i}`}
                      className={"faq-panel " + (isOpen ? "is-open" : "")}
                    >
                      <div>
                        <p className="max-w-2xl pb-8 text-[14.5px] leading-relaxed text-stone">
                          {item.a}
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

        <Reveal delay={120}>
          <div className="mt-16 flex flex-wrap items-end justify-between gap-8 md:mt-20">
            <p className="max-w-sm font-display text-[clamp(1.4rem,2.6vw,2rem)] uppercase leading-[1.05] tracking-[-0.01em] text-charcoal">
              Ficou outra dúvida?
            </p>
            <a
              href={waLink("Olá, fiquei com uma dúvida sobre o serviço de sites para advocacia.")}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 border-b border-charcoal/50 pb-1 text-[11px] font-semibold uppercase tracking-[0.26em] text-charcoal transition-colors duration-300 hover:text-champagne"
            >
              Chamar no WhatsApp
              <ArrowUpRight
                aria-hidden="true"
                className="h-4 w-4 text-champagne transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}