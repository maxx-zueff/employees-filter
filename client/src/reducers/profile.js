const initState = {
  id: "",	
  name: "",
  role: "",
  role_ru: "",
  phone: "",
  birthday: "",
  isArchive: "",
  isEnable: false
};

const profileReducer = function (state = initState, action) {
	switch (action.type) {
		case "GET_NAME":
			return {...state, name: action.name}
		case "GET_ID":
			return {...state, id: action.id}
		case "GET_ROLE":
			return {...state, role: action.role}
		case "GET_ROLE_RU":
			return {...state, role_ru: action.role_ru}
		case "GET_PHONE":
			return {...state, phone: action.phone}
		case "GET_BIRTHDAY":
			return {...state, birthday: action.birthday}
		case "GET_ARCHIVE":
			return {...state, isArchive: action.isArchive}
		case "SET_ENABLE":
			return {...state, isEnable: action.isEnable}				
	}

	return state;
}

export default profileReducer;