import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  function menuResponsive() {
    let x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  return (
    <header className="site-header sticky-top">
      <div className="d-flex justify-content-between topnav" id="myTopnav">
        <div className="TopNav-main-links">
          <Link to="/home">Inicio</Link>
          <NavLink to="/products">Productos</NavLink>
          <NavLink to="/about">About</NavLink>
        </div>
        <div className="TopNav-icons">
          <NavLink to="/checkout">
            <i className="fa-solid fa-cart-shopping"></i>
          </NavLink>
          <NavLink to="/auth">
            <i className="fa-solid fa-user"></i>
          </NavLink>
        </div>
        <a className="icon" onClick={menuResponsive}>
          <i className="fa fa-bars" />
        </a>
      </div>
    </header>
  );
};

export default Navbar;
