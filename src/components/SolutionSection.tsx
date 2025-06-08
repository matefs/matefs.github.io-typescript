import React from 'react';
import { Rocket, CheckCircle, Target, Users } from 'lucide-react';

const SolutionSection: React.FC = () => {
  const benefits = [
    {
      icon: Target,
      title: "Simples e Direto",
      description: "Sem enrolação ou processos complicados"
    },
    {
      icon: Rocket,
      title: "Entrega Rápida",
      description: "Seu site pronto em até 3 dias úteis"
    },
    {
      icon: Users,
      title: "Pensado para Seu Público",
      description: "Design focado em conversão e vendas"
    },
    {
      icon: CheckCircle,
      title: "Qualidade Garantida",
      description: "Profissional, responsivo e otimizado"
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-green-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white p-3 rounded-full">
              <Rocket className="h-8 w-8" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            A solução? Um site profissional entregue em até{' '}
            <span className="text-gradient">3 dias úteis</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Você foca no seu negócio. Eu cuido do digital.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="card-float p-6 text-center">
              <div className="bg-gradient-to-r from-green-100 to-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <benefit.icon className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{benefit.title}</h3>
              <p className="text-gray-600 text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg text-center max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Como Funciona?
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-blue-600 font-bold text-lg">1</span>
              </div>
              <h4 className="font-semibold mb-2">Você me conta sobre seu negócio</h4>
              <p className="text-gray-600 text-sm">Briefing rápido de 15 minutos</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-purple-600 font-bold text-lg">2</span>
              </div>
              <h4 className="font-semibold mb-2">Eu desenvolvo seu site</h4>
              <p className="text-gray-600 text-sm">Em até 3 dias, com foco total</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-orange-600 font-bold text-lg">3</span>
              </div>
              <h4 className="font-semibold mb-2">Você recebe e aprova</h4>
              <p className="text-gray-600 text-sm">Site pronto para vender</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;