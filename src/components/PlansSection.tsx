import React from 'react';
import { Check, Zap, Crown, ArrowRight } from 'lucide-react';

const PlansSection: React.FC = () => {
  const plans = [
    {
      name: "Plano Essencial",
      icon: Zap,
      price: "Sob consulta",
      delivery: "até 3 dias úteis",
      description: "Perfeito para quem precisa sair do zero rapidamente",
      features: [
        "Site 100% responsivo",
        "Página de vendas ou institucional",
        "Integração com WhatsApp, Insta e Google",
        "Otimização de velocidade e SEO básico",
        "Entrega em até 3 dias úteis"
      ],
      popular: false,
      cta: "Escolher Essencial"
    },
    {
      name: "Plano Pro",
      icon: Crown,
      price: "Sob consulta",
      delivery: "até 5 dias úteis",
      description: "Para quem quer o máximo de conversão e automação",
      features: [
        "Tudo do Plano Essencial",
        "Página de captura com automação",
        "Copy estratégica incluída",
        "Hospedagem + domínio inclusos no 1º ano",
        "Entrega em até 5 dias úteis",
        "Suporte estendido por 30 dias"
      ],
      popular: true,
      cta: "Escolher Pro"
    }
  ];

  return (
    <section id="servicos" className="section-padding bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Oferta Irresistível
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Escolha o plano que mais se adequa ao seu negócio
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div key={index} className={`card-float p-8 relative ${plan.popular ? 'ring-2 ring-blue-500' : ''}`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Mais Popular
                  </div>
                </div>
              )}
              
              <div className="text-center mb-6">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                  plan.popular 
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500' 
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
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl'
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