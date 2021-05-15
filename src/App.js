import './App.css';
import React,{useEffect,useState} from 'react';
import Movie from './components/Movie'

const FEATURED_API="https://api.themoviedb.org/3/discover/movie?api_key=844ae1685ce9063a5fd7c1ddfc33edca&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate";



function App() {

  const [movies, setMovies] = useState([]);
    
  useEffect(() => {
    fetch(FEATURED_API).then(
      (res)=> res.json()
    ).then(
      (data)=>{ console.log(data);
        setMovies(data.results);});
  }, [])
 
  return (<div className="movie-container">
    {
     movies.length>0 && movies.map((movie)=><Movie key={movie.id} {...movie}/>)
    }
    </div>);
}

export default App;
