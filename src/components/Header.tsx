import React from 'react';
import { Code2, Menu } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md shadow-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
              <Code2 className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">Mateus Sites</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#servicos" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
              Serviços
            </a>
            <a href="#depoimentos" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
              Depoimentos
            </a>
            <a href="#faq" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
              FAQ
            </a>
            <a href="#contato" className="btn-primary">
              Fale Comigo
            </a>
          </nav>
          
          <button className="md:hidden p-2 rounded-lg hover:bg-gray-100">
            <Menu className="h-6 w-6 text-gray-600" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;