import React from 'react';
import { useState, useEffect } from 'react';
import { useHistory, useParams, Link } from "react-router-dom";

export default function MovieDetails() {
  let { id } = useParams();
  let h = useHistory();

  let [movie, setMovie] = useState(null);
  let [pending, setpending] = useState(true);
  let [error, seterror] = useState(null);

// This is used to redirect the page and fetch only one movie 
  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:4000/movies/"+id)
        .then((res) => {
          if (res.ok === false) {
            throw Error("Searching data not found in this API")
          }
          return res.json()
        })
        .then((data) => { setMovie(data); setpending(false) })
        .catch((err) => { seterror(err.message); setpending(false) })
    }, 1000)
  }, [id]);

  // Deleting The Movie 
  let deleteMovie = ()=>{
    fetch("http://localhost:4000/movies/"+id, {method:"DELETE"})
    .then(()=>{
        alert("Movie Deleted Succesfully");
        h.goBack();
    })
  }

  return (
    <div>
      {error && <h1>{error}</h1>}
      {pending && <div className="loader"></div>}
      {movie && <div className="MovieDetail">
        <img src={movie.poster} alt="" />
        <h1>Movie name : {movie.movieName} </h1>
        <h2>Movie hero : {movie.hero} </h2>
        <h2>Movie rating :  {movie.rating}</h2>
        <h3>Movie Gener : {movie.gener}</h3>
        <button onClick={deleteMovie}>Delete Movie</button>
        <Link to={`/update${movie.id}`}> <button>Update Movie</button> </Link>
      </div>
      }
    </div>
  );
}
