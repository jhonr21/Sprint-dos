import { Link } from "react-router-dom";
import {
  Descripciontarjeta,
  Imagenguajolota,
  Precio,
  Tarjetasestilo,
} from "../../styles/template";
import '../../styles/prueba.css';
import { usePeticionesGet } from '../../hooks/usePeticionesGet';
import { Navbar } from "../Navbar";
import Logo from "../Varios/Logo";
import LogoCarrito from "../Varios/LogoCarrito";
import Banner from "../Varios/Banner";
import Busqueda from "../Varios/Busqueda";
import { guajalotas } from "../../helpers/url";
import Cardsproductos from "./CardsProductos";

export function Guajolotas() {
  let { data, error } = usePeticionesGet(guajalotas);
  console.log(data);
  if (data.length == 0) {
    return (
      <div>
      <Logo /><LogoCarrito /><Banner /><Busqueda /><Navbar />
      <h1>cargando ...</h1>
      </div>
    )
    
  }
  else if (error) {
    console("Error al realizar la peticion " + error)
    return
  } else {
    return (
      <div>
        <Logo /><LogoCarrito /><Banner /><Busqueda /><Navbar />    
        <div>
          {
            data.map((dat) => (
              <Tarjetasestilo key={dat.id} >
                <Link className="link" to={"/guajalotas/"+dat.id}>
                  <Cardsproductos data={dat} />
                </Link>
              </Tarjetasestilo>
            ))
          }
        </div>
      </div>
    );
  }
}
