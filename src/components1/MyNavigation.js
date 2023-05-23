import React from "react";

export function MyNavigation(props) {
  console.log("MyNavigation.js... MyNavigation의 component");

  return (
    <>
      <nav>
        <ul>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>JavaScript</li>
        </ul>
      </nav>
      <hr />
    </>
  );
}

export const myscore = 100;
export function MyNavigation2() {
  return (
    <div>
      <p>나의 점수는...! {myscore}</p>
      <p>MyNavigation.js 파일의 MyNavigation2 컴포넌트</p>
    </div>
  );
}
