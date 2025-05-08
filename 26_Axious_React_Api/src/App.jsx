
import './App.css'
import Posts from './components/Posts'
import Users from './components/Users'
import Dictionery from './components/Dictionery'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Navbar from './components/Navbar'
import AllUser from './components/AllUser'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>

    <div className='flex justify-center '>

      <Navbar />
      <Routes>
        <Route path='/' element={<Posts />} />
        <Route path='/users' element={<AllUser />} />
        <Route path='/dictionery' element={<Dictionery />} />
        {/* <Route path='/' element={<Dictionery />} /> */}
      </Routes>
      {/* <Posts /> */}
      {/* <Users /> */}
      
    </div>

    </BrowserRouter>
  )
}

export default App
