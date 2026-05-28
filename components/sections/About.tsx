import Image from "next/image"
import { Heart, Quote } from "lucide-react"
import { siteConfig } from "@/config/site"

export function About() {
  return (
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
                  className="object-cover w-full h-75"
                />
              </div>
              <div className="bg-primary text-primary-foreground p-6 rounded-2xl">
                <Quote className="h-8 w-8 mb-4 opacity-50" />
                <p className="font-serif text-lg italic">
                  &ldquo;A cura começa quando nos sentimos verdadeiramente
                  ouvidos.&rdquo;
                </p>
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="bg-secondary p-6 rounded-2xl">
                <Heart className="h-8 w-8 text-primary mb-4" />
                <p className="text-foreground font-medium">Cuidado Acolhedor</p>
                <p className="text-muted-foreground text-sm mt-2">
                  Cada sessão é adaptada às suas necessidades únicas
                </p>
              </div>
              <div className="rounded-2xl overflow-hidden">
                <Image
                  src="/peaceful-zen-garden-with-stones-and-greenery--mini.jpg"
                  alt="Ambiente tranquilo"
                  width={250}
                  height={280}
                  className="object-cover w-full h-70"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-6 order-1 lg:order-2">
          <p className="text-primary font-medium tracking-wide uppercase text-sm">
            Sobre Mim
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground text-balance">
            Dedicada a ajudar você a florescer
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Com mais de 15 anos de experiência em psicologia clínica, sou
              especializada em ajudar adultos a enfrentar os desafios da vida
              com maior resiliência e autoconhecimento.
            </p>
            <p>
              Minha abordagem combina terapias baseadas em evidências com um
              profundo compromisso de compreender a história única de cada
              paciente. Acredito que dentro de cada pessoa existe a capacidade
              de crescimento e cura.
            </p>
            <p>
              Seja lidando com ansiedade, depressão, questões de relacionamento
              ou simplesmente buscando crescimento pessoal, estou aqui para
              apoiar você em sua jornada rumo a uma vida mais plena.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 pt-4">
            {siteConfig.badges.map((badge) => (
              <span
                key={badge}
                className="bg-secondary px-4 py-2 rounded-full text-sm text-foreground"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
