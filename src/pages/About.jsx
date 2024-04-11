import React from "react";
import Paysage from "../assets/Paysage.png";
import Dropdown from "../components/Dropdown";


function About() {
    const fiabiliteText = "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes";
    const respectText = "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation de voisinage entraînera une exclusion de notre plateforme.";
    const serviceText = "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation de voisinage entraînera une exclusion de notre plateforme.";
    const securiteText = "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond auc critères de sécurité établis par nos services. En laissant une note aussi bien à l'hote qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domeestique pour nos hôtes.";
    
    return (
        <div>
            <img src={Paysage} alt="Paysage" />
            <Dropdown itemsGetter={() => [fiabiliteText]} title="Fiabilité" />
            <Dropdown itemsGetter={() => [respectText]} title="Respect" />
            <Dropdown itemsGetter={() => [serviceText]} title="Service" />
            <Dropdown itemsGetter={() => [securiteText]} title="Sécurité" />
        </div>
    );
};

export default About;

