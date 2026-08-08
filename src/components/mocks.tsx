import type { ReactNode } from "react";
import { ArrowUpRight, Menu, Phone } from "lucide-react";
import { BrandLogo } from "./ui";

const img = (name: string) => `${import.meta.env.BASE_URL}projects/${name}.jpg`;
const ACCENT = "#a58b5a";

/* ============ Concha de navegador — wrapper comum ============ */
function MockShell({
  url,
  children,
  className = "",
}: {
  url: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={"window flex min-w-0 w-full flex-col overflow-hidden " + className}>
      <div className="window-bar">
        <span className="window-dot" aria-hidden="true"></span>
        <span className="window-dot" aria-hidden="true"></span>
        <span className="window-dot" aria-hidden="true"></span>
        <span className="window-url">{url}</span>
      </div>
      {children}
    </div>
  );
}

/* ============ Blocos reutilizáveis de site ============ */

/* Marca compacta para o mock (monograma + wordmark, sem rótulo) */
function MockBrand({ dark = false }: { dark?: boolean }) {
  const text = dark ? "text-[#f5f5f4]" : "text-[#1c1917]";
  return (
    <span className="inline-flex shrink items-center gap-2">
      <span className="relative h-7 w-6 shrink-0">
        <span className={"absolute left-0 top-0 font-serif text-[22px] leading-none " + text}>L</span>
        <span className={"absolute right-0 top-[4px] font-serif text-[19px] leading-none " + text}>I</span>
        <span aria-hidden="true" className="absolute bottom-[2px] left-[9px] h-1.5 w-1.5 rotate-45" style={{ background: "#c3a86e" }}></span>
      </span>
      <span className={"font-serif italic text-[13px] leading-none tracking-[-0.02em] " + text}>
        locus<span style={{ color: "#c3a86e" }}>,</span> <span style={{ color: dark ? "#d7be86" : "#c3a86e" }}>ius</span>
      </span>
    </span>
  );
}

/* Cabeçalho de site — nav + CTA */
function SiteHeader({
  brand,
  accent,
  nav,
  dark = false,
  cta = "Falar com a equipe",
}: {
  brand: ReactNode;
  accent: string;
  nav: string[];
  dark?: boolean;
  cta?: string;
}) {
  const dim = dark ? "rgba(245,245,244,0.45)" : "rgba(28,25,23,0.5)";
  return (
    <div
      className="flex items-center justify-between px-5 py-3.5 sm:px-7"
      style={{
        borderBottom: `1px solid ${dark ? "rgba(255,255,255,0.14)" : "rgba(28,25,23,0.1)"}`,
      }}
    >
      <span className="min-w-0 shrink">{brand}</span>
      <div className="hidden min-w-0 shrink items-center gap-5 sm:flex">
        {nav.map((label, i) => (
          <span
            key={label}
            className="shrink-0 text-[9px] font-semibold uppercase tracking-[0.18em]"
            style={{ color: i === nav.length - 1 ? accent : dim }}
          >
            {label}
          </span>
        ))}
      </div>
      <span className="ml-auto flex min-w-0 shrink items-center gap-1.5 sm:ml-0">
        <span className="flex items-center gap-1.5 sm:hidden">
          <Menu aria-hidden="true" className="h-3 w-3" />
        </span>
        <span
          className="shrink-0 inline-flex items-center gap-1 rounded-full px-3 py-1.5 text-[8.5px] font-bold uppercase tracking-[0.16em] text-white"
          style={{ background: accent }}
        >
          <Phone aria-hidden="true" className="hidden h-2.5 w-2.5 sm:block" />
          <span className="max-w-[7rem] truncate">{cta}</span>
        </span>
      </span>
    </div>
  );
}

/* Card com fotografia */
function CardImage({
  src,
  label,
  accent,
  className = "",
}: {
  src: string;
  label?: string;
  accent?: string;
  className?: string;
}) {
  return (
    <div className={"relative overflow-hidden rounded-xl ring-1 ring-black/15 " + className}>
      <img src={src} alt="" loading="lazy" decoding="async" className="h-full w-full object-cover" />
      {label ? (
        <span
          className="absolute bottom-2.5 left-2.5 rounded-full px-2.5 py-1 text-[8px] font-bold uppercase tracking-[0.18em] text-white"
          style={{ background: accent ?? "rgba(15,23,42,0.75)" }}
        >
          {label}
        </span>
      ) : null}
    </div>
  );
}

