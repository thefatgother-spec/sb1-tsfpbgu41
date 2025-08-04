import React from 'react';
import { Users, Award, Clock, ThumbsUp, Car, Shield } from 'lucide-react';

const AboutPage = () => {
  const stats = [
    {
      icon: <Users className="w-8 h-8" />,
      number: "1000+",
      label: "Mutlu Müşteri"
    },
    {
      icon: <Award className="w-8 h-8" />,
      number: "15",
      label: "Yıl Deneyim"
    },
    {
      icon: <Car className="w-8 h-8" />,
      number: "500+",
      label: "Satılan Araç"
    },
    {
      icon: <ThumbsUp className="w-8 h-8" />,
      number: "%98",
      label: "Memnuniyet Oranı"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Hakkımızda</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Güvenilir araç alım satım hizmetleri ile müşterilerimize en iyi deneyimi sunuyoruz
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Content */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Güvenilir Araç Alım Satım Partneri
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              2009 yılından bu yana otomotiv sektöründe faaliyet gösteren AVSAR Otomotiv, 
              müşteri memnuniyetini ön planda tutarak kaliteli hizmet anlayışıyla çalışmaktadır.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Geniş araç yelpazemiz, şeffaf fiyatlandırma politikamız ve uzman ekibimizle 
              araç alım satımında güvenilir partneriniziz. Her bütçeye uygun kaliteli 
              araç seçenekleri sunuyoruz.
            </p>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                <p className="text-gray-700">Geniş araç yelpazesi ve kaliteli seçenekler</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                <p className="text-gray-700">Şeffaf fiyatlandırma ve güvenilir işlemler</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                <p className="text-gray-700">Uzman ekip ve profesyonel danışmanlık</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                <p className="text-gray-700">Satış sonrası destek ve takip hizmetleri</p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
              alt="Araç Galerisi"
              className="rounded-xl shadow-lg w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center bg-white rounded-xl shadow-lg p-8">
              <div className="bg-blue-100 text-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Values */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Değerlerimiz</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 text-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Güvenilirlik</h3>
              <p className="text-gray-600 leading-relaxed">
                Şeffaf işlemler ve dürüst yaklaşımımızla müşterilerimizin güvenini kazanıyoruz.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 text-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Kalite</h3>
              <p className="text-gray-600 leading-relaxed">
                Sadece kaliteli ve güvenilir araçları müşterilerimizle buluşturuyoruz.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 text-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Müşteri Odaklılık</h3>
              <p className="text-gray-600 leading-relaxed">
                Müşteri memnuniyeti bizim için en önemli öncelik ve başarı kriteri.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;