import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./ForgotPassword.css";
import logo from "../../assests/logo.png";
import { fetchApi } from '../../services/fetchApi';
import ErrorToast, { errorToast } from '../../components/toast/ErrorToast';
import SpinnerLoader from '../../components/spinLoader/SpinLoader';
import Helmet from '../../components/helmet/Helmet';


const ForgotPassword = () => {
    const navigate = useNavigate();
    const [userEmail, setuserEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isErr, setError] = useState(false);
    const [emailErr, setEmailEr] = useState("");
    const [passwordErr, setPasswordEr] = useState("");
    const [confirmPasswordErr, setConfirmPasswordErr] = useState("");
    const [isuser, setUser] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [istoken, setToken] = useState(null);
    console.log("isToken", istoken);

    // Handler for requesting the token (forgot password)
    const handleTokenRequest = async (e) => {
        e.preventDefault();

        if (!userEmail) {
            setError(true);
            setEmailEr("Enter Your Email");
            return;
        }

        setIsLoading(true);
        const emailData = JSON.stringify({ userEmail });

        try {
            const result = await fetchApi("POST", "/forgot-password", emailData);

            if (result && result.token) {
                setUser(true);
                setToken(result.token); // Store token for later use
            }
        } catch (err) {
            handleApiErrors(err);
        } finally {
            setIsLoading(false);
        }
    };

    // Handler for resetting the password (after token is received)
    const handlePasswordReset = async (e) => {
        e.preventDefault();

        if (!Password || !confirmPassword) {
            setError(true);
            setPasswordEr("Password should be strong, at least 10 characters");
            setConfirmPasswordErr("Confirm your password");
            return;
        }

        if (Password !== confirmPassword) {
            setError(true);
            setPasswordEr("Passwords do not match");
            setConfirmPasswordErr("Passwords do not match");
            return;
        }

        setIsLoading(true);
        const passwordPayload = JSON.stringify({ userPassword: Password });
        const config = istoken ? { headers: { Authorization: `Bearer ${istoken}` } } : {};

        try {
            const resetResult = await fetchApi("POST", "/change-password", passwordPayload, config);
            console.log("Password reset successful:", resetResult);
        } catch (err) {
            handleApiErrors(err);
        } finally {
            setIsLoading(false);
        }
    };

    // Function to handle different API errors
    const handleApiErrors = (err) => {
        const statusCode = err?.status || err?.response?.status;
        console.error("Error status:", statusCode, "Error:", err);
        if (statusCode === 400) {
            errorToast("Bad Request");
        } else if (statusCode === 401) {
            errorToast("Please check your username or password.");
        } else if (statusCode === 403) {
            errorToast("Access Denied.");
        } else if (statusCode === 404) {
            errorToast("User Not Found with Email.");
        } else if (statusCode === 408) {
            errorToast("Request Timeout.");
        } else if (statusCode === 500) {
            errorToast("Internal Server Error");
        } else if (statusCode === 503 || err.message === "Network Error") {
            errorToast("Server is Currently Unavailable.");
        } else {
            errorToast("Something went wrong");
        }
    };

    return (
        <Helmet title="Forgot-Password">
            <ErrorToast />
            <div className='login-container'>
                <img src={logo} alt="logo" className='logo' />
                <h1 className='Login-shift'>Forgot Password for Shift Cart</h1>
                <p className='Login-shift1'>Reset Your Password for Shift Cart</p>
                <br />
                <form className="login-form">
                    <div className="input-group">
                        <label>Email Address :</label>
                        <input
                            className='input'
                            type="email"
                            id="userEmail"
                            value={userEmail}
                            name='userEmail'
                            onChange={(e) => setuserEmail(e.target.value)}
                            placeholder="JOHN.DOE@COMPANY.COM"
                        />
                        <small className='validate-color'>{isErr ? emailErr : null}</small>
                    </div>

                    {!istoken && (
                        <button type="button" onClick={handleTokenRequest} className="login-button" disabled={isLoading}>
                            {isLoading ? (
                                <>
                                    <SpinnerLoader isLoading={isLoading} />
                                    <span style={{ marginLeft: '8px' }}>Loading...</span>
                                </>
                            ) : "Request Token"}
                        </button>
                    )}

                    {istoken && (
                        <>
                            <div className="input-group">
                                <label>Password</label>
                                <input
                                    className='input'
                                    type="password"
                                    id="password"
                                    value={Password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="***************"
                                />
                                <small className='validate-color'>{isErr ? passwordErr : null}</small>
                            </div>

                            <div className="input-group">
                                <label>Confirm Password</label>
                                <input
                                    className='input'
                                    type="password"
                                    id="confirmPassword"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    placeholder="***************"
                                />
                                <small className='validate-color'>{isErr ? confirmPasswordErr : null}</small>
                            </div>

                            <button type="button" onClick={handlePasswordReset} className="login-button" disabled={isLoading}>
                                {isLoading ? (
                                    <>
                                        <SpinnerLoader isLoading={isLoading} />
                                        <span style={{ marginLeft: '8px' }}>Loading...</span>
                                    </>
                                ) : "Reset Password"}
                            </button>
                        </>
                    )}
                </form>
                <p className='signupnow mt-3'>You have an Account? <span className='signup' onClick={() => navigate("/")}>Click Here.</span></p>
            </div>
        </Helmet>
    );
};

export default ForgotPassword;
