import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./ForgotPassword.css";
import logo from "../../assests/logo.png";
import { fetchApi } from '../../services/fetchApi';
import CustomToast, { showToast } from '../../components/toast/Toast';
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
    const [isLoading, setIsLoading] = useState(false);
    const [istoken, setToken] = useState("");

    // Function to handle Enter key press
    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            if (!istoken) {
                handleTokenRequest(e);
            } else {
                handlePasswordReset(e);
            }
        }
    };

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
                setToken(result.token);
            }
        } catch (err) {
            handleApiErrors(err);
        } finally {
            setIsLoading(false);
        }
    };

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
        const config = { headers: { Authorization: istoken } };

        try {
            const resetResult = await fetchApi("POST", "/change-password", passwordPayload, config);
            console.log(resetResult)
            showToast("Password Updated Successfully", 'success');
            setTimeout(() => {
                navigate("/")
            }, 8000)
        } catch (err) {
            handleApiErrors(err);
        } finally {
            setIsLoading(false);
        }
    };

    const handleApiErrors = (err) => {
        console.log("Error occurred:", err);
    };

    return (
        <Helmet title="Forgot-Password">
            <CustomToast />
            <div className='login-container'>
                <img src={logo} alt="logo" className='logo' />
                <h1 className='Login-shift'>Forgot Password for Shift Cart</h1>
                <p className='Login-shift1'>Reset Your Password for Shift Cart</p>
                <br />
                <form className="login-form" onKeyDown={handleKeyPress}>
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
                        <button type="button" onClick={handleTokenRequest} className="login-btn" disabled={isLoading}>
                            {isLoading ? (
                                <>
                                    <SpinnerLoader isLoading={isLoading} />
                                    <span style={{ marginLeft: '8px' }}>Loading...</span>
                                </>
                            ) : "Submit"}
                        </button>
                    )}

                    {istoken && (
                        <>
                            <div className="input-group">
                                <label>Password : </label>
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
                                <label>Confirm Password : </label>
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

                            <button type="button" onClick={handlePasswordReset} className="login-btn" disabled={isLoading}>
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
