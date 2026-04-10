import {
  Navbar,
  Hero,
  Pitch,
  Skills,
  Projects,
  CTA,
} from "@/src/components";

export default function Home() {
  return (
    <>
      <Navbar />

      <main id="main-content" className="flex flex-col">
        {/* Hero Section */}
        <Hero
          headline="Engenharia de Software de Alta Performance"
          subheadline="Belício Cardoso. 24 anos conectando tecnologia de ponta aos objetivos do seu negócio. Especialista em ecossistemas Fullstack e DevOps."
          primaryCTA={{ label: "Ver Projetos", href: "#projects" }}
          secondaryCTA={{ label: "Baixar CV", href: "/cv.pdf", newTab: true }}
        />

        {/* Sobre Mim */}
        <Pitch
          title="Sobre Mim"
          content="Iniciei minha jornada tecnológica na virada do milênio. Vi linguagens nascerem e morrerem, o que me deu a capacidade crítica de escolher a ferramenta certa para o problema certo. Hoje, meu foco é construir sistemas resilientes, monitoráveis e escaláveis. A pós-graduação em Engenharia de Software consolidou uma visão arquitetural que transcende apenas escrever código."
          keyFocus={[
            "Solidez técnica através de Clean Code e Princípios SOLID",
            "Arquitetura escalável com visão estratégica de negócio",
            "Observabilidade e DevOps como cultura de qualidade",
          ]}
        />

        {/* Skills & Expertise */}
        <Skills
          title="Expertise & Ferramentas"
          subtitle="24 anos de evolução contínua — da infraestrutura ao produto."
          categories={[
            {
              category: "Backend",
              skills: [
                "NestJS (Expert)",
                "Node.js / TypeScript",
                "Arquitetura de Microsserviços",
                "APIs RESTful e GraphQL",
                "Bancos de dados relacionais e NoSQL",
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
                "Observabilidade em Tempo Real",
              ],
            },
            {
              category: "Metodologias",
              skills: [
                "Clean Code & SOLID",
                "Commits Semânticos",
                "Test-Driven Development",
                "Gestão Estratégica de TI",
                "Mentoria Técnica",
              ],
            },
          ]}
        />

        {/* Projetos de Destaque */}
        <Projects
          title="Projetos de Destaque"
          subtitle="Sistemas em produção. Não demos."
          projects={[
            {
              id: "my-time-trace",
              name: "My Time Trace",
              description:
                "Plataforma de rastreamento de tempo e produtividade com observabilidade em tempo real. Integra conceitos de DevOps em ferramentas de gestão de projetos, fornecendo visibilidade estratégica sobre alocação de recursos.",
              role: "Arquiteto & Full-Stack Developer",
              technologies: ["NestJS", "React", "PostgreSQL", "Docker", "Grafana"],
              link: "#",
            },
            {
              id: "fin-domini",
              name: "FinDomini",
              description:
                "Centralização inteligente de finanças pessoais e empresariais. Sistema de gestão financeira que consolida múltiplas fontes de dados e oferece insights analíticos através de dashboards customizáveis.",
              role: "Criador & Desenvolvedor Principal",
              technologies: ["NestJS", "Next.js", "MongoDB", "Stripe API", "Tailwind CSS"],
              link: "#",
            },
            {
              id: "nexus-crm",
              name: "Nexus CRM",
              description:
                "Plataforma de CRM inovadora construída sobre o WhatsApp. Demonstra a capacidade de estender plataformas existentes com lógica de negócio sofisticada, criando ecossistemas integrados.",
              role: "Lead Developer & Architect",
              technologies: ["NestJS", "WhatsApp API", "PostgreSQL", "Redis", "Node.js"],
              link: "#",
            },
          ]}
        />

        {/* CTA */}
        <CTA
          title="Precisa de uma arquitetura que suporte o crescimento?"
          description="Disponível para consultoria técnica, metória e projetos estratégicos. Vamos conversar sobre como transformar sua visão em código resiliente e escalável."
          primaryButton={{
            label: "Iniciar Conversa",
            href: "mailto:belloinfo@gmail.com",
            variant: "primary",
          }}
          secondaryText="contact belloinfo@gmail.com"
        />
      </main>
    </>
  );
}
