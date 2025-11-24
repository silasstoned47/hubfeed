"use client";

import Link from "next/link";
import { useState } from "react";
import { Search, Heart, ShoppingCart, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Badge } from "@/components/ui/Badge";
import { useStore } from "@/context/StoreContext";
import { useRouter } from "next/navigation";

export function Header() {
    const { favorites, cart } = useStore();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const router = useRouter();

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            router.push(`/?search=${encodeURIComponent(searchQuery)}`);
        }
    };

    return (
        <header className="sticky top-0 z-40 w-full border-b bg-white/80 backdrop-blur-md">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-indigo-600">Hub Feed</span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
                    <Link href="/" className="transition-colors hover:text-indigo-600">
                        Home
                    </Link>
                    <Link href="/about" className="transition-colors hover:text-indigo-600">
                        Sobre Nós
                    </Link>
                    <Link href="/contact" className="transition-colors hover:text-indigo-600">
                        Contato
                    </Link>
                </nav>

                {/* Search Bar */}
                <form onSubmit={handleSearch} className="hidden md:flex items-center relative w-full max-w-sm ml-4">
                    <Input
                        type="search"
                        placeholder="Buscar produtos..."
                        className="pr-10"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <Button
                        type="submit"
                        size="icon"
                        variant="ghost"
                        className="absolute right-0 top-0 h-full text-slate-500 hover:text-indigo-600"
                    >
                        <Search className="h-4 w-4" />
                    </Button>
                </form>

                {/* Actions */}
                <div className="hidden md:flex items-center gap-2">
                    <Link href="/create-ad">
                        <Button variant="default" size="sm" className="bg-indigo-600 hover:bg-indigo-700">
                            Anunciar
                        </Button>
                    </Link>
                    <Button variant="ghost" size="icon" className="relative">
                        <Heart className="h-5 w-5" />
                        {favorites.length > 0 && (
                            <Badge className="absolute -top-1 -right-1 h-4 w-4 p-0 flex items-center justify-center bg-red-500 text-[10px]">
                                {favorites.length}
                            </Badge>
                        )}
                    </Button>
                    <Button variant="ghost" size="icon" className="relative">
                        <ShoppingCart className="h-5 w-5" />
                        {cart.length > 0 && (
                            <Badge className="absolute -top-1 -right-1 h-4 w-4 p-0 flex items-center justify-center bg-indigo-500 text-[10px]">
                                {cart.length}
                            </Badge>
                        )}
                    </Button>
                </div>

                {/* Mobile Menu Toggle */}
                <Button
                    variant="ghost"
                    size="icon"
                    className="md:hidden"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </Button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden border-t bg-white px-4 py-4 space-y-4 animate-in slide-in-from-top-5">
                    <form onSubmit={handleSearch} className="relative">
                        <Input
                            type="search"
                            placeholder="Buscar..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <Button
                            type="submit"
                            size="icon"
                            variant="ghost"
                            className="absolute right-0 top-0 h-full"
                        >
                            <Search className="h-4 w-4" />
                        </Button>
                    </form>
                    <nav className="flex flex-col gap-4">
                        <Link href="/" onClick={() => setIsMenuOpen(false)} className="font-medium">
                            Home
                        </Link>
                        <Link href="/about" onClick={() => setIsMenuOpen(false)} className="font-medium">
                            Sobre Nós
                        </Link>
                        <Link href="/contact" onClick={() => setIsMenuOpen(false)} className="font-medium">
                            Contato
                        </Link>
                        <Link href="/create-ad" onClick={() => setIsMenuOpen(false)}>
                            <Button className="w-full bg-indigo-600">Anunciar Agora</Button>
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    );
}
