import React, { useContext } from 'react';
import {ThemeContext} from "./ThemeContext";
// ThemeContext is a context created by React.createContext()

function currentValue() {
  const context = useContext(ThemeContext);
  console.log(context)
}
export {currentValue};