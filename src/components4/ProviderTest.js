import React from "react";
import { useContext } from "react";
//createContext를 상속받은 컴포넌트임..
import { CounterContext } from "./CounterProvider";

const CountLabel = () => {
  //Provider된 값들 중 필요한 값만 골라서 사용하기
  //username의 경우 PlusButton에서 변경해도 CountLabel의 값이 같이 변경됨. (Global영역이므로 - contextAPI)
  const { count, username, mystyle } = useContext(CounterContext);

  return (
    <div style={mystyle}>
      <p>{count}</p>
      <p>이름은 {username}</p>
    </div>
  );
};

const PlusButton = () => {
  var { count, plusCount, minusCount, username, mystyle, setMystyle } =
    useContext(CounterContext);

  const handleBtnClick = () => {
    if (count % 2 === 0) setMystyle({ border: "3px solid blue" });
    else setMystyle({ border: "3px solid green" });
  };

  return (
    <div style={mystyle}>
      <p>이름은 {username}</p>
      <button style={mystyle} onClick={plusCount}>
        증가
      </button>
      <button style={mystyle} onClick={minusCount}>
        감소
      </button>
      <button style={mystyle} onClick={handleBtnClick}>
        스타일수정
      </button>
    </div>
  );
};
const NameChange = () => {
  const { username, setUsername, mystyle } = useContext(CounterContext);
  return (
    <div style={mystyle}>
      <p>이름은 {username}</p>
      <input onChange={(e) => setUsername(e.target.value)} />
    </div>
  );
};
export { CountLabel, PlusButton, NameChange };
