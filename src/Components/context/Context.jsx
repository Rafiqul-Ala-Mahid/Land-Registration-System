import React, { createContext, useState } from "react";

export const NewContext = createContext();

const Context = ({ children }) => {
  const [result, setResult] = useState([]);
console.log(result)
  return (
    <NewContext.Provider
      value={{
        result,
        setResult,
      }}
    >
      {children}
    </NewContext.Provider>
  );
};

export default Context;
