import React, { useState } from "react";

function MemberComponent(props) {
  const [member, setMember] = useState({
    name: "이태민",
    age: 31,
  });

  const handleNameChange = (e) => {
    // 전개연산자 ...member를 통해 값을 가져오지 않으면
    //age의 값은 없어짐. 기존의 값을 잃어버림
    setMember({ ...member, name: e.target.value });
  };

  const handleAgeChange = (e) => {
    setMember({ ...member, age: e.target.value });
  };

  const handleChange = (e) => {
    //대괄호..를 통해 속성의 값을 가변으로 줌.. (아마도)
    //e.target.name 가 속성의 이름이 됨
    setMember({ ...member, [e.target.name]: e.target.value });

    //위의 대괄호... 다음이 예시임
    var obj = {};
    obj.aa = "값";
    obj["bb"] = "값";
    //obj["str"] = "안녕" str은 가변이므로 ""로 묶지 않음..
    //위의 대괄호를 통해 속성의 값을 가변으로 주는 것은 다음과 같은 경우임..
    var str = "hello";
    obj[str] = "안녕";
    console.log(obj);
  };

  return (
    <>
      <div>
        <h1>
          1. 이름은 {member.name} 나이는 {member.age}
        </h1>
        <label>
          <span> 이름 : </span>
          <input type="text" onChange={handleNameChange} />
        </label>
        <label>
          <span> 나이 : </span>
          <input type="number" onChange={handleAgeChange} />
        </label>
      </div>
      <div>
        <h1>
          2. 이름은 {member.name} 나이는 {member.age}
        </h1>
        <label>
          <span> 이름 : </span>
          <input type="text" name="name" onChange={handleChange} />
        </label>
        <label>
          <span> 나이 : </span>
          <input type="number" name="age" onChange={handleChange} />
        </label>
      </div>
    </>
  );
}

export default MemberComponent;
