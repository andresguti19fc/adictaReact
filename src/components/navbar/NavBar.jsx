import React from "react";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

const NavBar = function () {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <p className="navbar-brand">Adicta</p>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item active mx-3">
              <Link to="/categoria/zapatos" className="btn btn-outline-light">
                zapatos
              </Link>
            </li>
            <li className="nav-item mx-3">
              <Link to="/categoria/camisas" className="btn btn-outline-light">
                camisas
              </Link>
            </li>
            <li className="nav-item mx-3">
              <Link
                to="/categoria/pantalon"
                className="btn btn-outline-light"
              >
                pantalones
              </Link>
            </li>
            <li className="nav-item mx-3">
              <Link
                to="/categoria/accesorios"
                className="btn btn-outline-light"
              >
                accesorios
              </Link>
            </li>
          </ul>
          <CartWidget />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
