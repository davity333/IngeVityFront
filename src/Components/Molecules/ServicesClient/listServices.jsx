import React, { useState, useEffect } from "react";
import style from "../../Molecules/ServicesClient/service.module.css";

function ListService() {
  const [services, setServices] = useState([]);
  const [showForm, setShowForm] = useState(null); // Estado para manejar la visibilidad del formulario
  const [formData, setFormData] = useState({
    titulo: "",
    mensaje: "",
    idUser: null,
    nombre: "",
  });

  useEffect(() => {
    // Función para obtener los servicios
    const fetchServices = async () => {
      try {
        const response = await fetch("http://localhost:9090/v1/service/list");
        if (!response.ok) {
          throw new Error("Error al obtener los servicios");
        }
        const data = await response.json();
        setServices(data.data);
      } catch (error) {
        console.error("Error al obtener los servicios:", error);
      }
    };

    fetchServices();
  }, []);

  const handleShowForm = (idUser, nombre) => {
    setShowForm(idUser);
    setFormData({ ...formData, idUser, nombre });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:9090/v1/message/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw new Error("Error al enviar el mensaje");
      }
      // Eliminar el servicio de la tabla
      await handleDeleteService(showForm);
      alert("Mensaje enviado con éxito");
      setFormData({ titulo: "", mensaje: "", idUser: null, nombre: "" });
      setShowForm(null);
    } catch (error) {
      console.error("Error al enviar el mensaje:", error);
    }
  };

  const handleDeleteService = async (idUser) => {
    try {
      const response = await fetch(`http://localhost:9090/v1/service/delete/${idUser}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Error al eliminar el servicio");
      }
      // Actualizar la lista de servicios eliminando el servicio con el idUser
      setServices((prevServices) => prevServices.filter((service) => service.relationships.iduser !== idUser));
    } catch (error) {
      console.error("Error al eliminar el servicio:", error);
    }
  };

  return (
    <>
      <section className="flex justify-center items-center mt-32">
        <table className="text-white">
          <thead>
            <tr>
              <th className="px-7 py-2 border">Nombre del cliente</th>
              <th className="px-20 py-2 border">Email</th>
              <th className="px-12 py-2 border">Título del sitio</th>
              <th className="px-48 py-2 border">Mensaje del cliente</th>
              <th className="px-20 py-2 border">Acción</th>
            </tr>
          </thead>
          <tbody>
            {services.map((service) => (
              <tr key={service.idservice}>
                <td className="px-4 py-2 border">{service.attributes.nombre}</td>
                <td className="px-4 py-2 border">{service.attributes.email}</td>
                <td className="px-4 py-2 border">{service.attributes.tituloSitio}</td>
                <td className="px-4 py-2 border">{service.attributes.mensaje}</td>
                <td className="px-4 py-2 border flex justify-center">
                  <button
                    id={style.btn}
                    className="p-2 rounded-lg"
                    onClick={() => handleShowForm(service.relationships.iduser, service.attributes.nombre)}
                  >
                    Enviar mensaje
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
      
      {showForm && (
        <section className="flex justify-center items-center mt-10">
          <div className="bg-gray-800 p-6 rounded-lg shadow-md w-full max-w-md">
            <h2 className="text-2xl font-semibold text-white mb-4">
              Enviar mensaje a {formData.nombre}
            </h2>
            <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
              <input
                type="text"
                name="titulo"
                value={formData.titulo}
                onChange={handleInputChange}
                placeholder="Título"
                className="p-2 border rounded text-black"
                required
              />
              <textarea
                name="mensaje"
                value={formData.mensaje}
                onChange={handleInputChange}
                placeholder="Mensaje"
                className="p-2 border rounded text-black"
                required
              />
              <button
                type="submit"
                className="p-2 rounded-lg text-white bg-blue-600"
              >
                Enviar
              </button>
            </form>
          </div>
        </section>
      )}
    </>
  );
}

export default ListService;
