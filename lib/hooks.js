import songs from "./data";

export const useUser = () => {
	let isLoading = true;
	let data = false;
	let user = {
		name: "Dauddi Dev",
		email: "test@test.com",
		avatar:
			"https://res.cloudinary.com/dauddi/image/upload/v1644646682/profile_ztudmq.jpg",
	};

	setTimeout(() => {
		data = { ...user };
		isLoading = true;
	}, 1000);

	return { data, isLoading };
};

export const useSongs = () => {
	return songs;
};
