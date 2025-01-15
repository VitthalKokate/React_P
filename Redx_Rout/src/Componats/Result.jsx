import React from 'react'
import { useSelector } from 'react-redux'

function Result() {
    const ans = useSelector((state)=> state.ans)
    
  return (
   <>
<div class="flex items-center justify-center h-screen bg-gray-100">
  <p class="text-xl font-semibold text-center text-gray-800 border-4 border-blue-500 p-6 rounded-lg shadow-lg animate-ping duration-500">
    Results: <span class="font-bold text-blue-600">
        {ans}</span>
  </p>
</div>

   </>
  )
}

export default Result