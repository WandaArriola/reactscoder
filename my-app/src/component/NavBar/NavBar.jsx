import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import CartWidge from './CartWidge';
import "./StyleNavBar.scss"
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
     <a> Fuego Nativo</a>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/" className='nav-link' >Inicio</Link>
          </li>
          
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
             Productos</a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <Link to="/" className='nav-link' >Vela Yafuareté</Link>
                <Link to="/" className='nav-link' >Vela Flamenco</Link>
                <Link to="/" className='nav-link' >Vela Tatú</Link>
                <Link to="/" className='nav-link' >Vela Coatí</Link>
            </ul>
          </li>
        </ul>
        <CartWidge />
      </div>
    </div>
  </nav>
    /*<nav className="navbar navbar-expand-lg navbar-dark bg-dark" id="nav-bar">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">Fuego Nativo</a>

            <div className="collapse navbar-collapse" id="navbarColor02">
              <ul className="navbar-nav me-auto">
                <li className="nav-item">
                  <a className="nav-link active" href="#">Home
                    <span className="visually-hidden">(current)</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Productos</a>
                </li>
              </ul>
              <CartWidge />
            </div>
          </div>
     </nav>*/
      
  
  );
}

export default NavBar;


