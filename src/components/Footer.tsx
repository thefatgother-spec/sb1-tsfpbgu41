import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-6">
              <div className="bg-red-600 text-white p-2 rounded-lg mr-3">
                <div className="w-8 h-8 flex items-center justify-center font-bold text-xl">
                  A
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold">AVSAR OTOMOTİV</h3>
                <p className="text-gray-400 text-sm">Profesyonel Araç Servisi</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6">
              25 yıllık deneyimimizle aracınız için en kaliteli hizmeti sunuyoruz. 
              Güven, kalite ve müşteri memnuniyeti bizim önceliğimizdir.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 hover:bg-red-600 p-2 rounded-full transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-red-600 p-2 rounded-full transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-red-600 p-2 rounded-full transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Hizmetlerimiz</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Genel Bakım</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Motor Onarımı</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Şanzıman Servisi</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Elektrik Sistemi</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Klima Servisi</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Fren Sistemi</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Hızlı Linkler</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Ana Sayfa</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">Hakkımızda</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Hizmetler</a></li>
              <li><a href="#gallery" className="text-gray-400 hover:text-white transition-colors">Galeri</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">İletişim</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Randevu Al</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">İletişim</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-red-600 mt-1" />
                <div>
                  <p className="text-gray-400">+90 212 555 0123</p>
                  <p className="text-gray-400">+90 532 555 0123</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-red-600 mt-1" />
                <div>
                  <p className="text-gray-400">info@avsarotomotiv.net</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-red-600 mt-1" />
                <div>
                  <p className="text-gray-400">
                    Atatürk Mahallesi, Otomotiv Sanayi Sitesi<br />
                    No: 45/A, Şişli/İstanbul
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 AVSAR Otomotiv. Tüm hakları saklıdır.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Gizlilik Politikası
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Kullanım Şartları
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;