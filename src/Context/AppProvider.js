import React, { useState } from "react";
import AppContext from "./AppContext";
const AppProvider = (props) => {
  const [action, setAction] = useState({
    burger: false,
    darkMode: false,
  });
  return (
    <AppContext.Provider value={{action, setAction}}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppProvider;
