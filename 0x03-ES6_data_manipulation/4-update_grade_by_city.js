export default function updateStudentGradeByCity(array, city, newGrades) {
    const filtered = array.filter((student) => {
           return student.location === city
    })
    filtered.map((student) => {
        student['grade'] = newGrades.filter
    })
    return filtered
}