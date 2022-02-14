// Takes music duration time in seconds and formats it to min:secs
export const musicPlayerDurationHandler = (timeInSeconds) => {
	const minutes = Math.floor(timeInSeconds / 60);
	const seconds = Math.floor(timeInSeconds % 60);

	if (minutes < 10)
		return `${minutes < 10 ? `0${minutes}` : minutes}:${
			seconds < 10 ? `0${seconds}` : seconds
		}`;
};
