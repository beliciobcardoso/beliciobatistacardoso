/**
 * Projects Section Component
 *
 * Cada projeto = um serviço no painel de controle.
 * Border-left colorida = indicador de status (ativo/running).
 * Sem sombras. Profundidade apenas por bordes e contraste de superfície.
 * translate="no" em nomes de tecnologias. aria-label descritivo em links externos.
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

function isExternalHref(href: string): boolean {
  return /^https?:\/\//i.test(href);
}

export function Projects({ title, subtitle, projects }: ProjectsProps) {
  return (
    <section
      id="projects"
      className="section-divider py-24 px-4 sm:px-6 lg:px-8 bg-slate-900/40"
      aria-labelledby="projects-title"
    >
      <div className="mx-auto max-w-5xl">
        {/* Section label */}
        <p className="font-mono text-[0.7rem] text-slate-600 tracking-widest uppercase mb-5">
          03 / Projetos
        </p>

        <h2
          id="projects-title"
          className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-50 mb-3"
        >
          {title}
        </h2>

        {subtitle && (
          <p className="text-slate-500 text-sm mb-12 font-mono">{subtitle}</p>
        )}

        <div className="space-y-4">
          {projects.map((project) => (
            // Open only external links in a new tab.
            // Internal anchors (e.g. "#") remain same-tab.
            <article
              key={project.id}
              className="relative pl-5 pr-5 py-5 rounded-md
                         border border-slate-800 bg-slate-900/30
                         hover:border-slate-700 hover:bg-slate-900/60
                         transition-colors duration-200
                         /* Status border = service is active */
                         before:absolute before:left-0 before:top-4 before:bottom-4
                         before:w-0.5 before:bg-green-500/60 before:rounded-full
                         before:hover:bg-green-500
                         before:transition-colors before:duration-200"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
                <div className="min-w-0">
                  {/* Service status badge + name */}
                  <div className="flex items-center gap-2 mb-1">
                    <span
                      aria-hidden="true"
                      className="font-mono text-[0.6rem] text-green-500/70
                                 border border-green-500/20 rounded px-1.5 py-0.5
                                 tracking-widest uppercase bg-green-500/5"
                    >
                      ATIVO
                    </span>
                    <h3 className="text-base font-semibold text-slate-100">
                      {project.link ? (
                        <a
                          href={project.link}
                          target={isExternalHref(project.link) ? "_blank" : undefined}
                          rel={isExternalHref(project.link) ? "noopener noreferrer" : undefined}
                          aria-label={
                            isExternalHref(project.link)
                              ? `Ver projeto ${project.name} (abre em nova aba)`
                              : `Ver projeto ${project.name}`
                          }
                          className="hover:text-green-400
                                     transition-colors duration-150 rounded-sm
                                     focus-visible:outline-2
                                     focus-visible:outline-offset-2 focus-visible:outline-green-500"
                        >
                          {project.name}
                        </a>
                      ) : (
                        project.name
                      )}
                    </h3>
                  </div>
                  <p className="font-mono text-[0.7rem] text-slate-600 tracking-wide">
                    {project.role}
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-slate-400 leading-relaxed mb-4 wrap-break-word">
                {project.description}
              </p>

              {/* Tech tags */}
              <div
                className="flex flex-wrap gap-1.5"
                aria-label="Tecnologias utilizadas"
              >
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    translate="no"
                    className="inline-block px-2 py-0.5 text-[0.7rem] font-mono
                               border border-slate-700/60 text-slate-500
                               rounded bg-slate-800/40"
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
