import * as React from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Genre from '../Genre/Genre';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function MovieDetails() {
  const dispatch = useDispatch();
  const params = useParams();
  let id = params.id;
  const details = useSelector(store => store.details);
  // const genres = useSelector(store => store.genres);


  console.log(params)
  console.log(id);

  const getDetails = () => {
    dispatch({
      type: `GET_DETAILS`,
      payload: id
    })
    console.log(details)
  }

  React.useEffect(getDetails, [])

  return (

    <div className="movie-details">
      <Link to="/">
        <button className="back-arrow"><ArrowBackIcon /><span className="back-link">Back to MovieList</span></button>
      </Link>
      <h1
      style={{color:'white'}}
      >{details[0].title}</h1>
      <Grid
      container spacing={0}>
        <Grid item xs={4}><img src={details[0].poster} style={{height: '600px' }} /></Grid>
        <Grid item xs={8}>
          <Stack spacing={1}>
            <p className="description"
            >{details[0].description}</p>
            <p>{details[0].genres.map(genre => <Genre key={genre} genre={genre} />)}</p>
          </Stack>
        </Grid>
      </Grid>
    </div>

  )
}

export default MovieDetails;