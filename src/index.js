import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
//import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "../node_modules/primeflex/primeflex.css";
import { Provider } from "react-redux";
import { store } from "./store/Store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
