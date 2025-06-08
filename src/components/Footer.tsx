import React from 'react';
import { Code2, MessageCircle, Clock, CheckCircle, ArrowRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* CTA Section */}
      <section id="contato" className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <CheckCircle className="h-12 w-12 text-green-400" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Seu negócio não pode esperar
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Clique agora, fale direto comigo e receba um orçamento personalizado
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <a 
              href="https://wa.me/5511999999999?text=Oi%20Mateus!%20Quero%20fazer%20meu%20site%20em%203%20dias"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center group text-lg"
            >
              <MessageCircle className="mr-3 h-6 w-6" />
              QUERO MEU SITE EM 3 DIAS
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 text-sm opacity-90">
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-2" />
              <span>Resposta em até 1 hora</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 mr-2" />
              <span>Orçamento gratuito</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 mr-2" />
              <span>Sem compromisso</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Content */}
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-6 md:mb-0">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
                <Code2 className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold">Mateus Dev</span>
            </div>
            
            <div className="text-center md:text-left">
              <p className="text-gray-400 mb-2">
                Desenvolvedor Web Especializado
              </p>
              <p className="text-gray-400">
                Sites profissionais em tempo recorde
              </p>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 Mateus Dev. Todos os direitos reservados.
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Transformando ideias em sites que vendem desde 2020
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;