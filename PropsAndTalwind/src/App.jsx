import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Componets/Card'

function App() {
  const [count, setCount] = useState(0)

  let obj = {
    name :"ABC",
    age :21,
    sal: 25000
  }
  return (
    <>
    <h2 className='bg-green-400 p-4 mb-10'>Tailwind Test</h2>

    <Card name = " First Card" sampleObj = {obj}/ >
    <Card/>
    </>
  )
}

export default App
