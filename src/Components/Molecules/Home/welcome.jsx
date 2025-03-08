import code from "/code.gif";
import programing from "/programing.gif";
import style from "../../style.module.css";
function Welcome() {
  return (
    <div className="flex flex-col items-center justify-center text-white mt-24">
      {/* Título principal */}
      <div className="pb-2">
        <p className="text-[3vh] px-8 py-2" id={style.btnBorder}>
          Welcome to Ingenier David
        </p>
      </div>

      <section className="flex text-center flex-col">
        <p className="text-6xl font-bold leading-24">IngeVity - Software</p>
        <p className="text-6xl font-bold">de diseño y aplicaciones web</p>

        {/* Descripción */}
        <div className="pl-72 pr-72">
          <p className="text-[2.6vh] mt-5">
            <strong>IngeVity</strong> es el nombre de mi empresa especializada en el desarrollo de{" "}
            <strong>aplicaciones web</strong>, <strong>landing pages</strong> y{" "}
            <strong>diseños web</strong>, tanto dinámicas como estáticas. Creo soluciones digitales
            innovadoras, optimizadas para ofrecer el mejor rendimiento y experiencia de usuario.
          </p>
        </div>

        {/* Botón */}
        <div className="flex justify-center mt-8 font-medium text-[2.4vh]">
          <button id={style.btn} className="py-5 px-12 rounded-3xl">
            Conocer
          </button>
        </div>

        {/* Círculo decorativo */}
        <div className="w-24 h-24 bg-[#04d4be] rounded-full" id={style.brillo}></div>

        {/* Imágenes */}
        <div className="flex justify-center mt-7">
          <img src={code} alt="Code GIF" className="w-48 h-48" />
          <img src={programing} alt="Programming GIF" className="w-48 h-48 ml-4" />
        </div>
      </section>
    </div>
  );
}

export default Welcome;
