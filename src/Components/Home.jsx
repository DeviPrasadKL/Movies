import React from 'react';
import MovieItems from './MovieItems';
import { useState } from 'react';

export default function Home() {
  let [movies, setmovies] = useState(null);
  let [pending, setpending] = useState(true);
  let [error, seterror] = useState(null);


  setTimeout(() => {
    fetch("http://localhost:4000/movies")
      .then((res) => {
        if (res.ok === false) {
          throw Error("Searching data not found in this API")
        }
        return res.json()
      })
      .then((data) => { setmovies(data); setpending(false) })
      .catch((err) => { seterror(err.message); setpending(false) })
  }, 1000)

  // fetch("http://localhost:4000/movies")
  //     .then( res => res.json() )
  //     .then((data) => { setmovies(data) });

  return (
    <>
      {error && <h1>{error}</h1>}
      {pending && <div className="loader"> </div>} {/*pending == true */}
      {movies && <div className="Genere"> {/* movies != null) */}
        <MovieItems movies={movies} title="All Movies" />
        <MovieItems movies={movies.filter((movie) => { return movie.gener.includes("action") })} title="Action" />
        <MovieItems movies={movies.filter((movie) => { return movie.gener.includes("drama") })} title="Drama" />
        <MovieItems movies={movies.filter((movie) => { return movie.gener.includes("Fiction") })} title="Fiction" />
      </div>}
    </>
  );
}
