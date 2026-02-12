import './Counters.css';
import { useState } from 'react';

export function Counters() {
    const [count, setCount] = useState(0);

    function countHandler() {
        setCount(count + 1);
    }


    function increaseHandler(){
        setCount(count+1);
    }
    function decreaseHandler(){
        setCount(count-1);
    }
    return (
        <div className="Counters">
            <button className="btn" onClick={increaseHandler}>Increase</button>
            <p>{count}</p>
            <button className='btn' onClick={decreaseHandler}>Decrease</button>
        </div>
    )
}