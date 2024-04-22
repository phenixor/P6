import React from 'react';

function PaysageComponent({ imageUrl, title, extraClass }) {
    return (
        <div className='PaysageDiv'>
            <img className={`PaysageImage ${extraClass}`} src={imageUrl} alt="Paysage" />
            <h1 className='PaysageTitle'>{title}</h1>
        </div>
    );
}

export default PaysageComponent;
