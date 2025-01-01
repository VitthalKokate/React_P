import React, { useContext } from 'react';
import userCotext from '../Context/UserContext';

function Profile() {

    const {user} = useContext(userCotext) 

     if (user) {return <div>Welcome {user.userName}</div>} else{return <div>Please Login</div>}

          
    
}

export default Profile