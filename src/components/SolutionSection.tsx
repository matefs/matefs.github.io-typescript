import React from 'react';
import { Rocket, CheckCircle, Target, Users } from 'lucide-react';

const SolutionSection: React.FC = () => {
  const benefits = [
    {
      icon: Rocket,
      title: "Entrega rápida",
      description: "Até 3 dias para landing page"
    },
    {
      icon: Target,
      title: "Design profissional e responsivo",
      description: "Visual que passa confiança em qualquer dispositivo"
    },
    {
      icon: Users,
      title: "Estrutura pensada para conversão",
      description: "Layout e copy focados em gerar contatos e vendas"
    },
    {
      icon: CheckCircle,
      title: "WhatsApp, SEO básico e performance",
      description: "Pronto para aparecer no Google e receber leads"
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-blue-50 to-blue-200">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-to-r from-blue-500 to-blue-900 text-white p-3 rounded-full">
              <Rocket className="h-8 w-8" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            A solução é simples: um site profissional entregue rápido
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Você foca no seu negócio. Eu cuido do digital.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="card-float p-6 text-center">
              <div className="bg-gradient-to-r from-blue-100 to-blue-300 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <benefit.icon className="h-8 w-8 text-blue-700" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{benefit.title}</h3>
              <p className="text-gray-600 text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg text-center max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Como funciona (sem enrolação)
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-blue-600 font-bold text-lg">1</span>
              </div>
              <h4 className="font-semibold mb-2">Briefing rápido (15 minutos)</h4>
              <p className="text-gray-600 text-sm">Você me explica o negócio, direto ao ponto.</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-purple-600 font-bold text-lg">2</span>
              </div>
              <h4 className="font-semibold mb-2">Desenvolvimento focado</h4>
              <p className="text-gray-600 text-sm">Trabalho intenso pra entregar rápido e com qualidade.</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-green-600 font-bold text-lg">3</span>
              </div>
              <h4 className="font-semibold mb-2">Entrega + ajustes finais</h4>
              <p className="text-gray-600 text-sm">Site no ar, funcionando e pronto pra vender.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;