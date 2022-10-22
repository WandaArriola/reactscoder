import 'bootstrap/dist/css/bootstrap.min.css';
import {React} from 'react';
import './App.css';
import NavBar from './component/NavBar/NavBar';
import { ItemListlContainer } from './component/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './component/ItemDetailContainer/ItemDetailContainer';
import ItenContainerCounter from './component/ItemCount/ItenContainerCounter';
import {BrowserRouter, Routes, Route} from "react-router-dom"

 
function App ()  {
    return (
    
        <> 
        <NavBar/>
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<ItemListlContainer/>}/>
        <Route path='/category/:categoryId' element={<ItemListlContainer/>}/>
        <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
        

        </Routes>
        </BrowserRouter>
   
        </>

        /*<div className='App'>
            <NavBar/>
            <ItemListlContainer/>
            <ItenContainerCounter/>
            <ItemDetailContainer/> 
       </div>*/
    
    );
}

export default App;