/* Botões de hero */
function HeroCta({ label = "Agendar conversa", accent }: { label?: string; accent?: string }) {
  return (
    <div className="flex flex-wrap items-center gap-2.5">
      <span
        className="inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-[9px] font-bold uppercase tracking-[0.14em] text-white"
        style={{ background: accent }}
      >
        {label} <ArrowUpRight aria-hidden="true" className="h-2.5 w-2.5" />
      </span>
      <span
        className="rounded-full px-4 py-2 text-[9px] font-semibold uppercase tracking-[0.14em]"
        style={{ color: accent, boxShadow: "inset 0 0 0 1px currentColor" }}
      >
        Ver área de atuação
      </span>
    </div>
  );
}

/* Faixa de 3 serviços */
function ServiceStrip({
  items,
  accent,
  dark = false,
}: {
  items: { t: string; d: string }[];
  accent: string;
  dark?: boolean;
}) {
  return (
    <div
      className="grid grid-cols-3 gap-3 px-5 py-5 sm:px-7"
      style={{
        background: dark ? "rgba(255,255,255,0.06)" : "rgba(255,255,255,0.6)",
        borderTop: `1px solid ${dark ? "rgba(255,255,255,0.1)" : "rgba(28,25,23,0.08)"}`,
      }}
    >
      {items.map((item, i) => (
        <div
          key={item.t}
          className="min-w-0 px-1"
          style={
            i < 2
              ? { borderRight: `1px solid ${dark ? "rgba(255,255,255,0.1)" : "rgba(28,25,23,0.08)"}` }
              : undefined
          }
        >
          <p className="truncate text-[8.5px] font-bold uppercase tracking-[0.2em]" style={{ color: accent }}>
            {item.t}
          </p>
          <p
            className="mt-1 line-clamp-2 text-[9.5px] leading-relaxed"
            style={{ color: dark ? "rgba(245,245,244,0.72)" : "rgba(28,25,23,0.6)" }}
          >
            {item.d}
          </p>
        </div>
      ))}
    </div>
  );
}

/* Rodapé de site */
function SiteFooter({ brand, accent, dark = false }: { brand: string; accent: string; dark?: boolean }) {
  const dim = dark ? "rgba(255,255,255,0.45)" : "rgba(28,25,23,0.48)";
  return (
    <div
      className="flex items-center justify-between px-5 py-4 sm:px-7"
      style={{
        background: dark ? "#16161a" : "#fafaf9",
        borderTop: `1px solid ${dark ? "rgba(255,255,255,0.1)" : "rgba(28,25,23,0.08)"}`,
      }}
    >
      <span className="text-[8.5px] font-semibold uppercase tracking-[0.22em]" style={{ color: accent }}>
        {brand}
      </span>
      <div className="flex items-center gap-4">
        {["Áreas", "Contato", "Blog"].map((label) => (
          <span key={label} className="text-[8.5px] font-medium uppercase tracking-[0.18em]" style={{ color: dim }}>
            {label}
          </span>
        ))}
      </div>
      <span className="text-[8.5px] font-medium uppercase tracking-[0.18em]" style={{ color: dim }}>
        © 2026
      </span>
    </div>
  );
}

/* ============ CONCEITO — hero de estúdio (dark, editorial) ============ */
export function HeroMockup() {
  return (
    <MockShell
      url="andradelima.com.br — sociedade de advogados"
      className="min-h-[280px] md:min-h-[400px] bg-[#171512]"
    >
      <div className="flex h-full flex-1 flex-col justify-between bg-[#1f1c18] p-7">
        <div className="flex items-center justify-between">
          <BrandLogo tone="dark" className="scale-[0.72] origin-left" />
          <nav className="flex items-center gap-5 text-[9px] font-medium uppercase tracking-[0.22em] text-[#e9e4d6]/40" aria-hidden="true">
            <span>Sobre</span>
            <span>Áreas</span>
            <span style={{ color: ACCENT }}>Contato</span>
          </nav>
        </div>

        <div className="grid gap-8 pt-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="text-[9px] font-semibold uppercase tracking-[0.3em]" style={{ color: ACCENT }}>
              Direito empresarial
            </p>
            <h3 className="font-display mt-5 text-[26px] leading-[1.08] tracking-[-0.01em] sm:text-[32px]">
              <em className="text-[#e9e4d6]">O rigor jurídico</em>
              <br />
              <span className="font-normal text-[#e9e4d6]">que sustenta cada negócio.</span>
            </h3>
            <div className="mt-6 max-w-sm space-y-2.5">
              <span className="block h-[1.5px] w-full bg-white/15"></span>
              <span className="block h-[1.5px] w-3/4 bg-white/15"></span>
            </div>
          </div>
          <div className="hidden rounded-sm border border-white/12 bg-white/5 p-5 lg:col-span-5 lg:block">
            <p className="text-[9px] uppercase tracking-[0.28em] text-white/35">Trajetória</p>
            <div className="mt-4 flex items-end gap-1.5">
              <span className="h-4 w-1 bg-white/25"></span>
              <span className="h-7 w-1 bg-[#a58b5a]/60"></span>
              <span className="h-5 w-1 bg-white/25"></span>
              <span className="h-10 w-1 bg-[#a58b5a]/70"></span>
            </div>
          </div>
        </div>

        <div className="mt-auto flex items-center justify-between border-t border-white/12 pt-4 text-[9px] font-semibold uppercase tracking-[0.22em] text-white/35">
          <span>Sotaque do escritório</span>
          <span style={{ color: ACCENT }}>Conversa inicial</span>
        </div>
      </div>
    </MockShell>
  );
}

