import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { MyContext } from './useContext.jsx'
let AAA="132"
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <MyContext.Provider value={{AAA}}>
    <App />
  </MyContext.Provider>
  </React.StrictMode>,
)
