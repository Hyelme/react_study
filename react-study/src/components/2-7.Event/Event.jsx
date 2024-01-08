import React from 'react'

/**
 * 합성 이벤트
 * https://ko.legacy.reactjs.org/docs/events.html
 */
export default function Event() {
    const handleButtonClick = (e) => {
        console.dir(e);
        alert("handle button click");
    }
    const handleClickCapture = () => {
        alert("handle click capture");
    }
    const handleClickCapture2 = () => {
        alert("handle click capture2");
    }
    const handleClickBubble = () => {
        alert("handle click bublle");   
    }

    // 최상위 부모 capture -> 그 아래 부모 capture -> 버튼 자신의 event -> 버블링 event 순으로 실행
    return (
        <div onClickCapture={handleClickCapture}>
            <div onClickCapture={handleClickCapture2} onClick={handleClickBubble}>
                <button onClick={handleButtonClick}>Event</button>
            </div>
        </div>
    )
}
