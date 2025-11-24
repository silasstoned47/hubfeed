export default function PrivacyPage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <div className="max-w-3xl mx-auto prose prose-slate">
                <h1 className="text-3xl font-bold mb-8">Política de Privacidade</h1>

                <p>Última atualização: {new Date().toLocaleDateString("pt-BR")}</p>

                <h2>1. Introdução</h2>
                <p>
                    O Hub Feedrespeita a sua privacidade e está comprometido em proteger os seus dados pessoais.
                    Esta política de privacidade irá informá-lo sobre como cuidamos dos seus dados pessoais quando
                    você visita nosso site e informar sobre seus direitos de privacidade e como a lei o protege.
                </p>

                <h2>2. Os dados que coletamos</h2>
                <p>
                    Podemos coletar, usar, armazenar e transferir diferentes tipos de dados pessoais sobre você,
                    que agrupamos da seguinte forma:
                </p>
                <ul>
                    <li><strong>Dados de Identidade:</strong> inclui nome, sobrenome, nome de usuário ou identificador similar.</li>
                    <li><strong>Dados de Contato:</strong> inclui endereço de cobrança, endereço de entrega, endereço de e-mail e números de telefone.</li>
                    <li><strong>Dados Técnicos:</strong> inclui endereço de protocolo de internet (IP), seus dados de login, tipo e versão do navegador, configuração e localização do fuso horário.</li>
                </ul>

                <h2>3. Como usamos seus dados</h2>
                <p>
                    Só usaremos seus dados pessoais quando a lei nos permitir. Mais comumente, usaremos seus dados pessoais nas seguintes circunstâncias:
                </p>
                <ul>
                    <li>Onde precisamos realizar o contrato que estamos prestes a celebrar ou celebramos com você.</li>
                    <li>Onde for necessário para nossos interesses legítimos (ou de terceiros) e seus interesses e direitos fundamentais não anularem esses interesses.</li>
                    <li>Onde precisamos cumprir uma obrigação legal ou regulatória.</li>
                </ul>

                <h2>4. Cookies</h2>
                <p>
                    Você pode configurar seu navegador para recusar todos ou alguns cookies do navegador, ou para alertá-lo quando os sites definirem ou acessarem cookies.
                    Se você desativar ou recusar cookies, observe que algumas partes deste site podem ficar inacessíveis ou não funcionar corretamente.
                </p>

                <h2>5. Segurança de dados</h2>
                <p>
                    Implementamos medidas de segurança apropriadas para evitar que seus dados pessoais sejam acidentalmente perdidos, usados ou acessados de forma não autorizada,
                    alterados ou divulgados.
                </p>

                <h2>6. Contato</h2>
                <p>
                    Se você tiver alguma dúvida sobre esta política de privacidade, entre em contato conosco através da nossa página de contato.
                </p>
            </div>
        </div>
    );
}
