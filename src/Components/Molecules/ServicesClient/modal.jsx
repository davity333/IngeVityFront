import React, { useState } from "react";
import Swal from "sweetalert2";
function Modal({ onClick, idUser, nombre }) { 
    const [asunto, setAsunto] = useState("");
    const [mensaje, setMensaje] = useState("");

    const handleAsuntoChange = (e) => {
        setAsunto(e.target.value);
    };

    const handleMensajeChange = (e) => {
        setMensaje(e.target.value);
    };

    const handleSubmit = async (nombre) => {
        const data = {
            titulo: asunto,
            mensaje: mensaje,
            idUser: idUser
        };

        try {
            const response = await fetch("http://localhost:9090/v1/message/create", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });

            if (!response.ok) {
                throw new Error("Error al enviar el mensaje");
            }

            Swal.fire({
                title: `Mensaje enviado al usuario ${nombre}`,
                icon: "success",
                draggable: true
              });
            onClick();
        } catch (error) {
            console.error("Error al enviar el mensaje:", error);
        }
    };

    return (
        <>
            <div className="fixed inset-0 bg-[#0000008e] bg-opacity-0 backdrop-blur-none flex justify-center items-center">
                <div className="bg-[#ffffff] h-auto w-[90%] sm:w-[60%] lg:w-[40%] rounded-[20px] shadow-[0px_18px_34px_-16px_rgba(0,0,0,0.65)] border-double border-2 border-[#4b7e94] p-6">
                    <p className="text-2xl text-center text-[#1f3445] mb-2 font-bold">Mensaje final</p>
                    <div className="flex flex-col mb-4">
                        <p className="text-xl text-center text-[#1f3445] mb-2">Para: {nombre}, User:{idUser}</p> {/* Muestra nombre y idUser */}
                        <label className="text-black mb-2 bg-black">Asunto</label>
                        <input 
                            type="text" 
                            id="asunto" 
                            className="bg-[#8492d6] border-2 border-[#356364] w-full h-10 rounded p-2 text-black resize-none" 
                            value={asunto}
                            onChange={handleAsuntoChange}
                        />
                    </div>
                    
                    <div className="flex flex-col mb-6">
                        <label htmlFor="mensaje" className="text-black mb-2 bg-black">Mensaje</label>
                        <textarea 
                            id="mensaje" 
                            rows="4" 
                            className="bg-[#ffffff] border-2 border-[#356364] w-full rounded p-2 text-black resize-none"
                            value={mensaje}
                            onChange={handleMensajeChange}
                        />
                    </div>
                    
                    <div className="flex justify-center gap-7">
                        <button 
                            className="text-2xl text-[#2d485e] bg-[#e4e3e3] px-7 py-2 rounded-[6px] hover:bg-[#c8c6c6] transition duration-300"
                            onClick={handleSubmit}
                        >
                            Enviar mensaje
                        </button>
                        <button 
                            className="text-2xl text-[#2d485e] bg-[#e4e3e3] px-7 py-2 rounded-[6px] hover:bg-[#c8c6c6] transition duration-300"
                            onClick={onClick}
                        >
                            Salir
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Modal;
