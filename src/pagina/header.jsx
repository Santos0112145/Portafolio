import { Link } from 'react-router-dom';
import imgFondo from '../assets/image-web-3-desktop.jpg';
import { useState } from 'react';
export default function Menu() {
    const [menuOpen, setMenuOpen] = useState(false); // Para controlar si el menú está visible en móvil

    return <div>
    
    {/** Header o Cabecera */}
     <header className="text-gray-500 body-font bg-white shadow-md">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center justify-between w-full md:w-auto">
          <svg className="h-10 w-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
            <path d="M20.8 34c16.5-6.2 35 2.2 41.2 18.7l110.2 294L257.3 55c4-13.7 16.5-23 30.7-23s26.7 9.4 30.7 23l85.1 291.7L514 52.8c6.2-16.5 24.6-24.9 41.2-18.7s24.9 24.7 18.7 41.2l-144 384c-4.8 12.9-17.4 21.3-31.2 20.7s-25.7-9.8-29.5-23L288 178.3 206.7 457c-3.9 13.2-15.8 22.5-29.5 23s-26.3-7.8-31.2-20.7L2 75.2C-4.2 58.7 4.2 40.2 20.8 34z"/>
          </svg>

          {/* Botón hamburguesa solo visible en móviles */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-3xl text-gray-600 focus:outline-none"
          >
            ☰
          </button>
        </div>

        {/* Menú de navegación */}
        <nav
          className={`${
            menuOpen ? 'flex' : 'hidden'
          } flex-col md:flex md:flex-row md:items-center text-xl space-y-4 md:space-y-0 md:space-x-6 mt-4 md:mt-0`}
        >
          <Link
            to="/menu"
            className="hover:text-cyan-400 transition-colors duration-300"
            onClick={() => setMenuOpen(false)} // Cierra el menú al hacer clic
          >
            Inicio
          </Link>
          <Link
            to="/producto"
            className="hover:text-cyan-400 transition-colors duration-300"
            onClick={() => setMenuOpen(false)}
          >
            Producto
          </Link>
          <Link
            to="/contacto"
            className="hover:text-cyan-400 transition-colors duration-300"
            onClick={() => setMenuOpen(false)}
          >
            Contacto
          </Link>
        </nav>
      </div>
    </header>

    {/** GRIPS*/}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 lg:grid-rows-5 gap-4 m-2">
  
  {/* Imagen grande al lado izquierdo */}
  <div className="lg:col-span-4 lg:row-span-3 bg-amber-900 overflow-hidden rounded-lg">
    <img src={imgFondo} alt="Fondo" className="w-full h-full object-cover" />
  </div>

  {/* Tarjeta grande al lado derecho */}
  <div className="lg:col-span-3 lg:row-span-5 lg:col-start-5 bg-blue-950 overflow-hidden rounded-lg">
        <div className="p-6 space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold text-amber-400">NEW</h1>

            <div>
                <h2 className="text-white font-bold text-xl md:text-2xl">Hydrogen VS Electric Cars</h2>
                <p className="text-gray-200 text-base md:text-xl mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A ab, sed dolor eligendi reiciendis, pariatur maxime dolore...
                </p>
                <hr className="border-2 border-white w-full mt-4" />
            </div>

            <div>
                <h2 className="text-white font-bold text-xl md:text-2xl">Hydrogen VS Electric Cars</h2>
                <p className="text-gray-200 text-base md:text-xl mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A ab, sed dolor eligendi reiciendis, pariatur maxime dolore...
                </p>
                <hr className="border-2 border-white w-full mt-4" />
            </div>
        </div>
</div>

{/* Títulos llamativos */}
            <div className="lg:col-span-2 lg:row-span-2 lg:row-start-4 text-center">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black">The bright</h1>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black">Future of</h1>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black">Web 3.0?</h1>
            </div>

{/* Descripción + botón */}
        <div className="lg:col-span-2 lg:row-span-2 lg:col-start-3 lg:row-start-4 flex flex-col justify-end">
            <p className="text-gray-600 text-base md:text-lg lg:text-2xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, earum, culpa placeat corrupti quasi...
            </p>
            <button className="bg-amber-600 mt-4 text-lg md:text-xl lg:text-2xl text-black font-bold p-2 rounded-lg w-fit cursor-pointer">
            Read More
            </button>
        </div>
    </div>

  </div>
}
