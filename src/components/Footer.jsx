import { Link, NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-container row">
          <div className="col-md-4 text-center p-4">
            <h5>Ilumína(te) con nuestras velas 100% naturales</h5>
            <p>
              Nuestras velas están hechas con cera de soja y aceites esenciales
              que no son sólo buenos para tí, sino también para el medio
              ambiente.
            </p>
          </div>
          <div className="col-md-4 text-center p-4 footer-container-col">
            <h5>Explora nuestro sitio</h5>
            <div className="footer-nav d-flex flex-column">
              <Link to="/home">Inicio</Link>
              <NavLink to="/products">Productos</NavLink>
              <NavLink to="/checkout">Carrito</NavLink>
              <NavLink to="/about">About</NavLink>
              <NavLink to="/login">Login</NavLink>
              <NavLink to="/signup">Signup</NavLink>
            </div>
          </div>
          <div className="col-md-4 text-center p-4">
            <h5>Contacto</h5>
            <p>
              <i className="fas fa-location-pin me-3" /> Zapopan, Jalisco
            </p>
            <p>
              <i className="fas fa-envelope me-3" />
              contacto@iluminate.com
            </p>
            <p>
              <i className="fas fa-phone me-3" /> + 01 234 567 88
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
