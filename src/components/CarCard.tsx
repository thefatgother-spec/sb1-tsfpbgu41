import React from 'react';
import { Car } from '../types/Car';
import { Calendar, Gauge, Fuel, Settings, Palette } from 'lucide-react';

interface CarCardProps {
  car: Car;
  onClick: () => void;
}

const CarCard: React.FC<CarCardProps> = ({ car, onClick }) => {
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
    <div 
      className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer overflow-hidden"
      onClick={onClick}
    >
      <div className="relative">
        <img 
          src={car.images[0] || 'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=800'}
          alt={`${car.brand} ${car.model}`}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
          {car.year}
        </div>
        {!car.isAvailable && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <span className="bg-red-600 text-white px-4 py-2 rounded-lg font-semibold">
              SATILDI
            </span>
          </div>
        )}
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          {car.brand} {car.model}
        </h3>
        
        <div className="text-2xl font-bold text-blue-600 mb-4">
          {formatPrice(car.price)}
        </div>
        
        <div className="grid grid-cols-2 gap-3 mb-4 text-sm text-gray-600">
          <div className="flex items-center space-x-2">
            <Calendar className="w-4 h-4" />
            <span>{car.year}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Gauge className="w-4 h-4" />
            <span>{formatMileage(car.mileage)}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Fuel className="w-4 h-4" />
            <span>{car.fuelType}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Settings className="w-4 h-4" />
            <span>{car.transmission}</span>
          </div>
        </div>
        
        <div className="flex items-center space-x-2 mb-4">
          <Palette className="w-4 h-4 text-gray-600" />
          <span className="text-sm text-gray-600">{car.color}</span>
        </div>
        
        <p className="text-gray-600 text-sm line-clamp-2 mb-4">
          {car.description}
        </p>
        
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold transition-colors duration-300">
          Detayları Gör
        </button>
      </div>
    </div>
  );
};

export default CarCard;