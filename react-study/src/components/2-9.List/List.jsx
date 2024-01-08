import React from 'react'

export default function List() {
//     const numbers = [1,2,3,4,5];
//     return (
//     <ul>
//         {
//             numbers.map((number) => {
//                 return <li key={number.toString()}>{number}</li>
//             })
//         }            
//     </ul>
//   )

    const todos = [
        {id: 1, text: "Drink Water"},
        {id: 2, text: "Wash Car"},
        {id: 3, text: "Listen Lecture"},
        {id: 4, text: "Go to bed"},
    ];

    const Item = (props) => {
        return <li>{props.text}</li>;
    }

    // key 속성은 고유성을 측정하는 데에 사용하는 것이지 자식으로 내려주는 값이 아니다.
    // key 값은 형제 관계의 컴포넌트에서만 고유하면 된다. 부모-자식 관계 전체에서 고유할 필요는 없다.
    const todoList = todos.map((todo) => <Item key={todo.id} text={todo.text} />);

    return <>{todoList}</>;
}
