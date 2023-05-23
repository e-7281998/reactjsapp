import React, { useEffect, useState } from "react";

function FunctionComponentLifeCycle(props) {
  const [fruit, setFruit] = useState("");
  const [food, setFood] = useState("");

  console.log("*************************");

  useEffect(() => {
    console.log("Rendering 될 때마다 실행됨");
  });

  useEffect(() => {
    console.log("최초 마운트시 1회 실행됨");
  }, []);

  useEffect(() => {
    console.log("최초 마운트시 실행, fruit이 변경될 때마다 실행됨");

    return () => {
      console.log("지워질때 어떤 작업을 할 것인지 작성함");
    };
  }, [fruit]);

  useEffect(() => {
    console.log("최초 마운트시 실행, fruit 또는 food가 변경될 때마다 실행됨");
  }, [fruit, food]);

  const handleChange = (e) => {
    setFruit(e.target.value);
  };

  const handleChange2 = (e) => {
    setFood(e.target.value);
  };

  return (
    <div>
      <p>Function 컴포넌트 라이프 사이클 연습하기 - {fruit}</p>
      <label>
        <span>Fruilt :</span>
        <input onChange={handleChange} />
      </label>
      <label>
        <span>Food :</span>
        <input onChange={handleChange2} />
      </label>
    </div>
  );
}

export default FunctionComponentLifeCycle;
