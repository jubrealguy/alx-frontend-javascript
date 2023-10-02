export default function getListStudents() {
  const ind = [1, 2, 5];
  const fname = ['Guillaume', 'James', 'Serena'];
  const loc = ['San Francisco', 'Columbia', 'San Francisco'];
  const arr = [];
  for (const i of ind) {
    arr.push({ id: i, firstName: fname[ind.indexOf(i)], location: loc[ind.indexOf(i)] });
  }
  return arr;
}
