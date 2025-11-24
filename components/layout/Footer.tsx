import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-slate-900 text-slate-200 py-12">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                    <h3 className="text-xl font-bold text-white mb-4">Hub Feed</h3>
                    <p className="text-sm text-slate-400">
                        O melhor lugar para encontrar itens exclusivos e customizados para o seu felino.
                    </p>
                </div>
                <div>
                    <h4 className="font-semibold text-white mb-4">Links Rápidos</h4>
                    <ul className="space-y-2 text-sm">
                        <li><Link href="/" className="hover:text-white">Home</Link></li>
                        <li><Link href="/about" className="hover:text-white">Sobre Nós</Link></li>
                        <li><Link href="/contact" className="hover:text-white">Contato</Link></li>
                        <li><Link href="/create-ad" className="hover:text-white">Anunciar</Link></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-semibold text-white mb-4">Categorias</h4>
                    <ul className="space-y-2 text-sm">
                        <li><Link href="/?category=Brinquedos" className="hover:text-white">Brinquedos</Link></li>
                        <li><Link href="/?category=Camas" className="hover:text-white">Camas</Link></li>
                        <li><Link href="/?category=Roupas" className="hover:text-white">Roupas</Link></li>
                        <li><Link href="/?category=Acessórios" className="hover:text-white">Acessórios</Link></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-semibold text-white mb-4">Legal</h4>
                    <ul className="space-y-2 text-sm">
                        <li><Link href="/privacy" className="hover:text-white">Política de Privacidade</Link></li>
                        <li><Link href="/terms" className="hover:text-white">Termos de Uso</Link></li>
                    </ul>
                    <h4 className="font-semibold text-white mt-6 mb-4">Siga-nos</h4>
                    <div className="flex gap-4">
                        <a href="#" className="hover:text-white"><Facebook className="h-5 w-5" /></a>
                        <a href="#" className="hover:text-white"><Instagram className="h-5 w-5" /></a>
                        <a href="#" className="hover:text-white"><Twitter className="h-5 w-5" /></a>
                    </div>
                </div>
            </div>
            <div className="container mx-auto px-4 mt-8 pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
                © {new Date().getFullYear()} Hub Feed. Todos os direitos reservados.
            </div>
        </footer>
    );
}
