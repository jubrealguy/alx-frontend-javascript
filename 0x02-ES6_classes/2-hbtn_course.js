export default class HolbertonCourse {
    constructor(name, length, students) {
        if (typeof name === 'string' && typeof length === 'number' && Array.isArray(students)) {
            this._name = name;
            this._length = length;
            this._students = students;
        }
    }
    get name() {
        return this._name;
    }
    set name(value) {
        if (typeof value === 'string') {
            this._name = value
        }
    }
    get length() {
        return this._length;
    }
    set length(value) {
        if (typeof value === 'number') {
            this._length = value
        }
    }
    get students() {
        return this._students;
    }
    set students(value) {
        if (Array.isArray(students)) {
            this._students = value
        }
    }
}