import './App.css';
import { Route, Routes, Link } from 'react-router-dom';
import { Home } from './pages/Home';
import { Private } from './pages/Private';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Header do Site</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/private">Página Privada</Link>
        </nav>
      </header>
      <hr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/private" element={<Private />} />
        
      </Routes>

    </div>
  );
}

export default App;

