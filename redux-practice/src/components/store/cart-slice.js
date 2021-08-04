import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    loadCart(state, action) {
      const cart = action.payload;
      state.items = cart.items;
    },
    addItemToCart(state, action) {
      const item = action.payload;
      const foundItem = state.items.find((i) => i.id === item.id);
      if (foundItem) {
        foundItem.quantity += 1;
      } else {
        state.items.push(item);
      }
    },
    removeItemFromCart(state, action) {
      const item = action.payload;
      const foundItem = state.items.find((i) => i.id === item.id);
      if (foundItem) {
        if (foundItem.quantity > 1) {
          foundItem.quantity -= 1;
        } else {
          state.items = state.items.filter((i) => i.id !== item.id);
        }
      } else {
        console.log("No item to remove!");
      }
    },
  },
});

export const cartActions = cartSlice.actions;
export const cartReducers = cartSlice.reducer;
