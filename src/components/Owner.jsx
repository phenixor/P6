import React from 'react';

function Owner({ host }) {
    return (
        <div className='Owner'>
            <p className='Owner__Name'>{host.name}</p>
            <img src={host.picture} alt="Photo du propriétaire" className="Owner__Picture" />
        </div>
    );
}

export default Owner;