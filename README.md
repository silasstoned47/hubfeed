# Hub Feed- MVP Frontend

Este é um MVP (Minimum Viable Product) frontend para um marketplace de itens customizados para gatos. Desenvolvido com Next.js (App Router), TypeScript e Tailwind CSS.

## 🚀 Como Rodar

1.  **Instale as dependências:**
    ```bash
    npm install
    ```

2.  **Rode o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```

3.  **Acesse:**
    Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

## 🛠️ Tecnologias

*   **Framework:** Next.js 14 (App Router)
*   **Linguagem:** TypeScript
*   **Estilização:** Tailwind CSS + clsx + tailwind-merge
*   **Ícones:** Lucide React
*   **Estado:** React Context API (para Carrinho e Favoritos)

## 📋 Funcionalidades (Simuladas)

*   **Listagem de Produtos:** Filtragem por categoria, busca e ordenação.
*   **Detalhes do Produto:** Galeria de imagens e informações detalhadas.
*   **Contato com Vendedor:** Modal funcional que envia para uma rota de API mock.
*   **Criar Anúncio:** Formulário com validação e pré-visualização em tempo real.
*   **Persistência:** Favoritos, Carrinho e Consentimento de Cookies salvos no `localStorage`.
*   **API Mock:** Rotas `/api/products` e `/api/contact` simulando um backend real.

## 📝 Notas

*   **Imagens:** O projeto utiliza `placekitten.com` para gerar imagens de placeholder. Para usar imagens reais, substitua as URLs no arquivo `data/products.json`.
*   **Backend:** Não há banco de dados real. Todas as operações de escrita (criar anúncio, contato) são simuladas.
*   **Performance:** Utiliza ISR (Incremental Static Regeneration) simulado na página inicial para melhor performance.

## 📂 Estrutura

*   `app/`: Páginas e rotas da API.
*   `components/`: Componentes reutilizáveis (UI, Layout, Features).
*   `context/`: Gerenciamento de estado global.
*   `data/`: Dados mockados (JSON).
*   `lib/`: Utilitários.
