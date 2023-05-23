import React, { Component } from "react";
import Button from "react-bootstrap/Button";

//react가 제공하는 component를 상속받아서 만들었음
class MyCounter extends Component {
  constructor() {
    super();
    this.state = { count: 0, message: "class 컴포넌트 이용한 Counter" };
  }

  handleClick = (e) => {
    var btnContent = e.target.innerHTML;

    if (btnContent == "증가") {
      this.setState({ count: this.state.count + 1, message: btnContent });
    } else {
      this.setState({ count: this.state.count - 1, message: btnContent });
    }
  };

  render() {
    return (
      <div>
        <p>count : {this.state.count}</p>
        <p> message : {this.state.message}</p>
        <Button variant="outline-success" onClick={this.handleClick}>
          증가
        </Button>
        <Button variant="outline-success" onClick={this.handleClick}>
          감소
        </Button>
        <button
          variant="outline-info"
          onClick={(e) => {
            this.setState({
              count: this.state.count + 1,
              message: e.target.innerHTML,
            });
          }}
        >
          증가
        </button>
        <button
          variant="outline-info"
          onClick={(e) => {
            this.setState({
              count: this.state.count - 1,
              message: e.target.innerHTML,
            });
          }}
        >
          감소
        </button>
      </div>
    );
  }
}

export default MyCounter;
