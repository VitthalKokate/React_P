import React, { useContext, useState } from 'react'
import UserContext from '../Context/UserContext'


function Login() {

    const[userid,setUserid] = useState('')
    const[password,setPassword] = useState('')

    const {setUser} = useContext(UserContext)



    const  setInfor =  (e) =>{
        e.preventDefault();
        setUser({userid,password})
            
    }




  return (
    <>
    <div>Login</div>

    <input type="text"
    value={userid}
    onChange={(e)=> setUserid(e.target.value)}
     placeholder='UserId' /> <br />

    <input type="text"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
     placeholder='Password' /> <br />

     <button onClick={setInfor}>Sublit</button>

    </>
    
  )
}

export default Login