"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Modal } from "@/components/ui/Modal";
import { Input } from "@/components/ui/Input";

interface ContactSellerModalProps {
    productTitle: string;
}

export function ContactSellerModal({ productTitle }: ContactSellerModalProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);

        const formData = new FormData(e.currentTarget);
        const data = {
            name: formData.get("name"),
            email: formData.get("email"),
            message: formData.get("message"),
            product: productTitle,
        };

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                body: JSON.stringify(data),
                headers: { "Content-Type": "application/json" },
            });

            if (res.ok) {
                setSuccess(true);
                setTimeout(() => {
                    setIsOpen(false);
                    setSuccess(false);
                }, 2000);
            }
        } catch (error) {
            console.error("Error sending message:", error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <Button
                className="flex-1 bg-indigo-600 hover:bg-indigo-700"
                onClick={() => setIsOpen(true)}
            >
                Contatar Vendedor
            </Button>

            <Modal
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                title={`Tenho interesse em: ${productTitle}`}
            >
                {success ? (
                    <div className="text-center py-8">
                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-100 text-green-600 mb-4">
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M5 13l4 4L19 7"
                                />
                            </svg>
                        </div>
                        <h3 className="text-lg font-medium text-slate-900">
                            Mensagem Enviada!
                        </h3>
                        <p className="text-slate-500">
                            O vendedor entrará em contato em breve.
                        </p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium text-slate-700 mb-1"
                            >
                                Seu Nome
                            </label>
                            <Input id="name" name="name" required placeholder="João Silva" />
                        </div>
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-slate-700 mb-1"
                            >
                                Seu Email
                            </label>
                            <Input
                                id="email"
                                name="email"
                                type="email"
                                required
                                placeholder="joao@exemplo.com"
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="message"
                                className="block text-sm font-medium text-slate-700 mb-1"
                            >
                                Mensagem
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                required
                                rows={4}
                                className="flex w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                placeholder="Olá, gostaria de saber se este item ainda está disponível..."
                            />
                        </div>
                        <div className="flex justify-end gap-2 pt-2">
                            <Button
                                type="button"
                                variant="ghost"
                                onClick={() => setIsOpen(false)}
                            >
                                Cancelar
                            </Button>
                            <Button
                                type="submit"
                                className="bg-indigo-600 hover:bg-indigo-700"
                                disabled={isLoading}
                            >
                                {isLoading ? "Enviando..." : "Enviar Mensagem"}
                            </Button>
                        </div>
                    </form>
                )}
            </Modal>
        </>
    );
}
