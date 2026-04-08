/**
 * Projects Section Component
 * 
 * Responsabilidade: Exibir projetos destacados com descrição e metadados.
 * Padrão: Presentational component com renderização condicional
 * SEO: Schema.org compatible structure
 */

interface Project {
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly role: string;
  readonly technologies: readonly string[];
  readonly link?: string;
}

interface ProjectsProps {
  readonly title: string;
  readonly subtitle?: string;
  readonly projects: readonly Project[];
}

export function Projects({ title, subtitle, projects }: ProjectsProps) {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900" 
             aria-labelledby="projects-title"
    >
      <div className="mx-auto max-w-4xl">
        <h2 id="projects-title" className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">
          {title}
        </h2>
        {subtitle && (
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-12">
            {subtitle}
          </p>
        )}

        <div className="space-y-8">
          {projects.map((project) => (
            <article
              key={project.id}
              className="p-6 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {project.link ? (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        {project.name}
                      </a>
                    ) : (
                      project.name
                    )}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    {project.role}
                  </p>
                </div>
              </div>

              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="inline-block px-3 py-1 text-sm bg-blue-50 dark:bg-blue-900 text-blue-700 dark:text-blue-200 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
