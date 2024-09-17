import React, { useState } from 'react';
import "./Forgot_p.css";
import logo from "../../assests/logo.png"


const Login = () => {
    const [email, setEmail] = useState('');
    const [isErr, setError] = useState(false);
    const [emailErr, setEmailEr] = useState("")



    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email) {
            setError(true)
            console.log("email is not found")
            setEmailEr("email is not found")
        }
        console.log('Email:', email);  
    };



    return (
        <div className='login-container'>
            <img src={logo} alt="logo" className='logo' />
            <h1 className='Login-shift'>Shift Cart</h1>
            <p className='Login-shift1'>Change password</p>
            <br />
            <form onSubmit={handleSubmit} className="login-form">
                <div className="input-group">
                    <label>Email Address</label>
                    <input className='input'
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="JOHN.DOE@COMPANY.COM"

                    />
                    <small className='validate-color'>{isErr ? emailErr : null}</small>
                    
                </div>

                
                <br />
                <button type="submit" className="login-button">Submit</button>


            </form>
        </div>


    )
}

export default Login


