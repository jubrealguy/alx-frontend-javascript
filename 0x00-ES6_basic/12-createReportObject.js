/**
 * Create a report object from a list of employees.
 *
 * @param {Object} employeesList - An object mapping
 * departments to lists of employees.
 * @return {Object} A report object containing all employees
 * and a method to get the number of departments.
 */
export default function createReportObject(employeesList) {
  return {
    allEmployees: {
      ...employeesList,
    },
    getNumberOfDepartments: (employeesList) =>
      Object.keys(employeesList).length,
  };
}
