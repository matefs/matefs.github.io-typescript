import React from 'react';
import { AlertTriangle, Clock, DollarSign, Search, TrendingDown } from 'lucide-react';

const PainSection: React.FC = () => {
  const painPoints = [
    {
      icon: Search,
      title: "Não sabe por onde começar",
      description: "Tantas opções e informações que fica confuso"
    },
    {
      icon: Clock,
      title: "Já tentou fazer sozinho e perdeu horas",
      description: "Tempo precioso que poderia estar vendendo"
    },
    {
      icon: DollarSign,
      title: "Recebeu orçamentos absurdos de agências",
      description: "Preços que não cabem no seu orçamento"
    },
    {
      icon: TrendingDown,
      title: "Está perdendo clientes",
      description: "Sem presença digital, perde oportunidades diariamente"
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-r from-red-50 to-orange-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Você sabe que precisa de um site, mas...
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Reconhece alguma dessas situações? Você não está sozinho.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {painPoints.map((point, index) => (
            <div key={index} className="card-float p-6 text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <point.icon className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{point.title}</h3>
              <p className="text-gray-600 text-sm">{point.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl p-8 text-white text-center">
          <div className="flex justify-center mb-4">
            <AlertTriangle className="h-12 w-12" />
          </div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Enquanto isso, seus concorrentes já estão vendendo online
          </h3>
          <p className="text-lg mb-4 opacity-90">
            Aparecendo no Google e capturando os seus potenciais clientes.
          </p>
          <div className="bg-white/20 rounded-lg p-4 max-w-2xl mx-auto">
            <p className="text-xl font-semibold">
              Seu negócio está invisível — e cada dia sem site é uma venda que você deixa de fechar.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainSection;