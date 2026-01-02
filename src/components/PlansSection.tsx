import React from 'react';
import { Home, Check, Zap, Settings, Crown, ArrowRight } from 'lucide-react';

const PlansSection: React.FC = () => {
  const plans = [
    {
      name: "Landing Page",
      icon: Home,
      price: "A partir de R$ 1.500",
      delivery: "até 3 dias úteis",
      description: "Landing page focada em conversão, pronta para captar contatos no WhatsApp.",
      features: [
        "Página focada em conversão",
        "Responsivo",
        "WhatsApp + SEO básico"
      ],
      popular: false,
      cta: "MEU SITE EM 3 DIAS"
    },
    {
      name: "Site Institucional",
      icon: Crown,
      price: "A partir de R$ 2.500",
      delivery: "prazo combinado",
      description: "Site completo para apresentar sua empresa com autoridade.",
      features: [
        "Múltiplas páginas",
        "Estrutura profissional",
        "Prazo combinado"
      ],
      popular: true,
      cta: "MEU SITE EM 3 DIAS"
    },
    {
      name: "Sistema Personalizado",
      icon: Settings,
      price: "A partir de R$ 5.000",
      delivery: "prazo combinado",
      description: "Sistemas e automações sob medida para seu negócio.",
      features: [
        "Desenvolvimento sob medida",
        "Dashboards e automação",
        "Integrações personalizadas"
      ],
      popular: false,
      cta: "Solicitar Orçamento"
    }
  ];
  

  return (
    <section id="servicos" className="section-padding bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Escolha o plano ideal para o seu negócio
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Planos claros, prazos definidos e foco em resultado.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div key={index} className={`card-float p-8 relative ${plan.popular ? 'ring-2 ring-blue-500' : ''}`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-blue-500 to-blue-900 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Mais Popular
                  </div>
                </div>
              )}
              
              <div className="text-center mb-6">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                  plan.popular 
                    ? 'bg-gradient-to-r from-blue-500 to-blue-900' 
                    : 'bg-gray-100'
                }`}>
                  <plan.icon className={`h-8 w-8 ${plan.popular ? 'text-white' : 'text-gray-600'}`} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                <div className="text-3xl font-bold text-gray-900 mb-1">{plan.price}</div>
                <div className="text-sm text-gray-600">Entrega em {plan.delivery}</div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <a 
                href="#contato" 
                className={`w-full text-center py-4 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center group ${
                  plan.popular
                    ? 'bg-gradient-to-r from-blue-600 to-blue-900 hover:from-blue-700 hover:to-blue-950 text-white shadow-lg hover:shadow-xl'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                }`}
              >
                {plan.cta}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Não tem certeza de qual plano escolher?
          </p>
          <a href="#contato" className="btn-secondary">
            Vamos Conversar Sobre Seu Projeto
          </a>
        </div>
      </div>
    </section>
  );
};

export default PlansSection;