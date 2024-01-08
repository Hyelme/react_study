import React from 'react'

function UserGreeting(props) {
    return <h1>{props.name && `${props.name}, `}Welcome!{props.count && `It's ${props.count} time!`}</h1>;
}

function GuestGreeting(props) {
    return <h1>Please Sign Up</h1>;
}

function Greeting(props) {
    // if(props.isLoggedIn) {
    //     return <UserGreeting name="Hyelme" count={0} />
    // }
    // return <GuestGreeting />
    
    // falsy한 값('0 &&' 와 같은)은 랜더링이 되는 점을 주의
    return props.isLoggedIn ? <UserGreeting name="Hyelme" count={0} /> : <GuestGreeting />;
}
export default function Condition() {
    const isLoggedIn = true;

    return (
        <div>
            <Greeting isLoggedIn={isLoggedIn}/>
        </div>
    )
}
