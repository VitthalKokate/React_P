import { useCallback, useState ,useEffect,useRef } from "react"

function App() {

  const [length ,setLength] = useState(8);
  const[numAllow,setNulAllow] = useState(false);
  const[charAllow, setCharAllow] = useState(false);
  const[password,setPassword] = useState("");

  // useRef hook
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numAllow) str += "0123456789"

    if(charAllow) str += "!@#$% &*()-_=+\|{}~"

    for (let i = 1; i <= length; i++){
      let char =Math.floor(Math.random()*str.length + 1)
      pass  += str.charAt(char)
    }

    setPassword(pass)

  },[length,numAllow,charAllow,setPassword])


  const cpyPasswordOnClipBord = useCallback(() => {
    passwordRef.current?.select()
    // passwordRef.current?.setSelectionRange(0,3)  // set value based on range
    window.navigator.clipboard.writeText(password);
  },[password])


  useEffect(()=> passwordGenerator() ,[length,numAllow,charAllow,setPassword])

  return (
    <>
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 py-4 text-orange-500 bg-gray-700">
    <h1 className=" text-4xl text-center text-white m-3 mb-2">Password Genreator</h1>
     <div className="flex shadow rounded-lg overflow-hidden mb-4">

    

      <input type="text"
      value={password}
      className="outline-none w-full py-1 px-3"
      placeholder="Password"
      readOnly
      ref={passwordRef}
      />

      <button
      onClick={cpyPasswordOnClipBord}
      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Copy</button>
     </div>
     <div className="flex text-sm gap-x-2">
      <div className="flex items-center gap-x-1">
        <input 
        type="range" 
        min={6}
        max={25}
        value={length}
        className="cursor-pointer"
        onChange={(e) => {setLength(e.target.value)}}
        />
        <label > Length: {length}</label>
      </div>

      <div className="flex items-center gap-x-1">
        <input type="checkbox"
              defaultChecked={numAllow}
              id="numberInput"
              onChange={()=>{
                setNulAllow((prev) => !prev)
              }}
               />

      <label > Numbers</label>
      </div>

      <div>
      <input type="checkbox"
              defaultChecked={charAllow}
              id="characterInput"
              onChange={()=>{
                setCharAllow((prev) => !prev)
              }}
               />  

      <label htmlFor="characterInput">Special Character</label>
      </div>

     </div>
    </div>
    
    </>
  )
}

export default App
