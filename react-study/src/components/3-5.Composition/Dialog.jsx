import React from 'react'

/**
 * Composition(합성) vs Inheritance(상속)
 * - React는 강력한 합성 모델을 가지고 있으며, 상속보다는 합성을 이용하여 컴포넌트를 구현하는 것이 좋다.
 */
export default function Dialog(props) {
  return (
    <div style={{backgroundColor: "red"}}>
      <div>{props.children}</div>
    </div>
  )
}
