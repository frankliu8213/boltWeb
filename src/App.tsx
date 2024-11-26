import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import Navbar from './components/layout/Navbar';
import HeroBanner from './components/home/HeroBanner';
import FeaturedProducts from './components/home/FeaturedProducts';
import BestSellers from './components/home/BestSellers';
import Newsletter from './components/home/Newsletter';
import Footer from './components/layout/Footer';
import VipModal from './components/modals/VipModal';
import CartModal from './components/modals/CartModal';
import ProductModal from './components/modals/ProductModal';
import LoginModal from './components/modals/LoginModal';
import AllProductsModal from './components/modals/AllProductsModal';
import { useSelector } from 'react-redux';
import { RootState } from './store';

const AppContent = () => {
  const { 
    isVipModalOpen, 
    isCartModalOpen, 
    isProductModalOpen,
    isLoginModalOpen,
    isAllProductsModalOpen
  } = useSelector((state: RootState) => state.modal);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main>
        <HeroBanner />
        <FeaturedProducts />
        <BestSellers />
        <Newsletter />
      </main>
      <Footer />
      {isVipModalOpen && <VipModal />}
      {isCartModalOpen && <CartModal />}
      {isProductModalOpen && <ProductModal />}
      {isLoginModalOpen && <LoginModal />}
      {isAllProductsModalOpen && <AllProductsModal />}
    </div>
  );
};

function App() {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
}

export default App;