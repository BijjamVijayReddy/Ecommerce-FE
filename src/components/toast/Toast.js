import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CustomToast = () => <ToastContainer />;

export const showToast = (message, type = 'success', options = {}) => {
    const defaultOptions = {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    };

    const mergedOptions = { ...defaultOptions, ...options };

    if (type === 'success') {
        toast.success(message, mergedOptions);
    } else if (type === 'error') {
        toast.error(message, mergedOptions);
    }
};

export default CustomToast;
