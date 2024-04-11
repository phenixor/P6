
import SlideShow from '../components/SlideShow.jsx';
import Owner from '../components/Owner.jsx';
import Tags from '../components/Tags.jsx';
import Localisation from '../components/Localisation.jsx';
import RatingStars from '../components/RatingStars.jsx';
import Dropdown from '../components/Dropdown.jsx';
import BackendInfo from '../components/BackendInfo.jsx';

function Single() {

    const backendData = BackendInfo();

    const id = window.location.pathname.split('/').pop();
    
    if (!id) {
        return <div>Aucun ID de logement spécifié</div>;
    }

    if (!backendData) {
        return <div>Chargement en cours...</div>; 
    }

    const idString = id.toString();

    const logement = backendData.find(logement => logement.id === idString);

    if (!logement) {
        return <div>logement inexistente</div>;
    }

    return (
        <div>
            <SlideShow pictures={logement.pictures} />
            <h2>{logement.title}</h2>
            <Localisation location={logement.location} />
            <Owner host={logement.host} />
            <Tags tags={logement.tags} />
            <RatingStars rating={logement.rating} />
            <div>
                <Dropdown itemsGetter={() => logement?.description ? [logement.description] : []} title="Description" />
                <Dropdown itemsGetter={() => logement?.equipments || []} title="Équipement" />
            </div>
        </div>
    );
}

export default Single;