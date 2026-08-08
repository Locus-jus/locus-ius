import { BrandLogo, Reveal } from "./ui";

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
          <div className="lg:col-span-4">
            <Reveal delay={80}>
              <div className="rounded-[2rem] border border-line bg-cream p-4 shadow-[0_18px_50px_rgb(15_23_42/0.05)]">
                <div className="rounded-[1.5rem] border border-line bg-ivory p-6">
                  <BrandLogo />
                  <div className="mt-10 space-y-4">
                    <p className="micro-label">Marca e direção</p>
                    <p className="font-display text-[1.8rem] uppercase leading-[1.02] tracking-[-0.04em] text-charcoal">
                      Estúdio independente, sem ruído.
                    </p>
                    <p className="text-[14.5px] leading-relaxed text-stone">
                      Um sistema visual claro para sites de advocacia que precisam parecer atuais, confiáveis e bem
                      resolvidos em qualquer tela.
                    </p>
                  </div>

                  <div className="mt-8 grid grid-cols-2 gap-3">
                    {[
                      ["01", "Uma pessoa do início ao fim"],
                      ["02", "Design + código + publicação"],
                      ["03", "Modelos, não promessas vagas"],
                      ["04", "Contato direto por WhatsApp"],
                    ].map(([n, label]) => (
                      <div key={n} className="rounded-2xl border border-line bg-white p-3">
                        <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-champagne">{n}</p>
                        <p className="mt-2 text-[11px] font-medium uppercase leading-relaxed tracking-[0.18em] text-charcoal">
                          {label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
                <p className="mt-5 text-[12px] leading-relaxed text-stone">
                  A marca entra como centro da experiência, não como enfeite. O site acompanha essa mesma lógica.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Declaração */}
          <div className="lg:col-span-8">
            <Reveal delay={60}>
              <div className="max-w-2xl space-y-8 font-display text-[clamp(1.55rem,3vw,2.5rem)] uppercase leading-[1.08] tracking-[-0.02em] text-charcoal">
                <p>
                  Locus, Ius cria sites para advocacia com aparência contemporânea e foco em clareza.
                </p>
                <p>
                  A proposta é simples: menos ruído, mais hierarquia, e uma presença digital que pareça tão
                  sólida quanto o trabalho do escritório.
                </p>
              </div>
            </Reveal>
            <Reveal delay={150}>
              <div className="mt-12 grid max-w-2xl gap-8 md:grid-cols-2">
                <p className="text-[14.5px] leading-relaxed text-stone">
                  Cada projeto é conduzido por uma pessoa, do primeiro esboço à publicação. Isso reduz ruído e
                  mantém a direção consistente.
                </p>
                <p className="text-[14.5px] leading-relaxed text-stone">
                  Se o escritório já tem conteúdo, seguimos com isso. Se não tiver, eu ajudo a estruturar o que
                  importa antes de desenhar a interface.
                </p>
              </div>
            </Reveal>
            <Reveal delay={220}>
              <div className="mt-14 flex flex-wrap items-end justify-between gap-6 border-t border-line pt-7">
                <p className="font-display text-[22px] italic text-charcoal">
                  — <span className="text-champagne">Locus, Ius</span>
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
