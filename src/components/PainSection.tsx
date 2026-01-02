import React from 'react';
import { AlertTriangle, Clock, DollarSign, Search, TrendingDown } from 'lucide-react';

const PainSection: React.FC = () => {
  const painPoints = [
    {
      icon: Search,
      title: "Travado e confuso",
      description: "Quer um site, mas não sabe por onde começar — e acaba não fazendo nada."
    },
    {
      icon: Clock,
      title: "Tentou fazer sozinho",
      description: "Perdeu tempo, se estressou e não vendeu porra nenhuma."
    },
    {
      icon: DollarSign,
      title: "Agência meteu a faca",
      description: "Orçamento absurdo pra entregar site lento e cheio de enrolação."
    },
    {
      icon: TrendingDown,
      title: "Perdendo clientes diariamente",
      description: "Enquanto você não aparece online, seu concorrente tá fechando no WhatsApp."
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-r from-red-50 to-orange-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Você passa por alguma dessas situações?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Se isso aqui parece com você, seu negócio tá sangrando dinheiro todos os dias:
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
            Enquanto você enrola, seu concorrente já está vendendo online.
          </h3>
          <p className="text-lg mb-4 opacity-90">
            Seu negócio está invisível. E cada dia sem site é dinheiro que você deixa na mesa.
          </p>
          <div className="bg-white/20 rounded-lg p-4 max-w-2xl mx-auto">
            <p className="text-xl font-semibold">
              Cliente não espera. Ele clica no próximo que aparece.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainSection;