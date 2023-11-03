import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import MyCalendar from "./components/calender";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <MyCalendar />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
