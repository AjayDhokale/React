import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TextStyling from './TextStyling'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='h-screen w-screen border-2  flex justify-center items-center'>
        <TextStyling />
      </div>
    </>
  )
}

export default App
