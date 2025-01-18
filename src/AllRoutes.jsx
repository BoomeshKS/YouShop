import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Home/Home';
import Login from './LoginPage/Login'

const AllRoutes = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
        </Routes>
    </BrowserRouter>
  )
}

export default AllRoutes