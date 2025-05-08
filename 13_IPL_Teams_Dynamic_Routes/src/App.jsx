import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/common/Navbar'
import Home from './components/Home.jsx'
import AllTeams from './components/AllTeams.jsx'
import Team from './components/Team.jsx'
import Player from './components/Player.jsx'

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/allteams" element={<AllTeams />} >
          <Route path=':team' element={<Team />} >
            <Route path=':player' element={<Player />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
