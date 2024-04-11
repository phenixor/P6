import React from 'react';

function Owner({ host }) {
    return (
        <div>
            <p>{host.name}</p>
            <img src={host.picture} alt="Photo du propriétaire" className="Proprietaire__Image" />
        </div>
    );
}

export default Owner;