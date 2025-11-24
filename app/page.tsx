import Link from "next/link";
import { ProductGrid } from "@/components/features/ProductGrid";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Search } from "lucide-react";

import productsData from "@/data/products.json";

async function getProducts(searchParams: any) {
  const { category, search, sort, page = "1" } = searchParams;
  const limit = 12;

  let filteredProducts = [...productsData];

  // Filter by Category
  if (category && category !== "Todos") {
    filteredProducts = filteredProducts.filter(
      (p) => p.category.toLowerCase() === category.toLowerCase()
    );
  }

  // Filter by Search
  if (search) {
    const searchLower = search.toLowerCase();
    filteredProducts = filteredProducts.filter(
      (p) =>
        p.title.toLowerCase().includes(searchLower) ||
        p.tags.some((tag) => tag.toLowerCase().includes(searchLower))
    );
  }

  // Sort
  if (sort === "price_asc") {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sort === "price_desc") {
    filteredProducts.sort((a, b) => b.price - a.price);
  } else if (sort === "date_desc") {
    filteredProducts.sort(
      (a, b) => new Date(b.postedAt).getTime() - new Date(a.postedAt).getTime()
    );
  }

  // Pagination
  const startIndex = (parseInt(page) - 1) * limit;
  const endIndex = startIndex + limit;
  const paginatedProducts = filteredProducts.slice(startIndex, endIndex);

  return {
    data: paginatedProducts,
    meta: {
      total: filteredProducts.length,
      page: parseInt(page),
      limit,
      totalPages: Math.ceil(filteredProducts.length / limit),
    },
  };
}

export default async function Home({ searchParams }: { searchParams: Promise<any> }) {
  const resolvedSearchParams = await searchParams;
  const { data: products, meta } = await getProducts(resolvedSearchParams);
  const currentCategory = resolvedSearchParams.category || "Todos";

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-indigo-900 text-white py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Mime seu Gato com Estilo
          </h1>
          <p className="text-xl md:text-2xl text-indigo-200 mb-8 max-w-2xl mx-auto">
            O marketplace exclusivo para itens customizados, brinquedos e acessórios para felinos.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/create-ad">
              <Button size="lg" className="bg-white text-indigo-900 hover:bg-indigo-50">
                Vender Desapego
              </Button>
            </Link>
            <Link href="#products">
              <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10 hover:text-white">
                Explorar Produtos
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Categories & Filters */}
      <section id="products" className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar Filters */}
          <aside className="w-full md:w-64 space-y-8">
            <div>
              <h3 className="font-semibold text-lg mb-4">Categorias</h3>
              <div className="flex flex-col gap-2">
                {["Todos", "Brinquedos", "Camas", "Roupas", "Acessórios"].map((cat) => (
                  <Link
                    key={cat}
                    href={cat === "Todos" ? "/" : `/?category=${cat}`}
                    className={`px-4 py-2 rounded-md text-sm transition-colors ${currentCategory === cat
                      ? "bg-indigo-100 text-indigo-700 font-medium"
                      : "hover:bg-slate-100 text-slate-600"
                      }`}
                  >
                    {cat}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">Ordenar por</h3>
              <div className="flex flex-col gap-2">
                <Link href={{ query: { ...resolvedSearchParams, sort: "date_desc" } }} className="text-sm text-slate-600 hover:text-indigo-600">Mais Recentes</Link>
                <Link href={{ query: { ...resolvedSearchParams, sort: "price_asc" } }} className="text-sm text-slate-600 hover:text-indigo-600">Menor Preço</Link>
                <Link href={{ query: { ...resolvedSearchParams, sort: "price_desc" } }} className="text-sm text-slate-600 hover:text-indigo-600">Maior Preço</Link>
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-slate-900">
                {currentCategory === "Todos" ? "Destaques" : currentCategory}
              </h2>
              <span className="text-sm text-slate-500">
                {meta.total} produtos encontrados
              </span>
            </div>

            {products.length > 0 ? (
              <ProductGrid products={products} />
            ) : (
              <div className="text-center py-20 bg-slate-50 rounded-lg border border-dashed border-slate-300">
                <p className="text-slate-500">Nenhum produto encontrado.</p>
              </div>
            )}

            {/* Pagination */}
            {meta.totalPages > 1 && (
              <div className="mt-12 flex justify-center gap-2">
                {Array.from({ length: meta.totalPages }, (_, i) => i + 1).map((page) => (
                  <Link
                    key={page}
                    href={{ query: { ...resolvedSearchParams, page } }}
                  >
                    <Button
                      variant={meta.page === page ? "default" : "outline"}
                      size="sm"
                      className={meta.page === page ? "bg-indigo-600" : ""}
                    >
                      {page}
                    </Button>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
