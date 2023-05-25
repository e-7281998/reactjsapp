import React from "react";
import ReactDOM from "react-dom/client";
import "App4.css";
import App from "./App";
import reportWebVitals from "reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import App5 from "App5";
import { CounterProvider } from "components4/CounterProvider";
import { CountLabel, NameChange, PlusButton } from "components4/ProviderTest";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  // <MyJSXTest />
  // <WebBoardList />
  // <App3 />
  <>
    <App5 />
    <CounterProvider>
      <CountLabel />
      <PlusButton />
      <NameChange />
    </CounterProvider>
  </>

  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
