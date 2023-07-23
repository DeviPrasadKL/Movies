import React from 'react';
import { useParams } from 'react-router-dom';
import MovieItems from './MovieItems';
import { useState, useEffect } from 'react';

export default function SearchedMovies() {
    let { searchkeyword } = useParams();

    let [movies, setmovies] = useState(null);
    let [pending, setpending] = useState(true);
    let [error, seterror] = useState(null);

    useEffect(() => {
        fetch("https://moviesapi-cm0p.onrender.com/movies")
            .then((res) => {
                if (res.ok === false) {
                    throw Error("Searching data not found in this API")
                }
                return res.json()
            })
            .then((data) => { setmovies(data); setpending(false) })
            .catch((err) => { seterror(err.message); setpending(false) })
    }, [])

    return (
        <>
      {error && <h1>{error}</h1>}
      {pending && <div className="loader"> </div>} 
      {movies && <div className="Genere">
        <MovieItems movies={movies.filter((movie)=>{ return (movie.movieName.toUpperCase().includes(searchkeyword.toUpperCase()))})}  title="searched movies" />
      </div>}
    </>
    );
}
