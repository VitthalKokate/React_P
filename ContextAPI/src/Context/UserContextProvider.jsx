import React from 'react';
import userCotext from './UserContext';

const UserContextProvider  = ({children})=>{

    const [user,setUser] = React.useState(null);

    return(
        <userCotext.Provider  value={{user,setUser}}>
        {children}
        </userCotext.Provider >
    )

}
export default UserContextProvider;