/* ============ 01 · ANDRADE & MENDONÇA — empresarial ============ */
export function AndradeMock() {
  return (
    <MockShell url="andrademendonca.com.br" className="min-h-[520px] sm:min-h-[600px]">
      <div className="flex h-full min-w-0 flex-col bg-[#f6f7f9]">
        <SiteHeader
          brand={<MockBrand />}
          accent="#1d3a6c"
          nav={["O escritório", "Áreas", "Equipe", "Agenda"]}
          cta="Solicitar resposta"
        />

        <div className="flex flex-1 flex-col gap-6 px-5 pt-7 sm:grid sm:grid-cols-12 sm:items-center sm:px-7 sm:pt-9">
          <div className="sm:col-span-7">
            <p className="small-caps text-[#1d3a6c]/50">Direito empresarial · SP</p>
            <h3 className="font-display mt-3 max-w-[26rem] text-[30px] leading-[0.98] tracking-[-0.02em] text-[#14181f] sm:text-[38px]">
              O novo padrão para a segurança do seu contrato.
            </h3>
            <p className="mt-3.5 max-w-[25rem] text-[11px] leading-relaxed text-[#14181f]/55">
              Advocacia de negócios para empresas que precisam de contratos, governança e respostas rápidas — sem
              jargão e sem atraso.
            </p>
            <div className="mt-5">
              <HeroCta accent="#1d3a6c" label="Solicitar proposta" />
            </div>
            <div className="mt-5 flex items-center gap-2.5 text-[9px] font-semibold uppercase tracking-[0.18em] text-[#14181f]/45">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#1d3a6c] text-[11px] text-white">A</span>
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#1d3a6c] text-[11px] text-white">L</span>
              <span>+ 5 advogados diretores</span>
            </div>
          </div>
          <div className="sm:col-span-5">
            <CardImage src={img("andrade")} label="Contratos · Compliance" className="aspect-[4/3]" />
          </div>
        </div>

        <ServiceStrip
          accent="#1d3a6c"
          items={[
            { t: "Contratos", d: "Redação, análise e negociação." },
            { t: "Governança", d: "Estatuto, sócios e conselhos." },
            { t: "Litígio", d: "Ações estratégicas nacionais." },
          ]}
        />

        <SiteFooter brand="Andrade & Mendonça" accent="#1d3a6c" />
      </div>
    </MockShell>
  );
}

/* ============ 02 · MARTINS — família/sucessório ============ */
export function MartinsMock() {
  return (
    <MockShell url="martins.adv.br" className="min-h-[520px] sm:min-h-[600px]">
      <div className="flex h-full min-w-0 flex-col bg-[#f6efe4]">
        <SiteHeader
          brand={<MockBrand />}
          accent="#8a4a2b"
          nav={["Início", "Áreas", "Quem somos", "Contato"]}
          cta="Falar agora"
        />

        <div className="flex-1 px-6 sm:px-8">
          <div className="pt-8 text-center">
            <p className="small-caps text-[#8a4a2b]">Direito de família & sucessões</p>
            <h3 className="font-display mx-auto mt-3 max-w-[27rem] text-[28px] leading-[1.06] tracking-[-0.01em] text-[#2b211a] sm:text-[34px]">
              Um cuidado que atravessa os momentos difíceis.
            </h3>
            <p className="mx-auto mt-3 max-w-[25rem] text-[11px] leading-relaxed text-[#4a3b2f]/60">
              Divórcios, inventários e guarda conduzidos com segurança emocional e técnica por especialistas que
              de fato ouvem.
            </p>
            <div className="mt-5 flex justify-center">
              <HeroCta accent="#8a4a2b" label="Falar com um especialista" />
            </div>
          </div>
          <div className="mx-auto mt-5 max-w-[24rem]">
            <CardImage src={img("martins")} label="Atendimento humano" className="h-[8.5rem]" />
          </div>
        </div>

        <ServiceStrip
          accent="#8a4a2b"
          items={[
            { t: "Divórcio", d: "Consensual e contencioso." },
            { t: "Inventário", d: "Gestão e partilha clara." },
            { t: "Guarda", d: "Acordos que protegem." },
          ]}
        />

        <SiteFooter brand="Martins & Associados" accent="#8a4a2b" />
      </div>
    </MockShell>
  );
}

