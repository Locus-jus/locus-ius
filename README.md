# Locus, Ius — Sites para Advocacia

Estúdio independente especializado em sites para advogados e escritórios de advocacia. Site em React + Vite + Tailwind CSS v4.

## Tecnologias

- React 19 + TypeScript
- Vite 7
- Tailwind CSS v4
- Lucide React (ícones)

## Desenvolvimento local

```bash
npm install
npm run dev
```

Abra `http://localhost:5173`.

## Build de produção

```bash
npm run build
npm run preview
```

## Publicação no GitHub Pages

O repositório já contém:

- `vite.config.ts` com `base: "./"` — garante que os assets funcionam em subcaminho.
- `.github/workflows/deploy.yml` — deploy automático toda vez que o `main` recebe push.
- `.gitignore` — ignora `node_modules`, `dist` etc.

### Passo a passo

1. **Instale o Git** (se ainda não tiver): https://git-scm.com/downloads

2. **Crie o repositório no GitHub** (vazio, sem README):
   https://github.com/new — nome sugerido: `locus-ius` (público).

3. **Envie o código** no terminal:

   ```bash
   cd "C:\Users\cgptm\OneDrive\Documents\Default Project"

   git init
   git add .
   git commit -m "Locus, Ius — primeira versão"
   git branch -M main
   git remote add origin https://github.com/SEU_USUARIO/locus-ius.git
   git push -u origin main
   ```

   Troque `SEU_USUARIO` pelo seu nome de usuário do GitHub.

4. **Ative o GitHub Pages:**
   - Em `locus-ius` no GitHub → **Settings → Pages**.
   - Em *Build and deployment* → **Source:**‑`GitHub Actions`.
   - Não precisa criar nada: o workflow `deploy.yml` já está no repositório.

5. **Aguarde o deploy** (cerca de 1–2 minutos):
   - Aba **Actions** → veja o job *Deploy — GitHub Pages*.
   - Quando o círculo ficar verde ✅, o site está publicado em:

   ```
   https://SEU_USUARIO.github.io/locus-ius/
   ```

### Atualizações futuras

Toda vez que você enviar código para a branch `main`, o site é atualizado automaticamente:

```bash
git add .
git commit -m "sua mudança"
git push
```

## Configurações do site

Todos os dados editáveis estão em `src/config`:

| Campo       | Exemplo                          |
| ----------- | -------------------------------- |
| `brand`     | `Locus, Ius`                     |
| `whatsapp`  | `5531972211906`                  |
| `email`     | `locusiusdevelopment@gmail.com`  |
| `instagram` | `seu_perfil` (vazio = oculto)    |
| `url`       | `https://seudominio.com.br`      |

> Os projetos do portfólio são conceituais e fictícios, criados para demonstrar direção de design.