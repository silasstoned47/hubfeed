export default function TermsPage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <div className="max-w-3xl mx-auto prose prose-slate">
                <h1 className="text-3xl font-bold mb-8">Termos de Uso</h1>

                <p>Última atualização: {new Date().toLocaleDateString("pt-BR")}</p>

                <h2>1. Aceitação dos Termos</h2>
                <p>
                    Ao acessar e usar o CatMarket, você aceita e concorda em estar vinculado aos termos e disposições deste acordo.
                    Além disso, ao usar os serviços particulares deste site, você estará sujeito a quaisquer regras ou diretrizes publicadas aplicáveis a tais serviços.
                </p>

                <h2>2. Descrição do Serviço</h2>
                <p>
                    O Hub Feedé uma plataforma online que permite aos usuários comprar e vender itens customizados para gatos.
                    Nós atuamos apenas como intermediários e não somos responsáveis pelas transações entre compradores e vendedores.
                </p>

                <h2>3. Registro e Conta</h2>
                <p>
                    Para acessar certos recursos do site, você pode ser solicitado a se registrar e criar uma conta.
                    Você é responsável por manter a confidencialidade de sua senha e conta, e é totalmente responsável por todas as atividades que ocorrem sob sua senha ou conta.
                </p>

                <h2>4. Conduta do Usuário</h2>
                <p>
                    Você concorda em não usar o site para:
                </p>
                <ul>
                    <li>Carregar, postar ou transmitir qualquer conteúdo que seja ilegal, prejudicial, ameaçador, abusivo, assediante, difamatório, vulgar, obsceno, invasivo da privacidade de outrem, odioso ou racialmente, etnicamente ou de outra forma censurável.</li>
                    <li>Prejudicar menores de qualquer forma.</li>
                    <li>Fazer-se passar por qualquer pessoa ou entidade.</li>
                </ul>

                <h2>5. Propriedade Intelectual</h2>
                <p>
                    Todo o conteúdo incluído neste site, como texto, gráficos, logotipos, ícones de botões, imagens, clipes de áudio, downloads digitais, compilações de dados e software, é propriedade do Hub Feedou de seus fornecedores de conteúdo e protegido pelas leis de direitos autorais.
                </p>

                <h2>6. Limitação de Responsabilidade</h2>
                <p>
                    O Hub Feednão será responsável por quaisquer danos de qualquer tipo decorrentes do uso deste site, incluindo, mas não se limitando a danos diretos, indiretos, incidentais, punitivos e consequenciais.
                </p>

                <h2>7. Alterações nos Termos</h2>
                <p>
                    Reservamo-nos o direito de alterar estes termos de tempos em tempos a nosso exclusivo critério.
                    O uso continuado do site após quaisquer alterações constitui sua aceitação dos novos termos.
                </p>
            </div>
        </div>
    );
}
