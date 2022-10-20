import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import CartWidge from './CartWidge';
import "./StyleNavBar.scss"

const NavBar = () => {
  return (
    
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark" id="nav-bar">
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
     </nav>
      
  
  );
}

export default NavBar;


