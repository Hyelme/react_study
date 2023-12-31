import React, { useState, useEffect } from 'react'

/**
 * 
 * ClassComponent와 같은 동작
 */
export default function FunctionalComponent() {
    const [date, setDate] = useState(new Date());

    const tick = () => {
        setDate(new Date());
    }

    useEffect(() => {
        const interval = setInterval(() => tick(), 1000)

        return () => {
            clearInterval(interval);
        }
    }, []);

    return (
        <div>
          <h1>Hello, world! It's Functional!</h1>
          <h2>It is {date.toLocaleTimeString()}.</h2>
        </div>
      );
}
