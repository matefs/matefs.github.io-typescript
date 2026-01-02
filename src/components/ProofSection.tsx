import React from 'react';
import { Star, MessageCircle, TrendingUp } from 'lucide-react';

const ProofSection: React.FC = () => {
  const testimonials = [
    {
      name: "Juliana S.",
      role: "Empreendedora",
      text: "Recebi contatos no WhatsApp na primeira semana.",
      rating: 5,
      highlight: "Mais contatos no WhatsApp"
    },
    {
      name: "Leandro V.",
      role: "Consultor",
      text: "Economizou meu tempo e entregou rápido.",
      rating: 5,
      highlight: "Entrega rápida"
    },
    {
      name: "Carla M.",
      role: "Loja Online",
      text: "Cumpriu o prazo e entregou qualidade.",
      rating: 5,
      highlight: "Prazo cumprido"
    }
  ];

  return (
    <section id="depoimentos" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <MessageCircle className="h-8 w-8 text-blue-600" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            O que meus clientes dizem
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Depoimentos reais de quem já colocou o site pra vender.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card-float p-6">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-gray-700 mb-4 italic">
                "{testimonial.text}"
              </blockquote>
              <div className="border-t pt-4">
                <div className="font-semibold text-gray-900">{testimonial.name}</div>
                <div className="text-gray-600 text-sm">{testimonial.role}</div>
                <div className="bg-green-50 text-green-700 text-xs px-2 py-1 rounded-full mt-2 inline-block">
                  <TrendingUp className="h-3 w-3 inline mr-1" />
                  {testimonial.highlight}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-500 to-blue-900 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">
            Próximo depoimento pode ser o seu!
          </h3>
          <p className="text-lg mb-6 opacity-90">
            Junte-se aos empreendedores que já estão vendendo online
          </p>
          <a href="#contato" className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors inline-block uppercase tracking-tight">
            QUERO MEU SITE EM 3 DIAS
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProofSection;