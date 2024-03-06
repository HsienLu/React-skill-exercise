import { useContext } from "react";
import { ThemeContext } from "./useContext";

export default function Button({ children }) {
  const {theme}=useContext(ThemeContext)
    const className=`button-${theme}`
    return (
      <button className={className}>
        {children}
      </button>
    );
  }