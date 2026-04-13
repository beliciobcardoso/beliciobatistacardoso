import type { ReactNode } from "react";

interface SkillCategory {
  readonly category: string;
  readonly skills: readonly string[];
  readonly icon?: ReactNode;
}

interface SkillsProps {
  readonly title: string;
  readonly subtitle?: string;
  readonly categories: readonly SkillCategory[];
}

export function Skills({ title, subtitle, categories }: SkillsProps) {
  return (
    <section
      id="skills"
      className="section-divider px-5 py-12 md:px-10 md:py-20 xl:px-30"
      aria-labelledby="skills-title"
    >
      <div className="mx-auto w-full max-w-360">
        <p className="font-mono text-[11px] tracking-[0.16em] text-(--accent)">02 / EXPERTISE</p>

        <h2 id="skills-title" className="mt-3 text-4xl font-bold text-(--text-primary)">
          {title}
        </h2>

        {subtitle && (
          <p className="mt-2 text-sm text-(--text-secondary) md:text-base">{subtitle}</p>
        )}

        <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="rounded-xl border border-(--border-subtle) bg-(--bg-surface) px-4 py-4 md:px-6 md:py-6"
            >
              <div className="mb-4 flex items-center gap-2">
                {category.icon && (
                  <span aria-hidden="true" className="text-(--accent)">
                    {category.icon}
                  </span>
                )}
                <h3 className="text-lg font-semibold text-(--text-primary)">
                  {category.category}
                </h3>
              </div>

              <ul className="space-y-2.5" aria-label={`Skills de ${category.category}`}>
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="flex items-start gap-2">
                    <span aria-hidden="true" className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-(--accent)" />
                    <span className="text-sm text-(--text-secondary)">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
