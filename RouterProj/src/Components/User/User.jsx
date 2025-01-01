import React, { Component } from 'react';
import { useParams } from 'react-router-dom';
function User() {
    const {userid} = useParams();
    return(
        <div className='text-center text-3xl bg-gray-500 p-4 text-white'>User: {userid}</div>
    )
    
}
export default User;