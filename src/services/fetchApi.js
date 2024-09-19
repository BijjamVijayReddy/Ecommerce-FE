import axios from "axios";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'; // Importing toastify styles

const apiClinet = axios.create({
    baseURL: 'localhost:8888/user',
    headers: {
        'Content-Type': 'application/json',
    },
});

export const fetchApi = async (method, endPoint, data = null, config = {}) => {
    try {
        const response = await apiClinet({
            method,
            url: endPoint,
            data,
            ...config
        });
        return response.data;
    } catch (error) {

        if (error.response && error.response.data) {

            const errorMessage = error.response.data.message || "An error occurred. Please try again.";
            toast.error(`Error: ${errorMessage}`, {
                position: toast.POSITION.TOP_RIGHT,
            });
        } else {

            toast.error("Something went wrong. Please try again.", {
                position: toast.POSITION.TOP_RIGHT,
            });
        }
        throw error;
    }
};
