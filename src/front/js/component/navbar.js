import React from "react";
import { Link } from "react-router-dom";
import  "../../styles/navbar.css"
import logo from "../../img/logo.png"

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light main-navbar">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><i class="bi bi-person"></i>Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a className="nav-link active" aria-current="page" href="#">Home</a>
        <a href="/" className="li-logo"><img src={logo} className="navbar-brand logo col-sm-4 " ></img></a>
        <a className="color-link" href="#">¿Quienes somos?</a>
        <a className="color-link" href="#" >¿Donde hemos estado?</a>
        <a className="color-link" href="#" >¿Que estamos jugando actualmente?</a>
       
        
      </div>
	
    </div>
  </div>
</nav>
	);
};

