// StarRating.js
import React from 'react';
import "./StarRating.css"
import { FaStar } from 'react-icons/fa'; // Using Font Awesome star icons for illustration

const StarRating = () => {
    // Array to render 5 stars, with the first 4 filled
    const stars = Array(5).fill(0).map((_, index) => (
        <FaStar key={index} className={`star ${index < 4 ? 'filled' : ''}`} />
    ));

    return <div className="star-rating">{stars}</div>;
};

export default StarRating;
