import React from 'react';
import { Car, Shield, Award, Users, ArrowRight, Gauge, Fuel, Settings, Palette } from 'lucide-react';

interface CarType {
  mileage: number;
  fuelType: string;
  transmission: string;
  color: string;
}

interface HomePageProps {
  onPageChange?: (page: string) => void;
  cars?: CarType[];
}

const formatMileage = (mileage: number) => `${mileage.toLocaleString()} km`;

const HomePage: React.FC<HomePageProps> = ({ onPageChange, cars = [] }) => {
  return (
    <div>
      {/* Örnek Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 text-white py-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Hoşgeldiniz!</h1>
          <button
            onClick={() => onPageChange?.('cars')}
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition duration-300"
          >
            Tüm Araçları Gör
          </button>
        </div>
      </section>

      {/* Araçlar Listesi */}
      <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {cars.map((car, index) => (
          <div key={index} className="border rounded-lg p-4 shadow">
            <div className="grid grid-cols-2 gap-2 text-sm text-gray-700">
              <div className="flex items-center space-x-1">
                <Gauge className="w-4 h-4" />
                <span>{formatMileage(car.mileage)}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Fuel className="w-4 h-4" />
                <span>{car.fuelType}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Settings className="w-4 h-4" />
                <span>{car.transmission}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Palette className="w-4 h-4" />
                <span>{car.color}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
