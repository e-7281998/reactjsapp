import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function BoarRetrieve(props) {
  const [boardList, setBoardList] = useState([]);

  useEffect(() => {
    axios({
      method: "GET",
      url: "/rest/webboard/list.do",
    })
      .then((response) => {
        //응답의 데이터에 들어있음
        console.log(response.data);
        setBoardList(response.data);
      })
      .catch((err) => {});
  }, []);

  return (
    <div className="registerBoard">
      <p>BoarRetrieve</p>
      <Link to="/board/insert">
        <button>게시글 등록하기</button>
      </Link>
      <table>
        <thead>
          <tr>
            <th>bno</th>
            <th>title</th>
            <th>content</th>
            <th>writer</th>
            <th>regdate</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {boardList.map((board, index) => (
            <tr key={index}>
              <td>
                <Link to={`/board/detail/${board.bno}`}>{board.bno}</Link>
              </td>
              <td>{board.title}</td>
              <td>{board.content}</td>
              <td>{board.writer}</td>
              <td>{board.regdate}</td>
              <td>
                <Link to="/board/update" state={{ board: board }}>
                  <button>수정</button>
                </Link>
                <Link to="/board/delete" state={{ boardid: board.bno }}>
                  <button>삭제</button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BoarRetrieve;
