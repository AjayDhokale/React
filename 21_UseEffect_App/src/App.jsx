import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'


function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      {/* <h1 className='text-center text-2xl'>USE EFFECT HOOK</h1> */}
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>

    </BrowserRouter>
  )
}

export default App
