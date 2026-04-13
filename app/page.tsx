import {
  Navbar,
  Hero,
  Pitch,
  Skills,
  Projects,
  CTA,
  Footer,
} from "@/src/components";

export default function Home() {
  return (
    <>
      <Navbar />

      <main id="main-content" className="flex flex-col">
        <Hero
          headline="Engenharia de Software de Alta Performance"
          subheadline="Há 24 anos projetando e construindo soluções de software com foco em performance, escalabilidade e resiliência. Especialista nos ecossistemas fullstack e DevOps."
          primaryCTA={{ label: "Ver Projetos", href: "#projects" }}
          secondaryCTA={{ label: "Baixar CV", href: "/cv.pdf", newTab: true }}
        />

        <Pitch
          title="Sobre Mim"
          content={[
            "Desde a virada do milênio, minha jornada na tecnologia é guiada por um princípio: escolher as ferramentas certas não é um luxo técnico — é a decisão mais crítica de qualquer projeto.",
            "Ao longo de 24 anos, construí sistemas que resistem ao tempo e à escala, combinando visão estratégica com execução técnica rigorosa. Minha abordagem une engenharia de software pós-graduada com cultura DevOps, garantindo que cada linha de código sirva ao negócio.",
          ]}
          keyFocus={[
            "Solidez técnica através de Clean Code e Princípios SOLID",
            "Arquitetura escalável com visão estratégica de negócio",
            "Observabilidade e DevOps como cultura de qualidade",
          ]}
        />

        <Skills
          title="Skills & Expertise"
          subtitle="24 anos de evolução contínua — da infraestrutura ao produto."
          categories={[
            {
              category: "Backend",
              skills: [
                "NestJS (Expert)",
                "Node.js / TypeScript",
                "Microservices Architecture",
                "RESTful & GraphQL APIs",
                "Relational & NoSQL DBs",
              ],
            },
            {
              category: "Frontend",
              skills: [
                "React / Next.js",
                "TypeScript",
                "Tailwind CSS",
                "Performance Web",
                "Acessibilidade (a11y)",
              ],
            },
            {
              category: "DevOps & Cloud",
              skills: [
                "Docker & Kubernetes",
                "CI/CD Pipelines",
                "Prometheus & Grafana",
                "AWS / Google Cloud",
                "Real-time Observability",
              ],
            },
            {
              category: "Metodologias",
              skills: [
                "Clean Code & SOLID",
                "Semantic Commits",
                "Test-Driven Development",
                "Strategic IT Management",
                "Technical Mentorship",
              ],
            },
          ]}
        />

        <Projects
          title="Projetos"
          subtitle="Sistemas em produção. Não demos."
          projects={[
            {
              id: "my-time-trace",
              name: "My Time Trace",
              description:
                "Plataforma de time-tracking com observabilidade em tempo real, integrando conceitos de DevOps em ferramentas de gestão de projetos.",
              role: "Arquiteto & Full-Stack Developer",
              technologies: ["NestJS", "React", "PostgreSQL", "Docker", "Grafana"],
              link: "#",
            },
            {
              id: "fin-domini",
              name: "FinDomini",
              description:
                "Centralização inteligente de finanças pessoais e empresariais com dashboards analíticos e integração com APIs de pagamento.",
              role: "Criador & Desenvolvedor Principal",
              technologies: ["NestJS", "Next.js", "MongoDB", "Stripe API", "Tailwind"],
              link: "#",
            },
            {
              id: "nexus-crm",
              name: "Nexus CRM",
              description:
                "Plataforma CRM inovadora construída sobre WhatsApp, estendendo plataformas existentes com lógica de negócios sofisticada.",
              role: "Lead Developer & Architect",
              technologies: ["NestJS", "WhatsApp API", "PostgreSQL", "Redis", "Node.js"],
              link: "#",
            },
          ]}
        />

        <CTA
          title="Precisa de uma arquitetura que suporte o crescimento?"
          description="Estou aberto para consultoria técnica, metória e projetos estratégicos focados em transformar visão em código resiliente e escalável."
          primaryButton={{
            label: "Iniciar Conversa",
            href: "https://wa.me/5571993706925?text=Ol%C3%A1%2C%20Bel%C3%ADcio!%20Vim%20pelo%20site%20e%20quero%20falar%20sobre%20um%20projeto.",
            variant: "primary",
          }}
          secondaryText="contact belloinfo@gmail.com"
        />
        <Footer />
      </main>
    </>
  );
}
