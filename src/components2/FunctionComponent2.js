import React, { useState } from "react";

function FunctionComponent2(props) {
  const [userName, setuserName] = useState("김기범");
  const [message, setMessage] = useState("귀여워");

  const [fruit, setFruit] = useState("");
  const [fruitList, setFruitList] = useState(["복숭아", "딸기", "자두"]);

  const handleNameChange = (e) => {
    setuserName(e.target.value);
  };
  var handleMessageChange = (e) => {
    setMessage(e.target.value);
  };
  const handleClear = (e) => {
    setuserName("");
    setMessage("");
  };

  //
  const handlefruitAdd = (e) => {
    setFruit(e.target.value);
  };
  const handleCartAppend = (e) => {
    setFruitList([...fruitList, fruit]);
    setFruit("");
  };

  return (
    <>
      <div>
        <h1>이름 : {userName}</h1>
        <h1>메시지 : {message}</h1>
        <input
          type="text"
          placeholder="이름을 입력하세요"
          onChange={handleNameChange}
          value={userName}
        />
        <input
          type="text"
          placeholder="메시지를 입력하세요"
          onChange={handleMessageChange}
          value={message}
        />
        <button onClick={handleClear}>지우기</button>
      </div>
      <div>
        <input onChange={handlefruitAdd} value={fruit} />
        <button onClick={handleCartAppend}>장바구니 추가</button>
        <ul>
          {fruitList.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default FunctionComponent2;
