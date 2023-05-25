//1. 버튼 클릭시 숫자가 증가, 감소하기 (리액트 변수 값의 상태값을 관리, UI 그리기)

import React, { useState, useCallback, useRef } from "react";

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

function StateTestComponent(props) {
  const [count, setCount] = useState(0);

  const handleCount = useCallback(
    (e) => {
      if (e.target.name === "increment") setCount(count + 1);
      else if (e.target.name === "decrement") setCount(count - 1);
      else setCount(0);
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

    //방법1
    //...member : 다른 속성이 추가될 때 기존 속성은 유지
    // setMember({
    //   ...member,
    //   [e.target.name]:
    //     e.target.name === "active" ? e.target.checked : e.target.value,
    // });
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

export default StateTestComponent;
