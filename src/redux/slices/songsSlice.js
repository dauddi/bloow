import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	songs: [],
	playQueue: [],
	activeSongInQueue: {
		song: {},
		isPlaying: false,
	},
	favorites: [],
};

const songsSlice = createSlice({
	name: "songs",
	initialState,
	reducers: {
		addToStoreSongsArray: (state, { payload }) => {
			state.songs = [...payload];
		},
		addSongToQueue: (state, { payload }) => {
			state.playQueue = [...state.playQueue, payload];
		},
		playSong: (state, { payload }) => {
			let playQueueLength = state.playQueue.length;
			state.playQueue = [...state.playQueue, payload];
			state.activeSongInQueue = {
				song: state.playQueue[playQueueLength],
				isPlaying: true,
			};
		},
		pauseSong: (state) => {
			state.activeSongInQueue = {
				...state.activeSongInQueue,
				isPlaying: false,
			};
		},
		addSongToFavorites: (state, { payload }) => {
			state.favorites = [payload, ...state.favorites];
		},
	},
});

export const {
	addToStoreSongsArray,
	playSong,
	pauseSong,
	addSongToQueue,
	addSongToFavorites,
} = songsSlice.actions;

export default songsSlice.reducer;
