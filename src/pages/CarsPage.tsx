import React, { useState } from 'react';
import { Car } from '../types/Car';
import CarCard from '../components/CarCard';
import CarDetail from '../components/CarDetail';
import { Search, Filter } from 'lucide-react';

interface CarsPageProps {
  cars: Car[];
}

const CarsPage: React.FC<CarsPageProps> = ({ cars }) => {
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    brand: '',
    fuelType: '',
    transmission: '',
    minPrice: '',
    maxPrice: '',
    minYear: '',
    maxYear: ''
  });
  const [showFilters, setShowFilters] = useState(false);

  const filteredCars = cars.filter(car => {
    const matchesSearch = searchTerm === '' || 
      `${car.brand} ${car.model}`.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesBrand = filters.brand === '' || car.brand === filters.brand;
    const matchesFuel = filters.fuelType === '' || car.fuelType === filters.fuelType;
    const matchesTransmission = filters.transmission === '' || car.transmission === filters.transmission;
    
    const matchesMinPrice = filters.minPrice === '' || car.price >= parseInt(filters.minPrice);
    const matchesMaxPrice = filters.maxPrice === '' || car.price <= parseInt(filters.maxPrice);
    const matchesMinYear = filters.minYear === '' || car.year >= parseInt(filters.minYear);
    const matchesMaxYear = filters.maxYear === '' || car.year <= parseInt(filters.maxYear);

    return matchesSearch && matchesBrand && matchesFuel && matchesTransmission && 
           matchesMinPrice && matchesMaxPrice && matchesMinYear && matchesMaxYear;
  });

  const availableBrands = [...new Set(cars.map(car => car.brand))].sort();

  if (selectedCar) {
    return <CarDetail car={selectedCar} onBack={() => setSelectedCar(null)} />;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Araçlarımız</h1>
          <p className="text-xl text-gray-600">
            Geniş araç yelpazemizden size uygun olanı seçin
          </p>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4 mb-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Marka, model ara..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center space-x-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Filter className="w-5 h-5" />
              <span>Filtrele</span>
            </button>
          </div>

          {showFilters && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-4 border-t border-gray-200">
              <select
                value={filters.brand}
                onChange={(e) => setFilters(prev => ({ ...prev, brand: e.target.value }))}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Tüm Markalar</option>
                {availableBrands.map(brand => (
                  <option key={brand} value={brand}>{brand}</option>
                ))}
              </select>

              <select
                value={filters.fuelType}
                onChange={(e) => setFilters(prev => ({ ...prev, fuelType: e.target.value }))}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Tüm Yakıt Tipleri</option>
                <option value="Benzin">Benzin</option>
                <option value="Dizel">Dizel</option>
                <option value="Hibrit">Hibrit</option>
                <option value="Elektrik">Elektrik</option>
              </select>

              <select
                value={filters.transmission}
                onChange={(e) => setFilters(prev => ({ ...prev, transmission: e.target.value }))}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Tüm Vites Tipleri</option>
                <option value="Manuel">Manuel</option>
                <option value="Otomatik">Otomatik</option>
              </select>

              <div className="flex space-x-2">
                <input
                  type="number"
                  placeholder="Min Fiyat"
                  value={filters.minPrice}
                  onChange={(e) => setFilters(prev => ({ ...prev, minPrice: e.target.value }))}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <input
                  type="number"
                  placeholder="Max Fiyat"
                  value={filters.maxPrice}
                  onChange={(e) => setFilters(prev => ({ ...prev, maxPrice: e.target.value }))}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
          )}
        </div>

        {/* Results */}
        <div className="mb-6">
          <p className="text-gray-600">
            {filteredCars.length} araç bulundu
          </p>
        </div>

        {/* Cars Grid */}
        {filteredCars.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCars.map(car => (
              <CarCard
                key={car.id}
                car={car}
                onClick={() => setSelectedCar(car)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Search className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Araç bulunamadı</h3>
            <p className="text-gray-600">Arama kriterlerinizi değiştirerek tekrar deneyin.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CarsPage;