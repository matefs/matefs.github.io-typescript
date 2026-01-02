import React, { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const faqs = [
    {
      question: "Entrega mesmo em 3 dias?",
      answer:
        "Sim. Após o briefing aprovado, entrego seu site em até 3 dias úteis, sem enrolação.",
    },
    {
      question: "O site funciona bem no celular?",
      answer:
        "Funciona perfeito. Todos os sites são 100% responsivos (celular, tablet e computador).",
    },
    {
      question: "O site é rápido e seguro?",
      answer:
        "Sim. Entrego com HTTPS, otimização de velocidade e estrutura leve pra carregar rápido.",
    },
    {
      question: "Meu site aparece no Google?",
      answer:
        "Sim. Já entrego com SEO básico configurado para facilitar ser encontrado no Google.",
    },
    {
      question: "Coloca botão do WhatsApp?",
      answer:
        "Sim. Botão direto pro seu WhatsApp pra gerar contato e fechar vendas.",
    },
    {
      question: "Posso pedir alterações depois?",
      answer:
        "Pode. Incluo revisões no processo e suporte inicial após a entrega.",
    },
    {
      question: "Tem suporte depois da entrega?",
      answer:
        "Tem suporte inicial grátis. Manutenção contínua é opcional, com plano mensal ou avulso.",
    },
    {
      question: "Posso editar o site sozinho depois?",
      answer:
        "Pode sim. Entrego em WordPress ou com painel próprio pra editar textos, fotos e produtos.",
    },
    {
      question: "Faz loja virtual?",
      answer:
        "Faço sim. Loja completa com pagamento online, controle de estoque e painel administrativo.",
    },
    {
      question: "Dá pra integrar pagamento online?",
      answer:
        "Dá. Integro Pix, cartão, boleto, Mercado Pago, PagSeguro e outros.",
    },
    {
      question: "Faz sistema ou app personalizado?",
      answer: "Faço. Sistema web e app Android/iOS sob medida pro seu negócio.",
    },
    {
      question: "O que tá incluso no preço?",
      answer:
        "Design, desenvolvimento, integrações, SEO básico e suporte inicial. Domínio e hospedagem à parte.",
    },
    {
      question: "Tem exemplos de sites que já fez?",
      answer: "Tenho sim. Portfólio real pra você conferir.",
    },
    {
      question: "Como funciona o pagamento?",
      answer:
        "Normalmente 50% no início e 50% na entrega. Aceito Pix, transferência e cartão.",
    },
    {
      question: "Emite nota fiscal e faz contrato?",
      answer: "Sim. Tudo transparente, sem caô.",
    },
    {
      question: "E se eu não gostar do site?",
      answer:
        "Só entrego quando você aprovar. Se não gostar, devolvo seu dinheiro.",
    },
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
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm border border-gray-200"
            >
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
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Ainda tem alguma dúvida?</p>
          <a href="#contato" className="btn-primary">
            Fale Comigo Diretamente
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
