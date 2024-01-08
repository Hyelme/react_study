import React, { useReducer } from 'react'

/**
 * Hook : Class의 단점을 보완하고 재사용성을 강화하기 위해 등장.
 * Hook 사용 규칙
 *  - 최상위에 두어야한다.
 *  - 함수형 컴포넌트로 사용한다.
 *  - custom hook을 만들 수 있다.
 */
export default function State() {
    const initialCount = {count: 0};
    const [state, dispatch] = useReducer(reducer, initialCount);

    function reducer(state, action) {
        switch(action.type) {
            case 'reset':
                return initialCount;
            case 'increment':
                return { count : state.count + 1 };
            case 'decrement':
                return { count : state.count - 1 };
            default:
                throw new Error();
        }
    }
  return (
    <div>
        Count: {state.count}
        <br />
        <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
        <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
        <button onClick={() => dispatch({ type: 'increment' })}>+</button>
    </div>
  )
}
