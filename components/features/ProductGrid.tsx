"use client";

import Link from "next/link";
import { Heart } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { useStore } from "@/context/StoreContext";

interface Product {
    id: string;
    title: string;
    price: number;
    category: string;
    condition: string;
    images: string[];
    postedAt: string;
}

interface ProductGridProps {
    products: Product[];
}

export function ProductGrid({ products }: ProductGridProps) {
    const { toggleFavorite, favorites } = useStore();

    const isNew = (dateString: string) => {
        const date = new Date(dateString);
        const now = new Date();
        const diffTime = Math.abs(now.getTime() - date.getTime());
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        return diffDays <= 7;
    };

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
                <Card key={product.id} className="overflow-hidden group hover:shadow-md transition-shadow">
                    <div className="relative aspect-square overflow-hidden bg-slate-100">
                        <img
                            src={product.images[0]}
                            alt={product.title}
                            className="object-cover w-full h-full transition-transform group-hover:scale-105"
                        />
                        {isNew(product.postedAt) && (
                            <Badge className="absolute top-2 left-2 bg-green-500 hover:bg-green-600">
                                Novo
                            </Badge>
                        )}
                        <Button
                            variant="ghost"
                            size="icon"
                            className="absolute top-2 right-2 bg-white/80 hover:bg-white text-slate-900 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                            onClick={(e) => {
                                e.preventDefault();
                                toggleFavorite(product.id);
                            }}
                        >
                            <Heart
                                className={`h-5 w-5 ${favorites.includes(product.id) ? "fill-red-500 text-red-500" : ""
                                    }`}
                            />
                        </Button>
                    </div>
                    <CardContent className="p-4">
                        <div className="flex justify-between items-start mb-2">
                            <Badge variant="secondary" className="text-xs">
                                {product.category}
                            </Badge>
                            <span className="text-xs text-slate-500">{product.condition}</span>
                        </div>
                        <Link href={`/product/${product.id}`}>
                            <h3 className="font-semibold text-lg leading-tight mb-2 hover:text-indigo-600 truncate">
                                {product.title}
                            </h3>
                        </Link>
                        <p className="font-bold text-xl text-indigo-600">
                            {new Intl.NumberFormat("pt-BR", {
                                style: "currency",
                                currency: "BRL",
                            }).format(product.price)}
                        </p>
                    </CardContent>
                    <CardFooter className="p-4 pt-0">
                        <Link href={`/product/${product.id}`} className="w-full">
                            <Button variant="outline" className="w-full">
                                Ver Detalhes
                            </Button>
                        </Link>
                    </CardFooter>
                </Card>
            ))}
        </div>
    );
}
