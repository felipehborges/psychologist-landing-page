import { Brain, Heart, Users, Leaf, Calendar } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { siteConfig } from "@/config/site"

const iconMap: Record<string, LucideIcon> = {
  Brain,
  Heart,
  Users,
  Leaf,
  Calendar,
}

export function Services() {
  return (
    <section id="servicos" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-primary font-medium tracking-wide uppercase text-sm mb-4">
            Serviços
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6 text-balance">
            Como posso te ajudar
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Ofereço uma variedade de serviços terapêuticos projetados para
            encontrar você onde você está e apoiar na criação de mudanças
            significativas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteConfig.services.map((service, index) => {
            const Icon = iconMap[service.icon] ?? Brain
            return (
              <Card
                key={index}
                className="bg-card border-border hover:shadow-lg transition-shadow duration-300 group"
              >
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
