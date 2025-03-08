import React from "react";
import style from "../myServices/services.module.css"
function Introduccion() {
  return (
    <main className="flex justify-center">
      <section className="flex flex-col">
        {/* Título */}
        <div className="text-center mt-12">
          <p className="text-5xl font-medium leading-[6rem] text-white">Servicios</p>
        </div>

        {/* Contenido */}
        <div id={style.foto} className="flex mt-12 flex-col text-center text-white">
          <div className="mt-12">
            <p className="text-5xl font-bold">Amplia tu empresa con un</p>
            <p className="text-5xl font-bold">software</p>

            <p className="mx-40 text-[3vh] mt-6">
              Amplía tu empresa con un software a la medida. Con el ingeniero David desarrollo
              aplicaciones web, plataformas empresariales, sistemas de gestión y
              soluciones personalizadas con tecnologías como{" "}
              <strong>TypeScript</strong>, <strong>JavaScript</strong>, <strong>Go</strong> y{" "}
              <strong>MySQL</strong>. Optimizamos tus procesos y mejoramos la eficiencia de tu
              negocio con herramientas digitales innovadoras.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Introduccion;
