import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [Counter, setCount] = useState(15)

  const addValue = () => {
  setCount(Counter + 1)
  console.log("clicked add value", Counter);
}

  return (
    <>
      <h1>Chai aur Code</h1>
      <h2>Counter Value: {Counter}</h2>

      <button>Add Value</button><br/>
      <button>Remove Value</button>
    </>
  )
}

export default App
