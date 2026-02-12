import './Counter.css';
import { useState } from 'react';

export function Counter() {
    const [count, setCount] = useState(0);

    function countHandler() {
        setCount(count + 1);
    }

    return (
        <div className="Counter">
            <button className="btn" onClick={countHandler}>Counter</button>
            <b><p>Count is : {count}</p></b>
        </div>
    )
}