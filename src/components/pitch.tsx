/**
 * Pitch Section Component — "Sobre Mim"
 *
 * Tipografia como design. Prose rico com 3 pilares renderizados
 * como painéis de status inline — não como bullets genéricos.
 * Profundidade: border-left como único acento estrutural.
 */

interface PitchProps {
  readonly title: string;
  readonly content: string;
  readonly keyFocus: readonly string[];
}

const PILLAR_LABELS = ["Solidez", "Modernidade", "Entrega"] as const;

export function Pitch({ title, content, keyFocus }: PitchProps) {
  return (
    <article
      id="about"
      className="section-divider py-24 px-4 sm:px-6 lg:px-8 bg-slate-900/40"
      aria-labelledby="pitch-heading"
    >
      <div className="mx-auto max-w-5xl">
        {/* Section label */}
        <p className="font-mono text-[0.7rem] text-slate-600 tracking-widest uppercase mb-5">
          01 / Sobre
        </p>

        <h2
          id="pitch-heading"
          className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-50 mb-8"
        >
          {title}
        </h2>

        {/* Prose */}
        <p className="text-slate-400 text-lg leading-relaxed max-w-3xl">
          {content}
        </p>

        {/* Pillar grid */}
        {keyFocus.length > 0 && (
          <div className="mt-12 grid sm:grid-cols-3 gap-4">
            {keyFocus.map((item, index) => (
              <div
                key={index}
                className="pl-4 border-l border-green-500/40
                           hover:border-green-500/70
                           transition-colors duration-150"
              >
                <p
                  className="font-mono text-[0.65rem] text-green-500/70 tracking-widest uppercase mb-1"
                  aria-hidden="true"
                >
                  {PILLAR_LABELS[index] ?? `0${index + 1}`}
                </p>
                <p className="text-sm text-slate-300 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
