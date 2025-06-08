import React from 'react';
import { User, Clock, Eye, HeartHandshake } from 'lucide-react';

const DifferentialsSection: React.FC = () => {
  const differentials = [
    {
      icon: User,
      title: "Atendimento 1:1 com o desenvolvedor",
      description: "Sem intermediários, você fala direto comigo durante todo o processo"
    },
    {
      icon: Clock,
      title: "Prazo recorde com qualidade",
      description: "Entrego rápido sem comprometer a qualidade do seu site"
    },
    {
      icon: Eye,
      title: "Visual profissional com foco em conversão",
      description: "Design pensado para gerar vendas e transmitir credibilidade"
    },
    {
      icon: HeartHandshake,
      title: "Suporte real, humano e descomplicado",
      description: "Sempre disponível para tirar dúvidas e fazer ajustes"
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Por que escolher meu trabalho?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Diferenciais que fazem toda a diferença no seu projeto
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {differentials.map((differential, index) => (
            <div key={index} className="text-center group">
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <differential.icon className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {differential.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {differential.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">
            Resultado Garantido ou Seu Dinheiro de Volta
          </h3>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Tenho tanta confiança no meu trabalho que ofereço garantia total. 
            Se não ficar satisfeito, devolvemos 100% do seu investimento.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;