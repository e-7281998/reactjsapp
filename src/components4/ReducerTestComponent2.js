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

const initMember2 = {
  input: { membername: "", email: "", active: false },
  memberList: initMember,
};
//state는 항상 initMember2와 같은 모양이아야 함.
//그러므로 return형태는 initMember2의 형태여야 함.
//state : reducer가 관리하는 data
function reducer2(state, action) {
  switch (action.type1) {
    case "CHANGE_INPUT": //값이 입력되는 경우 onchange에서 호출
      return {
        ...state,
        input: {
          ...state.input,
          [action.name]:
            action.name === "active" ? action.checked2 : action.value,
        },
      };
    case "CREATE_MEMBER": //멤버 추가시 호출 [...memberList, action.member] //concat : 기존 배열에 파라미터 값 추가
      return {
        input: state.input,
        memberList: state.memberList.concat(action.member),
      };
    case "TOGGLE_MEMBER": //active 변경
      return {
        ...state,
        memberList: state.memberList.map((mem) =>
          mem.memberid === action.memberid
            ? { ...mem, active: !mem.active }
            : mem
        ),
      };
    case "REMOVE_MEMBER":
      return {
        ...state,
        memberList: state.memberList.filter(
          (mem) => mem.memberid !== action.memberid
        ),
      };
    default:
      return state;
  }
}

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

function ReducerTestComponent2(props) {
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
  //Reducer 이용한 상태관리
  //상태관리 메서드는 reducer2고, 상태관리 대상은 state고,
  //상태관리 메서드 호출은 dispatcher2, 상태관리 대상의 초기값은 initMember2
  const [state, dispatcher2] = useReducer(reducer2, initMember2);
  const { memberList } = state; //배열 (값 추출?) //추출안하면 state.memberList라고 사용해야함
  const { membername, email, active } = state.input; //문자값 (추출 ?) //state.input.membername이라고 쓰기 싫어서...

  const nextMemberId = useRef(4);

  //등록, 수정, 삭제 , 목록보기
  //1. 등록
  //input type이 text이면 name, value
  //input type이 checkbox면 name, value, checked
  const handleChange = (e) => {
    const { name, checked, value } = e.target;

    console.log("name :" + name + " active: " + checked + " value: " + value);

    dispatcher2({
      type1: "CHANGE_INPUT",
      name: name,
      checked2: checked,
      value: value,
    });
  };

  const handleMemberAdd = () => {
    if (membername === "" || email === "") return;
    var newMember = {
      memberid: nextMemberId.current,
      membername: membername,
      email: email,
      active: active,
    };
    dispatcher2({ type1: "CREATE_MEMBER", member: newMember });
    nextMemberId.current += 1;
  };

  //member의 active 변경하기
  const handleToggle = (mid) => {
    dispatcher2({ type1: "TOGGLE_MEMBER", memberid: mid });
  };

  //member 지우기... memberList에서 mid가 같지 않은것만 남긴다.
  const handleDelete = (mid) => {
    dispatcher2({ type1: "REMOVE_MEMBER", memberid: mid });
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

export default ReducerTestComponent2;
