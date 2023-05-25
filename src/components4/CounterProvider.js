import React, { useState } from "react";
import { createContext } from "react";

//createContext로 공유영역 만듬
const CounterContext = createContext();

const CounterProvider = (props) => {
  const [count, setCount] = useState(0);
  const [username, setUsername] = useState("");
  const [mystyle, setMystyle] = useState({
    border: "3px solid green",
    color: "black",
  });
  const plusCount = () => {
    setCount(count + 1);
  };
  const minusCount = () => {
    setCount(count - 1);
  };

  //변수명과 값이 같으면 굳이 2번 작성하지 않아도 됨
  //Provider : 제공하고 싶은 것.
  //CounterProvider의 자식들은 value에 등록된 값들을 공유해서 사용하게 됨(global)
  //자식들은 모든 값을 다 상속{ } 받지 않아도 됨. 필요한 값들만 골라서 사용할 수 있음
  return (
    <div>
      <CounterContext.Provider
        value={{
          count: count,
          plusCount,
          minusCount,
          username,
          setUsername,
          mystyle,
          setMystyle,
        }}
      >
        {props.children}
      </CounterContext.Provider>
    </div>
  );
};
export { CounterContext, CounterProvider };
