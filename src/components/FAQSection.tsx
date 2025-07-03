import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Qual o valor de um site simples pra loja?",
      answer: "Começa em R$1.500 uma landing page. Se precisar de mais páginas ou funções, me fala que calculo o orçamento certinho."
    },
    {
      question: "Parcela no cartão?",
      answer: "Parcelo até 12x no cartão de crédito."
    },
    {
      question: "Entrega mesmo em 3 dias?",
      answer: "Entrego em até 3 dias úteis depois do briefing, sem enrolação."
    },
    {
      question: "Faz loja virtual?",
      answer: "Faço loja virtual como sistema personalizado, com pagamento, controle de estoque, painel administrativo e o que mais você precisar."
    },
    {
      question: "Faz app pra celular?",
      answer: "Faço sim. App entra como sistema personalizado, pra Android e iOS, do jeito que você precisa."
    },
    {
      question: "Faz sistema pra controlar pedidos, clientes ou estoque?",
      answer: "Faço, sistema web ou app sob medida, pra qualquer processo do seu negócio."
    },
    {
      question: "O site funciona bem no celular?",
      answer: "Sim, todos os sites são responsivos, abrem certo em celular, tablet e computador."
    },
    {
      question: "Coloca botão do WhatsApp no site?",
      answer: "Sim, eu integro com o WhatsApp. Quem clicar já chama direto no seu número. Ajuda muito pra fechar vendas."
    },
    {
      question: "Tem suporte depois da entrega?",
      answer: "Tem suporte inicial grátis pra ajustes. Depois, se quiser manutenção, faço pacote avulso ou mensal."
    },
    {
      question: "Posso pedir alteração depois de pronto?",
      answer: "Pode sim. Tem grupo no WhatsApp com você e minha equipe pra pedir ajuste sempre que precisar durante a entrega, e tem um período de revisão grátis depois."
    },
    {
      question: "Como acompanho o projeto?",
      answer: "Tudo pelo grupo do WhatsApp comigo e os devs. Você vê o andamento, aprova cada etapa e pede alteração direto lá."
    },
    {
      question: "Quem faz o site?",
      answer: "Eu e meu time, direto com você, sem atravessador."
    },
    {
      question: "Tem exemplos de site que já fez?",
      answer: "Tenho sim, mando portfólio real pra conferir."
    },
    {
      question: "O site aparece no Google?",
      answer: "Sim, já entrego otimizado pro Google (SEO básico), pra facilitar ser encontrado."
    },
    {
      question: "Dá pra integrar pagamento online?",
      answer: "Dá sim. Integro PagSeguro, Mercado Pago, cartão, Pix, boleto, o que você precisar."
    },
    {
      question: "Emite nota fiscal?",
      answer: "Emito nota fiscal sim."
    },
    {
      question: "O site é seguro?",
      answer: "Sim, já entrego com HTTPS e proteção básica."
    },
    {
      question: "O site é rápido?",
      answer: "Site já sai otimizado pra rodar rápido, até na internet de celular."
    },
    {
      question: "Configura domínio e hospedagem?",
      answer: "Configuro tudo pra você. O custo do domínio e hospedagem é à parte, mas oriento e faço toda a parte técnica."
    },
    {
      question: "O que tá incluso no preço?",
      answer: "Design, desenvolvimento, integrações (WhatsApp, redes sociais), SEO básico, suporte inicial. Domínio e hospedagem ficam à parte."
    },
    {
      question: "Faz logotipo também?",
      answer: "Faço sim. Se precisar de logo, já incluo no projeto."
    },
    {
      question: "Explica tudo se eu não entender?",
      answer: "Explico sem enrolação, direto, sem termo técnico."
    },
    {
      question: "Faz sistema pra cadastro de clientes, relatórios, painel?",
      answer: "Faço, tudo personalizado pra sua necessidade."
    },
    {
      question: "Tem limite de página?",
      answer: "Ajusto conforme sua necessidade, sem limite fixo."
    },
    {
      question: "Posso editar o site depois sozinho?",
      answer: "Se quiser autonomia, faço no WordPress ou com painel próprio pra você editar texto, foto, produtos, etc."
    },
    {
      question: "Faz área de login pra cliente?",
      answer: "Faço área restrita, painel do cliente, conteúdo exclusivo, o que precisar."
    },
    {
      question: "Faz pacote de site + app?",
      answer: "Faço sim, rola desconto pra fechar projeto junto."
    },
    {
      question: "Faz alteração, implementação ou cria novas funcionalidades em sistemas que já existem?",
      answer: "Faço sim. Posso pegar seu sistema já pronto e ajustar, criar funções novas, integrar ou melhorar o que for preciso."
    },
    {
      question: "Atende projeto pequeno também?",
      answer: "Atendo microempresa, MEI, autônomo, qualquer porte."
    },
    {
      question: "E se não gostar do site?",
      answer: "Só entrego quando você aprovar tudo. Se não gostar, devolvo o seu dinheiro. Confiança total."
    },
    {
      question: "Faz contrato?",
      answer: "Faço contrato antes de começar, tudo transparente."
    },
    {
      question: "Resolve domínio vencido?",
      answer: "Resolvo, regularizo tudo pra você."
    },
    {
      question: "Coloca depoimento de cliente no site?",
      answer: "Coloco, é só mandar os depoimentos."
    },
    {
      question: "Dá pra vender produto direto no site?",
      answer: "Dá, faço loja virtual com integração de pagamento."
    },
    {
      question: "Coloca chat online?",
      answer: "Coloco WhatsApp, Messenger, ou outro chat que preferir."
    },
    {
      question: "Consegue foto boa pro site?",
      answer: "Posso indicar banco de imagem, fotógrafo parceiro ou usar as fotos que você já tem."
    },
    {
      question: "Tem custo mensal depois?",
      answer: "Só domínio, hospedagem e manutenção se quiser. O desenvolvimento é valor único."
    },
    {
      question: "Atende só aqui ou faz pra qualquer cidade?",
      answer: "Faço pra qualquer lugar do Brasil, 100% online."
    },
    {
      question: "Qual a diferença de landing page, site institucional e sistema personalizado?",
      answer: "Landing page é uma página só, focada em conversão. Site institucional tem várias páginas. Sistema personalizado é painel, loja, app, automação, integração, etc."
    },
    {
      question: "Faz plataforma de ensino online (LMS)?",
      answer: "Faço sim, crio plataforma de ensino (LMS) personalizada pra cursos, aulas, alunos, certificados, tudo do jeito que você precisar."
    },
    {
      question: "Faz sistema pra instalar no computador (desktop)?",
      answer: "Não faço sistema desktop. Só site, sistema web e app mobile."
    },
    {
      question: "É possível entregar mesmo em 3 dias?",
      answer: "Sim! Após o briefing, seu site entra em produção imediatamente. Com minha experiência e processo otimizado, consigo entregar sites de qualidade em até 3 dias úteis para o Plano Essencial."
    },
    {
      question: "É caro?",
      answer: "Muito mais acessível do que uma agência tradicional. Trabalho com planos sob medida e preço justo, sem os custos elevados de grandes empresas. Você paga apenas pelo que precisa."
    },
    {
      question: "Funciona para minha loja ou serviço?",
      answer: "Sim! Desenvolvo sites para diversos segmentos: lojas online, prestadores de serviços, consultores, profissionais liberais, portfólios e infoprodutos. Cada site é personalizado para seu negócio."
    },
    {
      question: "E se eu precisar de alterações depois?",
      answer: "Incluo revisões no processo e ofereço suporte pós-entrega. Para o Plano Pro, você tem 30 dias de suporte estendido incluído. Sempre disponível para ajustar o que for necessário."
    },
    {
      question: "Meu site vai aparecer no Google?",
      answer: "Sim! Todos os sites são otimizados com SEO básico para melhorar o posicionamento no Google. Incluo configurações técnicas essenciais para seu site ser encontrado pelos clientes."
    },
    {
      question: "Como funciona o pagamento?",
      answer: "Trabalho com condições flexíveis. Geralmente 50% no início do projeto e 50% na entrega. Aceito PIX, transferência bancária e cartão de crédito. Tudo transparente e sem surpresas."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section-padding bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <HelpCircle className="h-8 w-8 text-blue-600" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Perguntas Frequentes
          </h2>
          <p className="text-xl text-gray-600">
            Esclarecendo suas principais dúvidas
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200">
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-semibold text-gray-900 pr-4">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-blue-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-400 flex-shrink-0" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Ainda tem alguma dúvida?
          </p>
          <a href="#contato" className="btn-primary">
            Fale Comigo Diretamente
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;