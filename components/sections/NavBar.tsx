"use client"

import Link from "next/link"
import { Leaf } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/ThemeToggle"
import { siteConfig } from "@/config/site"

export function NavBar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Leaf className="h-6 w-6 text-primary" />
          <span className="font-serif text-xl text-foreground">
            {siteConfig.name}
          </span>
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="#sobre"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Sobre
          </Link>
          <Link
            href="#servicos"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Serviços
          </Link>
          <Link
            href="#abordagem"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Abordagem
          </Link>
          <Link
            href="#depoimentos"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Depoimentos
          </Link>
          <Link
            href="#contato"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Contato
          </Link>
        </div>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button
            className="bg-primary text-primary-foreground hover:bg-primary/90"
            asChild
          >
            <Link href="#contato">Agendar Consulta</Link>
          </Button>
        </div>
      </div>
    </nav>
  )
}
