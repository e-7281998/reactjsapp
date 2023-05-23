import MyCounter from "components2/MyCounter";
import React, { useState } from "react";
import "./App4.css";
import MyCounterFunctionComp from "components2/MyCounterFunctionComp";
import MyStyleChangeComp from "components2/MyStyleChangeComp";
import MemberComponent from "components2/MemberComponent";
import FunctionComponent2 from "components2/FunctionComponent2";
import BoardListComponent from "components2/BoardListComponent";
import { ClassCom1 } from "components2/ClassComponent1";
import FunctionComponentLifeCycle from "components2/FunctionComponentLifeCycle";
import MyTimer from "components2/MyTimer";

function App4(props) {
  const [showYN, setShowYN] = useState(true);

  return (
    <div>
      <button
        onClick={() => {
          setShowYN(!showYN);
        }}
      >
        Timer 시작 또는 중지
      </button>
      {showYN && <MyTimer />}

      {/* <FunctionComponentLifeCycle /> */}
      {/* <ClassCom1 /> */}
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
