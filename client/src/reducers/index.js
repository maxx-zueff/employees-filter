import { combineReducers } from "redux";
import employeeReducer from "./employee";
import sorterReducer from "./sorter";
import filterReducer from "./filter";

const reducers = combineReducers({
  employeeState: employeeReducer,
  sorterState: sorterReducer,
  filterState: filterReducer,
});

export default reducers;
