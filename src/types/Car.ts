export interface Car {
  id: string;
  brand: string;
  model: string;
  year: number;
  price: number;
  mileage: number;
  fuelType: 'Benzin' | 'Dizel' | 'Hibrit' | 'Elektrik';
  transmission: 'Manuel' | 'Otomatik';
  color: string;
  description: string;
  images: string[];
  features: string[];
  isAvailable: boolean;
  createdAt: Date;
}

export interface CarFormData {
  brand: string;
  model: string;
  year: number;
  price: number;
  mileage: number;
  fuelType: 'Benzin' | 'Dizel' | 'Hibrit' | 'Elektrik';
  transmission: 'Manuel' | 'Otomatik';
  color: string;
  description: string;
  images: string[];
  features: string[];
}