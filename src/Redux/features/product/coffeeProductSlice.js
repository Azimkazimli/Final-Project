import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    myBigData: [],
    loading: true,
    category: [],
    categoryFilter: [],
    selectedCategory: "All",
};

export const getCallApi = createAsyncThunk("getCallApi", async () => {
    try {
        const { data } = await axios.get("https://691ae3342d8d7855757091d4.mockapi.io/myproducts");
        return data;
    } catch (error) {
        console.log(error);
    }
});

const getCategoryFilter = (data) => {
    const newCategory = new Set(data.map((item) => item.category));
    return Array.from(newCategory);
};




export const coffeeProducstSlice = createSlice({
    name: "Coffee",
    initialState,
    reducers: {
        getFilter: (state, action) => {
            state.selectedCategory = action.payload; 
            if (action.payload === "All") {
                state.categoryFilter = state.myBigData;
            } else {
                state.categoryFilter = state.myBigData.filter(
                    (item) => item.category === action.payload
                );
            }
        },
    },

    extraReducers: (builder) => {
        builder
            .addCase(getCallApi.pending, (state) => {
                state.loading = true;
            })
            .addCase(getCallApi.fulfilled, (state, action) => {
                state.loading = false;
                state.myBigData = action.payload;
                const newCategory = new Set(action.payload.map((item) => item.category));
                state.category = ["All", ...Array.from(newCategory)]; 
                state.categoryFilter = action.payload;
            });
    },
});

export const { getFilter } = coffeeProducstSlice.actions;
export default coffeeProducstSlice.reducer









