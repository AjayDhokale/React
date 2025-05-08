import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Pricing from './components/Pricing'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Pricing />
        
    </>
  )
}

export default App
