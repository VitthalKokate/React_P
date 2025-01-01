import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [count,setCounter] = useState(1)

  // let count = 5

  const addValue = () =>{

    if(count < 10) setCounter(count +1)
    
    // count = count +1
    // setCounter(count + 1)
    // console.log("Clicked",count);
  }

  const removeValue = () =>{
    if(count > 0)  setCounter(count - 1)
    
  }

  return (
    <>
    <h1>Chai Aur React</h1>
    <h2>Counter Value :{count}</h2>

    <button onClick={addValue}>Add Value</button> <br />
    <button onClick={removeValue}>Rrmove Value</button>
    </>
  )
}

export default App
