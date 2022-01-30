import { HashRouter as Router, Route } from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList'
import { useSelector } from 'react-redux';
import MovieDetails from '../MovieDetails/MovieDetails';


function App() {
  const movies = useSelector(store => store.movies);

  return (
    <div className="App">
      <h1>The Movies Saga!</h1>
      <Router>
        <Route path="/" exact>
          <MovieList />
        </Route>

        {/* Details page */}
        {movies.map(movie => <Route key={movie.id} to={"/details/" + movie.id} exact > <MovieDetails movie={movie} /> </Route>)}
        {/* Add Movie page */}
      </Router>
    </div>
  );
}


export default App;
