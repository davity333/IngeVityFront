import React, { useState, useEffect } from "react";
import logo from "/logo.png";
import style from "../Components/style.module.css";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  const goToHome = () => {
    navigate("/");
  };

  const goToContacts = () => {
    navigate("/contacts");
  };

  const goToServices = () => {
    navigate("/services");
  };

  const goToLogin = () => {
    navigate("/login");
  };

  const goToRegister = () => {
    navigate("/register");
  };

  const goToClients = () => {
    navigate("/services/request");
  };

  const handleLogout = () => {
    // Limpiar el localStorage y actualizar el estado
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser(null);
    navigate("/"); // Redirigir al home después de cerrar sesión
  };

  return (
    <header className="bg-black text-white pl-28 pr-28 pt-10">
      <div className="flex items-center justify-between">
        {/* Logo e "Home" */}
        <div className="flex items-center space-x-4">
          <img src={logo} alt="Logo" className="w-30" />
          <p
            onClick={goToHome}
            className="text-3xl font-semibold hover:text-blue-700 duration-150 cursor-pointer"
          >
            Home
          </p>
        </div>

        {/* Menú de navegación */}
        <nav className="flex items-center space-x-16 text-lg">
          <p
            onClick={goToContacts}
            className="hover:text-blue-700 duration-150 cursor-pointer"
          >
            Contactos
          </p>
          <p
            onClick={goToServices}
            className="hover:text-blue-700 duration-150 cursor-pointer"
          >
            Servicios
          </p>
          <p className="hover:text-blue-700 duration-150 cursor-pointer">
            Reseñas
          </p>
        </nav>

        {/* Botones de Login y Registro o el nombre del usuario y Cerrar sesión */}
        <div className="flex space-x-4">
          {user ? (
            // Si el usuario está logueado, mostrar su nombre y el botón de cerrar sesión
            <>
            <div className="flex items-center">
              <p className="text-[2.4vh] font-bold">{user.nombre}</p>
            </div>
              <button
                onClick={handleLogout}
                className="p-2 px-5 rounded-2xl text-white duration-500"
                id={style.btnLogout}
              >
                Cerrar sesión
              </button>
            </>
          ) : (
            // Si el usuario no está logueado, mostrar los botones de Login y Registro
            <>
              <button
                id={style.btnBorder}
                onClick={goToClients}
                className="px-3"
              >
                Solicitudes
              </button>

              <button
                id={style.btnBorder}
                onClick={goToLogin}
                className="px-3"
              >
                Iniciar Sesión
              </button>
              <button
                onClick={goToRegister}
                id={style.btn}
                className="p-2 px-5 rounded-2xl duration-500"
              >
                Registrarse
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
