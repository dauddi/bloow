import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	songs: [],
	playQueue: [],
	activeSongInQueue: {
		song: {},
		isPlaying: false,
	},
	favorites: {
		isPlayingAll: false,
		songs: [],
	},
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
			if (state.favorites.songs.some((song) => song.id === payload.id)) {
				state.favorites.songs = state.favorites.songs.filter(
					(song) => song.id !== payload.id
				);
			} else {
				state.favorites.songs = [payload, ...state.favorites.songs];
			}
		},
		toggleFavoritesPlayAll: (state, { payload }) => {
			switch (payload) {
				case "play": {
					state.favorites.isPlayingAll = true;
					break;
				}
				case "pause": {
					state.favorites.isPlayingAll = false;
					break;
				}
				default: {
					break;
				}
			}
		},
	},
});

export const {
	addToStoreSongsArray,
	playSong,
	pauseSong,
	addSongToQueue,
	addSongToFavorites,
	toggleFavoritesPlayAll,
} = songsSlice.actions;

export default songsSlice.reducer;
