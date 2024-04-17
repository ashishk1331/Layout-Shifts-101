export const fakeRequest = (upperBound: number): Promise => {
	// time should be in seconds
	const time = Math.round(Math.random() * upperBound);
	const millis = time * 1000;

	return new Promise((resolve, _) => {
		setTimeout(() => {
			resolve(millis + "ms");
		}, millis);
	});
};
