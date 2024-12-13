import React, { useState } from 'react';
import axios from 'axios';

function Addmovie() {
  const [movie, setMovie] = useState({ title: '', description: '', releaseYear: '' });

  function handleChange(e) {
    const { name, value } = e.target;
    setMovie({ ...movie, [name]: value });
  }

  async function handleAdd() {
    await axios.post(
      'https://moviecrud-a84c5-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json',
      movie
    );
    alert('Movie added successfully!');
  }

  return (
    <div style={{ padding: '20px' }}>
      <h1>Add Movie</h1>
      <input type="text" name="title" placeholder="Enter the movie name" value={movie.title} onChange={handleChange} />
      <input type="text" name="description" placeholder="Add description" value={movie.description} onChange={handleChange} />
      <input type="text" name="releaseYear" placeholder="Enter the release year" value={movie.releaseYear} onChange={handleChange} />
      <button onClick={handleAdd}>Add Movie</button>
    </div>
  );
}

export default Addmovie;