import * as React from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';


function MovieDetails() {
  const dispatch = useDispatch();
  const params = useParams();
  let id = params.id;
  const details = useSelector(store => store.details);
  const genres = useSelector(store => store.genres);


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

    <div>
      <Link to="/">
        <button>Back to MovieList</button>
      </Link>
      <h1>Movie Details</h1>
      <img src={details[0].poster} />
      <h2>{details[0].title}</h2>
      <p>{details[0].description}</p>

    </div>

  )
}

export default MovieDetails;