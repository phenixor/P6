import React, { useState } from 'react';

function Dropdown({ itemsGetter, title }) {
  const [isOpen, setIsOpen] = useState(false);
  const items = itemsGetter();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <button className="dropbtn" onClick={toggleDropdown}>
        {title} &#9660;
      </button>
      {isOpen && (
        <div className="dropdown-content">
          {items && items.length > 0 ? (
            items.map((item, index) => <p key={index}>{item}</p>)
          ) : (
            <p>Aucun contenu disponible</p>
          )}
        </div>
      )}
    </div>
  );
}

export default Dropdown;