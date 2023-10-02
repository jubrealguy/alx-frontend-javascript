export default function cleanSet(set, startString) {
  if (typeof set !== 'object' || typeof startString !== 'string' || startString.length === 0) {
    return '';
  }

  const newArr = [];
  for (const item of set) {
    if (item && item.startsWith(startString)) {
      newArr.push(item.slice(startString.length));
    }
  }
  return newArr.join('-');
}
