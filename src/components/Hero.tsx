import React from 'react';
import { ArrowRight, Clock, Zap } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto section-padding relative">
        <div className="text-center max-w-4xl mx-auto">
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-2 rounded-full text-sm font-semibold animate-float">
              🚀 Sites em Tempo Recorde
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight animate-fadeInUp">
            Você Precisa de um{' '}
            <span>Site Agora</span>
          </h1>
          <br />

          <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight animate-fadeInUp'>
            E Eu Entrego em{' '}
            <span className="relative">
              <span >Até 3 Dias</span>
              <div className="absolute -bottom-2 left-0 right-0 h-3 bg-orange-500/20 -rotate-1"></div>
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto animate-fadeInUp">
            Chega de enrolação. Sites que geram vendas e presença digital em tempo recorde.
          </p>

          <div className="bg-white rounded-2xl p-6 shadow-lg mb-8 max-w-2xl mx-auto animate-slideInLeft">
            <p className="text-lg text-gray-700 mb-4">
              <strong>Sou Mateus</strong>, desenvolvedor web especializado em sites rápidos, bonitos e prontos pra vender — ideal pra quem não pode mais perder tempo no digital.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center break-words">
            <a href="#contato" className="btn-primary group text-lg">
              Quero Meu Site em 3 Dias
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <div className="flex items-center space-x-4 text-sm text-gray-600">
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1 text-orange-500" />
                <span>Entrega rápida</span>
              </div>
              <div className="flex items-center">
                <Zap className="h-4 w-4 mr-1 text-orange-500" />
                <span>Sem enrolação</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/10 rounded-full animate-float"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-500/10 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
    </section>
  );
};

export default Hero;