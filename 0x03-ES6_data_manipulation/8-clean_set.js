export default function cleanSet(set, startString) {
  if (typeof set !== 'object' || typeof startString !== 'string' || startString.length === 0) {
        return ''
    }
    const arr = [...set]
    const newArr = []
    arr.map((item) => {
        if (item && item.startsWith(startString)) {
            newArr.push(item.slice(startString.length))
        }
    })
    return newArr.join('-');
  ;
}
