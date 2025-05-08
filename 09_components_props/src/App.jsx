import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProductData from './components/productData'
import AllUsers from './components/AllUsers'
import AllBooks from './components/AllBooks'
import AllImages from './components/AllImages'
import Navbar from './components/Navbar'

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<ProductData />} />
        <Route path='/users' element={<AllUsers />} />
        <Route path='/books' element={<AllBooks />} />
        <Route path='/images' element={<AllImages />} />
      </Routes>
    </BrowserRouter>
  )
}


export default App


