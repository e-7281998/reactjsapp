//1. 버튼 클릭시 숫자가 증가, 감소하기 (리액트 변수 값의 상태값을 관리, UI 그리기)

import React, { useState, useCallback, useRef, useReducer } from "react";

const initMember = [
  {
    memberid: 1,
    membername: "홍길동1",
    email: "hongGD1@gmail.com",
    active: true,
  },
  {
    memberid: 2,
    membername: "홍길동2",
    email: "hongGD2@gmail.com",
    active: true,
  },
  {
    memberid: 3,
    membername: "홍길동3",
    email: "hongGD3@gmail.com",
    active: false,
  },
];

//관리하는 data : member, memberList
const stateMember = {
  member: { membername: "", email: "" },
  memberList: initMember,
};

//useState : component 내에서 상태 관리
//useReducer component외부에서 상태관리 (count 상태관리)
function reducer1(state, action) {
  //어떤일을 할지 type에 저장해서 넘어옴
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    case "RESET":
      return 0;
    default:
      return state;
  }
}

function ReducerTestComponent(props) {
  //reducer1가 상태를 관리하도록 함
  // dispatcher1를 통해 reducer1을 호출함
  const [count, dispatcher1] = useReducer(reducer1, 0);

  const handleCount = useCallback(
    (e) => {
      if (e.target.name === "increment") dispatcher1({ type: "INCREMENT" });
      else if (e.target.name === "decrement")
        dispatcher1({ type: "DECREMENT" });
      else dispatcher1({ type: "RESET" });
    },
    [count]
  );

  //member, memberList
  const [member, setMember] = useState({}); //obj
  const [memberList, setMemeberList] = useState(initMember.reverse()); //배열

  const nextMemberId = useRef(4);

  //등록, 수정, 삭제 , 목록보기
  //1. 등록
  const handleChange = (e) => {
    //방법2
    const { name, checked, value } = e.target;
    setMember({ ...member, [name]: name === "active" ? checked : value });
  };

  const handleMemberAdd = () => {
    const newMember = { ...member, memberid: nextMemberId.current };
    setMemeberList([newMember, ...memberList]);
    //set은 비동기이므로 다음과 같이 set을 연속으로 사용하면 값이 들어간다고 보장 못함... 그러므로 위와같이 사용하기
    // setMember({ ...member, memberid: nextMemberId.current });
    // setMemeberList([...memberList, member]);
    nextMemberId.current += 1;
  };

  //member의 active 변경하기
  const handleToggle = useCallback(
    (mid) => {
      // ...mem : 해당 멤버의 기존 정보는 유지해야하므로..
      setMemeberList(
        memberList.map((mem) =>
          mem.memberid === mid ? { ...mem, active: !mem.active } : mem
        )
      );
    },
    [memberList]
  );

  //member 지우기... memberList에서 mid가 같지 않은것만 남긴다.
  const handleDelete = (mid) => {
    setMemeberList(memberList.filter((mem) => mem.memberid !== mid));
  };

  return (
    <div className="container">
      <MyCounter count={count} handleCount={handleCount} />
      <CreateMember
        handleChange={handleChange}
        handleMemberAdd={handleMemberAdd}
      />
      <MemberList
        memberList={memberList}
        handleDelete={handleDelete}
        handleToggle={handleToggle}
      />
    </div>
  );
}

const MemberList = ({ memberList, handleDelete, handleToggle }) => {
  return (
    <table border="1">
      <thead>
        <tr>
          <td>아이디</td>
          <td>이름</td>
          <td>이메일</td>
          <td>active</td>
          <td>수정</td>
        </tr>
      </thead>
      <tbody>
        {memberList &&
          memberList.map((item, index) => (
            <tr key={index}>
              <td>{item.memberid} </td>
              <td>{item.membername}</td>
              <td>{item.email}</td>
              {/* <td>{item.active.toString()}</td> */}
              <td style={{ color: item.active ? "red" : "" }}>
                {item.active ? "true" : "false"}
              </td>
              <td>
                <button onClick={() => handleDelete(item.memberid)}>
                  삭제
                </button>
                <button onClick={() => handleToggle(item.memberid)}>
                  Toggle
                </button>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

function CreateMember({ handleChange, handleMemberAdd }) {
  return (
    <div>
      <label>
        <span>이름</span>
        <input name="membername" onChange={handleChange} />
      </label>
      <label>
        <span>이메일</span>
        <input name="email" onChange={handleChange} />
      </label>
      <label>
        <span>active</span>
        <input type="checkbox" name="active" onChange={handleChange} />
      </label>
      <button onClick={handleMemberAdd}>멤버 추가하기</button>
    </div>
  );
}

function MyCounter({ count, handleCount }) {
  return (
    <div>
      <p>Count : {count}</p>
      <button name="increment" onClick={handleCount}>
        +1
      </button>
      <button name="decrement" onClick={handleCount}>
        -1
      </button>
      <button name="reset" onClick={handleCount}>
        초기화
      </button>
    </div>
  );
}

export default ReducerTestComponent;
