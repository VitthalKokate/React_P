import { useDispatch,useSelector } from 'react-redux'
import{addVal,removeVal,reset,userSet} from './assets/Slice/CountSlice'
import { useState } from 'react'

import './App.css'

function App() {

  const count = useSelector( (state) => state.counter.value)
  const dispatch = useDispatch();

  const [userVal, setuserVal] = useState(0)

  const addValBtn = () =>{
    dispatch(addVal())
  }

  const removeValBtn = () => {
    dispatch(removeVal())
  }

  const resetVal = () =>{
    dispatch(reset())
  }

  const userSetVal = () =>{
    dispatch(userSet(userVal))
  }

  return (
<>
  <div className="container flex flex-col items-center justify-center min-h-screen bg-gray-100">
    <p className="text-blue-500 text-center text-4xl font-semibold my-6">
      Count: {count}
    </p>

    <div className="space-x-4">
      <button
        onClick={addValBtn}
        className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 transition duration-200"
      >
        Add
      </button>
      <button
        onClick={removeValBtn}
        className="px-6 py-3 bg-red-500 text-white rounded-lg shadow-lg hover:bg-red-600 transition duration-200"
      >
        Remove
      </button>
      <button
        onClick={resetVal}
        className="px-6 py-3 bg-gray-500 text-white rounded-lg shadow-lg hover:bg-gray-600 transition duration-200"
      >
        Reset
      </button>

      <input type="text" 
      value={userVal}
      onChange={(e) => setuserVal(e.target.value)} />
    </div>

    <button onClick={userSetVal}>UserSetVal</button>
  </div>
</>

  )
}

export default App
