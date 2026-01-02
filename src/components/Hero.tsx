import React from 'react';
import { ArrowRight, Clock, Zap, Wallet } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 via-white to-blue-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto section-padding relative">
        <div className="text-center max-w-4xl mx-auto">
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-to-r from-red-500 to-orange-600 text-white px-4 py-2 rounded-full text-sm font-semibold animate-float">
              🚨 Você está perdendo clientes
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight animate-fadeInUp">
Cada dia sem site é uma venda a menos.</h1>
 
         <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto animate-fadeInUp">
            Pare de perder tempo, apareça no Google e transforme visitas em contatos reais no WhatsApp.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center break-words">
            <a href="#contato" className="btn-primary group text-lg flex items-center uppercase tracking-tight">
              MEU SITE EM 3 DIAS
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <div className="flex items-center space-x-4 text-sm text-gray-600">
              <div className="flex items-center">
                <Wallet className="h-4 w-4 mr-1 text-blue-500" />
                <span>Pronto pra vender</span>
              </div>
              <div className="flex items-center">
                <Zap className="h-4 w-4 mr-1 text-blue-500" />
                <span>Sem enrolação</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/10 rounded-full animate-float"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-blue-900/10 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
    </section>
  );
};

export default Hero;