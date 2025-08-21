import React from 'react';
import { Car, Shield, Award, Users, ArrowRight } from 'lucide-react';
import { Car, Shield, Award, Users, ArrowRight, Gauge, Fuel, Settings, Palette } from 'lucide-react';

interface HomePageProps {
  onPageChange?: (page: string) => void;
@@ -66,15 +66,19 @@ const HomePage: React.FC<HomePageProps> = ({ onPageChange, cars = [] }) => {

                    <div className="grid grid-cols-2 gap-2 mb-3 text-xs text-gray-600">
                      <div className="flex items-center space-x-1">
                       <Gauge className="w-3 h-3" />
                        <span>{formatMileage(car.mileage)}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                       <Fuel className="w-3 h-3" />
                        <span>{car.fuelType}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                       <Settings className="w-3 h-3" />
                        <span>{car.transmission}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                       <Palette className="w-3 h-3" />
                        <span>{car.color}</span>
                      </div>
                    </div>
@@ -90,7 +94,7 @@ const HomePage: React.FC<HomePageProps> = ({ onPageChange, cars = [] }) => {
            <div className="text-center">
              <button 
                onClick={() => onPageChange?.('cars')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 mx-auto"
               className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 mx-auto"
              >
                <span>Tüm Araçları Gör</span>
                <ArrowRight className="w-5 h-5" />
@@ -103,7 +107,7 @@ const HomePage: React.FC<HomePageProps> = ({ onPageChange, cars = [] }) => {


      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 text-white">
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 text-white">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
@@ -126,7 +130,7 @@ const HomePage: React.FC<HomePageProps> = ({ onPageChange, cars = [] }) => {
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button 
                onClick={() => onPageChange?.('cars')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
              >
                Araçları İncele
              </button>
@@ -140,7 +144,7 @@ const HomePage: React.FC<HomePageProps> = ({ onPageChange, cars = [] }) => {

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center space-x-3">
                <div className="bg-blue-600 p-3 rounded-full">
                <div className="bg-emerald-600 p-3 rounded-full">
                  <Shield className="w-6 h-6" />
                </div>
                <div>
@@ -150,7 +154,7 @@ const HomePage: React.FC<HomePageProps> = ({ onPageChange, cars = [] }) => {
              </div>

              <div className="flex items-center space-x-3">
                <div className="bg-blue-600 p-3 rounded-full">
                <div className="bg-emerald-600 p-3 rounded-full">
                  <Award className="w-6 h-6" />
                </div>
                <div>
@@ -160,7 +164,7 @@ const HomePage: React.FC<HomePageProps> = ({ onPageChange, cars = [] }) => {
              </div>

              <div className="flex items-center space-x-3">
                <div className="bg-blue-600 p-3 rounded-full">
                <div className="bg-emerald-600 p-3 rounded-full">
                  <Users className="w-6 h-6" />
                </div>
                <div>
@@ -188,31 +192,31 @@ const HomePage: React.FC<HomePageProps> = ({ onPageChange, cars = [] }) => {

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 text-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
             <div className="bg-emerald-100 text-emerald-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Car className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Geniş Araç Yelpazesi</h3>
              <p className="text-gray-600">Her bütçeye uygun kaliteli araç seçenekleri</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 text-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
             <div className="bg-emerald-100 text-emerald-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Güvenilir İşlemler</h3>
              <p className="text-gray-600">Şeffaf ve güvenli alım satım süreci</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 text-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
             <div className="bg-emerald-100 text-emerald-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Kalite Garantisi</h3>
              <p className="text-gray-600">Detaylı inceleme ve kalite kontrolü</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 text-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
             <div className="bg-emerald-100 text-emerald-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Uzman Danışmanlık</h3>