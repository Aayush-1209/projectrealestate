import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function EditMovie() {
  const { id } = useParams();
  const [movie, setMovie] = useState({ title: '', description: '', releaseYear: '' });

  async function getMovie() {
    const res = await axios.get(
      `https://moviecrud-a84c5-default-rtdb.asia-southeast1.firebasedatabase.app/movies/${id}.json`
    );
    setMovie(res.data);
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setMovie({ ...movie, [name]: value });
  }

  async function handleUpdate() {
    await axios.put(
      `https://moviecrud-a84c5-default-rtdb.asia-southeast1.firebasedatabase.app/movies/${id}.json`,
      movie
    );
    alert('Movie updated successfully!');
  }

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Edit Movie</h1>
      <input type="text" name="title" placeholder="Enter the movie name" value={movie.title} onChange={handleChange} />
      <input type="text" name="description" placeholder="Add description" value={movie.description} onChange={handleChange} />
      <input type="text" name="releaseYear" placeholder="Enter the release year" value={movie.releaseYear} onChange={handleChange} />
      <button onClick={handleUpdate}>Update Movie</button>
    </div>
  );
}

export default EditMovie;
