import React from "react";
import Boton from "../boton/Boton";
import CartWidget from "./CartWidget";

const NavBar = function(){
return (
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container">
    <p className="navbar-brand">Adicta</p>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul className="navbar-nav">
            <li className="nav-item active mx-3">
                <Boton label='inicio' />
            </li>
            <li className="nav-item mx-3">
                <Boton label='Mujeres' />
            </li>
            <li className="nav-item mx-3">
                <Boton label='Hombres' />
            </li>
            <li className="nav-item mx-3">
                <Boton label='niños' />
            </li>
        </ul>
        <CartWidget />
    </div>
    </div>
    
</nav>
);  

}

export default NavBar;