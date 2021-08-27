import { createStore } from "redux";

import globalFilterReducer from "./Reducers/globalFilter";

export const store = createStore(globalFilterReducer);
