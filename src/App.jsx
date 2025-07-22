
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Menu from './pagina/header';
import Producto from './pagina/producto';
import Contacto from './pagina/contacto';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/producto" element={<Producto />} />
        <Route path="/contacto" element={<Contacto />} />
        
      </Routes>
    </Router>
  );
  
}

export default App
