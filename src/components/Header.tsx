import React, { useState } from 'react';
import { Menu, X, Car, Phone, MapPin, MessageCircle } from 'lucide-react';

interface HeaderProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, onPageChange }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Ana Sayfa', id: 'home' },
    { name: 'Araçlar', id: 'cars' },
    { name: 'Hakkımızda', id: 'about' },
    { name: 'İletişim', id: 'contact' }
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-blue-600 text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-sm">
          <div className="flex items-center space-x-4 mb-2 sm:mb-0">
            <div className="flex items-center space-x-1">
              <Phone className="w-4 h-4" />
              <a href="tel:+902125550123" className="hover:underline">+90 212 555 0123</a>
            </div>
            <div className="flex items-center space-x-1">
              <MapPin className="w-4 h-4" />
              <a 
                href="https://maps.google.com/?q=Atatürk+Mahallesi+Otomotiv+Sanayi+Sitesi+Şişli+İstanbul" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Şişli/İstanbul - Konum
              </a>
            </div>
            <div className="flex items-center space-x-1">
              <MessageCircle className="w-4 h-4" />
              <a 
                href="https://wa.me/905325550123" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:underline"
              >
                WhatsApp
              </a>
            </div>
          </div>
          <div className="text-sm">
            <span>Güvenilir Araç Alım Satım</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center cursor-pointer" onClick={() => onPageChange('home')}>
              <img 
                  src="https://i.ibb.co/CK9XC13P/Screenshot-2.png"
                      width="50"
                      height="50"
                    />
              <div className="bg-blue-600 text-white p-0 rounded-lg mr-3">
                <Car className="w-0 h-0" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">AVŞAR OTOMOTİV</h1>
                <p className="text-sm text-gray-600">Güvenilir Araç Alım Satım</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onPageChange(item.id)}
                  className={`font-medium transition-colors ${
                    currentPage === item.id
                      ? 'text-blue-600'
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200">
              <nav className="flex flex-col space-y-4">
                {navigation.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      onPageChange(item.id);
                      setIsMenuOpen(false);
                    }}
                    className={`text-left font-medium transition-colors ${
                      currentPage === item.id
                        ? 'text-blue-600'
                        : 'text-gray-700 hover:text-blue-600'
                    }`}
                  >
                    {item.name}
                  </button>
                ))}
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
