import { useDispatch, useSelector } from 'react-redux' 
import { increment, decrement,resetAction, incrementByAmount } from './Features/Couter/counterSlice'; 

import './App.css'
import { useState } from 'react';

function App() {

  const [res,setRes] = useState(0);

 const  count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

 function  handleIncrement () {
  dispatch(increment());

  }

 function  handleDecrement ()  {
  dispatch(decrement());
  }

  function  reset ()  {
    dispatch(resetAction());
    }

    function handleResetClick(){
      dispatch(incrementByAmount(res))
    }
  return (
    <>


   <div className="containe">
   <p className="text-blue-400 text-center text-3xl m-5">Cout : {count}</p>

    <button onClick={handleIncrement} className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Add +
              </span>
        </button>

      
    <button onClick={handleDecrement} className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Sub -
              </span>
        </button>

        <button onClick={reset} className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
           Reset
              </span>
        </button>

        <input type="text" className="bg-purple-200 text-red-500 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-800"
         placeholder="Enter text" 
          onChange={(e) => setRes(e.target.value)}/> <br />
      
      <button onClick={handleResetClick} className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
       >
        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
           Reset By Value
              </span>
        </button>
   </div>
    </>
  )
}

export default App
