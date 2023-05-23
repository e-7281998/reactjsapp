import React from "react";
import "components1/external.css";

function MyJSXTest(props) {
  const inlineStyle = {
    border: "3px dotted blue",
    color: "orange",
    fontSize: "30px",
  };
  const test1 = "React... JSX문법 연습";
  const arr = [
    "java",
    "sql",
    "html",
    "css",
    "javascript",
    "react",
    "jquery",
    "jsp/Servlet",
    "Spring",
  ];
  const arrList = arr.map((item, index) => <li key={index}>{item}</li>);

  return (
    <div>
      <h1 className="myStyle2">{test1}</h1>
      <ul style={inlineStyle}>{arrList}</ul>
      <hr />
      <ul
        style={{
          border: "3px dotted blue",
          color: "orange",
          fontSize: "30px",
        }}
      >
        {arr.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default MyJSXTest;
