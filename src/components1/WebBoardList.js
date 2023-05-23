// webboard 여러건 table로 보여주기 ...Component로 만들기
import React from "react";
import "./webboardlist.css";
import Button from "react-bootstrap/Button";

function WebBoardList(props) {
  const boards = [];
  for (var i = 1; i <= 10; i++) {
    boards.push({
      bno: i,
      title: "제목" + i,
      contents: "내용" + i,
      writeer: "작성자" + i,
    });
  }

  return (
    <>
      <h1>webboard 여러건 table로 보여주기 ...Component로 만들기</h1>
      <>
        <Button variant="outline-primary">Primary</Button>{" "}
        <Button variant="outline-secondary">Secondary</Button>{" "}
        <Button variant="outline-success">Success</Button>{" "}
        <Button variant="outline-warning">Warning</Button>{" "}
        <Button variant="outline-danger">Danger</Button>{" "}
        <Button variant="outline-info">Info</Button>{" "}
        <Button variant="outline-light">Light</Button>{" "}
        <Button variant="outline-dark">Dark</Button>
      </>
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
          {boards.map((board, index) => (
            <tr key={index}>
              <td>{board.bno}</td>
              <td>{board.title}</td>
              <td>{board.contents}</td>
              <td>{board.writeer}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default WebBoardList;
