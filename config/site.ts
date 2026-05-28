export const siteConfig = {
  // Identity
  name: "Gabriela Almeida",
  tagline: "Psicóloga Clínica",
  credentials: "CRP 06/12345",

  // Contact
  phone: "(11) 99123-4567",
  email: "contato@gabrielaalmeida.com.br",
  address: {
    street: "Rua das Flores, 123 - Sala 200",
    city: "São Paulo",
    state: "SP",
    zip: "01234-000",
    full: "Rua das Flores, 123 - Sala 200, São Paulo, SP - 01234-000",
  },

  // Operating hours
  hours: [
    { days: "Segunda a Quinta", time: "9h00 - 18h00" },
    { days: "Sexta", time: "9h00 - 15h00" },
    { days: "Sábados", time: "mediante agendamento" },
  ],

  // SEO
  url: "https://www.gabrielaalmeida.com.br",
  description:
    "Psicóloga clínica em São Paulo especializada em ansiedade, depressão, trauma e terapia de casal. Agende sua consulta inicial gratuita.",
  ogImage: "/og-image.jpg",

  // Trust indicators row
  stats: [
    { value: "15+", label: "Anos de Experiência" },
    { value: "500+", label: "Pacientes Atendidos" },
    { value: "CRP", label: "Psicologia Clínica" },
    { value: "100%", label: "Confidencial" },
  ],

  // Credential badges in About section
  badges: [
    "Psicóloga Registrada",
    "Certificada em TCC",
    "Treinada em EMDR",
    "Baseada em Mindfulness",
  ],

  // Services — icon must be a key in the iconMap defined in Services.tsx
  services: [
    {
      icon: "Brain",
      title: "Ansiedade & Depressão",
      description:
        "Aprenda a gerenciar pensamentos e sentimentos avassaladores, desenvolvendo estratégias de enfrentamento que funcionam para a sua vida.",
    },
    {
      icon: "Heart",
      title: "Questões de Relacionamento",
      description:
        "Navegue pelos desafios dos relacionamentos, melhore a comunicação e construa conexões mais saudáveis com os outros.",
    },
    {
      icon: "Users",
      title: "Terapia de Casal",
      description:
        "Fortaleça sua parceria através de melhor compreensão, comunicação e resolução de conflitos.",
    },
    {
      icon: "Leaf",
      title: "Trauma & TEPT",
      description:
        "Cure-se de experiências passadas usando abordagens baseadas em evidências como EMDR e TCC focada em trauma.",
    },
    {
      icon: "Calendar",
      title: "Transições de Vida",
      description:
        "Encontre apoio durante grandes mudanças na vida — mudanças de carreira, perdas, divórcio ou a chegada de um filho.",
    },
    {
      icon: "Brain",
      title: "Crescimento Pessoal",
      description:
        "Desenvolva maior autoconhecimento, confiança e clareza sobre seus valores e direção de vida.",
    },
  ],

  // Therapeutic approach steps
  approach: [
    {
      number: "01",
      title: "Espaço Seguro & Sem Julgamentos",
      description:
        "Sinta-se verdadeiramente ouvido(a) e acolhido(a) ao compartilhar suas experiências e preocupações.",
    },
    {
      number: "02",
      title: "Métodos Baseados em Evidências",
      description:
        "Beneficie-se de abordagens terapêuticas comprovadas, incluindo TCC, EMDR e técnicas de mindfulness.",
    },
    {
      number: "03",
      title: "Tratamento Personalizado",
      description:
        "Receba um plano customizado que aborda seus objetivos e desafios específicos.",
    },
  ],

  // Patient testimonials
  testimonials: [
    {
      quote:
        "A Gabriela me ajudou a entender padrões que eu vinha repetindo por anos. Sua orientação gentil mudou minha vida.",
      author: "Fernanda S.",
      detail: "Ansiedade & Depressão",
    },
    {
      quote:
        "Finalmente me sinto eu mesma novamente. As ferramentas que aprendi na terapia fizeram uma diferença enorme no meu dia a dia.",
      author: "Ricardo M.",
      detail: "Transição de Vida",
    },
    {
      quote:
        "Eu e meu parceiro estamos nos comunicando melhor do que nunca. A terapia de casal foi a melhor decisão que tomamos.",
      author: "Juliana & Marcos",
      detail: "Terapia de Casal",
    },
  ],

  // Footer navigation links
  footerLinks: [
    { label: "Política de Privacidade", href: "#" },
    { label: "Termos de Uso", href: "#" },
    { label: "Código de Ética", href: "#" },
  ],

  copyrightYear: 2026,
}
