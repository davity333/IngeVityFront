import style from '../../Molecules/Contacts/contacts.module.css';
import davity from '/davity.png';
import userImage from "/user.png";
import React, { useState, useEffect } from "react";
import Swal from 'sweetalert2';
function FormContact() {
  const [user, setUser] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    // Obtener iduser desde localStorage
    const iduser = user ? user.id : null;
    if (!iduser) {
      setError('Usuario no encontrado');
      setIsSubmitting(false);
      return;
    }

    const serviceData = {
      nombre: name,
      email: email,
      tituloSitio: title,
      mensaje: message,
      iduser: iduser
    };

    try {
      const response = await fetch('http://localhost:8080/v1/service/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(serviceData),
      });

      if (!response.ok) {
        throw new Error('Error al enviar los datos');
      }

      const result = await response.json();
      console.log('Respuesta de la API:', result);
      setIsSubmitting(false);
      Swal.fire({
              title: "Mensaje enviado correctamente",
              icon: "success",
              draggable: true
            });
      setName('');
      setEmail('');
      setTitle('');
      setMessage('');
    } catch (error) {
      setError(error.message);
      setIsSubmitting(false);
    }
  };

  return (
    <section className="grid grid-cols-2 mt-14 gap-[20vh] pl-48 pr-48 pb-5">
      {/* Columna izquierda con texto e imagen */}
      <div className="text-white">
        <p className="text-3xl font-mono">Contáctanos</p>
        <p>
          Escríbeme el nombre de tu empresa o la temática que te gustaría para tu sitio web.
          No olvides registrarte.
        </p>

        <div className="mt-12" id="img-container">
          <div className="w-[0.1vh] h-[0.1vh] bg-[#04d4be] rounded-full z-50 duration-200" id={style.brillo}></div>
          <img src={davity} alt="Davity" className="w-[70vh]" />
        </div>
      </div>

      {/* Columna derecha con el formulario o mensaje de registro */}
      <div className="flex justify-center items-center">
        {user ? (
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col mb-4">
              <label htmlFor="name" id={style.label}>Nombre completo</label>
              <input
                type="text"
                name="name"
                id={style.input}
                className="border-[0.2vh] border-gray-300 rounded-sm focus:outline-none focus:ring-0 focus:border-[0.1vh] focus:border-blue-500 w-[40vh] py-1"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="flex flex-col mb-4">
              <label htmlFor="email" id={style.label}>Correo electrónico</label>
              <input
                type="email"
                name="email"
                id={style.input}
                className="border-[0.2vh] border-gray-300 rounded-sm focus:outline-none focus:ring-0 focus:border-[0.1vh] focus:border-blue-500 w-[40vh] py-1"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="flex flex-col mb-4">
              <label htmlFor="title" id={style.label}>Título del sitio</label>
              <input
                type="text"
                name="title"
                id="title"
                className="border-[0.2vh] border-gray-300 rounded-sm focus:outline-none focus:ring-0 focus:border-[0.1vh] focus:border-blue-500 py-1 w-[40vh]"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>

            <div className="flex flex-col mb-4">
              <label htmlFor="message" id={style.label}>Mensaje</label>
              <textarea
                name="message"
                id={style.textarea}
                cols="30"
                rows="10"
                className="border-[0.2vh] border-gray-300 rounded-sm focus:outline-none focus:ring-0 focus:border-[0.1vh] focus:border-blue-500 resize-none w-[62vh] h-44 text-white"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-48 text-white font-bold py-2 px-4 rounded-lg transition duration-300 cursor-pointer"
              id={style.btn}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Enviando...' : 'Enviar'}
            </button>

            {error && <p className="text-red-500 mt-4">{error}</p>}
          </form>
        ) : (
          <div className="text-white text-center">
            <p className="text-4xl font-bold">Regístrate para contactar</p>
            <p>Para contactar con el administrador crea un nuevo usuario</p>
            <div className="flex justify-center mt-7 opacity-75">
              <img src={userImage} alt="" className="w-20" />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default FormContact;
