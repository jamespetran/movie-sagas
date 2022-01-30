import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'
import { HashRouter as Router, Route, Link, useHistory } from 'react-router-dom';
import Card from '@mui/material/Card';

function MovieList() {
  const history = useHistory()
  const dispatch = useDispatch();
  const movies = useSelector(store => store.movies);

  useEffect(() => {
    dispatch({ type: 'FETCH_MOVIES' });
  }, []);

  return (
    <main>
      <div className="movies">
        {movies.map(movie => {
          return (
            <Link to={`/details/${movie.id}`} key={movie.id}>
              <Card
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  width: '250px',
                  height: '440px',
                  padding: '2px',
                  backgroundColor: 'lightgray',
                  m: '10px'
                }}
                className="movie-card"
              >
                <h3>{movie.title}</h3>
                <img src={movie.poster} alt={movie.title} height="360px" />
              </Card>
            </Link>
          );
        })}
      </div>
    </main>

  );
}

export default MovieList;