import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import style from '../Login/form.module.css';
import Swal from 'sweetalert2'
function FormRegister() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    password: "",
    rol: "user"
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
    console.log("Datos enviados a la API:", formData);

    const cleanData = {
      nombre: formData.nombre,
      email: formData.email,
      password: formData.password,
      rol: formData.rol
    };

    console.log("Datos limpios enviados a la API:", cleanData);

    try {
      const response = await fetch("http://localhost:8080/v1/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(cleanData)
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Error al registrar usuario");
      }

      Swal.fire({
        title: "Registro exitoso 🎉 ¡Redirigiéndote al login!",
        icon: "success",
        draggable: true
      });
      navigate("/login");

    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      className="rounded-lg p-10 w-full max-w-sm mx-auto mt-20"
      id={style.border}
      onSubmit={handleSubmit}
    >
      <h2 className="text-2xl font-bold text-center mb-4 text-white">Registro</h2>

      {/* Mensaje de error */}
      {error && <p className="text-red-500 text-center">{error}</p>}

      {/* Campo de nombre completo */}
      <div className="mb-5 mt-5">
        <label htmlFor="nombre" className="block text-[#efe8e8] text-sm font-semibold mb-1">
          Nombre completo
        </label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          className="text-[#dcdcdc] w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Ingresa tu nombre"
          required
        />
      </div>

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
          className="text-[#dcdcdc] w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
          className="text-[#dcdcdc] w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Ingresa tu contraseña"
          required
        />
      </div>

      {/* Botón de registro */}
      <button
        type="submit"
        className="w-full text-white font-bold py-2 px-4 rounded-lg transition duration-300 cursor-pointer"
        id={style.btn}
        disabled={loading}
      >
        {loading ? "Registrando..." : "Registrarse"}
      </button>

      <p className="text-white text-center mt-3">
        ¿Ya tienes cuenta?{" "}
        <strong className="hover:text-[#93e6ff] cursor-pointer" onClick={() => navigate("/login")}>
          ¡Loguéate!
        </strong>
      </p>
    </form>
  );
}

export default FormRegister;
