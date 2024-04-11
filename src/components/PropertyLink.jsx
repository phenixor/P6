import React from 'react';
import { Link } from 'react-router-dom';
import { BackendInfo } from './BackendInfo';
import Paysage from "../assets/Paysage.png";

function LinkProperty() {
    const backendData = BackendInfo();

    if (!backendData) {
        return <div>Chargement en cours...</div>;
    }

    return (
        <div className='Homepage'>
            {/* Mettre en composant */}
            <div className='PaysageDiv'>
                <img className='PaysageImage' src={Paysage} alt="Paysage" />
                <h1 className='PaysageTitle'>Chez vous, partout et ailleurs</h1>
            </div>
            {/*  */}
            <ul className='CardPlacement'>
                {backendData.map(location => (
                    <li className='LocationCard' key={location.id}>
                        <div className='LocationCard__Dégradé'></div>
                        <img className='LocationCard__Image' src={location.cover} alt={location.title} />

                        <Link to={`/property/${location.id}`}></Link>

                        <Link className='LocationCard__Title' to={`/property/${location.id}`}>{location.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default LinkProperty;