import { useContext } from "react";
import { MyContext } from "./useContext.jsx";
import Page3 from "./Page3.jsx";
function Page2() { 
  const {AAA}=useContext(MyContext)
    return (
      <div>
        <h1>Page 2</h1>
        {AAA}
        <h2>--------------------------------</h2>
        <Page3/>
      </div>
    );

 }

 export default Page2;