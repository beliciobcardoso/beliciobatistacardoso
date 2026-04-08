/**
 * Skills Section Component
 * 
 * Responsabilidade: Exibir hard skills categorizadas por área de especialidade.
 * Padrão: Presentational component com renderização de listas
 * Acessibilidade: ARIA labels e estrutura semântica
 */

interface SkillCategory {
  readonly category: string;
  readonly skills: readonly string[];
  readonly icon?: React.ReactNode;
}

interface SkillsProps {
  readonly title: string;
  readonly subtitle?: string;
  readonly categories: readonly SkillCategory[];
}

export function Skills({ title, subtitle, categories }: SkillsProps) {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8" aria-labelledby="skills-title">
      <div className="mx-auto max-w-4xl">
        <h2 id="skills-title" className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">
          {title}
        </h2>
        {subtitle && (
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            {subtitle}
          </p>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                {category.icon && <span>{category.icon}</span>}
                {category.category}
              </h3>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li
                    key={skillIndex}
                    className="text-gray-600 dark:text-gray-300 flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                    {skill}
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
