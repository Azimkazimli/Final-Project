import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  count: 0,
  basketData: [],
};
export const basketSlice = createSlice({
  name: "Basket",
  initialState,
  reducers: {
    getAddBasket: (state, action) => {
      let basket = JSON.parse(localStorage.getItem("basket")) || [];

      if (basket.length > 0) {
        let result = basket.find((item) => item.id == action.payload.id);
        if (result) {
          alert(`${action.payload.name} artiq səbətdə var`);
        } else {
          basket.push(action.payload);
          localStorage.setItem("basket", JSON.stringify(basket));
        }
      } else {
        basket.push(action.payload);
        localStorage.setItem("basket", JSON.stringify(basket));
      }
    },

    getBasketLength: (state) => {
      state.count = JSON.parse(localStorage.getItem("basket"))
        ? JSON.parse(localStorage.getItem("basket")).length
        : 0;
    },

    getBasket: (state) => {
      let checkBasket = JSON.parse(localStorage.getItem("basket")) || [];
      state.basketData = checkBasket;
    },

    removeBasket: (state, action) => {
      let basket = JSON.parse(localStorage.getItem("basket")) || [];
      let newBasket = basket.filter((item) => item.id != action.payload);
      localStorage.setItem("basket", JSON.stringify(newBasket));
      state.basketData = newBasket;
    },

    updateQty: (state, action) => {
      const { id, qty, finalPrice } = action.payload;

      state.basketData = state.basketData.map((item) =>
        item.id === id ? { ...item, qty, finalPrice } : item
      );

      localStorage.setItem("basket", JSON.stringify(state.basketData));
    },
  },
});

export const {
  getAddBasket,
  getBasketLength,
  getBasket,
  removeBasket,
  updateQty,
} = basketSlice.actions;

export default basketSlice.reducer;