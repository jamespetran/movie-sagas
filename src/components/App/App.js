import { HashRouter as Router, Route, Link } from 'react-router-dom';
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
        <Link to="/">Home!</Link>
        <Link to="/details/">details!</Link>

        <Route path="/" exact>
          <MovieList />
        </Route>

        {/* Details page */}
        <Route 
          path="/details/:id" 
          component={MovieDetails}
        />
           
        {/* Add Movie page */}

      </Router>
    </div>
  );
}

export default App;
