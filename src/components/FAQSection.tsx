import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
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