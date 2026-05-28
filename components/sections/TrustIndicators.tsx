import { siteConfig } from "@/config/site"

export function TrustIndicators() {
  return (
    <section className="py-12 border-y border-border bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {siteConfig.stats.map((stat) => (
            <div key={stat.label}>
              <p className="font-serif text-4xl text-primary">{stat.value}</p>
              <p className="text-muted-foreground mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
