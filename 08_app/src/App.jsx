import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AllProperties from './components/AllProperties'
import Temp from '../src/components/temp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='flex justify-center'>

      <AllProperties />
      {/* <Temp /> */}

      </div>
    </>
  )
}

export default App
