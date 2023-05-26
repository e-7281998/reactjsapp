import React from "react";
import { Link } from "react-router-dom";

//<Link>가 <a>와 같음
function BoardMenu(props) {
  return (
    <div>
      <p>BoardMenu</p>
      <Link to="/board/list">
        <button>Board 조회</button>
      </Link>
      <Link to="/board/insert">
        <button>Board 입력</button>
      </Link>
    </div>
  );
}

export default BoardMenu;
