import 'bootstrap/dist/css/bootstrap.min.css';
import {React} from 'react';
import './App.css';
import NavBar from './component/NavBar/NavBar';
import { ItemListlContainer } from './component/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './component/ItemDetailContainer/ItemDetailContainer';
/*import ItemContainerCounter from './component/ItemCount/ItemContainerCounter';*/
import {BrowserRouter, Routes, Route} from "react-router-dom"

 
function App ()  {
    return (
    
        <> 
        
        <BrowserRouter>
        <NavBar/>
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
            <ItemContainerCounter/>
            <ItemDetailContainer/> 
       </div>*/
    
    );
}

export default App;