/* ============ 03 · VASCONCELOS — imobiliário ============ */
export function VasconcelosMock() {
  return (
    <MockShell url="vasconcelosjuridico.com.br" className="min-h-[520px] sm:min-h-[600px]">
      <div className="flex h-full min-w-0 flex-col bg-[#0e2936]">
        <SiteHeader
          brand={<MockBrand dark />}
          accent="#6fc0da"
          dark
          nav={["Operações", "Mapeamento", "Regularização", "Contato"]}
          cta="Iniciar mapeamento"
        />
        <div className="flex flex-1 flex-col gap-6 px-6 pt-7 sm:grid sm:grid-cols-12 sm:items-center sm:px-8 sm:pt-9">
          <div className="sm:col-span-7">
            <p className="small-caps text-[#6fc0da]">Arquitetura jurídica imobiliária</p>
            <h3 className="font-display mt-3 max-w-[25rem] text-[28px] leading-[1.06] tracking-[-0.01em] text-[#f4f8f9] sm:text-[36px]">
              Da incorporação <em className="italic text-[#6fc0da]">ao registro final.</em>
            </h3>
            <p className="mt-3 max-w-[25rem] text-[11px] leading-relaxed text-[#cfe0e6]/70">
              Incorporações, contratos e regularização de patrimônios com um só escritório — precisão do início à
              escritura definitiva.
            </p>
            <div className="mt-5">
              <HeroCta label="Simular cronograma" accent="#6fc0da" />
            </div>
            <div className="mt-6 flex items-center gap-6 text-[9.5px] font-semibold uppercase tracking-[0.16em] text-[#cfe0e6]/55">
              <span className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-[#6fc0da]" /> 120+ projetos
              </span>
              <span className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-[#6fc0da]" /> 98% no prazo
              </span>
            </div>
          </div>
          <div className="sm:col-span-5">
            <CardImage src={img("vasconcelos")} label="Incorporação" accent="rgba(14,41,54,0.8)" className="h-[9rem]" />
          </div>
        </div>
        <ServiceStrip
          dark
          accent="#6fc0da"
          items={[
            { t: "Incorporação", d: "Estrutura e registro do empreendimento." },
            { t: "Regularização", d: "Cadastros, averbações e matrículas." },
            { t: "Contratos", d: "Compra, venda e locação." },
          ]}
        />
        <SiteFooter brand="Vasconcelos Jurídico" accent="#6fc0da" dark />
      </div>
    </MockShell>
  );
}

/* ============ 04 · ROCHA — previdenciário ============ */
export function RochaMock() {
  return (
    <MockShell url="rochaprevidenciario.com.br" className="min-h-[520px] sm:min-h-[600px]">
      <div className="flex h-full min-w-0 flex-col bg-[#eef3ec]">
        <SiteHeader
          brand={<MockBrand />}
          accent="#0f6b57"
          nav={["Benefícios", "Simular", "Sobre", "Contato"]}
          cta="Atendimento hoje"
        />
        <div className="flex flex-1 flex-col gap-6 px-6 pt-7 sm:grid sm:grid-cols-12 sm:items-center sm:px-8 sm:pt-9">
          <div className="sm:col-span-7">
            <p className="small-caps text-[#0f6b57]">Direito previdenciário</p>
            <h3 className="font-display mt-3 max-w-[26rem] text-[28px] leading-[1.06] tracking-[-0.01em] text-[#162a24] sm:text-[36px]">
              Um benefício <em className="italic text-[#0f6b57]">sem fila e sem enigma.</em>
            </h3>
            <p className="mt-3 max-w-[25rem] text-[11px] leading-relaxed text-[#25453c]/70">
              Aposentadorias, revisões e pensões explicadas em linguagem simples, com prazo certo e contato direto
              com o advogado que atende seu caso.
            </p>
            <div className="mt-5">
              <HeroCta label="Simular minha aposentadoria" accent="#0f6b57" />
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4 text-[9.5px] font-semibold uppercase tracking-[0.16em] text-[#25453c]/50">
              <span>+300 casos</span>
              <span>·</span>
              <span>Resposta em 24h</span>
              <span>·</span>
              <span>Honorários transparentes</span>
            </div>
          </div>
          <div className="sm:col-span-5">
            <CardImage src={img("rocha")} label="Primeira consulta" className="h-[9rem]" />
          </div>
        </div>
        <ServiceStrip
          accent="#0f6b57"
          items={[
            { t: "Aposentadoria", d: "Análise e via administrativa." },
            { t: "Revisão", d: "Valores e tempo de contribuição." },
            { t: "Pensões", d: "Por morte e direitos trabalhistas." },
          ]}
        />
        <SiteFooter brand="Rocha Previdenciário" accent="#0f6b57" />
      </div>
    </MockShell>
  );
}
