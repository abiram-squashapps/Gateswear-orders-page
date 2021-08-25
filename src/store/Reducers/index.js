import { combineReducers } from "redux";
import reducer from "../reduer";
import globalFilterReducer from "./globalFilter";

export const rootReducer = combineReducers({
  search: globalFilterReducer,
  buyers: reducer,
});
