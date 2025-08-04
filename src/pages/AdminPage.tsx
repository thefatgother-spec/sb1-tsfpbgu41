import React, { useState } from 'react';
import { Car } from '../types/Car';
import CarForm from '../components/CarForm';
import { Plus, Edit, Trash2, Eye, EyeOff } from 'lucide-react';

interface AdminPageProps {
  cars: Car[];
  onAddCar: (data: any) => void;
  onUpdateCar: (id: string, data: any) => void;
  onDeleteCar: (id: string) => void;
}

const AdminPage: React.FC<AdminPageProps> = ({ cars, onAddCar, onUpdateCar, onDeleteCar }) => {
  const [showForm, setShowForm] = useState(false);
  const [editingCar, setEditingCar] = useState<Car | null>(null);

  const handleSubmit = (data: any) => {
    if (editingCar) {
      onUpdateCar(editingCar.id, data);
      setEditingCar(null);
    } else {
      onAddCar(data);
    }
    setShowForm(false);
  };

  const handleEdit = (car: Car) => {
    setEditingCar(car);
    setShowForm(true);
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Bu aracı silmek istediğinizden emin misiniz?')) {
      onDeleteCar(id);
    }
  };

  const toggleAvailability = (car: Car) => {
    onUpdateCar(car.id, { isAvailable: !car.isAvailable });
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('tr-TR', {
      style: 'currency',
      currency: 'TRY',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  if (showForm) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <CarForm
            onSubmit={handleSubmit}
            onCancel={() => {
              setShowForm(false);
              setEditingCar(null);
            }}
            initialData={editingCar || undefined}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Admin Panel</h1>
            <p className="text-xl text-gray-600">Araç listesini yönetin</p>
          </div>
          <button
            onClick={() => setShowForm(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300 flex items-center space-x-2"
          >
            <Plus className="w-5 h-5" />
            <span>Yeni Araç Ekle</span>
          </button>
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Araç</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Yıl</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Fiyat</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Kilometre</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Durum</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">İşlemler</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {cars.map((car) => (
                  <tr key={car.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-3">
                        <img
                          src={car.images[0] || 'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=100'}
                          alt={`${car.brand} ${car.model}`}
                          className="w-12 h-12 rounded-lg object-cover"
                        />
                        <div>
                          <div className="font-semibold text-gray-900">
                            {car.brand} {car.model}
                          </div>
                          <div className="text-sm text-gray-600">
                            {car.fuelType} • {car.transmission}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-900">{car.year}</td>
                    <td className="px-6 py-4 font-semibold text-gray-900">
                      {formatPrice(car.price)}
                    </td>
                    <td className="px-6 py-4 text-gray-900">
                      {new Intl.NumberFormat('tr-TR').format(car.mileage)} km
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                        car.isAvailable 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {car.isAvailable ? 'Satışta' : 'Satıldı'}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => toggleAvailability(car)}
                          className={`p-2 rounded-lg transition-colors ${
                            car.isAvailable
                              ? 'text-gray-600 hover:bg-gray-100'
                              : 'text-green-600 hover:bg-green-100'
                          }`}
                          title={car.isAvailable ? 'Satıldı olarak işaretle' : 'Satışta olarak işaretle'}
                        >
                          {car.isAvailable ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </button>
                        <button
                          onClick={() => handleEdit(car)}
                          className="p-2 text-blue-600 hover:bg-blue-100 rounded-lg transition-colors"
                          title="Düzenle"
                        >
                          <Edit className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDelete(car.id)}
                          className="p-2 text-red-600 hover:bg-red-100 rounded-lg transition-colors"
                          title="Sil"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {cars.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <Plus className="w-16 h-16 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Henüz araç eklenmemiş</h3>
              <p className="text-gray-600 mb-4">İlk aracınızı ekleyerek başlayın.</p>
              <button
                onClick={() => setShowForm(true)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300"
              >
                Araç Ekle
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminPage;