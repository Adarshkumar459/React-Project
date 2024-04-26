import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// create using hooks
function App() {
 let  [counter,setCounter]=useState(15)

  const addvalue=()=>{
    if (counter>=0 && counter<20) {
      counter=counter+1
    setCounter(counter)
    }
    
  }

  const removeval=()=>{
   if (counter<=20 && counter>0) {
    counter=counter-1
    setCounter(counter)
    
   }
  }

  return (
    <>
      <h1>chai aur code !</h1>
      <h2>counter value : {counter}</h2>
      <button 
      onClick={addvalue}>Add count</button>
      <br /><br />
      <button
      onClick={removeval}>Remove count</button>
    </>
  )
}

export default App
