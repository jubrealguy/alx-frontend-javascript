export default function getStudentsByLocation(arr, str) {
  if (!Array.isArray(arr)) {
    return [];
  }
  return arr.filter((item) => item.location === str);
}
