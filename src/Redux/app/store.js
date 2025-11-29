import { configureStore } from "@reduxjs/toolkit";
import basketSlice from "../features/basket/basketSlice";
import wishlistSlice from "../features/wishlist/wishlistSlice";
import coffeeProductSlice from "../features/product/coffeeProductSlice";
import userSlice from "../features/user/useSlice";

export const store = configureStore({
    reducer: {
        auth: userSlice,
        basket: basketSlice,
        wishlist: wishlistSlice,
        coffeeProduct: coffeeProductSlice,

    },
});