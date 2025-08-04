import React, { useState } from 'react';
import { Car } from '../types/Car';
import { ArrowLeft, Calendar, Gauge, Fuel, Settings, Palette, Check, Phone } from 'lucide-react';

interface CarDetailProps {
  car: Car;
  onBack: () => void;
}

const CarDetail: React.FC<CarDetailProps> = ({ car, onBack }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={onBack}
          className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 mb-6 font-medium"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Geri Dön</span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Images */}
          <div>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img 
                src={car.images[currentImageIndex] || car.images[0]}
                alt={`${car.brand} ${car.model}`}
                className="w-full h-96 object-cover"
              />
            </div>
            
            {car.images.length > 1 && (
              <div className="flex space-x-2 mt-4">
                {car.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-20 h-16 rounded-lg overflow-hidden border-2 ${
                      currentImageIndex === index ? 'border-blue-600' : 'border-gray-200'
                    }`}
                  >
                    <img 
                      src={image}
                      alt={`${car.brand} ${car.model} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Details */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {car.brand} {car.model}
            </h1>
            
            <div className="text-3xl font-bold text-blue-600 mb-6">
              {formatPrice(car.price)}
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                <Calendar className="w-5 h-5 text-gray-600" />
                <div>
                  <div className="text-sm text-gray-600">Yıl</div>
                  <div className="font-semibold">{car.year}</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                <Gauge className="w-5 h-5 text-gray-600" />
                <div>
                  <div className="text-sm text-gray-600">Kilometre</div>
                  <div className="font-semibold">{formatMileage(car.mileage)}</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                <Fuel className="w-5 h-5 text-gray-600" />
                <div>
                  <div className="text-sm text-gray-600">Yakıt</div>
                  <div className="font-semibold">{car.fuelType}</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                <Settings className="w-5 h-5 text-gray-600" />
                <div>
                  <div className="text-sm text-gray-600">Vites</div>
                  <div className="font-semibold">{car.transmission}</div>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-3 mb-6 p-3 bg-gray-50 rounded-lg">
              <Palette className="w-5 h-5 text-gray-600" />
              <div>
                <div className="text-sm text-gray-600">Renk</div>
                <div className="font-semibold">{car.color}</div>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Açıklama</h3>
              <p className="text-gray-600 leading-relaxed">{car.description}</p>
            </div>

            {car.features.length > 0 && (
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Özellikler</h3>
                <div className="grid grid-cols-1 gap-2">
                  {car.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Check className="w-4 h-4 text-green-600" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="space-y-3">
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold text-lg transition-colors duration-300">
                İletişime Geç
              </button>
              <button className="w-full border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white py-3 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center">
                <Phone className="w-5 h-5 mr-2" />
                Hemen Ara
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetail;