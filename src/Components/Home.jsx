import MovieItems from './MovieItems';
import useFetch from './CustomHooks/useFetch';

export default function Home() {

  //Custom hook for fetching data
  const [movies, pending, error] = useFetch("https://moviesapi-cm0p.onrender.com/movies");

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        {error && <h1>{error}</h1>}
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
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
