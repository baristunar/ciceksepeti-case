import { createSlice } from '@reduxjs/toolkit';

export const basketSlice = createSlice({
  name: 'basket',
  initialState: {
    products: [],
    totalPrice: 0,
    totalQuantity: 0
  },
  reducers: {
    addProduct: (state, action) => {
      const product = { ...action.payload };
      const productIndex = state.products.findIndex((p) => p.id === product.id);

      if (productIndex === -1) {
        state.products.push(product);
      } else {
        state.products[productIndex].quantity += product.quantity;
      }
      state.totalPrice += product.price * product.quantity;
      state.totalQuantity += product.quantity;
    },
    removeProduct: (state, action) => {
      const product = { ...action.payload };

      const productIndex = state.products.findIndex((p) => p.id === product.id);

      if (productIndex !== -1) {
        state.products[productIndex].quantity === product.quantity
          ? state.products.splice(productIndex, 1)
          : (state.products[productIndex].quantity -= product.quantity);
      }

      state.totalPrice -= product.price * product.quantity;
      state.totalQuantity -= product.quantity;
    }
  }
});

export const { addProduct, removeProduct } = basketSlice.actions;

export default basketSlice.reducer;
