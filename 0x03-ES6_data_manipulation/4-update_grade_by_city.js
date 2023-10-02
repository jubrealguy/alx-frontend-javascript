export default function updateStudentGradeByCity(array, city, newGrades) {
    const filtered = array.filter((student) => student.location === city )
    for (const student of filtered) {
        student['grade'] = 'N/A'
    }
    filtered.map((student) => {
        for (const score of newGrades) {
            if (score.studentId === student.id) {
                student['grade'] = score.grade
            }
        }
        return student
    })
    
    return filtered
}