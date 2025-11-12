import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // let counter=15
  let [counter,setCounter]=useState(15)
  const addValue=()=>{
    console.log("Clicked to increase value",counter+1);
    
    counter=counter+1
    setCounter(counter)
  }
  const decreaseValue=()=>{
    console.log("Clicked to decrease value ",counter-1);
    
    setCounter(counter-1)
  }
  return (
    <>
      <h1>Counter App to add and subtract</h1>
      <h2>Counter value:{counter}</h2>
      <button onClick={addValue}>Add Value:{counter}</button>
      <br />
      <button onClick={decreaseValue}>Decrease Value:{counter}</button>
    </>
  )
}

export default App
