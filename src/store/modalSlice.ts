import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../types';

interface ModalState {
  isVipModalOpen: boolean;
  isCartModalOpen: boolean;
  isProductModalOpen: boolean;
  isLoginModalOpen: boolean;
  isAllProductsModalOpen: boolean;
  selectedProduct: Product | null;
}

const initialState: ModalState = {
  isVipModalOpen: false,
  isCartModalOpen: false,
  isProductModalOpen: false,
  isLoginModalOpen: false,
  isAllProductsModalOpen: false,
  selectedProduct: null,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openVipModal: (state) => {
      state.isVipModalOpen = true;
    },
    closeVipModal: (state) => {
      state.isVipModalOpen = false;
    },
    openCartModal: (state) => {
      state.isCartModalOpen = true;
    },
    closeCartModal: (state) => {
      state.isCartModalOpen = false;
    },
    openProductModal: (state, action: PayloadAction<Product>) => {
      state.isProductModalOpen = true;
      state.selectedProduct = action.payload;
    },
    closeProductModal: (state) => {
      state.isProductModalOpen = false;
      state.selectedProduct = null;
    },
    openLoginModal: (state) => {
      state.isLoginModalOpen = true;
    },
    closeLoginModal: (state) => {
      state.isLoginModalOpen = false;
    },
    openAllProductsModal: (state) => {
      state.isAllProductsModalOpen = true;
    },
    closeAllProductsModal: (state) => {
      state.isAllProductsModalOpen = false;
    },
  },
});

export const {
  openVipModal,
  closeVipModal,
  openCartModal,
  closeCartModal,
  openProductModal,
  closeProductModal,
  openLoginModal,
  closeLoginModal,
  openAllProductsModal,
  closeAllProductsModal,
} = modalSlice.actions;
export default modalSlice.reducer;