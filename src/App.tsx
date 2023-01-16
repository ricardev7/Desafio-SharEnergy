import './App.css';
import { Route, Routes } from 'react-router-dom';
import PageCat  from './pages/cats';
import { RequireAuth } from './contexts/Auth/RequireAuth';
import { Login } from './pages/Login';
import  Home  from './pages/Home';
import { Clients } from './pages/clients';
import  PageDog  from './pages/dogs';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path='/home' element={<RequireAuth><Home /></RequireAuth>} />
        <Route path="/cat" element={<RequireAuth><PageCat /></RequireAuth>} />
        <Route path='/dog' element={<RequireAuth><PageDog /></RequireAuth>} />
        <Route path='/clients' element={<RequireAuth><Clients /></RequireAuth>} />
      </Routes>

    </div>
  );
}

export default App;

