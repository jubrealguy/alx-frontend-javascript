var studentOne = {
    firstName: "Adebayo",
    lastName: "Jubreel",
    age: 32,
    location: "Lagos"
};
var studentTwo = {
    firstName: "Oladimeji",
    lastName: "Adetunji",
    age: 31,
    location: "Ibadan"
};
var studentsList = [studentOne, studentTwo];
var table = document.createElement('table');
var tbody = document.createElement('tbody');
table.appendChild(tbody);
studentsList.forEach(function (student) {
    var row = document.createElement('tr');
    var fnameCell = document.createElement('td');
    var locationCell = document.createElement('td');
    fnameCell.textContent = student.firstName;
    locationCell.textContent = student.location;
    row.appendChild(fnameCell);
    row.appendChild(locationCell);
    tbody.appendChild(row);
});
document.body.appendChild(table);
