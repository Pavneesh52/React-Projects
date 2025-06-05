import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className='bg-blue-500 text-white p-4 rounded-xl mb-5'>Tailwind Test</h1>
    <Card username={"Pavneesh"} btnText = {"click me"}/>
    <Card username={"Himanshu"} btnText={"visit me"}/>
    </>
  )
}

export default App
