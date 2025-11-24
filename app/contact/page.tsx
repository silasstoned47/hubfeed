"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
    const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");

        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500));

        setStatus("success");
    };

    return (
        <div className="container mx-auto px-4 py-12">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold text-center mb-12">Fale Conosco</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div>
                        <h2 className="text-2xl font-semibold mb-6">Entre em Contato</h2>
                        <p className="text-slate-600 mb-8">
                            Tem alguma dúvida, sugestão ou precisa de ajuda? Estamos aqui para
                            ouvir você e seu gatinho.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-indigo-100 rounded-lg text-indigo-600">
                                    <Mail className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="font-medium">Email</h3>
                                    <p className="text-slate-600">contato@hubfeed.com</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-indigo-100 rounded-lg text-indigo-600">
                                    <Phone className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="font-medium">Telefone</h3>
                                    <p className="text-slate-600">(11) 99999-9999</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-indigo-100 rounded-lg text-indigo-600">
                                    <MapPin className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="font-medium">Endereço</h3>
                                    <p className="text-slate-600">
                                        Av. dos Gatos, 123 - Vila Felina
                                        <br />
                                        São Paulo - SP
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
                        {status === "success" ? (
                            <div className="text-center py-12">
                                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600 mb-4">
                                    <Mail className="h-8 w-8" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">
                                    Mensagem Enviada!
                                </h3>
                                <p className="text-slate-600 mb-6">
                                    Agradecemos o contato. Responderemos em breve.
                                </p>
                                <Button
                                    onClick={() => setStatus("idle")}
                                    variant="outline"
                                >
                                    Enviar outra mensagem
                                </Button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">
                                        Nome Completo
                                    </label>
                                    <Input required placeholder="Seu nome" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">
                                        Email
                                    </label>
                                    <Input type="email" required placeholder="seu@email.com" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">
                                        Assunto
                                    </label>
                                    <Input required placeholder="Como podemos ajudar?" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">
                                        Mensagem
                                    </label>
                                    <textarea
                                        required
                                        rows={4}
                                        className="flex w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2"
                                        placeholder="Escreva sua mensagem aqui..."
                                    />
                                </div>
                                <Button
                                    type="submit"
                                    className="w-full bg-indigo-600 hover:bg-indigo-700"
                                    disabled={status === "loading"}
                                >
                                    {status === "loading" ? "Enviando..." : "Enviar Mensagem"}
                                </Button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
