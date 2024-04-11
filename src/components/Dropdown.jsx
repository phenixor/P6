import React, { useState } from 'react';
import DropArrow from '../assets/DropArrow.svg';

function Dropdown({ itemsGetter, title }) {
  const [isOpen, setIsOpen] = useState(false);
  const items = itemsGetter();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <button className="dropbtn" onClick={toggleDropdown}>
        {title} <img src={DropArrow} className={`arrow ${isOpen ? 'rotate' : ''}`} alt="Drop Arrow" />
      </button>
      <div className={`dropdown-content ${isOpen ? 'show' : ''}`}>
        {items && items.length > 0 ? (
          items.map((item, index) => <p key={index}>{item}</p>)
        ) : (
          <p>Aucun contenu disponible</p>
        )}
      </div>
    </div>
  );
}

export default Dropdown;
