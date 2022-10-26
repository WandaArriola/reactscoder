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
            <a className="nav-link dropdown-toggle"  id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
             Productos</a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <Link to={"/category/yaguarte"} className='nav-link' >Vela Yafuareté</Link>
                <Link to={"/category/ flamenco"} className='nav-link' >Vela Flamenco</Link>
                <Link to={"/category/ tatu"} className='nav-link' >Vela Tatú</Link>
                <Link to= {"/category/ coati"} className='nav-link' >Vela Coatí</Link>
            </ul>
          </li>
        </ul>
        <CartWidge />
      </div>
    </div>
  </nav>
  );
}

export default NavBar;


