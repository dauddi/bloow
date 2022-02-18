import { configureStore } from "@reduxjs/toolkit";
import songsReducer from "./slices/songsSlice";
import authReducer from "./slices/authSlice";

const store = configureStore({
	reducer: {
		songs: songsReducer,
		auth: authReducer,
	},
});

export default store;
