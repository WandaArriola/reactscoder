

import React from 'react';
import Form from './Form';
import Boton from './boton';

const NavBar = () => {
  return (
    <div>
       <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">Navbar</a>
     
      <div className="collapse navbar-collapse" id="navbarColor02">
        <ul className="navbar-nav me-auto">
          <li className="nav-item">
            <a className="nav-link active" href="#">Home
              <span className="visually-hidden">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Features</a>
          </li>
         
        </ul>
       <Form boton ={<Boton/>}/>
      </div>
    </div>
  </nav>
  </>
    </div>
  );
}

export default NavBar;

