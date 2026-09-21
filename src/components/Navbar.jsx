import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';
import logo from '../assets/logonombresolo.png';
import './Navbar.css';

function Navbar() {
  const categorias = ['remeras', 'shorts', 'buzos', 'accesorios'];

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">
      <img src={logo} alt="Mar Olas" className="navbar-logo" />
      </Link>

      <div className="navbar-derecha">
        <ul className="navbar-categorias">
        {categorias.map((categoria) => (
          <li key={categoria} className="nav-item"> 
             <Link className="nav-link" to={`/category/${categoria}`}>
                {categoria.charAt(0).toUpperCase() + categoria.slice(1)}

              </Link>
          </li>
          ))}
        </ul>

        <CartWidget />
      </div>
      </nav> 
        );
      }

      export default Navbar;
