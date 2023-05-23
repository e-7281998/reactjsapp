import MyCounter from "components2/MyCounter";
import React from "react";
import "./App4.css";
import MyCounterFunctionComp from "components2/MyCounterFunctionComp";
import MyStyleChangeComp from "components2/MyStyleChangeComp";
import MemberComponent from "components2/MemberComponent";
import FunctionComponent2 from "components2/FunctionComponent2";
import BoardListComponent from "components2/BoardListComponent";
import { ClassCom1 } from "components2/ClassComponent1";

function App4(props) {
  return (
    <div>
      <ClassCom1 />
      {/* <BoardListComponent /> */}
      {/* <MyCounter></MyCounter>
      <hr />
      <MyCounterFunctionComp />
      <hr />
      <MyStyleChangeComp />
      <hr />
      <MemberComponent />
      <hr />
      <FunctionComponent2 /> */}
    </div>
  );
}

export default App4;
