import React, { useEffect } from 'react';
import MovieItems from './MovieItems';
import { useState } from 'react';

export default function Home() {
  let [movies, setmovies] = useState(null);
  let [pending, setpending] = useState(true);
  let [error, seterror] = useState(null);

  //Use effect is used to fetch data only for initial rendering
  useEffect(() => {
    setTimeout(() => {
      fetch("https://moviesapi-cm0p.onrender.com/movies")
        .then((res) => {
          if (res.ok === false) {
            throw Error("Searching data not found in this API")
          }
          return res.json()
        })
        .then((data) => { setmovies(data); setpending(false); })
        .catch((err) => { seterror(err.message); })
    }, 1000)
  }, [])

  return (
    <>
    <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
      {error && <h1>{error}</h1>}
    </div>
      <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
        {pending && <div className="loader"> </div>} {/*pending == true */}
      </div>
      {movies && <div className="Genere"> {/* movies != null) */}
        <MovieItems movies={movies} title="All Movies" />
        <MovieItems movies={movies.filter((movie) => { return movie.gener.includes("action") })} title="Action" />
        <MovieItems movies={movies.filter((movie) => { return movie.gener.includes("drama") })} title="Drama" />
        <MovieItems movies={movies.filter((movie) => { return movie.gener.includes("Fiction") })} title="Fiction" />
      </div>}
    </>
  );
}
