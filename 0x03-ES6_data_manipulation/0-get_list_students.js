export default function getListStudents() {
  const ind = [1, 2, 5];
  const fname = ['Guillaume', 'James', 'Serena'];
  const loc = ['San Francisco', 'Columbia', 'San Francisco'];
  const arr = [];
  for (const i of ind) {
    arr.push({ id: ind[i], firstName: fname[i], location: loc[i] });
  }
  return arr;
}
