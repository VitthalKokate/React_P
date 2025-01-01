import React, { useContext } from 'react'
import UserContextProvider from '../Context/UserContextProvider';
import UserContext from '../Context/UserContext';


function Profile() {

    const {user} = useContext(UserContext);
    
    if(!user) return <div>Please Enter VAlue</div> 

    return <div>Welcome {user.userid}</div>
}

export default Profile