import React from "react";
import ReactDOM from "react-dom/client";
import "App4.css";
import App from "./App";
import reportWebVitals from "reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import App5 from "App5";
import { CounterProvider } from "components4/CounterProvider";
import { CountLabel, NameChange, PlusButton } from "components4/ProviderTest";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import StateTestComponent from "components4/StateTestComponent";
import ReducerTestComponent2 from "components4/ReducerTestComponent2";
import BoardHome from "boardComponents/BoardHome";
import SmartHome from "components3/SmartHome";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  // <MyJSXTest />
  // <WebBoardList />
  // <App3 />
  <div className="container">
    <BrowserRouter>
      <Routes>
        <Route path="/smart" element={<SmartHome />} />
        <Route path="/board/*" element={<BoardHome />} />
        <Route path="/state" element={<StateTestComponent />}></Route>
        <Route path="/reduce" element={<ReducerTestComponent2 />}></Route>
        <Route
          path="/provide"
          element={
            <CounterProvider>
              <CountLabel />
              <PlusButton />
              <NameChange />
            </CounterProvider>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  </div>

  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
