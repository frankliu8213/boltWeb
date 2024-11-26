import React, { useState } from 'react';
import { X, Search, Filter } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { closeAllProductsModal } from '../../store/modalSlice';
import ProductCard from '../home/ProductCard';
import { Product } from '../../types';
import { useTranslation } from 'react-i18next';

const allProducts: Product[] = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    tag: "Premium"
  },
  {
    id: 2,
    name: "Smart Watch Series X",
    price: 399.99,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    tag: "Tech"
  },
  {
    id: 3,
    name: "Professional Camera Kit",
    price: 1299.99,
    image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    tag: "Photography"
  },
  {
    id: 4,
    name: "Luxury Leather Bag",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    tag: "Fashion"
  },
  {
    id: 5,
    name: "Designer Sunglasses",
    price: 159.99,
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    tag: "Accessories"
  },
  {
    id: 6,
    name: "Wireless Earbuds",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    tag: "Audio"
  },
  {
    id: 7,
    name: "Wireless Charger",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1622445275463-afa2ab738c34?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    tag: "Accessories"
  },
  {
    id: 8,
    name: "Smart Speaker",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1543512214-318c7553f230?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    tag: "Smart Home"
  },
  {
    id: 9,
    name: "Fitness Tracker",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    tag: "Fitness"
  },
  {
    id: 10,
    name: "Bluetooth Speaker",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    tag: "Audio"
  },
  {
    id: 11,
    name: "Gaming Mouse",
    price: 69.99,
    image: "https://images.unsplash.com/photo-1527814050087-3793815479db?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    tag: "Gaming"
  },
  {
    id: 12,
    name: "Premium Headphones",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    tag: "Premium"
  }
];

const categories = [
  "All",
  "Premium",
  "Tech",
  "Photography",
  "Fashion",
  "Accessories",
  "Audio",
  "Smart Home",
  "Fitness",
  "Gaming"
];

const AllProductsModal = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProducts = allProducts.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || product.tag === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-7xl mx-4 my-8 flex flex-col max-h-[90vh]">
        <div className="p-6 border-b">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">{t('modals.allProducts.title')}</h2>
            <button
              onClick={() => dispatch(closeAllProductsModal())}
              className="text-gray-500 hover:text-gray-700"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder={t('modals.allProducts.search')}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
              />
            </div>
            <div className="flex items-center space-x-2">
              <Filter className="h-5 w-5 text-gray-400" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-black focus:border-transparent"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProductsModal;