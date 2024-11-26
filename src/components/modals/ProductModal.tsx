import React from 'react';
import { X, ShoppingCart } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { closeProductModal } from '../../store/modalSlice';
import { addToCart } from '../../store/cartSlice';

const ProductModal = () => {
  const dispatch = useDispatch();
  const { selectedProduct } = useSelector((state: RootState) => state.modal);

  if (!selectedProduct) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[60] p-4">
      <div className="bg-white rounded-lg p-8 max-w-4xl w-full">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">{selectedProduct.name}</h2>
          <button
            onClick={() => dispatch(closeProductModal())}
            className="text-gray-500 hover:text-gray-700"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              className="w-full h-[400px] object-cover rounded-lg"
            />
          </div>
          <div>
            <div className="mb-4">
              <span className="inline-block bg-red-500 text-white px-2 py-1 text-sm rounded">
                {selectedProduct.tag}
              </span>
            </div>
            <h3 className="text-3xl font-bold mb-4">${selectedProduct.price}</h3>
            <p className="text-gray-600 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <button
              onClick={() => {
                dispatch(addToCart(selectedProduct));
                dispatch(closeProductModal());
              }}
              className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition-colors flex items-center justify-center space-x-2"
            >
              <ShoppingCart className="h-5 w-5" />
              <span>Add to Cart</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;