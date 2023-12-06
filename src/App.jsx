import './App.css';
import Home from './Components/Home';
import NavBar from './Components/NavBar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MovieDetails from './Components/MovieDetails';
import AddMovie from './Components/AddMovie';
import UpdateMovie from './Components/UpdateMovie';
import SearchedMovies from './Components/SearchedMovies';
import NotFound from './Components/NotFound';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>

          <Route exact path="/Movies">
            <Home />
          </Route>

          <Route path="/moviedetail:id">
            <MovieDetails />
          </Route>

          <Route path="/update:id">
            <UpdateMovie />
          </Route>

          <Route path="/addmovie">
            <AddMovie />
          </Route>

          <Route path="/search:searchkeyword">
            <SearchedMovies />
          </Route>

          <Route path="*">
            <NotFound />
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
