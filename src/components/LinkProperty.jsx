import React from 'react';
import { Link } from 'react-router-dom';
import BackendInfo from './BackendInfo';
import PaysageComponent from './PaysageComponent';
import Paysage from "../assets/Paysage.png";

function LinkProperty() {
    const backendData = BackendInfo();

    if (!backendData) {
        return <div>Chargement en cours...</div>;
    }

    return (
        <div className='Homepage'>
            <PaysageComponent imageUrl={Paysage} title="Chez vous, partout et ailleurs" />
            <ul className='CardPlacement'>
                {backendData.map(location => (
                    <li className='LocationCard' key={location.id}>
                        <div className='LocationCard__Dégradé'></div>
                        {/* Wrap the image and title in a Link */}
                        <Link to={`/property/${location.id}`}>
                            <img className='LocationCard__Image' src={location.cover} alt={location.title} />
                            <h3 className='LocationCard__Title'>{location.title}</h3>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default LinkProperty;
