
import SlideShow from '../components/SlideShow.jsx';
import Owner from '../components/Owner.jsx';
import Tags from '../components/Tags.jsx';
import Localisation from '../components/Localisation.jsx';
import RatingStars from '../components/RatingStars.jsx';
import Dropdown from '../components/Dropdown.jsx';
import BackendInfo from '../components/BackendInfo.jsx';
import E404 from './404.jsx';

function Property() {

    const backendData = BackendInfo();
    
    const id = window.location.pathname.split('/').pop();
    
    if (!id) {
        return <E404/>;
    }

    if (!backendData) {
        return <div>Chargement en cours...</div>; 
    }

    const idString = id.toString();

    const logement = backendData.find(logement => logement.id === idString);

    if (!logement) {
        return <E404/>;
    }

    return (
        <div className='PropertyContent'>
            <SlideShow pictures={logement.pictures} />
            <div className='Align'>
                <div>
                    <h2 className='PropertyContent__Title'>{logement.title}</h2>
                    <Localisation location={logement.location} />
                </div>
                <Owner host={logement.host} />
            </div>
            <div className='Align'>
                <Tags tags={logement.tags} />
                <RatingStars rating={logement.rating} />
            </div>
            <div className='Align'>
                <div className='ContainDrop'>
                    <Dropdown itemsGetter={() => logement?.description ? [logement.description] : []} title="Description" />
                </div>
                <div className='ContainDrop'>
                    <Dropdown itemsGetter={() => logement?.equipments || []} title="Équipement" />
                </div>
            </div>
        </div>
    );
}

export default Property;