import React, { useState } from 'react';

const Counter =()=>{
    const [counter,setCounter] = useState(0);


const increaseNumber = ()=>{
    setCounter (counter+1)
}

const decreaseNumber =()=>{
    setCounter (counter -1)
}

return(
    <div>
        <h1>{counter}</h1>
        <button onClick={increaseNumber}>+1</button>
        <button onClick={decreaseNumber}>-1</button>
    </div>
)

}

export default Counter;