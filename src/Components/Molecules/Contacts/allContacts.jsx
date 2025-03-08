import contacto from '/contacto.jpg';
import phone from '/phone.png';
import emailIcon from '/email.png';
import home from '/home.png';
import style from '../../Molecules/Contacts/contacts.module.css';
function AllContacts() {
    return (
      <>
        <div className="w-20 h-20 bg-[#04d4be] rounded-full z-50" id={style.brilloAzul}></div>
  
        <main>
          <div className="text-center mt-12 text-white">
            <p className="text-5xl font-medium leading-24 text-white">Contactos</p>
            <p className="pr-72 pl-72 text-[2.6vh] mt-5">
              El ingeniero David transforma ideas en soluciones digitales innovadoras.
              Me especializo en el desarrollo de software con tecnologías modernas
              para ofrecer productos eficientes y a la medida de cada cliente. Si deseas
              más información sobre nuestros servicios, contáctanos y con gusto te asesoro.
            </p>
          </div>
  
          <div className="flex justify-center mt-12">
            <img src={contacto} alt="Contacto" className="w-[150vh] h-[60vh] object-cover" />
          </div>
  
          <div className="flex justify-center mt-20">
            <p className="text-[2.8vh] text-white px-8 py-1 border rounded-full border-[#04d4be] inline-block">
              Nuestros servicios
            </p>
          </div>
  
          <section className="flex justify-center mt-12 gap-60">
            <div>
              <div className="text-white flex items-center gap-10">
                <img className="w-14 h-14 bg-[#04D4BE] p-2" src={phone} alt="Teléfono" />
                <p>Teléfono</p>
              </div>
              <div className="text-white mt-3">
                <p>LADA sin costo:</p>
                <p>Teléfono: <strong>971-108-47-22</strong></p>
                <p>Suchiapa</p>
              </div>
            </div>
  
            <div>
              <div className="text-white flex items-center gap-10">
                <img className="w-16 h-14 bg-[#04D4BE] p-2" src={emailIcon} alt="Correo" />
                <p>Correo electrónico</p>
              </div>
              <div className="text-white mt-3">
                <p>E-mail: <strong>reyguz421@gmail.com</strong></p>
                <p>E-mail: <strong>233352@ids.upchiapas.edu.mx</strong></p>
              </div>
            </div>
  
            <div>
              <div className="text-white flex items-center gap-10">
                <img className="w-14 h-14 bg-[#04D4BE] p-2" src={home} alt="Dirección" />
                <p>Dirección</p>
              </div>
              <div className="text-white mt-3">
                <p><strong>Suchiapa</strong>, Chiapas</p>
                <p>Av. El Capricho</p>
              </div>
            </div>
          </section>
        </main>
  
        <div className="flex justify-center mt-10">
          <hr className="w-[166vh] bg-[#04d4bf71] h-[0.2vh]" />
        </div>
  
        <div className="w-1 h-1 bg-[#04d4be] rounded-full z-50 duration-200" id={style.secondBrillo}></div>
      </>
    );
  }
  
  export default AllContacts;
  