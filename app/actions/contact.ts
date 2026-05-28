"use server";

import { Resend } from "resend";
import { siteConfig } from "@/config/site";
import { contactSchema } from "@/lib/schemas/contact";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(data: unknown) {
	const parsed = contactSchema.safeParse(data);
	if (!parsed.success) return { success: false as const };

	const { firstName, lastName, email, phone, message } = parsed.data;

	try {
		await resend.emails.send({
			from: "Formulário de Contato <onboarding@resend.dev>",
			to: process.env.CONTACT_TO_EMAIL ?? siteConfig.email,
			replyTo: email,
			subject: `Nova consulta de ${firstName} ${lastName}`,
			html: `
        <h2>Nova solicitação de consulta</h2>
        <p><strong>Nome:</strong> ${firstName} ${lastName}</p>
        <p><strong>E-mail:</strong> ${email}</p>
        <p><strong>Telefone:</strong> ${phone ?? "Não informado"}</p>
        <hr />
        <p><strong>Mensagem:</strong></p>
        <p>${message}</p>
      `,
		});
		return { success: true as const };
	} catch {
		return { success: false as const };
	}
}
