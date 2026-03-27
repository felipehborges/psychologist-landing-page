import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Heart, Brain, Users, Calendar, Phone, Mail, MapPin, ChevronRight, Leaf, Quote } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function PsychologistLandingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navegacao */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Leaf className="h-6 w-6 text-primary" />
            <span className="font-serif text-xl text-foreground">Gabriela Almeida</span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link href="#sobre" className="text-muted-foreground hover:text-foreground transition-colors">
              Sobre
            </Link>
            <Link href="#servicos" className="text-muted-foreground hover:text-foreground transition-colors">
              Servi&ccedil;os
            </Link>
            <Link href="#abordagem" className="text-muted-foreground hover:text-foreground transition-colors">
              Abordagem
            </Link>
            <Link href="#depoimentos" className="text-muted-foreground hover:text-foreground transition-colors">
              Depoimentos
            </Link>
            <Link href="#contato" className="text-muted-foreground hover:text-foreground transition-colors">
              Contato
            </Link>
          </div>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Agendar Consulta</Button>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-secondary px-4 py-2 rounded-full">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
              <span className="text-sm text-muted-foreground">Aceitando novos pacientes</span>
            </div>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-tight text-foreground text-balance">
              {"Encontre clareza, cura & paz interior"}
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
              {"Um espa\u00E7o seguro e acolhedor onde voc\u00EA pode explorar seus pensamentos, processar emo\u00E7\u00F5es e desenvolver ferramentas para viver uma vida mais plena."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8">
                {"Agende uma Consulta Gratuita"}
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-border text-foreground hover:bg-secondary bg-transparent"
              >
                {"Conhe\u00E7a Minha Abordagem"}
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-accent/20 rounded-full blur-3xl"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/professional-female-psychologist-in-warm-modern-of.jpg"
                alt="Gabriela Almeida"
                width={500}
                height={600}
                className="object-cover w-full h-[600px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Indicadores de Confianca */}
      <section className="py-12 border-y border-border bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="font-serif text-4xl text-primary">15+</p>
              <p className="text-muted-foreground mt-1">Anos de Experiência</p>
            </div>
            <div>
              <p className="font-serif text-4xl text-primary">500+</p>
              <p className="text-muted-foreground mt-1">Pacientes Atendidos</p>
            </div>
            <div>
              <p className="font-serif text-4xl text-primary">CRP</p>
              <p className="text-muted-foreground mt-1">Psicologia Clínica</p>
            </div>
            <div>
              <p className="font-serif text-4xl text-primary">100%</p>
              <p className="text-muted-foreground mt-1">Confidencial</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre */}
      <section id="sobre" className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden">
                  <Image
                    src="/cozy-therapy-office-with-comfortable-seating--warm.jpg"
                    alt="Espaço terapêutico"
                    width={250}
                    height={300}
                    className="object-cover w-full h-[300px]"
                  />
                </div>
                <div className="bg-primary text-primary-foreground p-6 rounded-2xl">
                  <Quote className="h-8 w-8 mb-4 opacity-50" />
                  <p className="font-serif text-lg italic">{"\"A cura come\u00E7a quando nos sentimos verdadeiramente ouvidos.\""}</p>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="bg-secondary p-6 rounded-2xl">
                  <Heart className="h-8 w-8 text-primary mb-4" />
                  <p className="text-foreground font-medium">Cuidado Acolhedor</p>
                  <p className="text-muted-foreground text-sm mt-2">{"Cada sess\u00E3o \u00E9 adaptada \u00E0s suas necessidades \u00FAnicas"}</p>
                </div>
                <div className="rounded-2xl overflow-hidden">
                  <Image
                    src="/peaceful-zen-garden-with-stones-and-greenery--mini.jpg"
                    alt="Ambiente tranquilo"
                    width={250}
                    height={280}
                    className="object-cover w-full h-[280px]"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-6 order-1 lg:order-2">
            <p className="text-primary font-medium tracking-wide uppercase text-sm">Sobre Mim</p>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground text-balance">
              {"Dedicada a ajudar voc\u00EA a florescer"}
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                {"Com mais de 15 anos de experi\u00EAncia em psicologia cl\u00EDnica, sou especializada em ajudar adultos a enfrentar os desafios da vida com maior resili\u00EAncia e autoconhecimento."}
              </p>
              <p>
                {"Minha abordagem combina terapias baseadas em evid\u00EAncias com um profundo compromisso de compreender a hist\u00F3ria \u00FAnica de cada paciente. Acredito que dentro de cada pessoa existe a capacidade de crescimento e cura."}
              </p>
              <p>
                {"Seja lidando com ansiedade, depress\u00E3o, quest\u00F5es de relacionamento ou simplesmente buscando crescimento pessoal, estou aqui para apoiar voc\u00EA em sua jornada rumo a uma vida mais plena."}
              </p>
            </div>
            <div className="flex flex-wrap gap-3 pt-4">
              <span className="bg-secondary px-4 py-2 rounded-full text-sm text-foreground">{"Psic\u00F3loga Registrada"}</span>
              <span className="bg-secondary px-4 py-2 rounded-full text-sm text-foreground">Certificada em TCC</span>
              <span className="bg-secondary px-4 py-2 rounded-full text-sm text-foreground">Treinada em EMDR</span>
              <span className="bg-secondary px-4 py-2 rounded-full text-sm text-foreground">Baseada em Mindfulness</span>
            </div>
          </div>
        </div>
      </section>

      {/* Servicos */}
      <section id="servicos" className="py-24 px-6 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-primary font-medium tracking-wide uppercase text-sm mb-4">{"Servi\u00E7os"}</p>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6 text-balance">Como posso te ajudar</h2>
            <p className="text-muted-foreground leading-relaxed">
              {"Ofere\u00E7o uma variedade de servi\u00E7os terap\u00EAuticos projetados para encontrar voc\u00EA onde voc\u00EA est\u00E1 e apoiar na cria\u00E7\u00E3o de mudan\u00E7as significativas."}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Brain,
                title: "Ansiedade & Depressão",
                description:
                  "Aprenda a gerenciar pensamentos e sentimentos avassaladores, desenvolvendo estratégias de enfrentamento que funcionam para a sua vida.",
              },
              {
                icon: Heart,
                title: "Questões de Relacionamento",
                description:
                  "Navegue pelos desafios dos relacionamentos, melhore a comunicação e construa conexões mais saudáveis com os outros.",
              },
              {
                icon: Users,
                title: "Terapia de Casal",
                description:
                  "Fortaleça sua parceria através de melhor compreensão, comunicação e resolução de conflitos.",
              },
              {
                icon: Leaf,
                title: "Trauma & TEPT",
                description:
                  "Cure-se de experiências passadas usando abordagens baseadas em evidências como EMDR e TCC focada em trauma.",
              },
              {
                icon: Calendar,
                title: "Transições de Vida",
                description:
                  "Encontre apoio durante grandes mudanças na vida — mudanças de carreira, perdas, divórcio ou a chegada de um filho.",
              },
              {
                icon: Brain,
                title: "Crescimento Pessoal",
                description:
                  "Desenvolva maior autoconhecimento, confiança e clareza sobre seus valores e direção de vida.",
              },
            ].map((service, index) => (
              <Card key={index} className="bg-card border-border hover:shadow-lg transition-shadow duration-300 group">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Abordagem */}
      <section id="abordagem" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <p className="text-primary font-medium tracking-wide uppercase text-sm">Minha Abordagem</p>
              <h2 className="font-serif text-4xl md:text-5xl text-foreground text-balance">
                {"Um caminho colaborativo para a cura"}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {"Acredito que a terapia funciona melhor quando \u00E9 uma verdadeira parceria. Juntos, vamos explorar o que est\u00E1 te impedindo e desenvolver estrat\u00E9gias pr\u00E1ticas para seguir em frente."}
              </p>

              <div className="space-y-6 pt-4">
                {[
                  {
                    number: "01",
                    title: "Espaço Seguro & Sem Julgamentos",
                    description: "Sinta-se verdadeiramente ouvido(a) e acolhido(a) ao compartilhar suas experiências e preocupações.",
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
                    description: "Receba um plano customizado que aborda seus objetivos e desafios específicos.",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex gap-6 items-start">
                    <span className="font-serif text-3xl text-primary/30">{item.number}</span>
                    <div>
                      <h4 className="font-medium text-foreground mb-2">{item.title}</h4>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-accent/10 rounded-3xl transform rotate-3"></div>
              <div className="relative rounded-3xl overflow-hidden">
                <Image
                  src="/calming-therapy-session-environment--two-comfortab.jpg"
                  alt="Ambiente terapêutico"
                  width={600}
                  height={600}
                  className="object-cover w-full h-[600px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section id="depoimentos" className="py-24 px-6 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-primary-foreground/70 font-medium tracking-wide uppercase text-sm mb-4">Depoimentos</p>
            <h2 className="font-serif text-4xl md:text-5xl mb-6 text-balance">O que meus pacientes dizem</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
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
            ].map((testimonial, index) => (
              <div key={index} className="bg-primary-foreground/10 backdrop-blur-sm p-8 rounded-2xl">
                <Quote className="h-8 w-8 mb-6 opacity-50" />
                <p className="font-serif text-lg mb-6 italic leading-relaxed">{`"${testimonial.quote}"`}</p>
                <div>
                  <p className="font-medium">{testimonial.author}</p>
                  <p className="text-primary-foreground/70 text-sm">{testimonial.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div>
                <p className="text-primary font-medium tracking-wide uppercase text-sm mb-4">Entre em Contato</p>
                <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6 text-balance">
                  {"Pronta para dar o primeiro passo?"}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {"Dar o primeiro passo \u00E9 muitas vezes a parte mais dif\u00EDcil. Ofere\u00E7o uma consulta inicial gratuita de 15 minutos para conversarmos sobre suas necessidades e verificarmos se somos compat\u00EDveis."}
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-muted-foreground text-sm">Telefone</p>
                    <p className="text-foreground font-medium">(11) 99123-4567</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-muted-foreground text-sm">E-mail</p>
                    <p className="text-foreground font-medium">contato@gabrielaalmeida.com.br</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-muted-foreground text-sm">Consultório</p>
                    <p className="text-foreground font-medium">
                      Rua das Flores, 123 - Sala 200
                      <br />
                      São Paulo, SP - 01234-000
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-secondary p-6 rounded-2xl">
                <h4 className="font-medium text-foreground mb-2">Horário de Atendimento</h4>
                <div className="text-muted-foreground space-y-1 text-sm">
                  <p>Segunda a Quinta: 9h00 - 18h00</p>
                  <p>Sexta: 9h00 - 15h00</p>
                  <p>{"Atendimento aos s\u00E1bados mediante agendamento"}</p>
                </div>
              </div>
            </div>

            <Card className="bg-card border-border">
              <CardContent className="p-8">
                <h3 className="font-serif text-2xl text-foreground mb-6">Solicite uma Consulta</h3>
                <form className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm text-foreground font-medium">Nome</label>
                      <Input placeholder="Seu nome" className="bg-background border-border" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm text-foreground font-medium">Sobrenome</label>
                      <Input placeholder="Seu sobrenome" className="bg-background border-border" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-foreground font-medium">E-mail</label>
                    <Input type="email" placeholder="seu@email.com" className="bg-background border-border" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-foreground font-medium">Telefone</label>
                    <Input type="tel" placeholder="(11) 99000-0000" className="bg-background border-border" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-foreground font-medium">Como posso te ajudar?</label>
                    <Textarea
                      placeholder="Conte um pouco sobre o que te traz aqui e o que você gostaria de trabalhar..."
                      className="bg-background border-border min-h-[120px]"
                    />
                  </div>
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90" size="lg">
                    Enviar Mensagem
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                  <p className="text-xs text-muted-foreground text-center">
                    {"Suas informa\u00E7\u00F5es s\u00E3o completamente confidenciais e nunca ser\u00E3o compartilhadas."}
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Rodape */}
      <footer className="py-12 px-6 border-t border-border bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <Leaf className="h-5 w-5 text-primary" />
              <span className="font-serif text-lg text-foreground">Gabriela Almeida</span>
            </div>
            <div className="flex gap-8 text-sm text-muted-foreground">
              <Link href="#" className="hover:text-foreground transition-colors">
                {"Pol\u00EDtica de Privacidade"}
              </Link>
              <Link href="#" className="hover:text-foreground transition-colors">
                Termos de Uso
              </Link>
              <Link href="#" className="hover:text-foreground transition-colors">
                {"C\u00F3digo de \u00C9tica"}
              </Link>
            </div>
            <p className="text-sm text-muted-foreground">{"© 2026 Gabriela Almeida. Todos os direitos reservados."}</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
