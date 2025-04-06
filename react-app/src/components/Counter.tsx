import { useState } from 'react';
function Counter(){
    // state: counter, setCounter
    const [counter, setCounter] = useState(0);

    return (
        <>
            <button onClick={()=>setCounter(counter+1)}>Increment</button>
            <button onClick={()=>setCounter(counter-1)}>Decrement</button>
            <button onClick={()=>setCounter(0)}>Reset</button>

            <h1>Counter Value is : {counter}</h1>
        </>
    );
}

export default Counter;