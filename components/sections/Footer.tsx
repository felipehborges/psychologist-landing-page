import Link from "next/link"
import { Leaf } from "lucide-react"
import { siteConfig } from "@/config/site"

export function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-border bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <Leaf className="h-5 w-5 text-primary" />
            <span className="font-serif text-lg text-foreground">
              {siteConfig.name}
            </span>
          </div>
          <div className="flex gap-8 text-sm text-muted-foreground">
            {siteConfig.footerLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <p className="text-sm text-muted-foreground">
            &copy; {siteConfig.copyrightYear} {siteConfig.name}. Todos os
            direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
