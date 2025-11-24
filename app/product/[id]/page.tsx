import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, MapPin, Calendar, Tag, Share2, Heart, Star, Truck, ShieldCheck, ChevronRight, User } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Card, CardContent } from "@/components/ui/Card";
import { ContactSellerModal } from "@/components/features/ContactSellerModal";
import productsData from "@/data/products.json";

async function getProduct(id: string) {
    return productsData.find((p) => p.id === id) || null;
}

function getRelatedProducts(category: string, currentId: string) {
    return productsData
        .filter((p) => p.category === category && p.id !== currentId)
        .slice(0, 4);
}

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
    const resolvedParams = await params;
    const product = await getProduct(resolvedParams.id);

    if (!product) {
        notFound();
    }

    const relatedProducts = getRelatedProducts(product.category, product.id);
    const isNew = new Date(product.postedAt) > new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);

    return (
        <div className="bg-slate-50 min-h-screen">
            {/* Breadcrumbs - Hidden on mobile, visible on tablet+ */}
            <div className="hidden sm:block bg-white border-b border-slate-200">
                <div className="container mx-auto px-4 py-3">
                    <nav className="flex items-center gap-2 text-sm text-slate-600">
                        <Link href="/" className="hover:text-indigo-600 transition-colors">Home</Link>
                        <ChevronRight className="h-4 w-4 flex-shrink-0" />
                        <Link href={`/?category=${product.category}`} className="hover:text-indigo-600 transition-colors">{product.category}</Link>
                        <ChevronRight className="h-4 w-4 flex-shrink-0" />
                        <span className="text-slate-900 font-medium truncate max-w-[200px] sm:max-w-none">{product.title}</span>
                    </nav>
                </div>
            </div>

            {/* Mobile Back Button */}
            <div className="sm:hidden bg-white border-b border-slate-200 sticky top-0 z-10">
                <div className="container mx-auto px-4 py-3">
                    <Link
                        href="/"
                        className="inline-flex items-center text-sm text-slate-600 hover:text-indigo-600 transition-colors"
                    >
                        <ArrowLeft className="h-4 w-4 mr-2" />
                        Voltar
                    </Link>
                </div>
            </div>

            <div className="container mx-auto px-4 py-4 sm:py-8">
                {/* Main Product Section */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12">
                    {/* Image Gallery - Full width on mobile, 2 columns on desktop */}
                    <div className="lg:col-span-2 space-y-3 sm:space-y-4">
                        <div className="bg-white rounded-lg sm:rounded-xl overflow-hidden border border-slate-200 shadow-sm">
                            <div className="aspect-square bg-slate-100 relative">
                                <img
                                    src={product.images[0]}
                                    alt={product.title}
                                    className="w-full h-full object-cover"
                                />
                                {isNew && (
                                    <Badge className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-green-500 text-xs sm:text-sm">Novo</Badge>
                                )}
                            </div>
                        </div>

                        {/* Thumbnail Grid - 3 columns on mobile, 4 on tablet+ */}
                        <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 sm:gap-4">
                            {product.images.map((img: string, i: number) => (
                                <div
                                    key={i}
                                    className="aspect-square bg-white rounded-md sm:rounded-lg overflow-hidden border-2 border-slate-200 cursor-pointer hover:border-indigo-500 transition-colors"
                                >
                                    <img
                                        src={img}
                                        alt={`${product.title} ${i + 1}`}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Product Info Sidebar */}
                    <div className="space-y-4 sm:space-y-6">
                        {/* Price Card */}
                        <Card>
                            <CardContent className="p-4 sm:p-6">
                                <div className="flex items-center gap-2 mb-3 sm:mb-4 flex-wrap">
                                    <Badge variant="secondary" className="text-xs sm:text-sm">{product.category}</Badge>
                                    <Badge variant={product.condition === "Novo" ? "default" : "outline"} className="text-xs sm:text-sm">
                                        {product.condition}
                                    </Badge>
                                </div>

                                <h1 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 sm:mb-4 leading-tight">
                                    {product.title}
                                </h1>

                                <div className="flex items-baseline gap-2 mb-4 sm:mb-6">
                                    <span className="text-3xl sm:text-4xl font-bold text-indigo-600">
                                        {new Intl.NumberFormat("pt-BR", {
                                            style: "currency",
                                            currency: "BRL",
                                        }).format(product.price)}
                                    </span>
                                </div>

                                <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                                    <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-600">
                                        <Truck className="h-4 w-4 flex-shrink-0 text-green-600" />
                                        <span>Frete calculado no checkout</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-600">
                                        <ShieldCheck className="h-4 w-4 flex-shrink-0 text-blue-600" />
                                        <span>Compra protegida</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-600">
                                        <MapPin className="h-4 w-4 flex-shrink-0 text-orange-600" />
                                        <span className="truncate">{product.location}</span>
                                    </div>
                                </div>

                                {/* Action Buttons - Stack on mobile, row on desktop */}
                                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 mb-4">
                                    <div className="flex-1">
                                        <ContactSellerModal productTitle={product.title} />
                                    </div>
                                    <div className="flex gap-2 sm:gap-3">
                                        <Button variant="outline" size="icon" className="flex-1 sm:flex-none">
                                            <Heart className="h-5 w-5" />
                                        </Button>
                                        <Button variant="outline" size="icon" className="flex-1 sm:flex-none">
                                            <Share2 className="h-5 w-5" />
                                        </Button>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Seller Card */}
                        <Card>
                            <CardContent className="p-4 sm:p-6">
                                <h3 className="font-semibold text-slate-900 mb-3 sm:mb-4 text-sm sm:text-base">Vendedor</h3>
                                <div className="flex items-center gap-3 mb-3 sm:mb-4">
                                    <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0">
                                        <User className="h-5 w-5 sm:h-6 sm:w-6 text-indigo-600" />
                                    </div>
                                    <div className="min-w-0 flex-1">
                                        <p className="font-semibold text-slate-900 truncate text-sm sm:text-base">{product.sellerName}</p>
                                        <div className="flex items-center gap-1">
                                            <Star className="h-3 w-3 sm:h-4 sm:w-4 fill-yellow-400 text-yellow-400 flex-shrink-0" />
                                            <span className="text-xs sm:text-sm text-slate-600">4.8 (120 avaliações)</span>
                                        </div>
                                    </div>
                                </div>
                                <p className="text-xs sm:text-sm text-slate-600 mb-3 sm:mb-4">
                                    Membro desde {new Date(product.postedAt).getFullYear()}
                                </p>
                                <Button variant="outline" className="w-full text-sm">
                                    Ver perfil do vendedor
                                </Button>
                            </CardContent>
                        </Card>

                        {/* Safety Tips - Hidden on mobile, visible on desktop */}
                        <Card className="hidden lg:block">
                            <CardContent className="p-6">
                                <h3 className="font-semibold text-slate-900 mb-4">Dicas de Segurança</h3>
                                <ul className="space-y-3 text-sm text-slate-600">
                                    <li className="flex gap-2">
                                        <ShieldCheck className="h-5 w-5 text-green-600 flex-shrink-0" />
                                        <span>Nunca pague antecipadamente sem garantias</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <ShieldCheck className="h-5 w-5 text-green-600 flex-shrink-0" />
                                        <span>Prefira encontros em locais públicos</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <ShieldCheck className="h-5 w-5 text-green-600 flex-shrink-0" />
                                        <span>Verifique o produto antes de pagar</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <ShieldCheck className="h-5 w-5 text-green-600 flex-shrink-0" />
                                        <span>Desconfie de preços muito abaixo do mercado</span>
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>
                    </div>
                </div>

                {/* Description Section */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12">
                    <div className="lg:col-span-3">
                        <Card>
                            <CardContent className="p-4 sm:p-6 lg:p-8">
                                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 sm:mb-4">Descrição do Produto</h2>
                                <div className="prose prose-sm sm:prose-base prose-slate max-w-none">
                                    <p className="text-slate-600 leading-relaxed whitespace-pre-line text-sm sm:text-base">
                                        {product.description}
                                    </p>
                                </div>

                                <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-slate-200">
                                    <h3 className="font-semibold text-slate-900 mb-3 sm:mb-4 text-base sm:text-lg">Tags</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {product.tags.map((tag: string) => (
                                            <Link
                                                key={tag}
                                                href={`/?search=${tag}`}
                                                className="inline-flex items-center px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-medium bg-slate-100 text-slate-800 hover:bg-indigo-100 hover:text-indigo-700 transition-colors"
                                            >
                                                <Tag className="h-3 w-3 mr-1 flex-shrink-0" />
                                                <span className="truncate">{tag}</span>
                                            </Link>
                                        ))}
                                    </div>
                                </div>

                                <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-slate-200">
                                    <h3 className="font-semibold text-slate-900 mb-3 sm:mb-4 text-base sm:text-lg">Informações Adicionais</h3>
                                    <dl className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-sm">
                                        <div>
                                            <dt className="text-slate-500 mb-1">Condição</dt>
                                            <dd className="font-medium text-slate-900">{product.condition}</dd>
                                        </div>
                                        <div>
                                            <dt className="text-slate-500 mb-1">Categoria</dt>
                                            <dd className="font-medium text-slate-900">{product.category}</dd>
                                        </div>
                                        <div>
                                            <dt className="text-slate-500 mb-1">Localização</dt>
                                            <dd className="font-medium text-slate-900">{product.location}</dd>
                                        </div>
                                        <div>
                                            <dt className="text-slate-500 mb-1">Publicado em</dt>
                                            <dd className="font-medium text-slate-900">
                                                {new Date(product.postedAt).toLocaleDateString("pt-BR")}
                                            </dd>
                                        </div>
                                    </dl>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Reviews Section (Mock) */}
                        <Card className="mt-4 sm:mt-6 lg:mt-8">
                            <CardContent className="p-4 sm:p-6 lg:p-8">
                                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 sm:mb-6">Avaliações</h2>
                                <div className="space-y-4 sm:space-y-6">
                                    {[
                                        { name: "Maria Silva", rating: 5, comment: "Produto excelente! Meu gato adorou. Chegou rápido e bem embalado.", date: "2023-10-20" },
                                        { name: "João Santos", rating: 4, comment: "Muito bom, mas o preço poderia ser melhor. Qualidade ótima!", date: "2023-10-15" },
                                        { name: "Ana Costa", rating: 5, comment: "Recomendo! Exatamente como descrito. Vendedor muito atencioso.", date: "2023-10-10" },
                                    ].map((review, i) => (
                                        <div key={i} className="pb-4 sm:pb-6 border-b border-slate-200 last:border-0">
                                            <div className="flex items-start gap-3 mb-2">
                                                <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-slate-200 flex items-center justify-center flex-shrink-0">
                                                    <User className="h-4 w-4 sm:h-5 sm:w-5 text-slate-600" />
                                                </div>
                                                <div className="min-w-0 flex-1">
                                                    <p className="font-semibold text-slate-900 text-sm sm:text-base">{review.name}</p>
                                                    <div className="flex items-center gap-2 flex-wrap">
                                                        <div className="flex">
                                                            {[...Array(5)].map((_, j) => (
                                                                <Star
                                                                    key={j}
                                                                    className={`h-3 w-3 sm:h-4 sm:w-4 ${j < review.rating ? "fill-yellow-400 text-yellow-400" : "text-slate-300"}`}
                                                                />
                                                            ))}
                                                        </div>
                                                        <span className="text-xs sm:text-sm text-slate-500">
                                                            {new Date(review.date).toLocaleDateString("pt-BR")}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="text-slate-600 text-sm sm:text-base ml-0 sm:ml-13">{review.comment}</p>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>

                        {/* Safety Tips - Mobile version */}
                        <Card className="lg:hidden mt-4 sm:mt-6">
                            <CardContent className="p-4 sm:p-6">
                                <h3 className="font-semibold text-slate-900 mb-3 sm:mb-4 text-base sm:text-lg">Dicas de Segurança</h3>
                                <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-slate-600">
                                    <li className="flex gap-2">
                                        <ShieldCheck className="h-4 w-4 sm:h-5 sm:w-5 text-green-600 flex-shrink-0" />
                                        <span>Nunca pague antecipadamente sem garantias</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <ShieldCheck className="h-4 w-4 sm:h-5 sm:w-5 text-green-600 flex-shrink-0" />
                                        <span>Prefira encontros em locais públicos</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <ShieldCheck className="h-4 w-4 sm:h-5 sm:w-5 text-green-600 flex-shrink-0" />
                                        <span>Verifique o produto antes de pagar</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <ShieldCheck className="h-4 w-4 sm:h-5 sm:w-5 text-green-600 flex-shrink-0" />
                                        <span>Desconfie de preços muito abaixo do mercado</span>
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>
                    </div>
                </div>

                {/* Related Products */}
                {relatedProducts.length > 0 && (
                    <div>
                        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 sm:mb-6">Produtos Relacionados</h2>
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
                            {relatedProducts.map((relatedProduct: any) => (
                                <Link key={relatedProduct.id} href={`/product/${relatedProduct.id}`}>
                                    <Card className="hover:shadow-lg transition-shadow h-full">
                                        <CardContent className="p-0">
                                            <div className="aspect-square bg-slate-100 rounded-t-lg overflow-hidden">
                                                <img
                                                    src={relatedProduct.images[0]}
                                                    alt={relatedProduct.title}
                                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                                />
                                            </div>
                                            <div className="p-3 sm:p-4">
                                                <h3 className="font-semibold text-slate-900 mb-1 sm:mb-2 line-clamp-2 text-sm sm:text-base leading-tight">
                                                    {relatedProduct.title}
                                                </h3>
                                                <p className="text-base sm:text-lg font-bold text-indigo-600">
                                                    {new Intl.NumberFormat("pt-BR", {
                                                        style: "currency",
                                                        currency: "BRL",
                                                    }).format(relatedProduct.price)}
                                                </p>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
