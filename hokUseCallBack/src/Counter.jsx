import React, { useCallback,useState } from 'react';

function Count(){
    const[count,setCount] = useState(0);

    const increment = useCallback(()=>{
        setCount((prev) => prev+1)
    },[count])
    console.log(count);
    

    return(
        <div>
            <p>Count {count}</p>
            <button onClick={increment}>Increment</button>
        </div>
    )
    
}

export default Count;
