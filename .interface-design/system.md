# Interface Design System — beliciocardoso.dev

## Direction & Feel

**Concept:** Sala de controle. O portfólio de Belício funciona como um serviço monitorado — cada seção é um módulo do sistema, cada projeto é um serviço ativo no painel de controle. A linguagem visual vem de Grafana, terminais Unix e dashboards de observabilidade.

**Not:** Clean & modern genérico. Não é um portfólio de designer. É o sistema de alguém que prefere `systemctl status` a slides em PowerPoint.

**Feel words:** Preciso. Denso. Controlado. Terminal às 3h da manhã. Verde em preto.

---

## Signature Element

**"belicio.service"** — O Hero tem um painel terminal no lado direito que renderiza o output de `systemctl status belicio.service`. Pulsing dot verde no headline indica disponibilidade. Cursor piscando no terminal. Este elemento só faz sentido para UM perfil.

---

## Color System

| Token CSS          | Valor       | Uso                          |
|-------------------|-------------|------------------------------|
| `--bg-base`       | `#020617`   | Fundo da página (slate-950)  |
| `--bg-surface`    | `#0f172a`   | Seções alternadas (slate-900)|
| `--bg-elevated`   | `#141c2e`   | Cabeçalho terminal           |
| `--bg-overlay`    | `#1e293b`   | Cards hover (slate-800)      |
| `--border-subtle` | `rgba(148,163,184,0.06)` | Bordas quase invisíveis |
| `--border-default`| `rgba(148,163,184,0.10)` | Bordas normais |
| `--text-primary`  | `#f1f5f9`   | Texto slate-100              |
| `--text-secondary`| `#94a3b8`   | Texto slate-400              |
| `--text-muted`    | `#475569`   | Texto slate-600              |
| `--accent`        | `#22c55e`   | Verde terminal (green-500)   |

**Tailwind classes em uso:**
- `bg-slate-950` / `bg-slate-900/40` / `bg-slate-800/40`
- `border-slate-800` / `border-slate-700`
- `text-slate-50` / `text-slate-400` / `text-slate-600`
- `text-green-400` / `text-green-500` / `bg-green-500`

---

## Depth Strategy

**Borders-only.** Nenhuma sombra (`box-shadow`). Bordas ultra-sutis separam superfícies. Elevação = progressão de cor de fundo (slate-950 → slate-900/40 alternando por seção).

---

## Typography

| Uso | Fonte | Tailwind class |
|-----|-------|----------------|
| Headings | Inter (bold, tight tracking) | `font-sans font-bold tracking-tight` |
| Body | Inter (regular) | `font-sans` |
| Dados / Labels / Terminal | JetBrains Mono | `font-mono` |
| Numbers | tabular-nums | `[font-variant-numeric:tabular-nums]` |

---

## Spacing Base

**4px base unit.** Classes Tailwind: `p-5` (20px), `gap-3` (12px), `gap-4` (16px), `py-24` (96px) para seções.

---

## Component Patterns

### Navbar
- Fixed, 56px de altura (`h-14`)
- `bg-[#020617]/90 backdrop-blur-sm`
- Border bottom: `border-slate-800/60`
- Logo: monogram "BC" verde (`bg-green-500 text-[#020617]`) + domain monospace muted
- Links: text-slate-500 → text-slate-200 hover

### Section Headers
- Label monospace muted: `"01 / Sobre"` etc.
- H2: `text-3xl sm:text-4xl font-bold tracking-tight text-slate-50`

### Cards (Skills / Projects)
- `border border-slate-800 rounded-md`
- `bg-slate-900/30` default, `bg-slate-900/60` hover
- `hover:border-slate-700 transition-colors duration-200`
- SEM sombras

### Project Cards
- `before:` pseudo-element: borda esquerda 2px verde (status indicator)
- Badge "ATIVO" em monospace com borda sutil

### Buttons
- Primary: `bg-green-500 text-[#020617]` → `hover:bg-green-400`
- Secondary: `border border-slate-700 text-slate-400` → `hover:border-slate-600 hover:bg-slate-800/40`
- Radius: `rounded-md`
- Transition: `transition-colors duration-150`

### Status Indicators
- Pulsing dot: `status-pulse` CSS class com animation `pulse-dot`
- Terminal cursor: `terminal-cursor` com `cursor-blink`
- Respeita `prefers-reduced-motion`

---

## Animation

- `transition-colors duration-150` — interações rápidas
- `transition-colors duration-200` — cards/sections
- Sem `transition: all`. Sem spring/bounce.
- Cursor blink: `1s step-end infinite`
- Status pulse: `2.4s ease-in-out infinite`
