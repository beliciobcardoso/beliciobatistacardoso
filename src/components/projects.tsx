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
      className="section-divider px-5 py-12 md:px-10 md:py-20 xl:px-30"
      aria-labelledby="projects-title"
    >
      <div className="mx-auto w-full max-w-360">
        <p className="font-mono text-[11px] tracking-[0.16em] text-(--accent)">03 / PROJETOS</p>

        <h2 id="projects-title" className="mt-3 text-4xl font-bold text-(--text-primary)">
          {title}
        </h2>

        {subtitle && (
          <p className="mt-2 text-sm text-(--text-secondary) md:text-base">{subtitle}</p>
        )}

        <div className="mt-8 space-y-4 md:space-y-6">
          {projects.map((project) => (
            <article
              key={project.id}
              className="flex items-start gap-4 rounded-xl border border-(--border-subtle) bg-(--bg-surface) px-4 py-5 md:gap-6 md:px-8 md:py-7"
            >
              <span aria-hidden="true" className="mt-1 h-20 w-0.75 shrink-0 rounded bg-(--accent)" />

              <div className="min-w-0">
                <p className="font-mono text-[11px] text-(--text-muted)">{project.role}</p>
                <h3 className="mt-1 text-xl font-semibold text-(--text-primary)">
                  {project.link ? (
                    <a
                      href={project.link}
                      target={isExternalHref(project.link) ? "_blank" : undefined}
                      rel={isExternalHref(project.link) ? "noopener noreferrer" : undefined}
                      className="transition-colors hover:text-(--accent)"
                    >
                      {project.name}
                    </a>
                  ) : (
                    project.name
                  )}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-(--text-secondary) md:text-base">
                  {project.description}
                </p>

                <div className="mt-3 flex flex-wrap gap-1.5" aria-label="Tecnologias utilizadas">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      translate="no"
                      className="rounded border border-(--border-subtle) px-2 py-1 text-[11px] text-(--text-secondary)"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
