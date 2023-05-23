import React, { Component } from "react";

class ClassCom1 extends Component {
  //생성자 함수
  constructor(props) {
    //constructor정의는 필수가 아님
    //constructor정의시 반드시 부모의 생성자 호출이 필요하다.
    super(props);
    console.log("ClassCom1 constructor임");

    //this.state는 constructor에서만 사용 가능... 이외에서는 this.setState()로 사용
    this.state = { title: "초기값", buttonVisible: false };
  }

  componentDidMount() {
    console.log("ClassCom1 componentDidMount");
  }

  //컴포넌트 변경되었을 때
  componentDidUpdate() {
    console.log("ClassCom1 componentDidUpdate");
  }

  //컴포넌트가 제거 됨
  componentWillUnmount() {
    console.log("ClassCom1 componentWillUnmount");
  }

  reset = () => {
    //생성자 함수 아니므로 this.state()가 아닌.. this.setSate();
    this.setState({ title: "초기값", buttonVisible: false });
  };

  render() {
    const { title, buttonVisible } = this.state;
    console.log("부모가 rerendering");
    return (
      <div>
        <button onClick={() => this.setState({ buttonVisible: true })}>
          자식 보이기
        </button>
        {buttonVisible && (
          <div>
            <ChildComponent title={title} />
            <button onClick={this.reset}>다시 시작</button>
          </div>
        )}
      </div>
    );
  }

  // render() {
  //   // class 컴포넌트에서는 render()함수가 필수
  //   return (
  //     <div>
  //       <h1 style={{ color: this.props.color }}>ClassComponent1</h1>
  //       <>
  //         <p>title : {this.props.title}</p>
  //         <p>content : {this.props.content}</p>
  //         <p>price : {this.props.price}</p>
  //         <p>children : {this.props.children}</p>
  //       </>
  //       <ul>
  //         {this.props.subject &&
  //           this.props.subject.map((item, index) => (
  //             <li key={index}>{item}</li>
  //           ))}
  //       </ul>
  //     </div>
  //   );
  // }
}

class ChildComponent extends Component {
  constructor(props) {
    //constructor정의는 필수가 아님
    //constructor정의시 반드시 부모의 생성자 호출이 필요하다.
    super(props);
    console.log("ClassCom1 constructor임");

    this.state = { title: "초기값", buttonVisible: false };
  }

  componentDidMount() {
    console.log("ClassCom1 componentDidMount");
  }

  //컴포넌트 변경되었을 때
  componentDidUpdate() {
    console.log("ClassCom1 componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("ClassCom1 componentWillUnmount");
  }

  render() {
    console.log("자식이 rendering...");
    return (
      <div>
        <p>ChildComponent에서 부모가 보내준 속성 읽기 : {this.props.title}</p>
      </div>
    );
  }
}

class ClassCom2 extends Component {
  static defaultProps = {
    title: "ClassCom2 title 값 없음",
    content: "ClassCom2 content값 없음",
    price: 7777,
  };

  render() {
    const { title, content, children, price, subject, color } = this.props;
    return (
      <div>
        <h1 style={{ color: color }}>ClassComponent2</h1>
        <>
          <p>title : {title}</p>
          <p>content : {content}</p>
          <p>price : {price}</p>
          <p>children : {children}</p>
        </>
        <ul>
          {subject && subject.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
      </div>
    );
  }
}

export { ClassCom1, ClassCom2 };
