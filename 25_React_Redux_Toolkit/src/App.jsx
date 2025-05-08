
import './App.css'
import Counter from './components/Counter'
import Navbar from './components/Navbar'
import TodoList from './components/TodoList'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <div className='w-screen flex justify-center '>



      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Counter />} />
          <Route path='/todo' element={<TodoList />} />
        </Routes>

      </BrowserRouter>
    </div>
  )
}

export default App
