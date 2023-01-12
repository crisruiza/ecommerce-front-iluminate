import { Navigate } from "react-router-dom";
import { useState } from "react";
import { loginService, registerService } from "../../services/Auth.service";
import Swal from "sweetalert2";

const Auth = () => {
  const token = localStorage.getItem("token");
  const [id, setId] = useState();
  const [typeForm, setTypeForm] = useState("login");
  const [form, setForm] = useState({
    nombre: "",
    apellido: "",
    email: "",
    password: "",
  });

  const handleInputChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const saveData = (event) => {
    event.preventDefault();
    console.log(form);
    if (typeForm === "login") {
      if (form.email === "" || form.password === "") {
        Swal.fire({
          icon: "info",
          title: "Oops...",
          text: "El campo email y password son obligatorios",
        });
        return;
      }

      loginService(form)
        .then((response) => {
          localStorage.setItem("token", response.data.token);
          // localStorage.setItem("id", response.data.user.id);
          setId(response.data.user.id);
          Swal.fire({
            icon: "success",
            title: "Login con éxito 🏆",
            showConfirmButton: false,
            timer: 1000,

            confirmButtonText: "Ir a mi perfil",
          });
        })
        .catch((error) => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "¡Contraseña incorrecta!",
            showConfirmButton: false,
            timer: 2500,
          });
        });
    } else {
      if (form.email === "" || form.password === "" || form.nombre === "") {
        Swal.fire({
          icon: "info",
          title: "Oops...",
          text: "Los campos nombre, email y password son obligatorios",
        });
        return;
      }
      registerService(form)
        .then((response) => {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Usuario registrado con éxito 🏆",
            showConfirmButton: false,
            timer: 3500,
          });
        })
        .catch((error) => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "No se pudo registrar el usuario, verifique los datos",
          });
        });
    }
  };

  const showSignUp = () => {
    setTypeForm("signup");
  };

  const showLogin = () => {
    setTypeForm("login");
  };

  const redirect = <Navigate to={`/users/profile/${id}`}></Navigate>;
  return token ? (
    redirect
  ) : (
    <div className="d-flex justify-content-center align-items-center p-5 vh-100">
      <div className="" style={{ width: "25rem" }}>
        <div className="d-flex justify-content-center"></div>

        <div className="text-center fs-1 fw-bold text-coffe">
          <h1>{typeForm === "login" ? "Login" : "Signup"}</h1>
        </div>

        <form onSubmit={saveData}>
          {typeForm === "signup" && (
            <>
              <div className="mb-3">
                <label htmlFor="nombre" className="form-label">
                  Nombre
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="nombre"
                  onChange={handleInputChange}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="apellido" className="form-label">
                  Apellido
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="apellido"
                  onChange={handleInputChange}
                />
              </div>
            </>
          )}

          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              name="email"
              onChange={handleInputChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              name="password"
              onChange={handleInputChange}
            />
          </div>

          <button type="submit" className="btn btn-primary-dark-50">
            {typeForm === "login" ? "Iniciar sesión" : "Registrarse"}
          </button>
        </form>

        {typeForm === "login" && (
          <div className="d-flex gap-1 justify-content-center mt-1">
            <div>¿Aun no tienes cuenta?</div>
            <p className="signup" onClick={showSignUp}>
              Signup
            </p>
          </div>
        )}

        {typeForm === "signup" && (
          <div className="d-flex gap-1 justify-content-center mt-1">
            <div>¿Tienes cuenta?</div>
            <p className="signup" onClick={showLogin}>
              Login
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Auth;
