import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import LOGO from "../assets/LOGO.svg";

function Root() {
    return (
        <div>
            <div className='HeaderDiv'>
                <header>
                    <div>
                        <img className='LOGO' src={LOGO} alt="LOGO SVG" />
                    </div>
                    <nav>
                        <NavLink className="Link" to="/">Accueil</NavLink> 
                        <NavLink className="Link" to="/about">À Propos</NavLink>
                    </nav>
                </header>
            </div>
            <div>
                <Outlet />
            </div>
            <div className="FooterDiv">
                <footer>
                    <img className='LOGO__Footer' src={LOGO} alt="LOGO SVG" />
                    <p>© 2020 Kasa. All rights reserved</p>
                </footer>
            </div>
        </div>
    );
}


export default Root;