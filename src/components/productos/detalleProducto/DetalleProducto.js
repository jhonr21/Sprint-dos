import React, { useContext, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { bebidas, guajalotas, tamales } from '../../../helpers/url';
import { useGetId } from '../../../hooks/useGetId';
import LogoCarrito from '../../Varios/LogoCarrito';
import Vertor from '../../vector/Vertor';
import cantidadMas from '../../../images/mas.png'
import cantidadMenos from '../../../images/menos.png'
import { DetalleProductoDiv, DetalleProductoImg, NombreProducto, Precio, Cantidad, Sumar, Sabores, Columnas, Bebida, Detalle, Beber, Body, Buttoncarritoagregar } from './DetalleStyle';
import Sabor from '../../../images/sabores/Sabores'
import { logDOM } from '@testing-library/dom';
import bebida from '../../../images/bebida.png';
import bebida1 from '../../../images/bebidas(1).png';
import bebida2 from '../../../images/bebidas(2).png';
import bebida3 from '../../../images/bebidas(3).png';
import guajolotas from '../../../images/guajolotas.png';
import guajolotas1 from '../../../images/guajolotas(1).png';
import guajolotas2 from '../../../images/guajolotas(2).png';
import guajolotas3 from '../../../images/guajolotas(3).png';
import guajolotas4 from '../../../images/guajolotas(4).png';
import '../../../styles/prueba.css';
import { ContextoCarrito } from '../../../routes/AppRouter';

const Detalleproducto = () => {

    
    const navigate = useNavigate()
    const { carrito, setCarrito } = useContext(ContextoCarrito)
    console.log(carrito)

    const navegacion = useNavigate()
    const [counter, setCounter] = useState(0)


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
            <Body>
                <Vertor />
                <LogoCarrito />

                <DetalleProductoDiv>
                    <DetalleProductoImg id='imagen' src={data.imagen} alt={data.nombre} />
                    <NombreProducto>{data.nombre}</NombreProducto>
                    <Precio> $ {data.precio}</Precio>
                    <Cantidad>
                        <Sumar src={cantidadMenos}
                            alt="imagen"
                            onClick={() => {
                                if (counter > 0) {
                                    setCarrito((prevState) => {
                                        return {
                                            ...prevState,
                                            producto: {
                                                ...data,
                                                cantidad: prevState.producto.cantidad - 1
                                            }
                                        }
                                    })
                                    setCounter(counter - 1);
                                }
                            }} />
                        <h3 id='contador'>{counter}</h3>
                        <Sumar src={cantidadMas}
                            alt="imagen"
                            onClick={() => {
                                setCarrito((prevState) => {
                                    return {
                                        ...prevState,
                                        producto: {
                                            ...data,
                                            cantidad: prevState.producto.cantidad + 1
                                        }
                                    }
                                })
                                setCounter(counter + 1)
                            }} />
                    </Cantidad>
                    <Sabores>

                        <Columnas>
                            <img src={Sabor.rajas} alt='sabores' />
                        </Columnas>

                        <Columnas>
                            <img src={Sabor.verde} alt='sabores' />
                        </Columnas>

                        <Columnas>
                            <img src={Sabor.mole} alt='sabores' />
                        </Columnas>

                        <Columnas>
                            <img src={Sabor.guayaba} alt='sabores' />
                        </Columnas>

                        <Columnas>
                            <img src={Sabor.pasas} alt='sabores' />
                        </Columnas>

                        <Columnas>
                            <img src={Sabor.piña} alt='sabores' />
                        </Columnas>

                    </Sabores>
                    <h1 id="sabores">Sabor</h1>
                    <Bebida>
                        <Beber>
                            <img src={bebida3} alt='bedida' />
                            <input type="checkbox" />
                            <Detalle>Champurrado</Detalle>
                            <Detalle>+ $12 MXN </Detalle>
                        </Beber>

                        <Beber>

                            <img src={bebida1} alt='bedida' />
                            <input type="checkbox" />
                            <Detalle>Atole de Arroz</Detalle>
                            <Detalle>+ $12 MXN </Detalle>
                        </Beber>

                        <Beber>
                            <img src={bebida2} alt='bedida' />
                            <input type="checkbox" />
                            <Detalle>Chocolate caliente</Detalle>
                            <Detalle>+ $12 MXN </Detalle>
                        </Beber>

                        <Beber>
                            <img src={bebida} alt='bedida' />
                            <input type="checkbox" />
                            <Detalle>Café negro</Detalle>
                            <Detalle>+ $12 MXN </Detalle>
                        </Beber>

                    </Bebida>
<Buttoncarritoagregar onClick={() => {
                    navigate('/Carrito')
                }}>
                    Agregar {counter} al carrito
                </Buttoncarritoagregar>
                </DetalleProductoDiv>
                

            </Body>

        )
    }

    if (producto === "bebidas") {

        return (
            <Body>
                <Vertor />
                <LogoCarrito />

                <DetalleProductoDiv>
                    <DetalleProductoImg src={data.imagen} alt={data.nombre} />
                    <NombreProducto>{data.nombre}</NombreProducto>
                    <Precio>$ {data.precio}</Precio>
                    <Cantidad>
                        <Sumar src={cantidadMenos} alt='imagen' onClick={() => {
                            if (counter == 0) {
                                return
                            }
                            else {
                                setCounter(counter - 1)
                            }
                        }
                        } />
                        <h3 id='contador'>{counter}</h3>
                        <Sumar src={cantidadMas}
                            alt="imagen"
                            onClick={() => {
                                setCarrito((prevState) => {
                                    return {
                                        ...prevState,
                                        producto: {
                                            ...data,
                                            cantidad: prevState.producto.cantidad + 1
                                        }
                                    }
                                })
                                setCounter(counter + 1)
                            }} />
                    </Cantidad>
                    <h1 id='sabores'>Sabor</h1>
                    <Sabores>

                        <img src={Sabor.champurrado} alt='sabores' />
                        <img src={Sabor.arrozLeche} alt='sabores' />
                        <img src={Sabor.cafe} alt='sabores' />
                        <img src={Sabor.chocolate} alt='sabores' />
                    </Sabores>

                    <Bebida>
                        <Beber>
                            <img src={guajolotas} alt='bedida' />
                            <input type="checkbox" />
                            <Detalle>Verde</Detalle>
                            <Detalle>+ $25 MXN </Detalle>
                        </Beber>

                        <Beber>

                            <img src={guajolotas1} alt='bedida' />
                            <input type="checkbox" />
                            <Detalle>Mole</Detalle>
                            <Detalle>+ $25 MXN </Detalle>
                        </Beber>

                        <Beber>
                            <img src={guajolotas2} alt='bedida' />
                            <input type="checkbox" />
                            <Detalle>Guayaba</Detalle>
                            <Detalle>+ $25 MXN </Detalle>
                        </Beber>

                        <Beber>
                            <img src={guajolotas3} alt='bedida' />
                            <input type="checkbox" />
                            <Detalle>Piña</Detalle>
                            <Detalle>+ $25 MXN </Detalle>
                        </Beber>



                    </Bebida>
                    <Buttoncarritoagregar onClick={() => {
                        navigate('/Carrito')
                    }}>
                        Agregar {counter} al carrito
                    </Buttoncarritoagregar>

                </DetalleProductoDiv>

            </Body>
        );
    }
}
export default Detalleproducto;
