import {React, useState} from 'react';
import './App.css';
import Boton from './Boton';
import Form from './Form';
import ItenListContainer from './ItenListContainer';
import NavBar from './NavBar';

import Productos from './Productos';


function App ()  {
    return (
       
        <div className='App'>
            <NavBar/>
            <Form/>
            <Boton/>
            <ItenListContainer/>
            
            <Productos/>
        </div>
            
    );
}

export default App;



