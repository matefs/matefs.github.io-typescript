import React from 'react'
import TrafegoPagoImage from '../assets/TrafegoPago.png'
import EmagrecimentoImage from '../assets/emagrecimento.jpg'
import KingImage from '../assets/king.png'

const PortfolioSection: React.FC = () => {
  return (
<section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center mb-12">Portfólio de Sites</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
                        <img src={TrafegoPagoImage} alt="Site de Tráfego Pago" className="w-full h-64 object-cover"/>
                    <div className="p-6 bg-white">
                        <h3 className="text-xl font-bold mb-2">Site de Tráfego Pago</h3>
                        <p className="text-gray-600">Landing page otimizada para conversão</p>
                    </div>
                </div>
                <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
                    <img src={EmagrecimentoImage} alt="Site de Emagrecimento" className="w-full h-64 object-cover"/>
                    <div className="p-6 bg-white">
                        <h3 className="text-xl font-bold mb-2">Site de Emagrecimento</h3>
                        <p className="text-gray-600">Página de vendas para programa fitness</p>
                    </div>
                </div>
                <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
                    <img src={KingImage} alt="Site Institucional" className="w-full h-64 object-cover"/>
                    <div className="p-6 bg-white">
                        <h3 className="text-xl font-bold mb-2">Site Institucional</h3>
                        <p className="text-gray-600">Website corporativo elegante</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

  )
}

export default PortfolioSection;