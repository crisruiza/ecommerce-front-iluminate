import { Link, NavLink } from "react-router-dom";
const NotFound = () => {
  return (
    <div className="not-found">
      <h1>¿Estás perdido?</h1>
      <p>
        Parece que has llegado a un lugar que no existe. Regresa a explorar
        deliciosos olores.{" "}
      </p>
      <Link to="/home" className="btn-primary-light">
        Ir a Inicio
      </Link>
    </div>
  );
};

export default NotFound;
