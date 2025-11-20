import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './pages/LayOut'
import PageNotFound from './pages/PageNotFound'
import Product from './pages/Product'
import User from './pages/User'
import Home from './pages/Home'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
         
           <Route index element={<Home />}/>
          <Route path='/products' element={<Product />} />
          <Route path='/users' element={<User />} />
          

          <Route path='/*' element={<PageNotFound/> }/>


          {/* Add more nested routes here */}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App