import React from 'react';
import { useParams } from 'react-router-dom';
import MovieItems from './MovieItems';
import useFetch from './CustomHooks/useFetch';

export default function SearchedMovies() {
    let { searchkeyword } = useParams();

    const [movies, pending, error] = useFetch("https://moviesapi-cm0p.onrender.com/movies");

    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                {error && <h1>{error}</h1>}
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                {pending && <div className="loader"> </div>}
            </div>
            {movies && <div className="Genere">
                <MovieItems movies={movies.filter((movie) => { return (movie.movieName.toUpperCase().includes(searchkeyword.toUpperCase())) })} title="searched movies" />
            </div>}
        </>
    );
}
