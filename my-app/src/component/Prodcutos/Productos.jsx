import { React, useState, useEffect } from 'react';

const productos = [
    { nombre: " Vela yaguarete", caracteristica: "peso 120gm", precio: "1500", stock: 20},
    { nombre: " Vela flamenco", caracteristica: "peso 200gm", precio: "1500", stock: 10},
    { nombre: "Vela tatu", caracteristica: "peso 550gm", precio: "1500", stock: 30},
]
function consultarPromesa(confirmacion) {

    const promesa = new Promise((res, rej) => {

        if (confirmacion == true) {
            res(productos)
        } else {
            rej("acceso denegado")
        }
    })
    return promesa
}

const Productos = () => {
    const [productos, setProductos] = useState([])

    consultarPromesa(true)
        .then(data => {
            const prodcutosJSX = data.map((producto, indice) => 

                <div className="card border-primary mb-3" key={indice} style={{ maxWidth: '15rem', margin: '5px' }}>
                    <div className="card-header">{producto.nombre}</div>
                    <div className="card-body">
                        <p className="card-text">Stock: {producto.stock}</p>
                        <p className="card-text"> Caracteris: {producto.caracteristica}</p>
                        <p className="card-text"> Precio: {producto.precio}</p>
                    </div>
                </div>

            )
            setProductos(prodcutosJSX)
        })
        .catch(error => {
            console.error(error)
        })

    return (
        <div className='row'>
            {productos}
        </div>
    );

}

export default Productos;


