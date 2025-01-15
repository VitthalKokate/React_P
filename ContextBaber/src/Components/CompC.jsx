import React from 'react'
import { ThemeContext,UserContext } from '../App'
import { useContext } from 'react';


function CompC() {

    const user = useContext(UserContext);
    const {theme,settheme} = useContext(ThemeContext)

    function handleClick(){
        theme == 'light' ? settheme('dark') : settheme('light')
    }
  return (
    <>
     <div>Hello  {user.name}</div>
    {theme}

    <button onClick={handleClick}
    >Change Theme</button>

    </>
  )
}

export default CompC