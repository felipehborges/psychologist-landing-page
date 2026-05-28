import { Quote } from "lucide-react"
import { siteConfig } from "@/config/site"

export function Testimonials() {
  return (
    <section
      id="depoimentos"
      className="py-24 px-6 bg-primary text-primary-foreground"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-primary-foreground/70 font-medium tracking-wide uppercase text-sm mb-4">
            Depoimentos
          </p>
          <h2 className="font-serif text-4xl md:text-5xl mb-6 text-balance">
            O que meus pacientes dizem
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {siteConfig.testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-primary-foreground/10 backdrop-blur-sm p-8 rounded-2xl"
            >
              <Quote className="h-8 w-8 mb-6 opacity-50" />
              <p className="font-serif text-lg mb-6 italic leading-relaxed">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div>
                <p className="font-medium">{testimonial.author}</p>
                <p className="text-primary-foreground/70 text-sm">
                  {testimonial.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
