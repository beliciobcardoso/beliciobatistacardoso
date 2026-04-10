/**
 * Skills Section Component
 *
 * Categorias renderizadas como módulos de um sistema.
 * Lista densa no estilo de log/terminal — não cards com ícones.
 * Profundidade: border-only cards com hover sutil.
 */
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
      className="section-divider py-24 px-4 sm:px-6 lg:px-8"
      aria-labelledby="skills-title"
    >
      <div className="mx-auto max-w-5xl">
        {/* Section label */}
        <p className="font-mono text-[0.7rem] text-slate-600 tracking-widest uppercase mb-5">
          02 / Expertise
        </p>

        <h2
          id="skills-title"
          className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-50 mb-3"
        >
          {title}
        </h2>

        {subtitle && (
          <p className="text-slate-500 text-sm mb-12 font-mono">{subtitle}</p>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {categories.map((category, index) => (
            <div
              key={index}
              className="p-5 rounded-md border border-slate-800
                         bg-slate-900/30
                         hover:border-slate-700 hover:bg-slate-900/60
                         transition-colors duration-200"
            >
              {/* Category header */}
              <div className="flex items-center gap-2 mb-4">
                {category.icon && (
                  <span aria-hidden="true" className="text-green-500">
                    {category.icon}
                  </span>
                )}
                <h3 className="font-mono text-xs text-green-400/80 tracking-widest uppercase">
                  {category.category}
                </h3>
              </div>

              {/* Skill list */}
              <ul className="space-y-1.5" aria-label={`Skills de ${category.category}`}>
                {category.skills.map((skill, skillIndex) => (
                  <li
                    key={skillIndex}
                    className="flex items-baseline gap-2 min-w-0"
                  >
                    <span aria-hidden="true" className="font-mono text-slate-700 text-xs shrink-0">
                      ▸
                    </span>
                    <span className="text-sm text-slate-400">{skill}</span>
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
