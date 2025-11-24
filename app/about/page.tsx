import { Button } from "@/components/ui/Button";
import Link from "next/link";

export default function AboutPage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <div className="max-w-3xl mx-auto text-center mb-12">
                <h1 className="text-4xl font-bold mb-4">Sobre o CatMarket</h1>
                <p className="text-xl text-slate-600">
                    Conectando amantes de gatos a produtos únicos e artesanais.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
                <div>
                    <img
                        src="https://placekitten.com/800/600"
                        alt="Gatos brincando"
                        className="rounded-lg shadow-lg"
                    />
                </div>
                <div>
                    <h2 className="text-2xl font-bold mb-4">Nossa Missão</h2>
                    <p className="text-slate-600 mb-6 leading-relaxed">
                        O Hub Feednasceu da necessidade de encontrar produtos diferenciados
                        para nossos felinos. Acreditamos que cada gato é único e merece
                        acessórios que reflitam sua personalidade.
                    </p>
                    <p className="text-slate-600 mb-6 leading-relaxed">
                        Nossa plataforma permite que artesãos e pequenos produtores vendam
                        suas criações diretamente para donos de gatos apaixonados, criando
                        uma economia circular e sustentável.
                    </p>
                    <Link href="/create-ad">
                        <Button className="bg-indigo-600 hover:bg-indigo-700">
                            Comece a Vender
                        </Button>
                    </Link>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div className="p-6 bg-slate-50 rounded-lg">
                    <div className="text-4xl font-bold text-indigo-600 mb-2">50+</div>
                    <div className="text-slate-600">Produtos Exclusivos</div>
                </div>
                <div className="p-6 bg-slate-50 rounded-lg">
                    <div className="text-4xl font-bold text-indigo-600 mb-2">100%</div>
                    <div className="text-slate-600">Amor por Gatos</div>
                </div>
                <div className="p-6 bg-slate-50 rounded-lg">
                    <div className="text-4xl font-bold text-indigo-600 mb-2">24/7</div>
                    <div className="text-slate-600">Suporte Dedicado</div>
                </div>
            </div>
        </div>
    );
}
