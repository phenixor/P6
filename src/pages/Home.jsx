import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import LOGO from "../assets/LOGO.svg";

function Root() {
    return (
        <div>
            <header>
                <div>
                    <img className='LOGO' src={LOGO} alt="LOGO SVG" />
                </div>
                <nav>
                    <NavLink className="Link" to="/">Acceuil</NavLink> 
                    <NavLink className="Link" to="/about">A Propos</NavLink>
                </nav>
            </header>
            <div>
                <Outlet />
            </div>
            <footer>
                <p>© 2020 Kasa. All rights reserved</p>
            </footer>
        </div>
    );
}

export default Root;