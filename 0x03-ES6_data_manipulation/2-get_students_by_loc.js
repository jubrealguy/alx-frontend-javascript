export default function getStudentsByLocation(arr, str) {
    if (!Array.isArray(arr)) {
        return []
    }
    const filtered_arr = arr.filter((item) => {
        return item.location === str
    })
    return filtered_arr
}