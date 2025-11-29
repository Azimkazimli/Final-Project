import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    wishlistData: [],
};

export const wishlistSlice = createSlice({
    name: "wishlist",
    initialState,
    reducers: {
        getWishlist: (state) => {
            const list = JSON.parse(localStorage.getItem("wishlist")) || [];
            state.wishlistData = list;
        },

        addWishlist: (state, action) => {
            let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

            const exists = wishlist.find((p) => p.id === action.payload.id);

            if (!exists) {
                wishlist.push(action.payload);
                localStorage.setItem("wishlist", JSON.stringify(wishlist));
            }

            state.wishlistData = wishlist;
        },

        removeWishlist: (state, action) => {
            let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

            const newList = wishlist.filter((item) => item.id !== action.payload);

            localStorage.setItem("wishlist", JSON.stringify(newList));
            state.wishlistData = newList;
        },
    },
});

export const { getWishlist, addWishlist, removeWishlist } = wishlistSlice.actions;

export default wishlistSlice.reducer;