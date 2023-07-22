import './App.css';
import Home from './Components/Home';
import NavBar from './Components/NavBar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MovieDetails from './Components/MovieDetails';
import AddMovie from './Components/AddMovie';
import UpdateMovie from './Components/UpdateMovie';
import SearchedMovies from './Components/SearchedMovies';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>

          <Route exact path="/">
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
            <SearchedMovies/>
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
