const initState = {
  employee: {},
  employees: [],
  roles: [],
};

const employeeReducer = function (state = initState, action) {
  switch (action.type) {
    case "GET_EMPLOYEE":
      return { ...state, employee: action.employee };
    case "GET_EMPLOYEES":
      return { ...state, employees: action.employees };
    case "GET_ROLES":
      return { ...state, roles: action.roles };
  }

  return state;
};

export default employeeReducer;
