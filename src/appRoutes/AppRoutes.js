import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from "../pages/login/Login"
import ForgotPassword from '../pages/forgot_Password/Forgot_password';
import SignUp from '../pages/SignUp/SignUp';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/sign-Up' element={<SignUp />} />
            <Route path='/forgot-Password' element={<ForgotPassword />} />
            <Route path='*' element={<Navigate to="/" />} />
        </Routes>
    )
}

export default AppRoutes
