import React from "react";
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
                <button className="btn btn-outline-light">Home</button>
            </li>
            <li className="nav-item mx-3">
                <button className="btn btn-outline-light">Features</button>
            </li>
            <li className="nav-item mx-3">
                <button className="btn btn-outline-light">Pricing</button>
            </li>
            <li className="nav-item mx-3">
                <button className="btn btn-outline-light">Disabled</button>
            </li>
        </ul>
    </div>
    </div>
    
</nav>
);  

}

export default NavBar;