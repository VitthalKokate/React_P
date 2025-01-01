import React from 'react';
import useCustom from './useCustom'

function App() {
  const {count,increment,reset} = useCustom(20)

  return (
    <>
    <div>
      <p>Counter : {count}</p>
      <button onClick={increment}>IncrementVal</button>
      <br />
      <button onClick={reset}>ResetVal</button>
    </div>
    </>
  )
}

export default App
