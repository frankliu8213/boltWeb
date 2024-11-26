import React, { useState } from 'react';
import { ShoppingCart, User, Menu, X } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { RootState } from '../../store';
import { openVipModal, openCartModal, openLoginModal } from '../../store/modalSlice';
import LanguageSelector from './LanguageSelector';

const Navbar = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-gray-900">ShopMall</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <LanguageSelector />
            
            <div 
              className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 cursor-pointer"
              onClick={() => dispatch(openVipModal())}
            >
              <span className="text-yellow-500">⭐</span>
              <span>{t('nav.upgrade')}</span>
            </div>
            
            <div 
              className="relative cursor-pointer"
              onClick={() => dispatch(openCartModal())}
            >
              <ShoppingCart className="h-6 w-6 text-gray-700 hover:text-gray-900" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </div>
            
            <div 
              className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 cursor-pointer"
              onClick={() => dispatch(openLoginModal())}
            >
              <User className="h-6 w-6" />
              <span>{t('nav.login')}</span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <div 
              className="relative cursor-pointer"
              onClick={() => dispatch(openCartModal())}
            >
              <ShoppingCart className="h-6 w-6 text-gray-700" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-gray-900"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg z-50">
          <div className="px-4 py-3 space-y-4">
            <div className="flex justify-center">
              <LanguageSelector />
            </div>
            
            <div 
              className="flex items-center justify-center space-x-2 text-gray-700 hover:text-gray-900 cursor-pointer py-2"
              onClick={() => {
                dispatch(openVipModal());
                setIsMobileMenuOpen(false);
              }}
            >
              <span className="text-yellow-500">⭐</span>
              <span>{t('nav.upgrade')}</span>
            </div>
            
            <div 
              className="flex items-center justify-center space-x-2 text-gray-700 hover:text-gray-900 cursor-pointer py-2"
              onClick={() => {
                dispatch(openLoginModal());
                setIsMobileMenuOpen(false);
              }}
            >
              <User className="h-6 w-6" />
              <span>{t('nav.login')}</span>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;