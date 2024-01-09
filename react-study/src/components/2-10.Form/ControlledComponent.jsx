import React, { useState } from 'react'

/**
 * HTLM FORM 엘리먼트는 Form 엘리먼트 자체가 내부 상태를 가지기 때문에, 
 * react의 다른 DOM 엘리먼트와 다르게 동작한다.
 * 
 * 제어 컴포넌트
 *  - HTML에서 <input>, <textarea>, <select>와 같은 폼 엘리먼트는 일반적으로 사용자의 입력을 기반으로 자신의 state를 관리하고 업데이트합니다. 
 *    React에서는 변경할 수 있는 state가 일반적으로 컴포넌트의 state 속성에 유지되며 setState()에 의해 업데이트됩니다.
 * 
 *  - 우리는 React state를 “신뢰 가능한 단일 출처 (single source of truth)“로 만들어 두 요소를 결합할 수 있습니다. 
 *    그러면 폼을 렌더링하는 React 컴포넌트는 폼에 발생하는 사용자 입력값을 제어합니다. 
 *    이러한 방식으로 React에 의해 값이 제어되는 입력 폼 엘리먼트를 “제어 컴포넌트 (controlled component)“라고 합니다.
 */
export default function ControlledComponent() {
    const [name, setName] = useState("");
    const [essay, setEssay] = useState("Please write an essay about your favorite DOM element.");
    const [flavor, setFlavor] = useState("coconut");
    
    const handleSubmit = (event) => {
        alert(`Name: ${name}, Essay: ${essay}, Flavor: ${flavor}`)
        event.preventDefault();
    }
    
    const handleChange = (event) => {
        const name = event.target.name;

        if(name === 'name') setName(event.target.value);
        if(name === 'essay') setEssay(event.target.value);
        if(name === 'flavor') setFlavor(event.target.value);
    }

    // const handleEssayChange = (event) => {
    //     setEssay(event.target.value);
    // }

    // const handleFlavorChange = (event) => {
    //     setFlavor(event.target.value);
    // }


    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" name='name' value={name} onChange={handleChange} />
            </label>
            <br />
            <br />
            <label>
                Essay:
                <input type="text" name='essay' value={essay} onChange={handleChange} />
            </label>
            <br />
            <br />
            <label>
                Pick your favorite flavor:
                <select name='flavor' value={flavor} onChange={handleChange}>
                    <option value="grapefruit">Grapefruit</option>
                    <option value="lime">Lime</option>
                    <option value="coconut">Coconut</option>
                    <option value="mango">Mango</option>
                </select>
            </label>
            <button type="submit">Submit</button>
        </form>
    )
}
