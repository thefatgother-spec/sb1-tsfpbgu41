import React from 'react';
import { Car, Shield, Award, Users, ArrowRight } from 'lucide-react';

interface HomePageProps {
  onPageChange?: (page: string) => void;
  cars?: any[];
}

const HomePage: React.FC<HomePageProps> = ({ onPageChange, cars = [] }) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('tr-TR', {
      style: 'currency',
      currency: 'TRY',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  const formatMileage = (mileage: number) => {
    return new Intl.NumberFormat('tr-TR').format(mileage) + ' km';
  };

  // Show only first 6 available cars
  const featuredCars = cars.filter(car => car.isAvailable).slice(0, 6);

  return (
    <div className="min-h-screen">

 {/* Featured Cars Section */}
      {featuredCars.length > 0 && (
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Öne Çıkan Araçlar</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                En popüler ve kaliteli araç seçeneklerimizi keşfedin
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {featuredCars.map(car => (
                <div 
                  key={car.id}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer overflow-hidden"
                  onClick={() => onPageChange?.('cars')}
                >
                  <div className="relative">
                    <img 
                      src={car.images[0] || 'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=600'}
                      alt={`${car.brand} ${car.model}`}
                      className="w-full h-40 object-cover"
                    />
                    <div className="absolute top-3 right-3 bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                      {car.year}
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {car.brand} {car.model}
                    </h3>
                    
                    <div className="text-xl font-bold text-blue-600 mb-3">
                      {formatPrice(car.price)}
                    </div>
                    
                    <div className="grid grid-cols-2 gap-2 mb-3 text-xs text-gray-600">
                      <div className="flex items-center space-x-1">
                        <span>{formatMileage(car.mileage)}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <span>{car.fuelType}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <span>{car.transmission}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <span>{car.color}</span>
                      </div>
                    </div>
                    
                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold text-sm transition-colors duration-300">
                      Detayları Gör
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <button 
                onClick={() => onPageChange?.('cars')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 mx-auto"
              >
                <span>Tüm Araçları Gör</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </section>
      )}     
      
      
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 text-white">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("https://images.pexels.com/photos/33466003/pexels-photo-33466003.png?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop")'
          }}
        ></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Güvenilir Araç
              <span className="text-blue-300 block">Alım Satım</span>
            </h1>
            <p className="bg-gray-100 hover:bg-gray-200 text-black px-1 py-1 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105">
              Geniş araç yelpazemiz ile hayalinizdeki aracı bulun. 
              Kaliteli hizmet ve güvenilir alım satım garantisi.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button 
                onClick={() => onPageChange?.('cars')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
              >
                Araçları İncele
              </button>
              <button 
                onClick={() => onPageChange?.('contact')}
                className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
              >
                İletişime Geç
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center space-x-3">
                <div className="bg-blue-600 p-3 rounded-full">
                  <Shield className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold">Güvenilir Hizmet</h3>
                  <p className="text-gray-300 text-sm">Şeffaf işlemler</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="bg-blue-600 p-3 rounded-full">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold">Kaliteli Araçlar</h3>
                  <p className="text-gray-300 text-sm">Seçkin koleksiyon</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="bg-blue-600 p-3 rounded-full">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold">Uzman Ekip</h3>
                  <p className="text-gray-300 text-sm">Profesyonel danışmanlık</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Neden Bizi Seçmelisiniz?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Yılların deneyimi ve müşteri memnuniyeti odaklı hizmet anlayışımızla 
              araç alım satımında güvenilir partneriniziz.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 text-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Car className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Geniş Araç Yelpazesi</h3>
              <p className="text-gray-600">Her bütçeye uygun kaliteli araç seçenekleri</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 text-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Güvenilir İşlemler</h3>
              <p className="text-gray-600">Şeffaf ve güvenli alım satım süreci</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 text-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Kalite Garantisi</h3>
              <p className="text-gray-600">Detaylı inceleme ve kalite kontrolü</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 text-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Uzman Danışmanlık</h3>
              <p className="text-gray-600">Profesyonel ekibimizden destek</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;