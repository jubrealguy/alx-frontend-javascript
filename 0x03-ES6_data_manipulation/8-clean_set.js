export default function cleanSet(set, startString) {
  if (startString !== '') {
    const arr = [...set];
    const filtered = arr.filter((item) => item.startsWith(startString));
    const newArr = filtered.map((item) => item.slice(startString.length));
    return newArr.join('-');
  }
  return '';
}
