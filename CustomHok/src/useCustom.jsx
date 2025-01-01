import  { useState } from 'react';
function useCustom(initializer = 0) {

    const [count,setCount] = useState(initializer);

    const increment = () => setCount(count+1);
    const reset = () =>setCount(initializer);

    return {count,increment,reset}
    
}

export default useCustom ;

