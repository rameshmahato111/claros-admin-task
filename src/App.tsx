import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './pages/LayOut'
import UserComponent from './components/UserComponent'
import HomeComponent from './components/HomeComponent'
import PageNotFound from './pages/PageNotFound'
import Product from './pages/Product'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
         
           <Route index element={<HomeComponent />}/>
          <Route path='/products' element={<Product />} />
          <Route path='/users' element={<UserComponent />} />
          

          <Route path='/*' element={<PageNotFound/> }/>


          {/* Add more nested routes here */}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App