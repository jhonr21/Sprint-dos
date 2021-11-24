import React, { createContext, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Bebidas } from "../components/productos/Bebidas";
import { Tamales } from "../components/productos/Tamales";
import { Guajolotas } from "../components/productos/Guajolotas";
import Detalleproducto from "../components/productos/detalleProducto/DetalleProducto";
import GlobalStyle from "../globalstyles/Globalstyle";
import Carrito from "../components/carrito/Carrito";

export const ContextoCarrito = createContext({
      setCarrito: () => null,
      carrito: null,
    })

   



export default function AppRouter() {
  const [carrito, setCarrito] = useState({
    producto: { cantidad: 0 },
    sabor: null,
    tomar: []
  })
  const datosContexto = {
    carrito,
    setCarrito
  }
  
  
  return (
  

     <ContextoCarrito.Provider value={datosContexto}>
      <BrowserRouter>        
        <Routes>
          <Route exact path="/" element={<Guajolotas />} />
            <Route exact path="/Guajolotas" element={<Guajolotas />} />
            <Route exact path="/Carrito" element={<Carrito />} />
            <Route exact path="/Bebidas" element={<Bebidas />} />
            <Route exact path="/Tamales" element={<Tamales />} />      
          <Route exact path="/:producto/:id" element={<Detalleproducto />} />
        </Routes>
      </BrowserRouter>
      <GlobalStyle />
    </ContextoCarrito.Provider>
  );
}
