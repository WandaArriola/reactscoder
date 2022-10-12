import 'bootstrap/dist/css/bootstrap.min.css';
import {React} from 'react';
import './App.css';
import NavBar from './component/NavBar/NavBar';
import { ItemListlContainer } from './component/ItemListContainer/ItemListContainer';

/*import Boton from './component/Buton/Boton';*/
import Form from './component/Form/Form';
import ItenContainerCounter from './component/ItemCount/ItenContainerCounter';


/*import Productos from './component/Prodcutos/Productos';*/
/*import Dolar from './component/Dolar/Dolar';*/
/*import ItemDatailContainer from './component/ItemDetailContainer/ItemDatailContainer';*/


function App ()  {
    return (
       <>
       {
       /* <div className='App'>
           <NavBar/>
            <ItenContainerCounter/>
            <ItemDatailContainer/>
            <ItemListlContainer/>
              <Boton/> 
        </div>*/

        <div className='App'>
            <NavBar/>
             <ItemListlContainer/>
             <ItenContainerCounter/>
              <Form/>
        </div>
            
    }

    </>
    );
}

export default App;



