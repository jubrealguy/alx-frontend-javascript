export default function getStudentIdsSum(arr) {
    if (!Array.isArray(arr)) {
        return
    }
    const newArr = []
    arr.map((item) => {
        newArr.push(item.id)
    })
    return newArr.reduce((total, current) => {return total + current}, 0)
}