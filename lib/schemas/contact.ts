import { z } from "zod"

export const contactSchema = z.object({
  firstName: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  lastName: z.string().min(2, "Sobrenome deve ter pelo menos 2 caracteres"),
  email: z.string().email("E-mail inválido"),
  phone: z.string().optional(),
  message: z.string().min(20, "Mensagem deve ter pelo menos 20 caracteres"),
})

export type ContactFormData = z.infer<typeof contactSchema>
