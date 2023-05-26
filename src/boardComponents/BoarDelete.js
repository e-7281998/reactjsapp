import axios from "axios";
import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function BoarDelete(props) {
  const location = useLocation();
  const navi = useNavigate();
  const bno = location.state.boardid;

  useEffect(() => {
    axios({
      method: "delete",
      url: `/rest/webboard/delete.do/${bno}`,
    })
      .then((responeData) => {
        alert(responeData);
        //조회 페이지로 이동하기
        navi("/board/list");
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <div>
      <p>BoarDelete</p>
    </div>
  );
}

export default BoarDelete;
