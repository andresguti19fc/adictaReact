import React from "react";
import {Login} from "../../auth/Login";
import {Logout} from "../../auth/Logout";
import { Perfil } from "../../auth/Perfil";
import {useAuth0} from "@auth0/auth0-react";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = function () {

  let arrayCategory = ['zapatos', 'camisas', 'pantalones', 'accesorios'];

  const {isAuthenticated} = useAuth0();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <p className="navbar-brand">Adicta</p>
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            {arrayCategory.map((category, index) => (
              <li className="nav-item active mx-3" key={index}>
                <Link to={`/categoria/${category}`} className="btn btn-outline-light">
                  {category}
                </Link>
              </li>
            ))}
          </ul>
        
          <CartWidget />
          {isAuthenticated 
          ? <>
            <Logout />
            <Perfil />
          </>
          : <Login />}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
