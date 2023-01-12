import { useEffect, useState } from "react";
import { getUser } from "../services/Users.service";
import { useParams, Link } from "react-router-dom";
import ProductsGrid from "../components/ProductsGrid";

const Profile = () => {
  const { id } = useParams();
  const [user, setUser] = useState([]);
  useEffect(() => {
    document.title = "Mi perfil";
    getUser(id).then((res) => {
      setUser(res.data);
      console.log(res.data);
    });
  }, []);
  function handleSignOut() {
    localStorage.clear();
    window.location.href = "/auth";
  }
  return (
    <>
      <div className="row">
        <div className="col p-5">
          <h1>{`Bienvenida, ${user.name} ${user.last_name}`}</h1>
          <p>
            En este apartado encontrarás toda tu información personal ¡Gracias
            por comprar con nosotros! ✨🕯
          </p>
          <h5>Nombre:</h5>
          <p>{user.name}</p>
          <h5>Apellido:</h5>
          <p>{user.last_name}</p>
          <h5>Email:</h5>
          <p>{user.email}</p>
          <Link className="btn btn-primary-dark-50" onClick={handleSignOut}>
            Cerrar Sesión
          </Link>
        </div>
      </div>
      <div className="row">
        <h2 className="text-center">
          Algunos productos que sabemos te encantarán
        </h2>
        <ProductsGrid />
      </div>
    </>
  );
};

export default Profile;
