import 'bootstrap/dist/css/bootstrap.min.css';
import {React} from 'react';
import './App.css';
import NavBar from './component/NavBar/NavBar';
import { ItemListlContainer } from './component/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './component/ItemDetailContainer/ItemDetailContainer';
/*import Form from './component/Form/Form';*/
import ItenContainerCounter from './component/ItemCount/ItenContainerCounter';




function App ()  {
    return (
       <>
       {
        <div className='App'>
            <NavBar/>
             <ItemListlContainer/>
             <ItenContainerCounter/>
             <ItemDetailContainer/>
           
        </div>
            
    }

    </>
    );
}

export default App;



