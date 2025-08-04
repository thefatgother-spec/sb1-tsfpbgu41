import { useState, useEffect } from 'react';
import { Car, CarFormData } from '../types/Car';
import { mockCars } from '../data/mockCars';

export const useCars = () => {
  const [cars, setCars] = useState<Car[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      const savedCars = localStorage.getItem('cars');
      if (savedCars) {
        setCars(JSON.parse(savedCars));
      } else {
        setCars(mockCars);
        localStorage.setItem('cars', JSON.stringify(mockCars));
      }
      setLoading(false);
    }, 500);
  }, []);

  const addCar = (carData: CarFormData) => {
    const newCar: Car = {
      ...carData,
      id: Date.now().toString(),
      isAvailable: true,
      createdAt: new Date()
    };
    
    const updatedCars = [...cars, newCar];
    setCars(updatedCars);
    localStorage.setItem('cars', JSON.stringify(updatedCars));
  };

  const updateCar = (id: string, carData: Partial<Car>) => {
    const updatedCars = cars.map(car => 
      car.id === id ? { ...car, ...carData } : car
    );
    setCars(updatedCars);
    localStorage.setItem('cars', JSON.stringify(updatedCars));
  };

  const deleteCar = (id: string) => {
    const updatedCars = cars.filter(car => car.id !== id);
    setCars(updatedCars);
    localStorage.setItem('cars', JSON.stringify(updatedCars));
  };

  const getCarById = (id: string) => {
    return cars.find(car => car.id === id);
  };

  return {
    cars,
    loading,
    addCar,
    updateCar,
    deleteCar,
    getCarById
  };
};