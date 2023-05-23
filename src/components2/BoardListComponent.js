import React, { useState } from "react";
import "./boardlist.css";

function BoardListComponent(props) {
  //function component에서 상태값을 관리하고자 한다.
  //상태값을 관리 : 변수의 값이 변하면 ui가 자동으로 변경된다.

  const [board, setBoard] = useState({});
  const [boardList, setBoardList] = useState([]);

  const onChangeValue = (e) => {
    setBoard({ ...board, [e.target.name]: e.target.value });
  };

  const handleAddBoard = (e) => {
    setBoardList([...boardList, board]);
  };

  const handleAddBoard2 = (e) => {
    var board = {};
    board.bno = document.querySelector("[name='bno']").value;
    board.title = document.querySelector("[name='title']").value;
    board.content = document.querySelector("[name='content']").value;
    board.writer = document.querySelector("[name='writer']").value;

    setBoardList([...boardList, board]);

    console.log(board);
  };

  return (
    <div>
      <form onChange={onChangeValue}>
        <h1>게시글 등록</h1>
        <label>
          <span>bno</span>
          <input type="number" name="bno" />
        </label>
        <label>
          <span>title</span>
          <input type="text" name="title" />
        </label>
        <label>
          <span>content</span>
          <input type="text" name="content" />
        </label>
        <label>
          <span>writer</span>
          <input type="text" name="writer" />
        </label>
        <div>
          <input type="button" value="등록1" onClick={handleAddBoard} />
          <input type="button" value="등록2" onClick={handleAddBoard2} />
        </div>
      </form>
      <hr />
      <table>
        <thead>
          <tr>
            <th>bon</th>
            <th>title</th>
            <th>contents</th>
            <th>writer</th>
          </tr>
        </thead>
        <tbody>
          {boardList.map((board, index) => (
            <TableRowComponent key={index} board={board} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

function TableRowComponent({ board, index }) {
  return (
    <tr>
      <TableColumnComponent data={board.bno} />
      <TableColumnComponent data={board.title} />
      <TableColumnComponent data={board.content} />
      <TableColumnComponent data={board.writer} />
    </tr>
  );
}

function TableColumnComponent({ data }) {
  return <td>{data}</td>;
}

export default BoardListComponent;
