import { Link } from 'react-router-dom';
import imgWhatsapp from '../assets/iconowhatsapp.png';
export default function Contacto() {
  return <div>
    {/** Header o Cabecera */}
    <header className='text-gray-500 body-font'>
        <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
            {/** Imagen de Fontawesone */}
            <svg className='h-10 w-10' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512 ">
            <path d="M20.8 34c16.5-6.2 35 2.2 41.2 18.7l110.2 294L257.3 55c4-13.7 16.5-23 30.7-23s26.7 9.4 30.7 23l85.1 291.7L514 52.8c6.2-16.5 24.6-24.9 41.2-18.7s24.9 24.7 18.7 41.2l-144 384c-4.8 12.9-17.4 21.3-31.2 20.7s-25.7-9.8-29.5-23L288 178.3 206.7 457c-3.9 13.2-15.8 22.5-29.5 23s-26.3-7.8-31.2-20.7L2 75.2C-4.2 58.7 4.2 40.2 20.8 34z"/></svg>

            {/** Menu de Navegación */}
            <nav className="md:ml-auto flex flex-wrap items-center  justify-center space-x-6 text-3xl">
                {/** Link y to especificar la ruta de la pagina */}
                <Link to="/menu" className="text-gray-500 hover:text-cyan-400 transition-colors duration-300 cursor-pointer">
                    Inicio
                </Link>
                {/** Link y to especificar la ruta de la pagina */}
                <Link to="/producto" className="text-gray-500 hover:text-cyan-400 transition-colors duration-300 cursor-pointer">
                    Producto
                </Link>
                {/** Link y to especificar la ruta de la pagina */}
                <Link to="/contacto" className="text-gray-500 hover:text-cyan-400 transition-colors duration-300 cursor-pointer">
                    Contacto
                </Link>

            
            </nav>
        </div>
        
    </header>
    {/** Contacto */}
    <section className="relative text-gray-900 body-font h-screen w-full ">
        <div className="absolute inset-0">
            <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d838.1245240506303!2d-79.92041584630793!3d-2.223589350029223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sec!4v1753224124865!5m2!1ses-419!2sec"
            className="w-full h-full grayscale contrast-125 opacity-40"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mapa de ubicación"
            ></iframe>
        
        </div>
        <div className='container px-5 py-24 mx-auto flex'>
            <div className='lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md'>
                <h2 className="text-gray-900 text-2xl mb-1 font-bold ">Contactame</h2>
                <p className="leading-relaxed mb-5 text-gray-600">Ingrese su Email</p>
                <div className="relative mb-4">
                    <label for="email" className="leading-7 text-sm text-gray-600">Email</label>
                    
                    <input type="email"  placeholder='Ingrese su Email' className="w-full bg-white rounded border-2 border-blue-300 p-2 " />
                </div>
                <div className="relative mb-4">
                    <label for="email" className="leading-7 text-sm text-gray-600">Mensaje</label>
                    
                    <textarea type="text"  placeholder='Dejame un mensaje' className="w-full bg-white rounded border-2 border-blue-300 p-6  " />
                </div>
                <button className="text-white bg-blue-500 border-0 p-2  rounded text-lg">Enviar</button>
                <p className="text-xs text-gray-500 mt-3">Escribeme</p>
            </div>
        </div>
        <div className=' flex items-end justify-end mb-2 fixed bottom-0 right-0'>
            <a
            href="https://wa.me/593959682902"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-4 right-4 z-50"
            >
            <img
                src={imgWhatsapp}
                alt="WhatsApp"
                className="w-12 h-12 object-cover animate-bounce cursor-pointer"
            />
            </a>

        </div>
    </section>
    

    

    
  </div>
  
}