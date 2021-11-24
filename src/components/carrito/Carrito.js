import React, { useContext } from 'react'
import { ContextoCarrito } from '../../routes/AppRouter'
import { ProductoC, CantidadC, NombreC, PrecioC, Carrito1, Body, Total,Compra } from '../../components/productos/detalleProducto/DetalleStyle';


function Carrito() {

    const {carrito} = useContext(ContextoCarrito)

console.log(carrito)
    const precio1 = carrito.producto.precio;
    const precio2 = carrito.producto.cantidad;
    console.log(precio2,precio1)
    let PrecioFinal = precio1 * precio2
    return (
        


            <Body>
        <div>
            <div>
                <Carrito1>Carrito</Carrito1>
            </div>

            <ProductoC>
                <br/>
            <img src={carrito.producto.imagen}/>
            <CantidadC>Cantidad {carrito.producto.cantidad}</CantidadC>
            <NombreC>{carrito.producto.nombre}</NombreC>
            <PrecioC> Total {carrito.producto.precio} $</PrecioC>
            
            </ProductoC>

            <Total>
                <Compra> Total a pagar = {PrecioFinal} $</Compra>

            </Total>

        </div>
        </Body>
    )
}

export default Carrito
