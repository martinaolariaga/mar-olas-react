import CartWidget from './CartWidget';
import logo from '../assets/logonombresolo.png';
import './Navbar.css';

function Navbar() {
  const categorias = ['Remeras', 'Shorts', 'Buzos', 'Accesorios'];

  return (
    <nav className="navbar">
      <a href="/" className="navbar-brand">
        <img src={logo} alt="Mar Olas" className="navbar-logo" />
      </a>

      <div className="navbar-derecha">
        <ul className="navbar-categorias">
          {categorias.map((categoria) => (
            <li key={categoria} className="nav-item">
              <a className="nav-link" href="#">{categoria}</a>
            </li>
          ))}
        </ul>

        <CartWidget />
      </div>
    </nav>
  );
}

export default Navbar;