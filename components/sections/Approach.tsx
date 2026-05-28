import Image from "next/image"
import { siteConfig } from "@/config/site"

export function Approach() {
  return (
    <section id="abordagem" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <p className="text-primary font-medium tracking-wide uppercase text-sm">
              Minha Abordagem
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground text-balance">
              Um caminho colaborativo para a cura
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Acredito que a terapia funciona melhor quando é uma verdadeira
              parceria. Juntos, vamos explorar o que está te impedindo e
              desenvolver estratégias práticas para seguir em frente.
            </p>

            <div className="space-y-6 pt-4">
              {siteConfig.approach.map((item) => (
                <div key={item.number} className="flex gap-6 items-start">
                  <span className="font-serif text-3xl text-primary/30">
                    {item.number}
                  </span>
                  <div>
                    <h4 className="font-medium text-foreground mb-2">
                      {item.title}
                    </h4>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-accent/10 rounded-3xl transform rotate-3" />
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
  )
}
