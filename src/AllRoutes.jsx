import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Home/Home';
import Login from './LoginPage/Login'
import Product from './ProductPage/Product';

const AllRoutes = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/product" element={<Product />} />
        </Routes>
    </BrowserRouter>
  )
}

export default AllRoutes