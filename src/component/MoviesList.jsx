import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function MoviesList() {
  const [movies, setMovies] = useState([]);

  async function getMovies() {
    try {
      const res = await axios.get(
        'https://moviecrud-a84c5-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json'
      );

      const arr = Object.keys(res.data).map((key) => ({ id: key, ...res.data[key] }));
      setMovies(arr);
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  }

  async function handleDelete(id) {
    try {
      await axios.delete(
        `https://moviecrud-a84c5-default-rtdb.asia-southeast1.firebasedatabase.app/movies/${id}.json`
      );
      getMovies();
    } catch (error) {
      console.error('Error deleting movie:', error);
    }
  }

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Movies List</h2>
      <div>
        {movies.map((movie) => (
          <div key={movie.id} style={{ margin: '10px 0', border: '1px solid #ccc', padding: '10px' }}>
            <h4>Title: {movie.title}</h4>
            <p>Description: {movie.description}</p>
            <p>Release Year: {movie.releaseYear}</p>
            <button onClick={() => handleDelete(movie.id)}>Delete 🚮</button>
            <br />
            <Link to={`/edit/${movie.id}`}>Edit✍️</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MoviesList;