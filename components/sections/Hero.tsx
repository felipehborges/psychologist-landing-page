import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/config/site"

export function Hero() {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 bg-secondary px-4 py-2 rounded-full">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm text-muted-foreground">
              Aceitando novos pacientes
            </span>
          </div>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-tight text-foreground text-balance">
            Encontre clareza, cura &amp; paz interior
          </h1>
          <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
            Um espaço seguro e acolhedor onde você pode explorar seus
            pensamentos, processar emoções e desenvolver ferramentas para viver
            uma vida mais plena.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-8"
              asChild
            >
              <Link href="#contato">
                Agende uma Consulta Gratuita
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-border text-foreground hover:bg-secondary bg-transparent"
              asChild
            >
              <Link href="#abordagem">Conheça Minha Abordagem</Link>
            </Button>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -top-4 -left-4 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-accent/20 rounded-full blur-3xl" />
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/professional-female-psychologist-in-warm-modern-of.jpg"
              alt={siteConfig.name}
              width={500}
              height={600}
              className="object-cover w-full h-[600px]"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
