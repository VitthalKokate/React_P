import React,{useState,useEffect} from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'


export default function Protected({children,authenatication = true}){

    const navigate = useNavigate()
    const [loader,setLoader] = useState(true)
    const authStatus = useSelector(state => state.auth.status)

    useEffect(() => {
       
        // Make Easy

        // if(authStatus === true){
        //     navigate("/")
        // } else if(authStatus === false){
        //     navigate("/login")
        // }

        if(authenatication && authStatus !== authenatication){
            navigate("/login")
        }else if(!authenatication && authStatus !== authenatication){
            navigate("/")
        }
        setLoader(false)
    },[authStatus,navigate,authenatication])



  return loader ? <h1>Loading...</h1> : <>{children}</>
}

