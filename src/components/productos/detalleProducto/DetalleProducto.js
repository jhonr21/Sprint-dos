import React from 'react';
import { useParams } from 'react-router';
import { bebidas, guajalotas, tamales } from '../../../helpers/url';
import { useGetId } from '../../../hooks/useGetId';
import LogoCarrito from '../../Varios/LogoCarrito';
import Vertor from '../../vector/Vertor';
import cantidadMas from '../../../images/mas.png'
import cantidadMenos from '../../../images/menos.png'
import { DetalleProductoDiv, DetalleProductoImg, NombreProducto, Precio, Cantidad, Sumar, Sabores  } from './DetalleStyle';
import Sabor from '../../../images/sabores/Sabores'
import { logDOM } from '@testing-library/dom';

const Detalleproducto = () => {
    let productoSabor = false;
    
    let { id, producto } = useParams();
    let path = ""; //almacenamos la url que le enviamos a la peticion 
    if (producto === "guajalotas") { //serie de if para validar que que producto debemos buscar
        path = guajalotas
        productoSabor = true;
        
    }
    else if (producto === "bebidas") {
        path = bebidas
        
    }
    else if (producto === "tamales") {
        path = tamales
        productoSabor = true;
    }

    let { data, error } = useGetId(path + id);//se realiza una consulta a la api del producto


console.log(productoSabor);

    if (productoSabor == true) {
       
       
        return (
            <div>
                <Vertor />
                <LogoCarrito />

                <DetalleProductoDiv>
                    <DetalleProductoImg src={data.imagen} alt={data.nombre} />
                    <NombreProducto>{data.nombre}</NombreProducto>
                    <Precio>{data.precio}</Precio>
                    <Cantidad>
                        <Sumar src={cantidadMenos} alt='imagen' />
                        <h3>12</h3>
                        <Sumar src={cantidadMas} alt='imagen' />
                    </Cantidad>
                    <Sabores>
                        <img src={Sabor.rajas} alt='sabores' />
                        <img src={Sabor.verde} alt='sabores' />
                        <img src={Sabor.mole} alt='sabores' />
                        <img src={Sabor.guayaba} alt='sabores' />
                        <img src={Sabor.pasas} alt='sabores' />
                        <img src={Sabor.piña} alt='sabores' />
                    </Sabores>

                </DetalleProductoDiv>
            </div>

            )
    }


     if (producto === "bebidas") {

        return (
            <div>
                <Vertor />
                <LogoCarrito />

                <DetalleProductoDiv>
                <DetalleProductoImg src={data.imagen} alt={data.nombre} />
                    <NombreProducto>{data.nombre}</NombreProducto>
                    <Precio>{data.precio}</Precio>
                    <Cantidad>
                        <Sumar src={cantidadMenos} alt='imagen' />
                        <h3>12</h3>
                        <Sumar src={cantidadMas} alt='imagen' />
                    </Cantidad>
                    <Sabores>
                        <h1>Sabor</h1>
                        <img src={Sabor.arrozLeche} alt='sabores' />
                        <img src={Sabor.cafe} alt='sabores' />
                        <img src={Sabor.chocolate} alt='sabores' />
                    </Sabores>

                </DetalleProductoDiv>
            </div>
        );
    }
}
export default Detalleproducto;
