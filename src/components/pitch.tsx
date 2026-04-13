interface PitchProps {
  readonly title: string;
  readonly content: readonly string[];
  readonly keyFocus: readonly string[];
}

const PILLAR_LABELS = ["Solidez", "Modernidade", "Entrega"] as const;

export function Pitch({ title, content, keyFocus }: PitchProps) {
  return (
    <article
      id="about"
      className="section-divider px-5 py-12 md:px-10 md:py-20 xl:px-30"
      aria-labelledby="pitch-heading"
    >
      <div className="mx-auto w-full max-w-360">
        <p className="font-mono text-[11px] tracking-[0.16em] text-(--accent)">01 / SOBRE</p>

        <h2 id="pitch-heading" className="mt-3 text-4xl font-bold text-(--text-primary)">
          {title}
        </h2>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_1fr] lg:gap-14">
          <div className="space-y-5">
            {content.map((paragraph) => (
              <p key={paragraph} className="text-sm leading-relaxed text-(--text-secondary) md:text-base">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="space-y-3">
            {keyFocus.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 rounded-lg border border-(--border-subtle) bg-(--bg-surface) p-4 md:px-6 md:py-5"
              >
                <span aria-hidden="true" className="h-9 w-0.75 rounded bg-(--accent)" />
                <div className="space-y-1">
                  <p className="text-sm font-semibold text-(--text-primary)">
                    {PILLAR_LABELS[index] ?? `0${index + 1}`}
                  </p>
                  <p className="text-xs text-(--text-secondary) md:text-sm">{item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
