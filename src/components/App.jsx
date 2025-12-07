import React,{useState} from "react";
import Log from "./log";



const App = () => {
  const[isLoggedIn, setisLoggedIn]=useState(false);

  const handlelogin=()=>{
    setisLoggedIn(true);
  }

  return (
    <div>
        {isLoggedIn ?
        (<h2>You are logged in.</h2>):
        (<Log isLoggedIn={isLoggedIn} onLogin={handlelogin} />)}
    </div>
  )
}

export default App;
