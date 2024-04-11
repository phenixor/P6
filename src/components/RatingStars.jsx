import React from 'react';
import starA from '../assets/étoile pleine.svg';
import starB from '../assets/étoile vide.svg';

function RatingStars({ rating }) {
    const renderStars = () => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            if (i <= rating) {
                stars.push(<img key={i} src={starA} className="star"></img>);
            } else {
                stars.push(<img key={i} src={starB} className="star"></img>);
            }
        }
        return stars;
    };

    return (
        <div className="rating-stars">
            {renderStars()}
        </div>
    );
}

export default RatingStars;