"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Image from "next/image";

const contactSchema = z.object({
  name: z.string().min(3, "Nome deve ter pelo menos 3 caracteres"),
  email: z.string().email("E-mail inválido"),
  message: z.string().min(10, "Mensagem deve ter pelo menos 10 caracteres"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  async function onSubmit(data: ContactFormData) {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Erro ao enviar o formulário");

      alert("Mensagem enviada com sucesso!");
    } catch (error) {
      alert("Erro ao enviar a mensagem.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="container mx-auto flex flex-col lg:flex-row justify-center pt-36">
      <div className="relative flex flex-col items-center lg:items-start gap-4 lg:w-1/2 max-w-lg mx-auto text-center lg:text-left lg:px-1 px-4">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black">Fala com a gente</h1>
        <div className="hidden lg:block absolute top-1/6 left-102">
          <Image
            src="/contato-seta.png"
            alt="Seta"
            width={150}
            height={150}
            className="w-[150px] h-auto"
          />
        </div>
        <p className="text-gray-700 font-light tracking-wide md:max-w-md text-sm md:text-base lg:text-lg">Preencha o formulário ao lado ou entre em contato por meio de nossas redes sociais:</p>
        <Image src="/contact-background.webp" alt="background" width={420} height={100} className="hidden lg:block" />
      </div>
      <div className="lg:w-1/2">
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-lg mx-auto p-6">
          <div className="mb-4">
            <label className="block text-gray-700">Nome</label>
            <input
              {...register("name")}
              className="w-full mt-1 p-2 border border-black focus:border-yellow-200"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">E-mail</label>
            <input
              {...register("email")}
              type="email"
              className="w-full mt-1 p-2 border border-black focus:border-yellow-200"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Mensagem</label>
            <textarea
              {...register("message")}
              rows={4}
              className="w-full mt-1 p-2 border border-black focus:border-yellow-200"
            />
            {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              disabled={isSubmitting}
              className="cursor-pointer w-fit px-6 bg-yellow-300 text-black py-2 rounded-3xl border hover:bg-yellow-400 transition disabled:bg-gray-400"
            >
              {isSubmitting ? "Enviando..." : "Enviar"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
