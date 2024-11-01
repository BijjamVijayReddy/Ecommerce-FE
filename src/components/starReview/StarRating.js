// StarRating.js
import React from 'react';
import "./StarRating.css";
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';

const StarRating = () => {
    const rating = 4.5; // Example rating value (3.5)

    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    const stars = Array(5).fill(0).map((_, index) => {
        if (index < fullStars) {
            return <FaStar key={index} className="star filled" />;
        } else if (index === fullStars && hasHalfStar) {
            return <FaStarHalfAlt key={index} className="star half-filled" />;
        } else {
            return <FaStar key={index} className="star" />;
        }
    });

    return <div className="star-rating">{stars}</div>;
};

export default StarRating;
