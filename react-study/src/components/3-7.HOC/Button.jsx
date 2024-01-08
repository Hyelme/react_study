import React from 'react'
import withLoading from './withLoading'

function Button() {
    return <button>Button</button>
}

//공통된 컴포넌트를 생성하여 재사용성을 높일 수 있다.
export default withLoading(Button);