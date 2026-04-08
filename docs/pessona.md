# 📄 Documento de Persona Profissional: Belício Batista Cardoso

## 1. O Conceito Central (A Proposta Única de Valor)
Você não é apenas um desenvolvedor; você é um **Arquiteto de Soluções com Visão de Negócio**.
* **Slogan Sugerido:** "Transformando décadas de experiência em arquiteturas modernas e escaláveis."
* **Tom de Voz:** Técnico, mas acessível; confiante, mas em constante aprendizado (eterno estudante); direto e focado em resolver problemas de negócio através do código.

## 2. Pilares de Autoridade (O que te diferencia)
Para estruturar a página, dividiremos sua persona em três pilares:
* **A Experiência (O Legado):** Mais de duas décadas no setor de TI, começando no ano 2000. Isso traz uma resiliência que desenvolvedores novos não possuem.
* **A Modernidade (O Agora):** Pós-graduando em Engenharia de Software, domínio de stacks modernas (Node/Nest, TypeScript) e cultura DevOps/Observabilidade.
* **A Entrega (O Produto):** Criador do *My Time Trace* e do *FinDomini*. Você não apenas escreve código para outros, você cria produtos que resolvem problemas reais.

---

## 3. Estrutura Narrativa da Página (Arquitetura de Conteúdo)

### I. Hero Section (O Impacto Inicial)
* **Headline:** "Engenharia de Software de Alta Performance: Da concepção à infraestrutura."
* **Sub-headline:** "Belício Cardoso. 24 anos conectando tecnologia de ponta aos objetivos do seu negócio. Especialista em ecossistemas Fullstack e DevOps."
* **CTA Primário:** [Ver Projetos / Portfólio]
* **CTA Secundário:** [Baixar CV Completo]

### II. O "Elevator Pitch" (Sobre Mim)
Aqui, o texto deve misturar sua trajetória com suas soft skills:
* **Foco:** Solidez, Clean Code e Princípios SOLID.
* **Narrativa:** "Iniciei minha jornada tecnológica na virada do milênio. Vi linguagens nascerem e morrerem, o que me deu a capacidade crítica de escolher a ferramenta certa para o problema certo. Hoje, meu foco é construir sistemas resilientes, monitoráveis e escaláveis."

### III. Skills & Expertise (As Armas)
* **Hard Skills (Categorizadas):**
    * *Backend:* Arquitetura de microsserviços, APIs robustas (NestJS), ORMs.
    * *Frontend:* Interfaces modernas e performáticas (React/Vite).
    * *DevOps & Cloud:* Docker, Orquestração, Observabilidade (Prometheus/Grafana).
    * *Metodologias:* Clean Code, Commits Semânticos, Gestão Estratégica de TI.

### IV. Projetos de Destaque (Prova Social)
* **My Time Trace:** Focar na utilidade global e monitoramento de produtividade.
* **FinDomini:** Focar na centralização inteligente de finanças.
* **Nexus CRM:** Inovação em camadas sobre plataformas existentes (WhatsApp).

### V. Seção Acadêmica e Evolução
* Destaque para a **Pós-graduação em Engenharia de Software**.
* Isso mostra que, apesar dos 24 anos de carreira, você não está estagnado.

---

## 4. Estratégia de CTA (Call to Action)
Não queremos apenas que a pessoa leia, queremos que ela aja.
* **No meio da página:** "Precisa de uma arquitetura que suporte o crescimento da sua empresa? [Vamos Conversar]"
* **No rodapé:** "Disponível para consultoria técnica e projetos estratégicos."

---

## 5. Diferenciais para o seu Gemini CLI
Quando você for usar este documento para gerar o código, diga ao Gemini para focar nestes pontos de personalidade:
1.  **Rigidez Técnica:** O código gerado deve refletir o que você prega (SOLID, Clean Code).
2.  **Minimalismo:** Como um analista sênior, você prefere clareza sobre excessos visuais.
3.  **Foco em Dados:** Use números (24 anos, +X projetos, ferramentas de monitoramento).

---

## 6. Especificações Técnicas para SEO e Performance (Next.js 16)

### 6.1 Palavras-chave Alvo
* Engenheiro de Software
* Fullstack Developer
* NestJS Expert
* DevOps
* Arquiteto de Sistemas
* Belício Cardoso
* Belício Batista Cardoso
* Localização: Bahia

### 6.2 Estratégia de Social Preview (og:image)
A imagem social deve evocar **autoridade, monitoramento e performance**:
* Inspiração visual: Dashboards de Grafana, observabilidade em tempo real
* Paleta: Tons profissionais (preto, cinza, azul)
* Elemento central: Métricas/gráficos sugerindo "control" e "expertise"
* Texto: "Belício Cardoso - Engenheiro de Software | 24 anos de Experiência"

### 6.3 Performance & CLS (Cumulative Layout Shift)
* **next/image:** Uso obrigatório para todas as imagens de perfil e projetos com `priority` e dimensões fixas
* **next/font:** Implementar fonte primária (ex: Inter) com `display: swap` para zero CLS
* **Lazy loading:** Imagens abaixo da fold com loading estratégico
* **Metadata:** Implementar favicon, apple-touch-icon e theme-color

### 6.4 Meta Tags Obrigatórias
```
- Title: "Belício Cardoso - Engenheiro de Software | Arquiteto de Sistemas"
- Description: "24 anos de experiência. Especialista em Fullstack, NestJS, DevOps e Observabilidade. Criador de My Time Trace e FinDomini."
- og:type: "website"
- og:url: "{production_url}"
- og:title: "Belício Cardoso - Arquiteto de Soluções"
- og:description: "Engenheiro de Software com 24 anos. Fullstack, NestJS, DevOps, Observabilidade."
- og:image: "{og_image_url}" (1200x630px, Grafana/dashboards style)
- og:image:width: "1200"
- og:image:height: "630"
- twitter:card: "summary_large_image"
- twitter:title: "Belício Cardoso - Engenheiro de Software"
- twitter:description: "24 anos transformando código em impacto de negócio"
- twitter:image: "{og_image_url}"
- canonical: "{production_url}"
```

