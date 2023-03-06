import React from "react";
import { useState } from "react";

export const FaqContext = React.createContext();

export const FaqProvider = ({ children }) => {
  const [toggle, setToggle] = useState(true);
  const [hidden, setHidden] = useState("");
  //una función que cambie el valor a true
  const Toggle = () => {
    setToggle(!toggle);
    toggle ? setHidden("") : setHidden("hidden");
    console.log(hidden);
  };
  return (
    <FaqContext.Provider value={{ Toggle,hidden }}>{children}</FaqContext.Provider>
  );
};
