import { Link } from 'react-router-dom';
import imgFondo from '../assets/image-web-3-desktop.jpg';
export default function Menu() {
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

    {/** GRIPS*/}
    <div className="grid grid-cols-7 grid-rows-5 gap-4 m-2 ">
        <div className="col-span-4 row-span-3 bg-amber-900 overflow-hidden rounded-lg ">
            {/** Imagen de Fondo especificar la ruta de la imagen */}
            <img src={imgFondo} alt="Fondo" className="w-full h-full object-cover " />
        </div>
        <div className="col-span-3 row-span-5 col-start-5 bg-blue-950 overflow-hidden rounded-lg ">
            <div className='m-8'>
                <h1 className='text-6xl font-bold text-amber-400'>NEW</h1>
            </div>
            <div className='m-8'>
                <h2 className='text-white font-bold text-2xl'>Hydrogen VS Electric Cars</h2>
                <div className="flex-grow flex items-center justify-center">
                    <p className=" text-black text-2xl ">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. A ab, sed dolor eligendi reiciendis, pariatur maxime dolore tempore, molestiae necessitatibus repudiandae aliquid possimus? Error, eius. Fugiat aut sunt aliquid labore?
                    </p>
                </div>
                <hr className='border-2 border-white w-full mt-6' />
            </div>
            
            <div className='m-8'>
                <h2 className='text-white font-bold text-2xl'>Hydrogen VS Electric Cars</h2>
                <div className="flex-grow flex items-center justify-center">
                    <p className=" text-black text-2xl ">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. A ab, sed dolor eligendi reiciendis, pariatur maxime dolore tempore, molestiae necessitatibus repudiandae aliquid possimus? Error, eius. Fugiat aut sunt aliquid labore?
                    </p>
                </div>
                <hr className='border-2 border-white w-full mt-6' />
            </div>
        </div>
        <div className="col-span-2 row-span-2 row-start-4  overflow-hidden rounded-lg ">
            <h1 className='text-6xl font-bold text-black'>The bright</h1>
            <br />
            <h1 className='text-6xl font-bold text-black'>Future of </h1>
            <br />
            <h1 className='text-6xl font-bold text-black'>Web 3.0? </h1>
        </div>
        <div className="col-span-2 row-span-2 col-start-3 row-start-4 flex flex-col justify-end">
            <p className='text-gray-500 text-2xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, earum, culpa placeat corrupti quasi accusamus, dolor velit sint consequatur fugiat commodi sit obcaecati officiis adipisci animi reprehenderit libero saepe inventore!</p>
            <button className='bg-amber-600 mt-4 text-[20px] text-black font-bold p-2 rounded-lg w-sm cursor-pointer'>
                Read More
            </button>
        </div>
    </div>
    
  </div>
}
