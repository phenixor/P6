import React from 'react';

function PaysageComponent({ imageUrl, title }) {
    return (
        <div className='PaysageDiv'>
            <img className='PaysageImage' src={imageUrl} alt="Paysage" />
            <h1 className='PaysageTitle'>{title}</h1>
        </div>
    );
}

export default PaysageComponent;