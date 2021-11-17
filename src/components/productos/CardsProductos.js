import React from 'react';
import { Link } from 'react-router-dom';
import { Descripciontarjeta, Imagenguajolota, Precio } from '../../styles/template';

const Cardsproductos = ({ data }) => {
    let { nombre, imagen, precio } = data;
    return (
        <div>
            <Imagenguajolota src={imagen} alt={nombre}/>
            <Descripciontarjeta>
                <p>{nombre}</p>
                <Precio>{precio}</Precio>
            </Descripciontarjeta>
        </div>
    );
}

export default Cardsproductos;
