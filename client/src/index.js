import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import router from "./router"
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import '@fortawesome/fontawesome-free/css/fontawesome.min.css';

// import App from "./App";

// import Main from "./components/layouts/Main";
// import Table from "./components/containers/Table";
import reportWebVitals from "./reportWebVitals";


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    	{router}
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
