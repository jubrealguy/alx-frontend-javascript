/**
 * Creates an array of employees by iterating through the
 * provided report object.
 *
 * @param {Object} report - The report object containing employee information.
 * @return {Array} An array containing all employees.
 */
export default function createIteratorObject(report) {
  let allEmployees = [];
  for (const item of Object.values(report.allEmployees)) {
    allEmployees = [
      ...allEmployees,
      ...item,
    ];
  }
  return allEmployees;
}
