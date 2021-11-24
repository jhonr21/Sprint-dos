import styled from "styled-components";

export const DetalleProductoDiv = styled.div`
height: 200px;
width: 200px;
left: 80px;
top: 0px;
position: absolute;
filter: drop-shadow(0px 40px 40px rgba(0, 0, 0, 0.07));
margin: 0 auto;

`

export const DetalleProductoImg = styled.img`
height: 99.77592468261719px;
border-radius: 0px;
position: absolute;
left: 50%;
top: 26%;
background: url(../../../imagens/Ellipse3.svg);
margin: 0 auto;
 
`
export const NombreProducto = styled.h2`
    margin-top: 10rem;
    text-align: center;
    width: 18rem;
`

export const Precio = styled.h2`
margin-top: 1rem;
text-align: center;
color: orange;
margin-left: 4rem;
`

export const Cantidad = styled.div`
    display: flex;
   background-color: white;
   width: 16rem;
    
`

export const Sumar = styled.img`
width: 21%;
height: 20%;
margin: 0 auto;
margin-top: 10px;
`
export const Sabores = styled.div`
width: 246px;
height: 10rem;
margin: 0 auto;
    margin-top: 0px;
text-align: initial;
margin-top: 2rem;

`
export const Columnas = styled.div`
    float: left;
    width: 33%;
    padding-right: 5px;

`

export const Bebida = styled.div`

    column-count: 2;
    width: 135%;        
    margin: 0 auto;
    text-align: center;
    margin-top: 2rem;
    
`
export const Detalle = styled.div`

    font-size: 14px;
`
export const Beber = styled.div`
    margin-bottom: 3rem;
    background-color: white;
    border-radius: 1rem;
         

`
export const Body = styled.div`

    position: relative;
    width: 420px;
    height: 1200px;
    background: #F2F2F2;
    margin: 0 auto;
 

`
export const Buttoncarritoagregar = styled.button`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
padding: 24px;

position: static;
width: 312px;
height: 69px;
left: 24px;
top: 16px;

/* Primary */

background: #FA4A0C;
border-radius: 40px;

/* Inside Auto Layout */

flex: none;
order: 0;
flex-grow: 0;
margin: 10px 0px;

`

export const ProductoC = styled.div`
display: flex;
background: #FFFFFF;
border: 2px solid black;
width: 25rem;
border-radius: 11px;
margin-top: 3rem;
margin-left: 11px;
`

export const CantidadC = styled.p`
    margin-top: 4rem;
    font-size: 12px;
`

export const NombreC = styled.h4`
    margin-right: 7rem;
    width: -12rem;
    margin-top: 1rem;
    font-size: 18px;
    margin-left: -5rem;
    width: 28rem;
`

export const PrecioC = styled.h3`
margin-top: 44px;
font-size: 17px;
width: 10rem;

margin-left: -7rem;
`

export const Carrito1 = styled.h1`
text-align:center;

`

export const Total = styled.div`
background: #FFFFFF;
border: 2px solid black;
border-radius: 1rem;
width: 19rem;
margin: auto;
margin-top: 4rem;
`

export const Compra = styled.h5`
text-align: center
`