import React from "react";
import { Route, Routes } from "react-router-dom";
import BoardMenu from "./BoardMenu";
import BoarRetrieve from "./BoarRetrieve";
import BoarDetail from "./BoarDetail";
import BoarUpdate from "./BoarUpdate";
import BoarInsert from "./BoarInsert";
import BoarDelete from "./BoarDelete";

function BoardHome(props) {
  return (
    <div>
      <h1>Board Home</h1>
      <Routes>
        <Route path="/" element={<BoardMenu />}></Route>
        <Route path="list" element={<BoarRetrieve />}></Route>
        <Route path="detail/:bno" element={<BoarDetail />}></Route>
        <Route path="update" element={<BoarUpdate />}></Route>
        <Route path="insert" element={<BoarInsert />}></Route>
        <Route path="delete" element={<BoarDelete />}></Route>
      </Routes>
    </div>
  );
}

export default BoardHome;
