import React from 'react';

function RatingStars({ rating }) {
    const renderStars = () => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            if (i <= rating) {
                stars.push(<i key={i} className="fas fa-star"></i>);
            } else {
                stars.push(<i key={i} className="far fa-star"></i>);
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