export function getEmployees(employees) {
  return {
    type: "GET_EMPLOYEES",
    employees,
  };
}

export function getEmployee(employee) {
  return {
    type: "GET_EMPLOYEE",
    employee,
  };
}

export function getRoles(roles) {
  return {
    type: "GET_ROLES",
    roles,
  };
}
