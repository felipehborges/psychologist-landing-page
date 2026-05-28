"use client"

import { useTransition } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { toast } from "sonner"
import { Phone, Mail, MapPin, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { contactSchema, type ContactFormData } from "@/lib/schemas/contact"
import { sendContactEmail } from "@/app/actions/contact"
import { siteConfig } from "@/config/site"

export function Contact() {
  const [isPending, startTransition] = useTransition()

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    },
  })

  const onSubmit = (data: ContactFormData) => {
    startTransition(async () => {
      const result = await sendContactEmail(data)
      if (result.success) {
        toast.success("Mensagem enviada com sucesso! Entraremos em contato em breve.")
        form.reset()
      } else {
        toast.error("Erro ao enviar mensagem. Por favor, tente novamente.")
      }
    })
  }

  return (
    <section id="contato" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact info */}
          <div className="space-y-8">
            <div>
              <p className="text-primary font-medium tracking-wide uppercase text-sm mb-4">
                Entre em Contato
              </p>
              <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6 text-balance">
                Pronta para dar o primeiro passo?
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Dar o primeiro passo é muitas vezes a parte mais difícil. Ofereço
                uma consulta inicial gratuita de 15 minutos para conversarmos
                sobre suas necessidades e verificarmos se somos compatíveis.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-muted-foreground text-sm">Telefone</p>
                  <p className="text-foreground font-medium">
                    {siteConfig.phone}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-muted-foreground text-sm">E-mail</p>
                  <p className="text-foreground font-medium">
                    {siteConfig.email}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-muted-foreground text-sm">Consultório</p>
                  <p className="text-foreground font-medium">
                    {siteConfig.address.street}
                    <br />
                    {siteConfig.address.city}, {siteConfig.address.state} -{" "}
                    {siteConfig.address.zip}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-secondary p-6 rounded-2xl">
              <h4 className="font-medium text-foreground mb-2">
                Horário de Atendimento
              </h4>
              <div className="text-muted-foreground space-y-1 text-sm">
                {siteConfig.hours.map((h) => (
                  <p key={h.days}>
                    {h.days}: {h.time}
                  </p>
                ))}
              </div>
            </div>
          </div>

          {/* Contact form */}
          <Card className="bg-card border-border">
            <CardContent className="p-8">
              <h3 className="font-serif text-2xl text-foreground mb-6">
                Solicite uma Consulta
              </h3>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6"
                >
                  <div className="grid sm:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nome</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Seu nome"
                              className="bg-background border-border"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Sobrenome</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Seu sobrenome"
                              className="bg-background border-border"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>E-mail</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="seu@email.com"
                            className="bg-background border-border"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Telefone</FormLabel>
                        <FormControl>
                          <Input
                            type="tel"
                            placeholder="(11) 99000-0000"
                            className="bg-background border-border"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Como posso te ajudar?</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Conte um pouco sobre o que te traz aqui e o que você gostaria de trabalhar..."
                            className="bg-background border-border min-h-[120px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button
                    type="submit"
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                    size="lg"
                    disabled={isPending}
                  >
                    {isPending ? "Enviando..." : "Enviar Mensagem"}
                    {!isPending && <ChevronRight className="ml-2 h-4 w-4" />}
                  </Button>
                  <p className="text-xs text-muted-foreground text-center">
                    Suas informações são completamente confidenciais e nunca
                    serão compartilhadas.
                  </p>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
