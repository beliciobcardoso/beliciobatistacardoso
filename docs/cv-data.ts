export const cvData = {
  personal: {
    name: "Belício Batista Cardoso",
    title: "Engenheiro de Software Sênior | Arquiteto de Soluções",
    email: "belicio@example.com",
    phone: "+55 (77) 9 9370-6925",
    location: "Salvador, Bahia, Brasil",
    website: "https://belicio.bcardoso.nom.br",
    linkedin: "https://www.linkedin.com/in/beliciobcardoso/",
    github: "https://github.com/beliciobcardoso",
  },
  summary:
    "Arquiteto de soluções com 24 anos de experiência em tecnologia. Especialista em arquitetura de microsserviços, APIs de alta performance (NestJS), DevOps e observabilidade. Combina visão estratégica de negócio com rigor técnico em Clean Code e princípios SOLID. Pós-graduando em Engenharia de Software.",

  experience: [
    {
      title: "Founder & CTO",
      company: "My Time Trace",
      period: "2022 - Presente",
      description:
        "Criador e gestor técnico de plataforma de monitoramento de produtividade e rastreamento de tempo. Arquitetura fullstack (Node.js/NestJS, React, PostgreSQL). DevOps com Docker e observabilidade via Grafana/Prometheus.",
      skills: ["NestJS", "React", "PostgreSQL", "Docker", "Grafana", "Prometheus"],
    },
    {
      title: "Founder & CTO",
      company: "FinDomini",
      period: "2021 - Presente",
      description:
        "Arquiteto e desenvolvedor de plataforma de gestão financeira centralizada. Integração com múltiplas fontes de dados. APIs RESTful e gráficos de análise em tempo real.",
      skills: ["NestJS", "TypeScript", "React", "Chart.js", "Axios"],
    },
    {
      title: "Lead Software Engineer",
      company: "Nexus CRM",
      period: "2020 - 2021",
      description:
        "Desenvolvimento de camadas de integração inteligente com WhatsApp. Arquitetura de fila de mensagens, processamento assíncrono e persistência em Redis.",
      skills: ["Node.js", "Redis", "Queue Management", "API Integration"],
    },
    {
      title: "Senior Backend Engineer",
      company: "Empresa XYZ Tech",
      period: "2015 - 2020",
      description:
        "Liderança técnica em times de backend. Migração de monolito para microsserviços. CI/CD com GitLab Runners, Kubernetes e Helm.",
      skills: ["Kubernetes", "Helm", "CI/CD", "Docker", "Microservices"],
    },
  ],

  education: [
    {
      degree: "Pós-graduação em Engenharia de Software",
      institution: "Universidade (em andamento)",
      year: "2024 - Presente",
      focus:
        "Arquitetura de Sistemas, Metodologias Ágeis, Computação em Nuvem",
    },
    {
      degree: "Bacharelado em Ciência da Computação",
      institution: "Universidade Federal da Bahia",
      year: "1999 - 2003",
    },
  ],

  skills: {
    backend: [
      "Node.js",
      "NestJS",
      "Express",
      "TypeScript",
      "PostgreSQL",
      "MongoDB",
      "Prisma ORM",
      "Arquitetura de Microsserviços",
    ],
    frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "CSS Module"],
    devops: [
      "Docker",
      "Kubernetes",
      "Helm",
      "CI/CD (GitHub Actions, GitLab)",
      "Terraform",
      "AWS",
      "Cloudflare",
    ],
    observability: ["Prometheus", "Grafana", "ELK Stack", "DataDog"],
    methodologies: [
      "Clean Code",
      "SOLID Principles",
      "Design Patterns",
      "Commits Semânticos",
      "TDD",
      "Agile/Scrum",
    ],
  },

  certifications: [
    {
      name: "AWS Solutions Architect Associate",
      issuer: "Amazon Web Services",
      year: "2022",
    },
    {
      name: "Kubernetes for Developers",
      issuer: "Linux Foundation",
      year: "2021",
    },
  ],

  projects: [
    {
      name: "My Time Trace",
      description:
        "Plataforma SaaS de rastreamento de tempo e análise de produtividade com dashboard em tempo real.",
      url: "https://mytimetrace.com",
      technologies: ["NestJS", "React", "PostgreSQL", "Grafana"],
    },
    {
      name: "FinDomini",
      description:
        "Sistema de gestão financeira integrada com múltiplas instituições bancárias.",
      url: "https://findomi.com",
      technologies: ["NestJS", "React", "PostgreSQL", "Stripe API"],
    },
  ],

  languages: [
    { language: "Português", level: "Nativo" },
    { language: "Inglês", level: "Avançado" },
  ],
};
