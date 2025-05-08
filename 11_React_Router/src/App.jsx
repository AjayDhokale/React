import './App.css'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Education from './components/Education'
import Skills from './components/Skills'

import Technology from './components/Technology'
import UserDetails from './components/UserDetails'


function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        
        <Route path='/about' element={<About />} >
          <Route path='education' element={<Education />} />

          <Route path='skills' element={<Skills />} >
            <Route path=':tech' element={<Technology />} />
          </Route>
        
        </Route>

        <Route path='/contact' element={<Contact />} >
        <Route path=':userid' element={<UserDetails />} />
       
        </Route>
        
        
        <Route path='*' element={
          <div className='h-screen flex justify-center items-center bg-black text-white text-5xl '>
            <h1>404: Page Not Found</h1>
          </div>
        } />

      </Routes>
    </BrowserRouter>
  )
}

export default App
