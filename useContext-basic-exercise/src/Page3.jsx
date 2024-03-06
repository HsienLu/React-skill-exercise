import { useContext} from "react"
import { MyContext } from "./useContext.jsx"
import { useReducer } from "react"
const initState ={total:0}
const reducer=(state,action)=>{
    switch(action.type){
        case "increase":
            return {total:state.total+action.payload.value}
        case "decrease":
            return {total:state.total-action.payload.value}
        default:
            return state
    }
}

export default function Page3() {
    const {AAA}=useContext(MyContext)
    const [state,dispatch]=useReducer(reducer,initState)
    return(
        <>

        <h1>Page3</h1>
        {AAA}
        <h2>Reducer</h2>
        <h3>{state.total}</h3>
        <button onClick={()=>{
            dispatch({type:"increase",payload:{value:1}})
        }}>+1</button>   
                <button onClick={()=>{
            dispatch({type:"decrease",payload:{value:1}})
        }}>-1</button>  
        </>
    )
}

