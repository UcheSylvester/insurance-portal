import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// fonts
import "./assets/fonts/segoe-ui/segoe-ui.woff";
import "./assets/fonts/segoe-ui/segoe-ui-bold.woff";
import "./assets/fonts/segoe-ui/segoe-ui-bold-italic.woff";
import "./assets/fonts/segoe-ui/segoe-ui-italic.woff";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
