import axios from "axios";
import { showToast } from "../components/toast/Toast"; 

const apiClient = axios.create({
    baseURL: 'https://swiftcart-g6dwdmajg0f2g2bd.southindia-01.azurewebsites.net/swift-cart',
    headers: {
        'Content-Type': 'application/json',
    },
});

export const fetchApi = async (method, endPoint, data = null, config = {}) => {
    try {
        const response = await apiClient({
            method,
            url: endPoint,
            data,
            ...config,
        });
        return response.data;
    } catch (error) {
        const statusCode = error?.response?.status || error?.status;
        
        // Error handling based on status codes
        if (statusCode === 400) {
            showToast("Bad Request", "error");
        } else if (statusCode === 401) {
            showToast("Invalid Username or Password.", "error");
        } else if (statusCode === 403) {
            showToast("Access Denied.", "error");
        } else if (statusCode === 404) {
            showToast("Resource Not Found.", "error");
        } else if (statusCode === 408) {
            showToast("Request Timeout.", "error");
        } else if (statusCode === 500) {
            showToast("Internal Server Error", "error");
        } else if (statusCode === 503 || error.message === "Network Error") {
            showToast("Server is Currently Unavailable.", "error");
        } else if (error.code === 'ECONNREFUSED') {
            showToast("Connection Refused.", "error");
        } else {
            showToast("Something Went Wrong", "error");
        }

        // Re-throw the error so it can be handled by the caller if needed
        throw error;
    }
};
