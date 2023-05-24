import React, { useEffect, useState } from "react";

function StateTest(props) {
  var a = 100;
  var b = 200;

  //상태값이 변경되면 UI가 변경된다. (자동으로 UI rendering)
  //값 변경은 setCounter() 이용
  const [counter, setCounter] = useState(0);
  const [myName, setMyName] = useState("이진기");

  const handleIncrement = () => {
    setCounter(counter + 1);
  };
  const handleDecrement = () => {
    setCounter(counter - 1);
  };

  const handleChange = (e) => {
    setMyName(e.target.value);
  };

  //life cycle, []의존배열
  useEffect(() => {
    console.log("1. StateTest 컴포넌트가 load시(mount) 1회 발생");
  }, []);

  useEffect(() => {
    console.log(
      "2. StateTest 컴포넌트가 load시(mount) 발생, rendering될 때마다"
    );
  });

  useEffect(() => {
    console.log("3. StateTest 컴포넌트가 load시(mount 발생, counter변경시마다");
  }, [counter]);

  useEffect(() => {
    console.log(
      "4. StateTest 컴포넌트가 load시(mount 발생, counter 또는 myName변경시마다"
    );
  }, [counter, myName]);

  //React 문법 : JSX : Javascript XML : 바벨에 의해서 컴파일된다.(js > js)
  //var output = "<div></div>", render(output);
  //Root는 1개, 계층 구조 지켜야 함, 반드시 닫는 tag
  return (
    <div>
      <p>A : {a}</p>
      <p>B : {b}</p>
      <p>count 현재 값 : {counter}</p>
      <p>myName 현재 값 : {myName}</p>
      <button
        onClick={() => {
          a = a + 1;
        }}
      >
        A 증가
      </button>
      <button
        onClick={() => {
          b = b + 1;
        }}
      >
        B 증가
      </button>
      <button onClick={handleIncrement}>count 증가</button>
      <button onClick={handleDecrement}>count 감소</button>
      <input onChange={handleChange} />
    </div>
  );
}

export default StateTest;
