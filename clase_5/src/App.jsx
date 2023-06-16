import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

const useCounter = () =>{
  const [counter,setcounter] = useState(0);

  const increase = () => setcounter(counter + 1)
   
  const decrement = () => setcounter(counter - 1)

  const reset = () => setcounter(0)

  return{
    counter,
    increase,
    decrement,
    reset
  }
}

function App() {

  const {counter,increase,decrement,reset} = useCounter()

  return (
    <>
      <h1>Custom Hooks</h1>
      <h3>{counter}</h3>
      <button onClick={increase}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>reset</button>
    </>
  )
}

export default App
