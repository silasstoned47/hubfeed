import { NextResponse } from "next/server";
import productsData from "@/data/products.json";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);

    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "12");
    const category = searchParams.get("category");
    const search = searchParams.get("search")?.toLowerCase();
    const sort = searchParams.get("sort"); // price_asc, price_desc, date_desc

    let filteredProducts = [...productsData];

    // Filter by Category
    if (category && category !== "Todos") {
        filteredProducts = filteredProducts.filter(
            (p) => p.category.toLowerCase() === category.toLowerCase()
        );
    }

    // Filter by Search
    if (search) {
        filteredProducts = filteredProducts.filter(
            (p) =>
                p.title.toLowerCase().includes(search) ||
                p.tags.some((tag) => tag.toLowerCase().includes(search))
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
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedProducts = filteredProducts.slice(startIndex, endIndex);

    return NextResponse.json({
        data: paginatedProducts,
        meta: {
            total: filteredProducts.length,
            page,
            limit,
            totalPages: Math.ceil(filteredProducts.length / limit),
        },
    });
}
