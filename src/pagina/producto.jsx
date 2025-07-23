import { Link } from 'react-router-dom';
import imgFondo from '../assets/image-web-3-desktop.jpg';
import Planta from '../assets/planta-sinfondo.png';
import { useState } from 'react';
export default function Producto() {
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

    {/** Flexbox de Productos*/}
    
    {/* Flexbox de Productos */}
    <div className='flex flex-wrap justify-center gap-4 py-4 '>
        {/* Item 1 */}
        <div className='w-full sm:w-[48%] lg:w-[30%]'>
            <div className="grid grid-cols-3 gap-4 items-center bg-white p-4 rounded-lg shadow-md h-full">
            <div className='col-span-1 flex justify-center'>
                <svg className='h-10 w-10 animate-bounce' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                
                <path d="M534.6 182.6C547.1 170.1 547.1 149.8 534.6 137.3L470.6 73.3C461.4 64.1 447.7 61.4 435.7 66.4C423.7 71.4 416 83.1 416 96L416 128L256 128C150 128 64 214 64 320C64 337.7 78.3 352 96 352C113.7 352 128 337.7 128 320C128 249.3 185.3 192 256 192L416 192L416 224C416 236.9 423.8 248.6 435.8 253.6C447.8 258.6 461.5 255.8 470.7 246.7L534.7 182.7zM105.4 457.4C92.9 469.9 92.9 490.2 105.4 502.7L169.4 566.7C178.6 575.9 192.3 578.6 204.3 573.6C216.3 568.6 224 556.9 224 544L224 512L384 512C490 512 576 426 576 320C576 302.3 561.7 288 544 288C526.3 288 512 302.3 512 320C512 390.7 454.7 448 384 448L224 448L224 416C224 403.1 216.2 391.4 204.2 386.4C192.2 381.4 178.5 384.2 169.3 393.3L105.3 457.3z"/>
                <path fill="currentColor" d="M183.1 235.3c33.7 20.7..."/>
                </svg>
            </div>
            <div className='col-span-2 flex flex-col justify-center'>
                <h1 className='text-lg font-bold text-black'>Colección de Plantas</h1>
                <span className='text-sm text-black'>¿Alguna planta para tu espacio de trabajo?</span>
            </div>
            </div>
        </div>

        {/* Item 2 */}
        <div className='w-full sm:w-[48%] lg:w-[30%]'>
            <div className="grid grid-cols-3 gap-2 items-center bg-white p-4 rounded-lg shadow-md h-full">
            <div className='col-span-1 flex justify-center'>
                <svg className='h-10 w-10 animate-bounce cursor-pointer' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                <path fill="currentColor" d="M352 224l-46.5 0c-45 0..."/>
                </svg>
            </div>
            <div className='col-span-2 flex flex-col justify-center'>
                <h1 className='text-lg font-bold text-black'>Envío Gratis</h1>
                <p className='text-sm text-black'>Envío gratuito de tus productos</p>
            </div>
            </div>
        </div>

        {/* Item 3 */}
        <div className='w-full sm:w-[48%] lg:w-[30%]'>
            <div className="grid grid-cols-3 gap-2 items-center bg-white p-4 rounded-lg shadow-md h-full">
            <div className='col-span-1 flex justify-center'>
                <svg className='h-10 w-10 animate-bounce' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path fill="currentColor" d="M142.9 142.9c-17.5 17.5..."/>
                </svg>
            </div>
            <div className='col-span-2 flex flex-col justify-center'>
                <h1 className='text-lg font-bold text-black'>Devolución del 100%</h1>
                <p className='text-sm text-black'>Si el producto no es lo que esperas, devoluciones del 100%</p>
            </div>
            </div>
        </div>
    </div>

    {/** Tarjetas o Card de las Plantas */}
    {/* Contenedor padre: vertical en móvil, horizontal en escritorio */}
    <div className="flex flex-col lg:flex-row justify-center items-center gap-4 px-4 flex-wrap">
        {/* Tarjeta 1 */}
        <div className='flex flex-row justify-center w-full max-w-xs bg-purple-100 rounded-lg p-4 shadow shadow-indigo-900'>
            <img src={Planta} alt="Planta" className="w-full h-48 object-cover rounded-lg" />
            
            <div className='flex-grow flex-col text-center mt-2'>
            <h1 className='text-xl font-bold text-black'>Planta</h1>
            <div className='flex flex-row justify-center gap-1 mt-1'>
                {[...Array(5)].map((_, i) => (
                <svg key={i} className='h-4 w-4 text-yellow-500' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                    <path fill="currentColor" d="M288 376.4l.1-.1 26.4 14.1..." />
                </svg>
                ))}
            </div>
            <dd className='text-sm font-bold text-gray-500 mt-2'>$100</dd>
            </div>
        </div>

        {/* Tarjeta 2 */}
        <div className='flex flex-row justify-center w-full max-w-xs bg-purple-100 rounded-lg p-4 shadow shadow-indigo-900'>
            <img src={Planta} alt="Planta" className="w-full h-48 object-cover rounded-lg" />
            
            <div className='flex-grow flex-col text-center mt-2'>
            <h1 className='text-xl font-bold text-black'>Planta</h1>
            <div className='flex flex-row justify-center gap-1 mt-1'>
                {[...Array(5)].map((_, i) => (
                <svg key={i} className='h-4 w-4 text-yellow-500' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                    <path fill="currentColor" d="M288 376.4l.1-.1 26.4 14.1..." />
                </svg>
                ))}
            </div>
            <dd className='text-sm font-bold text-gray-500 mt-2'>$100</dd>
            </div>
        </div>

        {/* Tarjeta 3 */}
        <div className='flex flex-row justify-center w-full max-w-xs bg-purple-100 rounded-lg p-4 shadow shadow-indigo-900'>
            <img src={Planta} alt="Planta" className="w-full h-48 object-cover rounded-lg" />
            
            <div className='flex-grow flex-col text-center mt-2'>
            <h1 className='text-xl font-bold text-black'>Planta</h1>
            <div className='flex flex-row justify-center gap-1 mt-1'>
                {[...Array(5)].map((_, i) => (
                <svg key={i} className='h-4 w-4 text-yellow-500' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                    <path fill="currentColor" d="M288 376.4l.1-.1 26.4 14.1..." />
                </svg>
                ))}
            </div>
            <dd className='text-sm font-bold text-gray-500 mt-2'>$100</dd>
            </div>
        </div>
    </div>


    
      
    </div>
  }