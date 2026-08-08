import type { ReactNode } from "react";
import { BrandLogo } from "./ui";

const ACCENT = "#a58b5a";

/* Janela de conteúdo — concha neutra de estúdio */
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
    <div className={"window flex w-full flex-col overflow-hidden " + className}>
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

/* ============ HERO — conceito · sociedade de advogados ============ */
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

/* ============ 01 · ANDRADE & LIMA — empresarial ============ */
export function AndradeLimaMock() {
  return (
    <MockShell url="andradelima.com.br" className="min-h-[340px] sm:min-h-[420px]">
      <div className="flex h-full flex-1 flex-col rounded-b-sm bg-[#efe9da]">
        <div className="flex items-center justify-between border-b border-black/10 px-6 py-4">
          <BrandLogo className="scale-[0.72] origin-left" />
          <span className="small-caps flex gap-5 text-[10px] text-black/55">
            <span>Sobre</span>
            <span>Áreas</span>
            <span>Sócios</span>
            <span className="font-semibold text-black">Contato</span>
          </span>
        </div>
        <div className="flex-1 px-6 py-7">
          <p className="small-caps text-[#a58b5a]">Sociedade de advogados · boutique</p>
          <h3 className="font-display mt-4 text-[27px] leading-[1.08]">
            <em>A fiscalidade</em>
            <br />
            acontece antes do contrato.
          </h3>
          <div className="mt-6 max-w-sm space-y-2.5">
            <span className="block h-[1.5px] w-full bg-black/12"></span>
            <span className="block h-[1.5px] w-2/3 bg-black/12"></span>
          </div>
          <div className="mt-8 flex items-center justify-between border-t border-black/10 pt-4 text-[9px] font-semibold uppercase tracking-[0.22em] text-black/45">
            <span>Diligência</span>
            <span>Contratos</span>
            <span className="text-[#a58b5a]">Trabalhos</span>
          </div>
        </div>
      </div>
    </MockShell>
  );
}

/* ============ 02 · MARTINS — família ============ */
export function MartinsMock() {
  return (
    <MockShell url="martinsadvocacia.com.br" className="min-h-[340px] sm:min-h-[420px]">
      <div className="flex h-full flex-1 flex-col rounded-b-sm bg-[#f1ece1]">
        <div className="flex items-center justify-between px-6 py-4">
          <BrandLogo className="scale-[0.68] origin-left" />
          <span className="small-caps flex gap-5 text-[10px] text-[#3a2e26]/55">
            <span>Início</span>
            <span>Áreas</span>
            <span>Contato</span>
          </span>
        </div>
        <div className="flex-1 px-6 text-center">
          <p className="small-caps text-[#a4532b]">Direito de família</p>
          <h3 className="font-display mx-auto mt-4 max-w-[18rem] text-[28px] leading-[1.1] tracking-tight text-[#22201c]">
            Um cuidado que atravessa os momentos difíceis.
          </h3>
          <div className="mx-auto mt-6 max-w-xs space-y-2.5">
            <span className="block h-[1.5px] w-full bg-black/12"></span>
            <span className="mx-auto block h-[1.5px] w-2/3 bg-black/12"></span>
          </div>
          <p className="font-display mx-auto mt-6 max-w-[15rem] text-[17px] italic leading-snug text-[#6b5b4f]">
            “A cada família, um rumo que respeita o que já foi construído.”
          </p>
        </div>
        <div className="flex items-center justify-center gap-8 border-t border-[#3a2e26]/12 px-6 py-4 text-[10px] font-medium uppercase tracking-[0.2em] text-[#5c4f45]">
          <span>Divórcio</span>
          <span>Inventário</span>
          <span>Guarda</span>
        </div>
      </div>
    </MockShell>
  );
}

