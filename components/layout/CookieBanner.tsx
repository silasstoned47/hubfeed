"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { useStore } from "@/context/StoreContext";
import Link from "next/link";

export function CookieBanner() {
    const { cookieConsent, setCookieConsent } = useStore();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Only show if consent hasn't been set yet
        if (cookieConsent === null) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    }, [cookieConsent]);

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-slate-900 p-4 text-slate-50 shadow-lg animate-in slide-in-from-bottom-10">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="text-sm">
                    <p>
                        Nós usamos cookies para melhorar sua experiência. Ao continuar navegando, você concorda com nossa{" "}
                        <Link href="/privacy" className="underline hover:text-indigo-400">
                            Política de Cookies
                        </Link>
                        .
                    </p>
                </div>
                <div className="flex gap-2">
                    <Button
                        variant="outline"
                        size="sm"
                        className="bg-transparent text-white border-white hover:bg-white hover:text-slate-900"
                        onClick={() => setCookieConsent(false)}
                    >
                        Recusar
                    </Button>
                    <Button
                        variant="default"
                        size="sm"
                        className="bg-indigo-600 hover:bg-indigo-700 text-white"
                        onClick={() => setCookieConsent(true)}
                    >
                        Aceitar
                    </Button>
                </div>
            </div>
        </div>
    );
}
