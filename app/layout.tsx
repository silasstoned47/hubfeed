import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CookieBanner } from "@/components/layout/CookieBanner";
import { StoreProvider } from "@/context/StoreContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hub Feed- Marketplace para Gatos",
  description: "Compre e venda itens customizados para gatos domésticos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <StoreProvider>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <CookieBanner />
        </StoreProvider>
      </body>
    </html>
  );
}
