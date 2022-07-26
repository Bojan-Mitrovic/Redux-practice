import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  listItems: [],
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.listItems.find(
        (item) => item.id === newItem.id
      );
      state.totalQuantity++;
      if (!existingItem) {
        state.listItems.push({
          key: newItem.id,
          title: newItem.title,
          price: newItem.price,
          id: newItem.id,
          quantity: 1,
          totalPrice: newItem.price,
        });
      } else {
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
        existingItem.quantity++;
      }
    },
    removeFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.listItems.find((item) => item.id === id);
      state.totalQuantity--;
      if (existingItem.quantity === 1) {
        state.listItems = state.listItems.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
