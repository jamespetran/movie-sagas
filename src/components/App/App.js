import { HashRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList'
import { useSelector } from 'react-redux';
import MovieDetails from '../MovieDetails/MovieDetails';
import Box from '@mui/material/Box';


function App() {
  const movies = useSelector(store => store.movies);



  return (
    <Box 
    sx={{
      width: {
        xs: 200, // theme.breakpoints.up('xs') 0px
        sm: 550, // theme.breakpoints.up('sm') 600px
        md: 850, // theme.breakpoints.up('md') 900px
        lg: 1150, // theme.breakpoints.up('lg') 1200px
        xl: 1500, // theme.breakpoints.up('xl') 1535px
      },
    }}
    className="App">
      <h1>The Movies Saga!</h1>

      <Router>
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
    </Box>
  );
}

export default App;
