const initState = {
  name: false,
  birthday: false,
};

const sorterReducer = function (state = initState, action) {
  switch (action.type) {
    case "TOGGLE_NAME":
      return { ...state, name: action.name };
    case "TOGGLE_BIRTHDAY":
      return { ...state, birthday: action.birthday };
  }
  return state;
};

export default sorterReducer;
