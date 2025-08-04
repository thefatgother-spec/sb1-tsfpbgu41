import React from 'react';
import { Wrench, Car, Cog, Battery, Droplets, Zap } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Genel Bakım",
      description: "Periyodik bakım, yağ değişimi, filtre değişimi ve genel kontroller",
      features: ["Motor yağı değişimi", "Filtre değişimi", "Fren kontrolü", "Lastik kontrolü"]
    },
    {
      icon: <Car className="w-8 h-8" />,
      title: "Motor Onarımı",
      description: "Tüm motor problemleri için uzman çözümler ve onarım hizmetleri",
      features: ["Motor revizyonu", "Silindir kapağı", "Piston değişimi", "Supap ayarı"]
    },
    {
      icon: <Cog className="w-8 h-8" />,
      title: "Şanzıman Servisi",
      description: "Manuel ve otomatik şanzıman bakım ve onarım hizmetleri",
      features: ["Şanzıman yağı", "Debriyaj değişimi", "Vites kutusu", "Diferansiyel"]
    },
    {
      icon: <Battery className="w-8 h-8" />,
      title: "Elektrik Sistemi",
      description: "Araç elektrik sistemleri, akü ve alternatör hizmetleri",
      features: ["Akü değişimi", "Alternatör", "Marş motoru", "Kablo tesisatı"]
    },
    {
      icon: <Droplets className="w-8 h-8" />,
      title: "Klima Servisi",
      description: "Araç klima sistemleri bakım, onarım ve gaz dolum hizmetleri",
      features: ["Klima gazı", "Kompresör", "Kondenser", "Evaporatör"]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Fren Sistemi",
      description: "Fren balata, disk ve hidrolik sistem bakım ve onarımları",
      features: ["Fren balata", "Fren diski", "Fren hidroliği", "ABS sistemi"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Hizmetlerimiz</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Aracınızın tüm ihtiyaçları için kapsamlı servis hizmetleri sunuyoruz. 
            Uzman ekibimiz ve modern ekipmanlarımızla kaliteli hizmet garantisi veriyoruz.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 p-8"
            >
              <div className="bg-red-100 text-red-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-red-600 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button className="mt-6 w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-semibold transition-colors duration-300">
                Detayları Gör
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;