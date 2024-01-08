import React, { useRef } from 'react'

export default function UncontrolledComponent() {
    const fileInputRef = useRef(null);
    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Selected file - ${fileInputRef.current.files[0].name}`);
    }   

    /**
     * 비제어 컴포넌트
     * - 대부분 경우에 폼을 구현하는데 제어 컴포넌트를 사용하는 것이 좋습니다. 
     *   제어 컴포넌트에서 폼 데이터는 React 컴포넌트에서 다루어집니다. 대안인 비제어 컴포넌트는 DOM 자체에서 폼 데이터가 다루어집니다.
     * 
     * - 비제어 컴포넌트의 경우에는 해당 태그의 value가 무엇인지 컴포넌트에서는 알 수 없지만,
     *   ref 속성을 통해 DOM에서 값을 받아올 수 있다.
     */

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Upload file:
                    <input type="file" ref={fileInputRef} />
                </label>
                <br />
                <button type="submit">Submit</button>
            </form>
            <br />
            <br />
        </div>
    )
}
