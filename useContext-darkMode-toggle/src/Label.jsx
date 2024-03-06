import { useContext } from "react"
import { ThemeContext } from "./useContext"
export default function Label() {
    const {setTheme}=useContext(ThemeContext)

    return(

    <label>
    <input
      type="checkbox"
      onChange={(e)=>{
        e.target.checked ? setTheme("dark") : setTheme("light")
        
      }}
    />
    Use dark mode
  </label>
    )
}