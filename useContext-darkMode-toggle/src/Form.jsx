import Panel from "./Panel"
import Button from "./Button"
import Label from "./Label"
import { ThemeContext } from "./useContext"
import { useState } from "react"
export default function Form() {
    const [theme, setTheme] = useState("light");
return (
    <>
    <ThemeContext.Provider value={{theme,setTheme}}>
    <Panel title="Welcome" >
        <Button>Sign up</Button>
        <Button>Log in</Button>
    </Panel>
    <Label  />
    </ThemeContext.Provider>

    </>

)
}