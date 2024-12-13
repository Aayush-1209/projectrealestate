import { Routes, Route, Link } from 'react-router-dom';
import Addmovie from './component/Addmovie';
import MoviesList from './component/MoviesList';
import EditMovie from './component/EditMovie';
import './App.css';

function Navbar() {
  const navStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    padding: '10px',
    background: '#f4f4f4',
    borderBottom: '1px solid #ccc',
  };

  const linkStyle = {
    textDecoration: 'none',
    color: '#333',
    fontWeight: 'bold',
  };

  return (
    <div style={navStyle}>
      <Link to="/" style={linkStyle}>Home</Link>
      <Link to="/add" style={linkStyle}>Add Movie</Link>
    </div>
  );
}

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/edit/:id" element={<EditMovie />} />
        <Route path="/add" element={<Addmovie />} />
        <Route path="/" element={<MoviesList />} />
      </Routes>
    </div>
  );
}

export default App;
