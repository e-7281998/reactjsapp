import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function BoarDetail(props) {
  const { bno } = useParams();
  const [board, setBoard] = useState({});

  useEffect(() => {
    axios({
      method: "get",
      url: `/rest/webboard/view.do/${bno}`,
      // data: board,
    })
      .then((responseData) => {
        console.log(responseData.data);
        setBoard(responseData.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [bno]);

  return (
    <div>
      <p>BoarDetail</p>
      <label>
        <span>bno</span>
        <input defaultValue={board.bno} readOnly />
      </label>
      <label>
        <span>title</span>
        <input defaultValue={board.title} name="title" readOnly />
      </label>
      <label>
        <span>content</span>
        <input defaultValue={board.content} name="content" readOnly />
      </label>
      <label>
        <span>writer</span>
        <input defaultValue={board.writer} name="writer" readOnly />
      </label>
      <label>
        <span>regdate</span>
        <input defaultValue={board.regdate} readOnly />
      </label>
      <Link to="/board/list">
        <button>리스트로 이동</button>
      </Link>
    </div>
  );
}

export default BoarDetail;
