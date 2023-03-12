import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import MovieCard from '../components/MovieCard';

import './MovieGrid.css';

const searchURL = import.meta.env.VITE_SEARCH;
const apiKey = import.meta.env.VITE_API_KEY;

const Search = () => {
  const [searchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  
  const query = searchParams.get("q");

  useEffect(() => {
    const getSearchedMovies = async (url) => {
      const res = await fetch(url);
      const data = await res.json();
      
      if (!data.results) return;

      setMovies(data.results);
    };

    const searchUrl = `${searchURL}?${apiKey}&query=${query}`;
    getSearchedMovies(searchUrl);

  }, [query]);

  return (
    <div className='container'>
      <h2 className="title">
        Resultados para: <span className='query-text'>{query}</span>
      </h2>
      <div className="movies-container">
        { movies.length === 0 && (<p>Não encontrado</p>)}
        {
          movies && movies.length > 0 && movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)
        }
      </div>
    </div>
  );
};

export default Search;