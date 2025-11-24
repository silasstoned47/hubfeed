"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

interface Product {
    id: string;
    title: string;
    price: number;
    image: string;
}

interface StoreContextType {
    favorites: string[];
    toggleFavorite: (productId: string) => void;
    cart: Product[];
    addToCart: (product: Product) => void;
    removeFromCart: (productId: string) => void;
    cookieConsent: boolean | null;
    setCookieConsent: (consent: boolean) => void;
}

const StoreContext = createContext<StoreContextType | undefined>(undefined);

export function StoreProvider({ children }: { children: React.ReactNode }) {
    const [favorites, setFavorites] = useState<string[]>([]);
    const [cart, setCart] = useState<Product[]>([]);
    const [cookieConsent, setCookieConsentState] = useState<boolean | null>(null);

    // Load from localStorage
    useEffect(() => {
        const storedFavs = localStorage.getItem("favorites");
        const storedCart = localStorage.getItem("cart");
        const storedConsent = localStorage.getItem("cookieConsent");

        if (storedFavs) setFavorites(JSON.parse(storedFavs));
        if (storedCart) setCart(JSON.parse(storedCart));
        if (storedConsent) setCookieConsentState(JSON.parse(storedConsent));
    }, []);

    // Save to localStorage
    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(favorites));
    }, [favorites]);

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    const setCookieConsent = (consent: boolean) => {
        setCookieConsentState(consent);
        localStorage.setItem("cookieConsent", JSON.stringify(consent));
    };

    const toggleFavorite = (productId: string) => {
        setFavorites((prev) =>
            prev.includes(productId)
                ? prev.filter((id) => id !== productId)
                : [...prev, productId]
        );
    };

    const addToCart = (product: Product) => {
        setCart((prev) => [...prev, product]);
    };

    const removeFromCart = (productId: string) => {
        setCart((prev) => prev.filter((item) => item.id !== productId));
    };

    return (
        <StoreContext.Provider
            value={{
                favorites,
                toggleFavorite,
                cart,
                addToCart,
                removeFromCart,
                cookieConsent,
                setCookieConsent,
            }}
        >
            {children}
        </StoreContext.Provider>
    );
}

export function useStore() {
    const context = useContext(StoreContext);
    if (context === undefined) {
        throw new Error("useStore must be used within a StoreProvider");
    }
    return context;
}
