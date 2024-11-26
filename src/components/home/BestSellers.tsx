import React from 'react';
import { useTranslation } from 'react-i18next';
import ProductCard from './ProductCard';
import { ChevronRight } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { openAllProductsModal } from '../../store/modalSlice';

const BestSellers = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  
  const bestSellers = [
    {
      id: 4,
      name: "Luxury Leather Bag",
      price: 199.99,
      image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      tag: "Top Rated"
    },
    {
      id: 5,
      name: "Designer Sunglasses",
      price: 159.99,
      image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      tag: "Best Seller"
    },
    {
      id: 6,
      name: "Wireless Earbuds",
      price: 129.99,
      image: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      tag: "Hot Deal"
    },
    {
      id: 7,
      name: "Smart Home Speaker",
      price: 89.99,
      image: "https://images.unsplash.com/photo-1543512214-318c7553f230?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      tag: "Popular"
    },
    {
      id: 8,
      name: "Premium Watch",
      price: 299.99,
      image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      tag: "Exclusive"
    },
    {
      id: 9,
      name: "Fitness Tracker",
      price: 79.99,
      image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      tag: "New"
    },
    {
      id: 10,
      name: "Bluetooth Speaker",
      price: 149.99,
      image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      tag: "Limited"
    },
    {
      id: 11,
      name: "Gaming Mouse",
      price: 69.99,
      image: "https://images.unsplash.com/photo-1527814050087-3793815479db?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      tag: "Gaming"
    }
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold">{t('sections.bestSellers')}</h2>
          <button 
            onClick={() => dispatch(openAllProductsModal())}
            className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <span>{t('sections.viewAll')}</span>
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {bestSellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSellers;