import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList';
import './App.css';

const App = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchMovies = async (query) => {
      try {
          setLoading(true);
          const response = await fetch(`https://openlibrary.org/search.json?q=${query}`);
          const data = await response.json();
          setMovies(data.docs);
          setLoading(false);
      } catch (error) {
          console.error('Error fetching movies:', error);
      } finally {
          setLoading(false);
      }
  };

    return (
        <div className="App">
            <h1>Welcome to Vaapas Movies</h1>
            <h1>Search Movie</h1>
            <SearchBar onSearch={fetchMovies} />
            {loading ? <p>Loading...</p> : <MovieList movies={movies} />}
        </div>
    );
};

export default App;
