import React from "react";

const Light = ({ room, on }) => {
  console.log(room, on);
  return <div>{on ? "💡" : "⬛"}</div>;
};

//React.memo() : 렌더링된 화면을 기억하고, 변경되었을때만 리렌더링
export default React.memo(Light);
// export default Light;
