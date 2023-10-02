export default function updateStudentGradeByCity(array, city, newGrades) {
  const filtered = array.filter((student) => student.location === city);
  for (const student of filtered) {
    student.grade = 'N/A';
  }
  filtered.map((student) => {
    const stud = student;
    for (const score of newGrades) {
      if (score.studentId === stud.id) {
        stud.grade = score.grade;
      }
    }
    return stud;
  });

  return filtered;
}
