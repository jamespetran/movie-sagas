import * as React from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';


function MovieDetails() {
  const dispatch = useDispatch();
  const params = useParams();
  let id = params.id;
  const details = useSelector(store => store.details);
  

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
      <h1>Movie Details</h1>
      <img src={details[0].poster}/> 
      <h2>{details[0].title}</h2>
      <p>{details[0].description}</p>
    </div>
    
  )
}

export default MovieDetails;