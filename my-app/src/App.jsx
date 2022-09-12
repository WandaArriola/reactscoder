import {React} from 'react';
import './App.css';
import Boton from './component/Buton/Boton';
import Form from './component/Form/Form';
import ItenListContainer from './component/ItemListContainer/ItenListContainer';
import NavBar from './component/NavBar/NavBar';
import Productos from './component/Prodcutos/Productos';
/*import Dolar from './component/Dolar/Dolar';*/
import ItemDatailContainer from './component/ItemDetailContainer/ItemDatailContainer';

function App ()  {
    return (
       <>
       {
        /*<div className='App'>
            <NavBar/>
            <Form/>
            <Boton/>
            <ItenListContainer/>
            <Productos/>
            
        </div>*/
    }

    <ItemDatailContainer/>
    </>
    );
}

export default App;



