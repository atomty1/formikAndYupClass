import React from 'react';
import { useParams } from 'react-router-dom';
const User = ()=>{
    let {myName} = useParams();
   
    return(
        <>
            I am a user in your application
           This is {myName}'s dashboard
        </>
    )
}
export default User;
