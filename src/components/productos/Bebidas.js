import { Link } from 'react-router-dom';
import { bebidas } from '../../helpers/url';
import { usePeticionesGet } from '../../hooks/usePeticionesGet';
import { Tarjetasestilo } from '../../styles/template';
import { Navbar } from '../Navbar';
import Banner from '../Varios/Banner';
import Busqueda from '../Varios/Busqueda';
import Logo from '../Varios/Logo';
import LogoCarrito from '../Varios/LogoCarrito';
import Cardsproductos from './CardsProductos';

export function Bebidas() {
  let { data, error } = usePeticionesGet(bebidas);
  
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
      <div id='container'>
        <Logo /><LogoCarrito /><Banner /><Busqueda /><Navbar />    
        <div>
          {
            data.map((dat) => (
              <Tarjetasestilo key={dat.id} >
                <Link className="link" to={"/bebidas/"+dat.id}>
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