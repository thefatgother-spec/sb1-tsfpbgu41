import React, { useState } from 'react';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import CarsPage from './pages/CarsPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import AdminPage from './pages/AdminPage';
import AdminLogin from './components/AdminLogin';
import { useCars } from './hooks/useCars';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false);
  const { cars, loading, addCar, updateCar, deleteCar } = useCars();

  // Check if current URL is admin panel
  const isAdminPanel = window.location.pathname === '/admin-panel';

  // Handle admin authentication
  const handleAdminLogin = (id: string, password: string) => {
    if (id === 'avsar' && password === 'avsar123') {
      setIsAdminAuthenticated(true);
      return true;
    }
    return false;
  };

  const handleAdminLogout = () => {
    setIsAdminAuthenticated(false);
    window.history.pushState({}, '', '/');
    setCurrentPage('home');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Yükleniyor...</p>
        </div>
      </div>
    );
  }

  // Admin panel routing
  if (isAdminPanel) {
    if (!isAdminAuthenticated) {
      return <AdminLogin onLogin={handleAdminLogin} />;
    }
    return (
      <div className="min-h-screen bg-gray-50">
        <AdminPage
          cars={cars}
          onAddCar={addCar}
          onUpdateCar={updateCar}
          onDeleteCar={deleteCar}
          onLogout={handleAdminLogout}
        />
      </div>
    );
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onPageChange={setCurrentPage} />;
      case 'cars':
        return <CarsPage cars={cars} />;
      case 'about':
        return <AboutPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header currentPage={currentPage} onPageChange={setCurrentPage} />
      {renderPage()}
    </div>
  );
}

export default App;