/* ============ 03 · VASCONCELOS — imobiliário ============ */
export function VasconcelosMock() {
  return (
    <MockShell url="vasconcelosjuridico.com.br" className="min-h-[340px] sm:min-h-[420px]">
      <div className="flex h-full flex-1 flex-col rounded-b-sm bg-[#ece9e0]">
        <div className="flex items-center justify-between px-6 py-4">
          <BrandLogo className="scale-[0.68] origin-left" />
          <span className="small-caps flex gap-5 text-[10px] text-black/50">
            <span>Operações</span>
            <span>Mapeamento</span>
          </span>
        </div>
        <div className="flex-1 px-6 py-6">
          <p className="small-caps text-[#37586d]">Arquitetura jurídica</p>
          <h3 className="font-display mt-4 text-[30px] leading-[1.02] tracking-[-0.01em]">
            Da incorporação
            <br />
            <em>ao último registro.</em>
          </h3>
          <div className="mt-6 max-w-sm space-y-2.5">
            <span className="block h-[1.5px] w-full bg-black/14"></span>
            <span className="block h-[1.5px] w-2/3 bg-black/14"></span>
          </div>
          <div className="mt-7 flex items-end gap-1.5">
            <span className="h-4 w-1 bg-[#37586c]/60"></span>
            <span className="h-7 w-1 bg-[#37586c]/70"></span>
            <span className="h-10 w-1 bg-[#37586c]/80"></span>
            <span className="h-5 w-1 bg-[#37586c]/50"></span>
          </div>
        </div>
        <div className="flex items-center justify-between border-t border-black/12 px-6 py-4 text-[9px] font-medium uppercase tracking-[0.24em] text-black/45">
          <span>Escrituração</span>
          <span className="text-[#37586c]">Regularização</span>
        </div>
      </div>
    </MockShell>
  );
}

/* Versão mobile do Vasconcelos — para o projeto 03 */
export function VasconcelosPhoneMock() {
  return (
    <div className="mx-auto w-full max-w-[280px]">
      <div className="mx-auto w-[100%] rounded-[2rem] border border-line bg-[#1f1c18] p-2">
        <div className="h-3 w-16 self-center rounded-full bg-[#171512]" aria-hidden="true"></div>
        <div className="mt-2 rounded-[1.4rem] bg-[#f5f2ea] p-4 pb-5">
          <div className="flex items-center justify-between">
            <span className="font-display text-[14px] italic text-[#26282d]">Vasconcelos</span>
            <span className="h-1.5 w-6" style={{ background: "#a58b5a" }}></span>
          </div>
          <div className="mt-3 flex items-end gap-1.5 pb-1">
            <span className="h-4 w-1 bg-[#37586b]/70"></span>
            <span className="h-6 w-1 bg-[#37586b]/70"></span>
            <span className="h-8 w-1 bg-[#37586b]/80"></span>
            <span className="h-5 w-1 bg-[#37586b]/50"></span>
          </div>
          <h4 className="font-display mt-3 text-[18px] leading-[1.08] text-[#26282d]">
            Escritura com
            <br />
            <em>clareza.</em>
          </h4>
        </div>
      </div>
    </div>
  );
}

/* ============ 04 · ROCHA — previdenciário ============ */
export function RochaMock() {
  return (
    <MockShell url="rochaprevidenciario.com.br" className="min-h-[340px] sm:min-h-[420px]">
      <div className="flex h-full flex-1 flex-col rounded-b-sm bg-[#eef0eb]">
        <div className="flex items-center justify-between border-b border-black/10 px-6 py-4">
          <BrandLogo className="scale-[0.68] origin-left" />
          <span className="rounded-full bg-[#1e7a70] px-4 py-1.5 text-[9px] font-bold uppercase tracking-[0.22em] text-white">
            Atendimento
          </span>
        </div>
        <div className="flex-1 px-6 py-6">
          <p className="small-caps text-[#1e7a70]">Direito previdenciário</p>
          <h3 className="font-display mt-4 text-[28px] leading-[1.06]">
            <em>Um benefício</em>
            <br />
            que chega sem terror.
          </h3>
          <span className="mt-6 block h-[1.5px] w-40" style={{ background: "#1e7a70" }}></span>
          <div className="mt-5 max-w-sm space-y-2">
            <span className="block h-[1.5px] w-full bg-black/12"></span>
            <span className="block h-[1.5px] w-3/4 bg-black/12"></span>
          </div>
        </div>
        <div className="flex items-center gap-8 border-t border-black/10 px-6 py-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#17312b]/60">
          <span className="h-2.5 w-2.5 rounded-full" style={{ background: "#1e7a70" }} aria-hidden="true"></span>
          Aposentadoria
          <span className="ml-auto text-[#1e7a70]">Falar com um advogado</span>
        </div>
      </div>
    </MockShell>
  );
}
