import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    person: null,
    users: [],
};

export const getUser = createAsyncThunk("getUser", async () => {
    try {
        let { data } = await axios.get(
            "https://691ae3342d8d7855757091d4.mockapi.io/users"
        );
        return data;
    } catch (error) {
        console.log(error);
    }
});

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        getChechkLogin: (state, action) => {
            let userfind = state.users.find(
                (item) =>
                    item.email == action.payload.email &&
                    item.password == action.payload.password
            );

            console.log(userfind, "userFind");

            if (userfind) {
                let user = JSON.parse(localStorage.getItem("user")) || {};
                if (user) {
                    user = userfind;
                    localStorage.setItem("user", JSON.stringify(user));
                    console.log(userfind);
                }
                window.location.href = "/";
            } else {
                alert(
                    "isdifadeci tapilmadi zehmet olmasa email veya passwordu control edin !"
                );
            }
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getUser.fulfilled, (state, action) => {
            state.users = action.payload;
        });
    },
});

export const { getChechkLogin } = userSlice.actions;

export default userSlice.reducer;