
import React from 'react';
import './Internet.css';
import logo from "../../assests/logo.png";
import internet_broken from '../../assests/internet_broken.png';

const Internet = () => {
    const handleRetry = () => {
        window.location.reload();
    };

    return (
        <div className="offline-container">
            <header className="header1">
                <img src={logo} alt="logo" className="logo" />
            </header>
            <div className="offline-content">
                <div className="wifi-icon">
                    <img src={internet_broken} alt="Internet Broken" className="broken-logo" />
                </div>
                <h1 className='offline'>You appear to be offline</h1>
                <p className='reconnected'>You can't use the service until you're connected to the internet.</p>
                <button className="retry-button" onClick={handleRetry}>
                    Reload
                </button>
            </div>
        </div>
    );
};

export default Internet;
