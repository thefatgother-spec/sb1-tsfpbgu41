import React from 'react';
import { Users, Award, Clock, ThumbsUp } from 'lucide-react';

const About = () => {
  const stats = [
    {
      icon: <Users className="w-8 h-8" />,
      number: "5000+",
      label: "Mutlu Müşteri"
    },
    {
      icon: <Award className="w-8 h-8" />,
      number: "25",
      label: "Yıl Deneyim"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      number: "24/7",
      label: "Destek Hizmeti"
    },
    {
      icon: <ThumbsUp className="w-8 h-8" />,
      number: "%98",
      label: "Memnuniyet Oranı"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Hakkımızda
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              1998 yılından bu yana otomotiv sektöründe faaliyet gösteren AVSAR Otomotiv, 
              müşteri memnuniyetini ön planda tutarak kaliteli hizmet anlayışıyla çalışmaktadır.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Uzman ekibimiz, modern teknoloji ve orijinal yedek parçalarla aracınızın 
              performansını en üst seviyede tutmak için çalışır. Güven, kalite ve 
              müşteri memnuniyeti bizim temel değerlerimizdir.
            </p>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-red-600 rounded-full mt-2"></div>
                <p className="text-gray-700">Tüm marka ve modeller için hizmet</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-red-600 rounded-full mt-2"></div>
                <p className="text-gray-700">Orijinal ve muadil yedek parça garantisi</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-red-600 rounded-full mt-2"></div>
                <p className="text-gray-700">Sertifikalı ve deneyimli teknisyen kadrosu</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-red-600 rounded-full mt-2"></div>
                <p className="text-gray-700">Modern ekipman ve teknoloji kullanımı</p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
              alt="Otomotiv Servisi"
              className="rounded-xl shadow-lg w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-red-100 text-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;