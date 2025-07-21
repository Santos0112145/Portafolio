import { Link } from 'react-router-dom';

export default function Producto() {
  return (
    <div>
      <header className="bg-black bg-opacity-80 backdrop-blur-md shadow-lg sticky top-0 z-50 shadow-cyan-400/50">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <nav className="md:ml-auto flex flex-wrap items-center justify-center space-x-6 text-3xl">
            <Link
              to="/menu"
              className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 cursor-pointer"
            >
              Inicio
            </Link>
            <Link
              to="/producto"
              className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 cursor-pointer"
            >
              Producto
            </Link>
          </nav>
        </div>
      </header>

    <div className="p-10 text-center flex flex-row justify-around items-center">
        <span className="inline-block w-6 h-6 text-red-500">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="w-full h-full fill-current">
                <path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z"/>
            </svg>
        </span>

        <h1 className="text-4xl font-bold text-cyan-400 mb-6">Youtuve</h1>

        <h1 className="text-4xl font-bold text-cyan-400 mb-6">Página 2</h1>

        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className="w-16 h-16 text-cyan-400 fill-current"
        >
            <path d="M0 64C0 28.7 28.7 0 64 0L352 0c35.3 0 64 28.7 64 64l0 64c0 35.3-28.7 64-64 64L64 192c-35.3 0-64-28.7-64-64L0 64zM160 352c0-17.7 14.3-32 32-32l0-16c0-44.2 35.8-80 80-80l144 0c17.7 0 32-14.3 32-32l0-32 0-90.5c37.3 13.2 64 48.7 64 90.5l0 32c0 53-43 96-96 96l-144 0c-8.8 0-16 7.2-16 16l0 16c17.7 0 32 14.3 32 32l0 128c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32l0-128z"/>
        </svg>

        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className="w-16 h-16 text-cyan-400 fill-current"
        >
            <path d="M399 384.2C376.9 345.8 335.4 320 288 320l-64 0c-47.4 0-88.9 25.8-111 64.2c35.2 39.2 86.2 63.8 143 63.8s107.8-24.7 143-63.8zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 16a72 72 0 1 0 0-144 72 72 0 1 0 0 144z"/>
        </svg>
    </div>
    <div className="flex items-center space-x-4 mb-6">
        <span className="inline-block w-6 h-6 text-red-500">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="w-full h-full fill-current">
            <path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z"/>
            </svg>
        </span>

        <h1 className="text-4xl font-bold text-cyan-400">YouTube</h1>
    </div>
    <div className="flex items-center space-x-4 mb-6">
        <span className="inline-block w-6 h-6 text-red-500">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="w-full h-full fill-current">
            <path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z"/>
            </svg>
        </span>

        <h1 className="text-4xl font-bold text-cyan-400">YouTube</h1>
    </div>
    <div className="flex items-center space-x-4 mb-6">
        <span className="inline-block w-6 h-6 text-red-500">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="w-full h-full fill-current">
            <path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z"/>
            </svg>
        </span>

        <h1 className="text-4xl font-bold text-cyan-400">YouTube</h1>
    </div>


    </div>
  );
}
