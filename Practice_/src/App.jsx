import { useState } from "react"

function App() {

  const [val , setVal] = useState(1);

 let addVal = () => {
    setVal((preVal) => preVal +1)
    setVal((preVal) => preVal +1)
    setVal((preVal) => preVal +1)
    setVal((preVal) => preVal +1)
  }

  let removeVal = () =>{
    setVal(val-1)
  }

  return (
  <>

    <p class="mb-3 text-gray-500 dark:text-gray-400">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos quis in rerum optio reprehenderit eligendi, provident excepturi dolore, ad, sunt vitae maxime nemo veniam nihil dolorem nostrum voluptatibus libero! Placeat!</p>
 <hr />
    <p class="text-yellow-400 hover:text-white border border-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900"> COUNT : {val}</p>

<center>
    <button type="button" class="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2  "  onClick={addVal}>Add</button>
    <br />
    <button type="button" class="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2  "  onClick={removeVal}>Remove</button>
    </center>

  </>
  )
}

export default App
