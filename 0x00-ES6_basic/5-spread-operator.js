export default function concatArrays(array1, array2, string) {
	const concat_arr = [...array1, ...array2, ...string];
	return concat_arr;
}
