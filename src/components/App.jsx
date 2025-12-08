import React, { useState } from "react";
import Log from "./log";

const App = () => {
  const [isLoggedIn, setisLoggedIn] = useState(false);

  const handlelogin = () => {
    setisLoggedIn(true);
  };

  return (
    <div>
      {isLoggedIn ? (
        <p>You are logged in!</p>
      ) : (
        <Log onLogin={handlelogin} />
      )}
    </div>
  );
};

export default App;
