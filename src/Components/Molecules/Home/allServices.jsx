import webImg from "/web.png";
import designImg from "/diseño.png";

function AllServices() {
  return (
    <main className="text-white flex justify-center items-center min-h-screen bg-black px-6">
      <section className="flex flex-col lg:flex-row gap-10 max-w-6xl">
        {/* Sección izquierda */}
        <div className="lg:w-1/2">
          <div className="pb-5">
            <p className="text-[2.4vh] px-8 py-1 border rounded-full border-[#04d4be] inline-block">
              Nuestros servicios
            </p>
          </div>
          <div className="text-[6vh] font-bold leading-tight">
            <p>Asegúrese de</p>
            <p>recibir servicios</p>
            <p>de alta calidad</p>
          </div>
          <div className="w-[45vh] mt-7">
            <p className="text-[2.3vh] text-[#b5afaf]">
              Nuestro equipo de trabajo realiza ciertos servicios para nuestros clientes, 
              satisfaciendo sus necesidades y ayudando a crear innovaciones.
            </p>
          </div>
          <div className="mt-8 font-medium text-[2.4vh]">
            <button className="py-3 px-12 bg-gradient-to-r from-blue-500 to-[#04d4be] rounded-lg">
              View All Services
            </button>
          </div>
        </div>

        {/* Sección derecha */}
        <div className="grid grid-cols-2 gap-20 ml-6">
          {/* Tarjeta 1 */}
          <div className="bg-[#121212] p-6 rounded-2xl shadow-lg border-[0.1vh] border-[#2c6761]">
            <img src={webImg} className="w-16 mb-4" alt="Aplicaciones Web" />
            <p className="text-[3vh] font-medium">Aplicaciones Web</p>
            <p className="text-[2.3vh] text-gray-400">
              Desarrollamos <b>aplicaciones web personalizadas</b>, escalables y optimizadas 
              para ofrecer la mejor experiencia de usuario. Desde <b>plataformas interactivas</b> 
              hasta <b>sistemas avanzados</b>, garantizamos soluciones seguras y de alto rendimiento.
            </p>
          </div>

          {/* Tarjeta 2 */}
          <div className="bg-[#121212] p-6 rounded-2xl shadow-lg border-[0.1vh] border-[#2c6761]">
            <img src={designImg} className="w-16 mb-4" alt="Diseño UI/UX" />
            <p className="text-[3vh] font-medium">Diseño UI/UX</p>
            <p className="text-[2.3vh] text-gray-400">
              Creamos <b>diseños intuitivos y atractivos</b> que mejoran la experiencia de usuario. 
              Nos enfocamos en interfaces fluidas, accesibles y modernas que garantizan una 
              <b> navegación sencilla y efectiva</b>, aumentando la retención y conversión de usuarios.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default AllServices;
