import React from "react";
import { NavLink } from "react-router-dom";

function E404() {
    return (
        <div className="Page404">
            <p className="Number404">404</p>
            <p className="Text404">Oups! La page que vous demandez n'existe pas.</p>
            <NavLink className="Link404" to="/">Retourner sur la page d’accueil</NavLink>
        </div>
    );
}

export default E404;
