const initState = {
  filtered: [],
  role: "",
  archive: "",
  selected_role: "",
  selected_role_ru: "",
};

const filterReducer = function (state = initState, action) {
  switch (action.type) {
    case "FILTER_EMPLOYEES":
      return { ...state, filtered: action.filtered };
    case "FILTER_ROLE":
      return { ...state, role: action.role };
    case "FILTER_ARCHIVE":
      return { ...state, archive: action.archive };
    case "SELECT_ROLE":
      return {
        ...state,
        selected_role: action.selected_role,
        selected_role_ru: action.selected_role_ru,
      };
  }
  return state;
};

export default filterReducer;
