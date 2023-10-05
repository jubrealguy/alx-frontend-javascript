interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const studentOne: Student = {
    firstName: "Adebayo",
    lastName: "Jubreel",
    age: 32,
    location: "Lagos"
}

const studentTwo: Student = {
    firstName: "Oladimeji",
    lastName: "Adetunji",
    age: 31,
    location: "Ibadan"
}

const studentsList: Student[] = [studentOne, studentTwo]

const table = document.createElement('table')
const tbody = document.createElement('tbody')

table.appendChild(tbody)

studentsList.forEach((student: Student) => {
    const row = document.createElement('tr')
    const fnameCell = document.createElement('td')
    const locationCell = document.createElement('td')

    fnameCell.textContent = student.firstName
    locationCell.textContent = student.location

    row.appendChild(fnameCell)
    row.appendChild(locationCell)
    tbody.appendChild(row)
})

document.body.appendChild(table)