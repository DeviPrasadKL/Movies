import React from 'react';
import { useHistory, useParams, Link } from "react-router-dom";
import useFetch from './CustomHooks/useFetch';

export default function MovieDetails() {
  let { id } = useParams();
  let h = useHistory();

  const [movies, pending, error] = useFetch("https://moviesapi-cm0p.onrender.com/movie/" + id);

  const movie = movies;

  // Deleting The Movie 
  let deleteMovie = () => {
    fetch("https://moviesapi-cm0p.onrender.com/movie/" + id, { method: "DELETE" })
      .then(() => {
        alert("Movie Deleted Succesfully");
        h.goBack();
      })
  }

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        {error && <h1>{error}</h1>}
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        {pending && <div className="loader"> </div>}
      </div>
      {movie && <div className="MovieDetail">
        <img src={movie?.poster} alt={movie.poster} />
        <h1>Movie name : {movie.movieName} </h1>
        <h2>Movie hero : {movie.hero} </h2>
        <h2>Movie rating :  {movie.rating}</h2>
        <h3>Movie Gener : {movie.gener}</h3>
        <button onClick={deleteMovie}>Delete Movie</button>
        <Link to={`/update${movie._id}`}> <button>Update Movie</button> </Link>
      </div>
      }
    </div>
  );
}
