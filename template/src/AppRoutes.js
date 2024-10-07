import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './LoginAndSiginIn/Login';
import SignIn from './LoginAndSiginIn/SignIn';
import Home from './Pages/Home';
import AddHome from './Pages/AddHome';
import Product from './Pages/Product';
import { useState } from 'react';
import Sidebar from './Design/Sidebar';
import Category from './Pages/Category';
import AddCategory from './Pages/AddCategory';
import AddProduct from './Pages/AddProduct';

const AppRoutes = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const handleLoginSuccess = () => {
        setIsLoggedIn(true);
    };
    return (
        <BrowserRouter>
            <div>   {isLoggedIn && <Sidebar />}
                <Routes>
                    <Route path="/" element={<Login onLoginSuccess={handleLoginSuccess} />}></Route>
                    <Route path="/signIn" element={<SignIn />}></Route>
                    <Route path="/home" element={<Home />} />
                    <Route path='/addHome' element={<AddHome />}></Route>
                    <Route path='/product' element={<Product />}></Route>
                    <Route path='/addProduct' element={<AddProduct />}></Route>
                    <Route path='/cate' element={<Category />}></Route>
                    <Route path='/addacte' element={<AddCategory />} ></Route>
                </Routes>
            </div>
        </BrowserRouter >
    )
}
export default AppRoutes;