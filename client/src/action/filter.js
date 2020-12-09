export function filterEmployees(filtered) {
  return {
    type: "FILTER_EMPLOYEES",
    filtered,
  };
}

export function filterRole(role) {
  return {
    type: "FILTER_ROLE",
    role,
  };
}

export function selectRole(selected_role, selected_role_ru) {
  return {
    type: "SELECT_ROLE",
    selected_role,
    selected_role_ru,
  };
}

export function filterArchive(archive) {
  return {
    type: "FILTER_ARCHIVE",
    archive,
  };
}
