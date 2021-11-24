import React from 'react';
import { Link } from 'react-router-dom';
import { Descripciontarjeta, Imagenguajolota, Precio } from '../../styles/template';
import '../../styles/prueba.css';

const Cardsproductos = ({ data }) => {
    let { nombre, imagen, precio } = data;
    return (
        <div className='tarjeta'>
            <Imagenguajolota src={imagen} alt={nombre}/>
            <Descripciontarjeta>
                <p>{nombre}</p>
                <Precio> $ {precio}</Precio>
            </Descripciontarjeta>
        </div>
    );
}

export default Cardsproductos;
