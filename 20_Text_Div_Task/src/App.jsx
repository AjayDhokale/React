import { useState } from 'react'
import DynamicDivComp from './DynamicDivComp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='flex justify-center w-screen h-screen'>

      <DynamicDivComp />
    </div>
    </>
  )
}

export default App
