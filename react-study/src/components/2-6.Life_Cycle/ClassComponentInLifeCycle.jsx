import React, { Component } from 'react'

/**
 * react 컴포넌트 상태주기 다이어그램
 * https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/ 
 */
export default class ClassComponentInLifeCycle extends Component {
    // state 초기화 및 메서드 바인딩
    constructor(props) {
        super(props);
        console.log("constructor")
        this.state = { date: new Date() }

        // 함수형 컴포넌트는 항상 바인딩 해줘야함
        this.handleClick = this.handleClick.bind(this);
    }

    // DOM 노드 초기화 및 데이터 fetch
    componentDidMount() {
        console.log("conponentDidMount")
        this.timerID = setInterval(() => this.tick(), 1000);
    }

    componentDidUpdate() {
        console.log("componentDidUpdate")
    }

    // 타이머 제거 및 요청 취소, 구독 해제 기능
    componentWillUnmount() {
        console.log("componentWillUnmount")
        clearInterval(this.timerID)
    }

    tick() {
        console.log("tick")
        this.setState({date: new Date()})
    }

    handleClick() {
        alert(this.state.date);
    }

    // arrow function의 경우에는 별도의 바인딩 작업이 필요 없다.
    handleClick2 = () => {
        alert("arrow function");
    }
  
    // 랜더 내에 함수 또는 컴포넌트를 사용할 때에는 this.를 붙여야함
    render() {
        console.log("render")
    return (
      <div>
        <h1 onClick={this.handleClick}>Hello, world!</h1>
        <h2>{this.state.date.toLocaleTimeString()}</h2>
      </div>
    )
  }
}
