import React, { useState }  from 'react';
import { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';

export default function Github(){

    const data = useLoaderData()

    

    // const [data,setData] = useState([]);
    // useEffect( ()=>{
    //     fetch('https://api.github.com/users/hiteshchoudhary') 
    //     .then((res) => res.json())
    //     .then((data) => {console.log(data);
    //     setData(data)
    //     })

    // },[])

    return(
        <div className='text-center m-4 bg-gray-400 text-white p-4 text-3xl'>Github Followers : {data.followers}
        <img src={data.avatar_url} alt="Git picture"  className=' m-5 p-5 w-30 h-30 '/ ></div>


    )
}

export const githubInfoLoader = async () =>{
    const response = await fetch('https://api.github.com/users/hiteshchoudhary')
   return response.json();
}