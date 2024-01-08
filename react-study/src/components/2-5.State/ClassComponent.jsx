import React, { Component } from "react";

export default class ClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  // 컴포넌트가 랜더되기 직전에 호출
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  // 컴포넌트가 사라지기 직전에 호출
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  // 클래스 컴포넌트 호출 시, 그려줄 내용을 리턴
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
