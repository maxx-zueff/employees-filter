import { combineReducers } from "redux";
import employeeReducer from "./employee";
import sorterReducer from "./sorter";
import filterReducer from "./filter";
import profileReducer from "./profile";

const reducers = combineReducers({
  employeeState: employeeReducer,
  sorterState: sorterReducer,
  filterState: filterReducer,
  profileState: profileReducer
});

export default reducers;
