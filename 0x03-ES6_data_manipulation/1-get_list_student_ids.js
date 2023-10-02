export default function getListStudentIds(arr) {
    if (!Array.isArray(arr)) {
        return []
    }
    const idArr = []
    arr.map((item) => {
        idArr.push(item.id)
    })
    return idArr;
}