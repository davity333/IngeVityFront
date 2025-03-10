import React, { useState, useEffect } from "react";
import logo from "/logo.png";
import loading from "/loading.png";
import style from "../Components/style.module.css";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [black, setBlack] = useState(false);

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
    setBlack(true); 
    setTimeout(() => {
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      setUser(null);
      setBlack(false); // Desactivar la pantalla de carga
      navigate("/");
    }, 2000);
  };

  return (
    <header className="bg-black text-white pl-28 pr-28 pt-10">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <img src={logo} alt="Logo" className="w-30" />
          <p
            onClick={goToHome}
            className="text-3xl font-semibold hover:text-blue-700 duration-150 cursor-pointer"
          >
            Home
          </p>
        </div>

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

        <div className="flex space-x-4">
          {user ? (
            <>
              <div className="flex items-center flex-col leading-4 mt-1">
                <p className="text-[2.4vh] font-bold">{user.nombre}</p>
                <p className="text-[2.4vh] ">{user.rol}</p>
              </div>
              {user.rol === "admin" && (
                <button
                  id={style.btnBorder}
                  onClick={goToClients}
                  className="px-3"
                >
                  Solicitudes
                </button>
              )}
              <button
                onClick={handleLogout}
                className="p-2 px-5 rounded-2xl text-white duration-500"
                id={style.btnLogout}
              >
                Cerrar sesión
              </button>
            </>
          ) : (
            <>
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
      {black && (
        <div className="fixed flex-col inset-0 bg-black bg-opacity-75 flex justify-center items-center">
          <img src={loading} alt="Loading" className="w-10 animate-spin" />
          <p className="text-white text-2xl">Cerrando sesión...</p>
        </div>
      )}
    </header>
  );
}

export default Header;
