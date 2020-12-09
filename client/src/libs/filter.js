export const filterByRole = function (employees, param) {
  if (param == "*") return employees;
  return employees.filter((doc) => doc.role.name == param);
};

export const filterByArchive = function (employees, param) {
  if (param) return employees;
  return employees.filter((doc) => doc.isArchive == param);
};

export const filter = function (employees, role, archive) {
  let result = filterByArchive(employees, archive);
  return filterByRole(result, role);
};
