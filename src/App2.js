import React from "react";
import { Header, HeaderF1 } from "./components1/MyHeader";
// import Header from './components1/MyHeader';
import {
  MyNavigation,
  myscore,
  MyNavigation2,
} from "./components1/MyNavigation";
import MySection, { MySection2 } from "./components1/MySection";

function App2(props) {
  console.log("myscore의 값 : " + myscore);

  var subject = "";

  console.log(true && "hello"); // hello
  console.log(false && "hello"); // false
  console.log("hello" && "bye"); // bye
  console.log(null && "hello"); // null
  console.log(undefined && "hello"); // undefined
  console.log("" && "hello"); // ''
  console.log(0 && "hello"); // 0
  console.log(1 && "hello"); // hello

  const score = 90;

  return (
    <div>
      {/* 3항 연산자 */}
      {score >= 100 ? <strong>{score}Good~~~</strong> : <i>{score} 노력!!!</i>}
      {/* 조건부 렌더링 */}
      {score >= 100 && <strong>{score}Good~~~</strong>}

      <h1>{subject ? subject : "없음..."}</h1>
      {/* && : 앞의 결과가 참이면 뒷 부분 수행 */}
      <h1>{subject && "subject에 값이 있음"}</h1>
      <p>나의 점수는... ? {myscore}</p>
      <p>
        여기 : {null} {false} {undefined}
      </p>

      <Header></Header>
      <HeaderF1></HeaderF1>
      <MyNavigation></MyNavigation>
      <MyNavigation2></MyNavigation2>
      <MySection></MySection>
      <MySection2></MySection2>
    </div>
  );
}

export default App2;
