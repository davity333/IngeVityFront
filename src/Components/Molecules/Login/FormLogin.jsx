import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import style from '../Login/form.module.css';

function FormLogin() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const loginData = {
      email: formData.email,
      password: formData.password
    };

    try {
      const response = await fetch("http://localhost:8080/v1/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(loginData)
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Error al iniciar sesión");
      }

      const { email, nombre } = data.data.attributes;
      const { id } = data.data;
      const token = data.token;

      localStorage.setItem("token", token);

      localStorage.setItem("user", JSON.stringify({ email, nombre, id }));

      alert("Inicio de sesión exitoso 🎉 ¡Redirigiéndote al inicio!");
      navigate("/"); 

    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const goToRegister = () => {
    navigate("/register");
  };

  return (
    <form
      className="rounded-lg p-10 w-full max-w-sm mx-auto mt-28"
      id={style.border}
      onSubmit={handleSubmit}
    >
      <h2 className="text-2xl font-bold text-center mb-4 text-white">Login</h2>

      {/* Mensaje de error */}
      {error && <p className="text-red-500 text-center">{error} Datos incorrectos</p>}

      {/* Campo de correo electrónico */}
      <div className="mb-5 mt-5">
        <label htmlFor="email" className="block text-[#efe8e8] text-sm font-semibold mb-1">
          Correo electrónico
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="text-[#dcdcdc] w-full px-3 py-2 border border-gray-300 rounded-lg 
          focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Ingresa tu correo"
          required
        />
      </div>

      {/* Campo de contraseña */}
      <div className="mb-5">
        <label htmlFor="password" className="block text-[#efe8e8] text-sm font-semibold mb-1">
          Contraseña
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="text-[#dcdcdc] w-full px-3 py-2 border border-gray-300 rounded-lg 
          focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Ingresa tu contraseña"
          required
        />
      </div>

      {/* Botón de ingreso */}
      <button
        type="submit"
        className="w-full text-white font-bold py-2 px-4 rounded-lg transition duration-300 cursor-pointer"
        id={style.btn}
        disabled={loading}
      >
        {loading ? "Iniciando sesión..." : "Ingresar"}
      </button>

      <p className="text-white text-center mt-3">
        Si no tienes cuenta{" "}
        <strong className="hover:text-[#93e6ff] cursor-pointer" onClick={goToRegister}>¡Regístrate!</strong>
      </p>
    </form>
  );
}

export default FormLogin;
