import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './pages/LayOut'
import ProductComponent from './components/ProductComponent'
import UserComponent from './components/UserComponent'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
         
      
          <Route path='/products' element={<ProductComponent />} />
          <Route path='/users' element={<UserComponent />} />
          

          <Route path='/*' element={<p>Page not found.</p> }/>


          {/* Add more nested routes here */}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App