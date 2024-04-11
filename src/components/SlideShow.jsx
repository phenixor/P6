import React, { useState } from 'react';

function SlideShow({ pictures }) {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === pictures.length - 1 ? 0 : prevSlide + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === 0 ? pictures.length - 1 : prevSlide - 1));
    };

    return (
        <div className="slider">
            {pictures.length > 1 && (
                <>
                    <button onClick={prevSlide} className="prev">&#10094;</button>
                    <button onClick={nextSlide} className="next">&#10095;</button>
                </>
            )}
            <div className="slides">
                {pictures.map((picture, index) => (
                    <div key={index} className={index === currentSlide ? 'slide active' : 'slide'}>
                        <img src={picture} alt={`Image ${index + 1}`} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SlideShow;