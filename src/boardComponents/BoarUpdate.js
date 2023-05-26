import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function BoarUpdate(props) {
  const location = useLocation();
  const navi = useNavigate();
  const [board, setBoard] = useState(location.state.board);

  useEffect(() => {
    console.log(board);
  }, [board]);

  const handleChange = (e) => {
    setBoard({ ...board, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    axios({
      method: "put",
      url: "/rest/webboard/modify.do",
      data: board,
    })
      .then((responseData) => {
        navi("/board/list");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <p>BoarUpdate</p>
      <label>
        <span>bno</span>
        <input value={board.bno} readOnly />
      </label>
      <label>
        <span>title</span>
        <input value={board.title} name="title" onChange={handleChange} />
      </label>
      <label>
        <span>content</span>
        <input value={board.content} name="content" onChange={handleChange} />
      </label>
      <label>
        <span>writer</span>
        <input value={board.writer} name="writer" onChange={handleChange} />
      </label>
      <label>
        <span>regdate</span>
        <input value={board.regdate} onChange={handleChange} readOnly />
      </label>
      <button onClick={handleSave}>수정완료</button>
    </div>
  );
}

export default BoarUpdate;
