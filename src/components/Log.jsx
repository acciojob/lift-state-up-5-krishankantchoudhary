import React, { useState } from "react";

const Log=({isLoggedIn,onLogin})=>{

    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');

    const handlesubmit=(e)=>{
        e.preventDefault();
        if(username.trim()!=="" && password.trim() !==""){
            onLogin();
        }

    }

    return(
       <form onSubmit={handlesubmit}>
       <h1>Parent Component</h1>
       <label htmlFor="username">Username:</label>
       <input id="username" type="text" onChange={(e)=>setUsername(e.target.value)}/>
       <label htmlFor="password">Password:</label>
       <input id="password" type="password" onChange={(e)=>setPassword(e.target.value)}/>
        <button>Login</button>
       </form>
    )
}

export default Log;