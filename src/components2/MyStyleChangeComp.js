import React, { useState } from "react";

function MyStyleChangeComp(props) {
  const [color, setColor] = useState("black");
  const [myStyle, setMyStyle] = useState({
    color: "pink",
    border: "2px dotted pink",
  });

  const handleColorChange = (e) => {
    var targetContet = e.target.innerHTML;
    setColor(targetContet);
    setMyStyle({
      color: targetContet,
      border: `2px dotted  ${targetContet}`,
    });
  };

  return (
    <div>
      <h1 style={myStyle}>색상 변경하기... {color} </h1>
      <h1 style={{ color: color }}>색상 변경하기2 </h1>
      {/* 값과 속성명이 같으면 한번만 사용해도 됨 */}
      <h1 style={{ color }}>색상 변경하기2 </h1>
      <>
        <button onClick={handleColorChange}>lightblue</button>
        <button onClick={handleColorChange}>orange</button>
        <button onClick={handleColorChange}>blue</button>
      </>
    </div>
  );
}

export default MyStyleChangeComp;
