import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Home/Home';
import Login from './LoginPage/Login'
import Product from './ProductPage/Product';
import Deals from './DealsPage/Deals';

const AllRoutes = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/product" element={<Product />} />
            <Route path="/deals" element={<Deals/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default AllRoutes