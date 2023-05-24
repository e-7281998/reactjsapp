import React, { useEffect, useRef, useState } from "react";

function StateTest(props) {
  var a = 100;
  var b = 200;

  //상태값이 변경되면 UI가 변경된다. (자동으로 UI rendering)
  //값 변경은 setCounter() 이용
  const [counter, setCounter] = useState(0);
  const [myName, setMyName] = useState("이진기");
  const [myAge, setMyAge] = useState(35);

  //특정 DOM 선택을 위해 사용
  const nameRef = useRef();
  const ageRef = useRef();

  const handleIncrement = () => {
    setCounter(counter + 1);
  };
  const handleDecrement = () => {
    setCounter(counter - 1);
  };

  //
  const handleChange = (e) => {
    if (e.target.name == "mname") {
      setMyName(e.target.value);
    } else if (e.target.name == "age") {
      setMyAge(e.target.value);
    }
  };

  //ref
  const handleNameMove = () => {
    nameRef.current.focus();
  };

  const handleAgeMove = () => {
    ageRef.current.focus();
  };

  //life cycle, []의존배열
  useEffect(() => {
    console.log("1. StateTest 컴포넌트가 load시(mount) 1회 발생");
  }, []);

  useEffect(() => {
    console.log(
      "2. StateTest 컴포넌트가 load시(mount) 발생, rendering될 때마다"
    );
  });

  useEffect(() => {
    console.log("3. StateTest 컴포넌트가 load시(mount 발생, counter변경시마다");
  }, [counter]);

  useEffect(() => {
    console.log(
      "4. StateTest 컴포넌트가 load시(mount 발생, counter 또는 myName변경시마다"
    );
  }, [counter, myName]);

  //useRef는 값이 변경되지 않을 때 사용하기도 함...
  //uesRef로 관리하면 렌더링될 때 다시 초기화되지 않음...
  //userid1은 다시 렌더링되면 값이 3으로 돌아가지만
  //userid2는 다시 렌더링되어도 값이 3으로 돌아가지 않는다.
  //변수선언1... rendering시 초기화
  var userid1 = 3;
  //변수선언2 (userRef 이용)... rendering시 초기화하지 않음
  var userid2 = useRef(3);
  const handleUserIdIncrement = () => {
    userid1 += 1;
    userid2.current += 1;
    console.log("userid1 : " + userid1 + ", userid2 :" + userid2.current);
  };

  //mid자동으로 증가하도록 해보장
  const initMember = [
    { mid: 1, mname: "김종현", email: "kjh@shinee.com", active: true },
    { mid: 2, mname: "김기범", email: "kkb@shinee.com", active: false },
    { mid: 3, mname: "최민호", email: "cmh@shinee.com", active: true },
  ];

  const [member, setMember] = useState({});
  const [memberList, setMemberList] = useState(initMember);
  const nextMid = useRef(3);
  const handleChange2 = (e) => {
    //이름 변경시, 이메일 변경시
    setMember({ ...member, [e.target.name]: e.target.value });
  };
  const handleAdd = (e) => {
    //setMember({ ...member, mid: nextMid.current }); //setter는 비동기로 동작...하므로 다음의 코드로 작성
    var tempMember = { ...member, mid: nextMid.current, active: true }; //동기
    setMemberList([...memberList, tempMember]);
    nextMid.current += 1;
  };

  //React 문법 : JSX : Javascript XML : 바벨에 의해서 컴파일된다.(js > js)
  //var output = "<div></div>", render(output);
  //Root는 1개, 계층 구조 지켜야 함, 반드시 닫는 tag
  return (
    <div>
      <>
        <p>A : {a}</p>
        <p>B : {b}</p>
        <p>count : {counter}</p>
        <p>myName : {myName}</p>
        <p>myAge : {myAge}</p>
      </>
      <>
        <label>
          <span>이름</span>
          <input value={myName} name="mname" onChange={handleChange} />
        </label>
        <label>
          <span>이름</span>
          <input value={myAge} name="age" onChange={handleChange} />
        </label>
      </>
      <hr />
      <div>
        <>
          <label>
            <span>이름</span>
            <input
              ref={nameRef}
              value={myName}
              name="mname"
              onChange={handleChange}
            />
          </label>
          <label>
            <span>나이</span>
            <input
              ref={ageRef}
              value={myAge}
              name="age"
              onChange={handleChange}
            />
          </label>
        </>
        <>
          <button onClick={handleNameMove}>이름으로 이동</button>
          <button onClick={handleAgeMove}>나이로 이동</button>
          <button onClick={handleUserIdIncrement}>번호 증가</button>
        </>
      </div>
      <hr />
      <div>
        <>
          <label>
            <span>이름</span>
            <input name="mname" onChange={handleChange2} />
          </label>
          <label>
            <span>이메일</span>
            <input name="email" onChange={handleChange2} />
          </label>
          <button onClick={handleAdd}>멤버추가</button>
        </>
        <table border="1">
          <thead>
            <tr>
              <td>아이디</td>
              <td>이름</td>
              <td>이메일</td>
              <td>active</td>
            </tr>
          </thead>
          <tbody>
            {memberList &&
              memberList.map((item, index) => (
                <tr key={index}>
                  <td>{item.mid} </td>
                  <td>{item.mname}</td>
                  <td>{item.email}</td>
                  <td>{item.active.toString()}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default StateTest;
