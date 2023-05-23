import { ClassCom1, ClassCom2 } from "components2/ClassComponent1";
import FunctionComponent2, {
  score1,
  score2,
  FunctionComponent1,
} from "components2/FunctionComponent1";
import React from "react";
import propTypes from "prop-types";
import "./App3.css";

function App3(props) {
  console.log("score = " + (score1 + score2));
  const arr = ["HTML", "CSS", "javascript", "ReactJS"];

  return (
    <div>
      <FunctionComponent1
        title="f1"
        content="function comp1"
        price={100}
        subject={arr}
        color="red"
      >
        AA
      </FunctionComponent1>
      <FunctionComponent2
        title="f2"
        content="function comp2"
        price={200}
        subject={arr}
        color="orange"
      >
        BB
      </FunctionComponent2>
      <p>score1 : {score1}</p>
      <p>score2 : {score2}</p>
      <ClassCom1
        title="c1"
        content="class comp1"
        price={300}
        subject={arr}
        color="green"
      >
        CC
      </ClassCom1>
      <ClassCom2
        title="c2"
        content="class comp2"
        price={400}
        subject={arr}
        color="skyblue"
      >
        DD
      </ClassCom2>
      <FunctionComponent2>function 속성값 할당 안함</FunctionComponent2>
      <ClassCom1>class 속성값 할당 안함</ClassCom1>
      <ClassCom2></ClassCom2>
    </div>
  );
}

//deafult 값 정의하기
FunctionComponent2.defaultProps = {
  title: "title 값 없음",
  content: "content값 없음",
  price: 9999,
  color: "purple",
};

FunctionComponent1.defaultProps = {
  color: "purple",
};

ClassCom1.defaultProps = {
  title: "ClassCom1 title 값 없음",
  content: "ClassCom1 content값 없음",
  price: 6060,
  color: "purple",
};

ClassCom2.defaultProps = {
  color: "purple",
};

//prop-types로 타입 체크하기
FunctionComponent1.propTypes = {
  //title은 stirng이어햐 함
  title: propTypes.string,
  content: propTypes.string,
  price: propTypes.number,
};

export default App3;
