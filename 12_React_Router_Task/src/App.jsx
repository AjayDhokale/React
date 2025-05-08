import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'

import HTML from './components/HTML'
import CSS from './components/CSS'
import JavaScript from './components/JavaScript'
import Tailwind from './components/Tailwind'
import BootStrap from './components/BootStrap'
import Reactcomp from './components/React'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/html' element={<HTML />} />
        <Route path='/css' element={<CSS />} />
        <Route path='/javascript' element={<JavaScript />} />
        <Route path='/react' element={<Reactcomp />} />
        <Route path='/tailwind' element={<Tailwind />} />
        <Route path='/bootstrap' element={<BootStrap />} />
        <Route path='*' element={
          <div className='h-screen flex justify-center items-center bg-black text-white text-5xl '>
            <h1>404: Page Not Found</h1>
          </div>
        } />

      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
