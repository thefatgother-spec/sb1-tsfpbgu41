import React from 'react';
import { ArrowRight, Shield, Clock, Award } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-red-900 text-white">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop")'
        }}
      ></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Aracınız İçin
            <span className="text-red-500 block">Güvenilir Servis</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 leading-relaxed">
            25 yıllık deneyimimizle tüm marka araçlar için profesyonel bakım, 
            onarım ve yedek parça hizmetleri sunuyoruz.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
              Randevu Al
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
              Hizmetlerimiz
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3">
              <div className="bg-red-600 p-3 rounded-full">
                <Shield className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold">Garantili Hizmet</h3>
                <p className="text-gray-300 text-sm">1 yıl garanti</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="bg-red-600 p-3 rounded-full">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold">Hızlı Servis</h3>
                <p className="text-gray-300 text-sm">Aynı gün teslimat</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="bg-red-600 p-3 rounded-full">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold">Uzman Ekip</h3>
                <p className="text-gray-300 text-sm">Sertifikalı teknisyenler</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;