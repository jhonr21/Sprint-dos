import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Bebidas } from "../components/productos/Bebidas";
import { Tamales } from "../components/productos/Tamales";
import { Guajolotas } from "../components/productos/Guajolotas";
import Detalleproducto from "../components/productos/detalleProducto/DetalleProducto";
import GlobalStyle from "../globalstyles/Globalstyle";
export default function AppRouter() {
  return (
    <div>
      <BrowserRouter>        
        <Routes>
          <Route exact path="/" element={<Guajolotas />} />
            <Route exact path="/Guajolotas" element={<Guajolotas />} />
            <Route exact path="/Bebidas" element={<Bebidas />} />
            <Route exact path="/Tamales" element={<Tamales />} />      
          <Route exact path="/:producto/:id" element={<Detalleproducto />} />
        </Routes>
      </BrowserRouter>
      <GlobalStyle />
    </div>
  );
}
