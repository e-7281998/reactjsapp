import React, { useState } from "react";

function MyCounterFunctionComp(props) {
  //Hook : useState(), useEffect(), useCallback()
  //top level에서만 가능
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("function 컴포넌트 이용한 Counter");

  const handleClick = (e) => {
    //일반함수에서 const [count, setCount] = useState(0) 은 불가... toplevel에서만 사용 가능
    var btnContent = e.target.innerHTML;

    setMessage(btnContent);

    if (btnContent == "증가") {
      setCount(count + 1);
    } else {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <p>count : {count}</p>
      <p> message : {message}</p>
      <>
        <button onClick={handleClick}>증가</button>
        <button onClick={handleClick}>감소</button>
        <button
          onClick={(e) => {
            setCount(count + 1);
            setMessage(e.target.innerHTML);
          }}
        >
          증가
        </button>
        <button
          onClick={(e) => {
            setCount(count - 1);
            setMessage(e.target.innerHTML);
          }}
        >
          감소
        </button>
      </>
    </div>
  );
}

export default MyCounterFunctionComp;
