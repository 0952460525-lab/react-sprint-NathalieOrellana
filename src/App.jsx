import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <Router>
      {/* Navbar Simple */}
      <nav style={{ padding: '1rem', background: '#282c34', display: 'flex', gap: '15px' }}>
        <Link to="/" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>Inicio</Link>
        <Link to="/about" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>Acerca de</Link>
      </nav>

      {/* Contenedor de las páginas */}
      <div style={{ padding: '2rem' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
