import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} >
          <Route path=':email/:pass'  />
        </Route>

        {/* <Route path='/' element={<Navbar />} >
          <Route path='/dashboard' element={<Sidebar />} />
        </ Route> */}

      </Routes>


    </BrowserRouter>
  )
}

export default App
