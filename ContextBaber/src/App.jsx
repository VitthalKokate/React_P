import { useState } from 'react'
import './App.css'
import CompA from './Components/CompA'
import { createContext } from 'react'


// step 1 : Create Context
const UserContext = createContext();

// step 2: Wrap all the child inside provider


// step 3 : Pass Value



// Proj

const ThemeContext = createContext();


function App() {
  // const[user , setUser] = useState({name :"Love"})
  // const [count, setCount] = useState(0)

  const [theme, settheme] = useState("light")

  return (
    <UserContext.Provider value={name = "Love"}>
<ThemeContext.Provider value={{theme,settheme}}>
   <div id='container' style={{backgroundColor:theme === 'light' ? "beige" : 'black'}}>
   <CompA/>
   </div>
</ThemeContext.Provider>
</UserContext.Provider>
  )
}

export default App
export {UserContext}
export {ThemeContext}
