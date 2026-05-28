import { About } from "@/components/sections/About"
import { Approach } from "@/components/sections/Approach"
import { Contact } from "@/components/sections/Contact"
import { Footer } from "@/components/sections/Footer"
import { Hero } from "@/components/sections/Hero"
import { NavBar } from "@/components/sections/NavBar"
import { Services } from "@/components/sections/Services"
import { Testimonials } from "@/components/sections/Testimonials"
import { TrustIndicators } from "@/components/sections/TrustIndicators"
import { siteConfig } from "@/config/site"

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: siteConfig.name,
  description: siteConfig.description,
  url: siteConfig.url,
  telephone: siteConfig.phone,
  email: siteConfig.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.address.street,
    addressLocality: siteConfig.address.city,
    addressRegion: siteConfig.address.state,
    postalCode: siteConfig.address.zip,
    addressCountry: "BR",
  },
  openingHours: ["Mo-Th 09:00-18:00", "Fr 09:00-15:00"],
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <NavBar />
      <Hero />
      <TrustIndicators />
      <About />
      <Services />
      <Approach />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}
