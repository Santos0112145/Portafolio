
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Menu from './pagina/header';
import Producto from './pagina/producto';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/producto" element={<Producto />} />
        
      </Routes>
    </Router>
  );
  
}

export default App
