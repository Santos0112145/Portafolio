import { Link } from 'react-router-dom';
export default function Menu() {
  return <div>
    <Link className='font-bold text-center text-3xl text-red bg-emerald-300' to="/menu">Menu</Link>
    <Link className='font-bold text-center text-3xl text-red bg-green-800' to="/producto">Producto</Link>
    
    <h1>Pagina 1</h1>
    <h1>Pagina 2</h1>
    <h1>Pagina 3</h1>
  </div>
}
