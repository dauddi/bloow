import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	isAuth: false,
};

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		authenticate: (state) => {
			state.isAuth = true;
		},
		deauthenticate: (state) => {
			state.isAuth = false;
		},
	},
});

export const { authenticate, deauthenticate } = authSlice.actions;

export default authSlice.reducer;
