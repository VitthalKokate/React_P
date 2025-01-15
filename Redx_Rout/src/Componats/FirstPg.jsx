import React from 'react'
import { useState } from 'react'
import {useDispatch} from 'react-redux'
import{add,sub,mul,mod,div} from '../Slices/OperaSlice'

function FirstPg() {

  const [valFirst, setvalFirst] = useState(0)
  const [valSec, setvalSec] = useState(0)

  const dispatch = useDispatch()

 const addVal = (x,y) =>{  
      dispatch(add({x,y}))
  }

  const subVal = (x,y) =>{  
    dispatch(sub({x,y}))
}
const mulVal = (x,y) =>{  
  dispatch(mul({x,y}))
}
const divVal = (x,y) =>{  
  dispatch(div({x,y}))
}
const modVal = (x,y) =>{  
  dispatch(mod({x,y}))
}

  return (
   <>
     <div className="flex items-center justify-center m-10 bg-gray-200 inline">
              
      <div className="bg-gray-800 text-white p-8 rounded-lg shadow-lg space-y-6">
      <p className='text-center text-3xl text-yellow-500'>Operations</p>
           <h6 className='text-center text-yellow-500'>Result shown on result page</h6>
        <input 
          type="text" 
          value={valFirst} 
          onChange={(e) => setvalFirst(e.target.value)} 
          className="px-4 py-2 m-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ease-in-out transform hover:scale-105  text-red-700"
        />
        
        <input 
          type="text" 
          value={valSec} 
          onChange={(e) => setvalSec(e.target.value)} 
          className="px-4 py-2 border  border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ease-in-out transform hover:scale-105  text-red-700"
        />
        <br />

        <button 
          onClick={()=> addVal(valFirst,valSec)} 
          className="px-6 py-3 bg-blue-500 text-white rounded-lg transition-all duration-300 ease-in-out transform hover:scale-110 active:scale-95 m-2 animate-pulse"
        >
          Addition
        </button>

        <button 
          onClick={()=> subVal(valFirst,valSec)} 
          className="px-6 py-3 bg-purple-600 text-white rounded-lg transition-all duration-300 ease-in-out transform hover:scale-110 active:scale-95 m-2 animate-pulse"
        >
          Subtraction
        </button>

        <button 
          onClick={()=> mulVal(valFirst,valSec)} 
          className="px-6 py-3 bg-green-500 text-white rounded-lg transition-all duration-300 ease-in-out transform hover:scale-110 active:scale-95 m-2 animate-pulse"
        >
          Multiplication
        </button>
        <br />

        <button 
          onClick={()=> divVal(valFirst,valSec)} 
          className="px-6 py-3 bg-pink-600 text-white rounded-lg transition-all duration-300 ease-in-out transform hover:scale-110 active:scale-95 m-2 animate-pulse"
        >
          Divsion
        </button>
        

        <button 
          onClick={()=> modVal(valFirst,valSec)} 
          className="px-6 py-3 bg-yellow-600 text-white rounded-lg transition-all duration-300 ease-in-out transform hover:scale-110 active:scale-95 m-2 animate-pulse"
        >
          Modulus
        </button>
      </div>
    </div>
   </>
  )
}

export default FirstPg