export default function getStudentIdsSum(arr) {
  return arr.reduce((total, current) => total + current.id, 0);
}
