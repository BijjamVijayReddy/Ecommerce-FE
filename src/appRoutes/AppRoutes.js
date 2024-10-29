import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from "../pages/login/Login"
import ForgotPassword from '../pages/forgot_Password/Forgot_password';
import SignUp from '../pages/signUp/SignUp';
import Dashbaord from "../pages/dashboard/Dashboard";
// import Categories from "../pages/categories/Categories";
import About from '../pages/about-us/About';
import Contact from '../pages/contact/Contact';
import Cart from '../pages/cart/Cart';


const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/sign-Up' element={<SignUp />} />
            <Route path='/forgot-Password' element={<ForgotPassword />} />
            <Route path='/dashboard' element={<Dashbaord />} />
            {/* <Route path="/categories" element={<Categories />} /> */}
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='*' element={<Navigate to="/" />} />
        </Routes>
    )
}

export default AppRoutes
