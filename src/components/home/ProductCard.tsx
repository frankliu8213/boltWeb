import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/cartSlice';
import { openProductModal } from '../../store/modalSlice';
import { Product } from '../../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const dispatch = useDispatch();

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden group">
      <div 
        className="relative cursor-pointer"
        onClick={() => dispatch(openProductModal(product))}
      >
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <span className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 text-sm rounded">
          {product.tag}
        </span>
      </div>
      <div className="p-4">
        <h3 
          className="text-lg font-semibold mb-2 cursor-pointer hover:text-gray-600"
          onClick={() => dispatch(openProductModal(product))}
        >
          {product.name}
        </h3>
        <div className="flex justify-between items-center">
          <span className="text-xl font-bold text-gray-900">${product.price}</span>
          <button 
            onClick={(e) => {
              e.stopPropagation();
              dispatch(addToCart(product));
            }}
            className="bg-black text-white p-2 rounded-full hover:bg-gray-800 transition-colors"
          >
            <ShoppingCart className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;