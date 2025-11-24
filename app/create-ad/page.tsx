"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { ImagePlus, Eye } from "lucide-react";

export default function CreateAdPage() {
    const [formData, setFormData] = useState({
        title: "",
        price: "",
        category: "Brinquedos",
        condition: "Novo",
        description: "",
        image: "",
    });

    const [showPreview, setShowPreview] = useState(false);

    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // In a real app, this would send data to the API
        alert("Anúncio criado com sucesso! (Simulação)");
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold mb-8">Criar Novo Anúncio</h1>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Form */}
                    <div className="space-y-6">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Título do Anúncio</label>
                                <Input
                                    name="title"
                                    value={formData.title}
                                    onChange={handleChange}
                                    placeholder="Ex: Arranhador Castelo"
                                    required
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Preço (R$)</label>
                                    <Input
                                        name="price"
                                        type="number"
                                        value={formData.price}
                                        onChange={handleChange}
                                        placeholder="0,00"
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Categoria</label>
                                    <select
                                        name="category"
                                        value={formData.category}
                                        onChange={handleChange}
                                        className="flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2"
                                    >
                                        <option value="Brinquedos">Brinquedos</option>
                                        <option value="Camas">Camas</option>
                                        <option value="Roupas">Roupas</option>
                                        <option value="Acessórios">Acessórios</option>
                                    </select>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium">Condição</label>
                                <div className="flex gap-4">
                                    <label className="flex items-center gap-2">
                                        <input
                                            type="radio"
                                            name="condition"
                                            value="Novo"
                                            checked={formData.condition === "Novo"}
                                            onChange={handleChange}
                                        />
                                        Novo
                                    </label>
                                    <label className="flex items-center gap-2">
                                        <input
                                            type="radio"
                                            name="condition"
                                            value="Usado"
                                            checked={formData.condition === "Usado"}
                                            onChange={handleChange}
                                        />
                                        Usado
                                    </label>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium">Descrição</label>
                                <textarea
                                    name="description"
                                    value={formData.description}
                                    onChange={handleChange}
                                    rows={5}
                                    className="flex w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2"
                                    placeholder="Descreva os detalhes do seu produto..."
                                    required
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium">URL da Imagem</label>
                                <div className="flex gap-2">
                                    <Input
                                        name="image"
                                        value={formData.image}
                                        onChange={handleChange}
                                        placeholder="https://exemplo.com/imagem.jpg"
                                    />
                                    <Button
                                        type="button"
                                        variant="outline"
                                        size="icon"
                                        onClick={() =>
                                            setFormData((prev) => ({
                                                ...prev,
                                                image: `https://placekitten.com/400/400?r=${Math.random()}`,
                                            }))
                                        }
                                        title="Gerar imagem aleatória"
                                    >
                                        <ImagePlus className="h-4 w-4" />
                                    </Button>
                                </div>
                                <p className="text-xs text-slate-500">
                                    Use o botão para gerar uma imagem de gato aleatória.
                                </p>
                            </div>

                            <Button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700">
                                Publicar Anúncio
                            </Button>
                        </form>
                    </div>

                    {/* Preview */}
                    <div className="sticky top-24 h-fit">
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-lg font-semibold flex items-center gap-2">
                                <Eye className="h-5 w-5" /> Pré-visualização
                            </h2>
                        </div>

                        <Card className="overflow-hidden">
                            <div className="aspect-square bg-slate-100 relative">
                                {formData.image ? (
                                    <img
                                        src={formData.image}
                                        alt="Preview"
                                        className="w-full h-full object-cover"
                                    />
                                ) : (
                                    <div className="flex items-center justify-center h-full text-slate-400">
                                        Sem imagem
                                    </div>
                                )}
                                {formData.condition === "Novo" && (
                                    <Badge className="absolute top-2 left-2 bg-green-500">
                                        Novo
                                    </Badge>
                                )}
                            </div>
                            <CardContent className="p-4">
                                <div className="flex justify-between items-start mb-2">
                                    <Badge variant="secondary" className="text-xs">
                                        {formData.category}
                                    </Badge>
                                    <span className="text-xs text-slate-500">
                                        {formData.condition}
                                    </span>
                                </div>
                                <h3 className="font-semibold text-lg leading-tight mb-2 truncate">
                                    {formData.title || "Título do Produto"}
                                </h3>
                                <p className="font-bold text-xl text-indigo-600 mb-4">
                                    {formData.price
                                        ? new Intl.NumberFormat("pt-BR", {
                                            style: "currency",
                                            currency: "BRL",
                                        }).format(Number(formData.price))
                                        : "R$ 0,00"}
                                </p>
                                <p className="text-sm text-slate-600 line-clamp-3">
                                    {formData.description || "Descrição do produto..."}
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}
