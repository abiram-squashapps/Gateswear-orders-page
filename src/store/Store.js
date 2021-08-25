import { createStore } from "redux";
import { rootReducer } from "./Reducers";
import globalFilterReducer from "./Reducers/globalFilter";
import reducer from "./reduer";

export const store = createStore(globalFilterReducer);
