import './App.css';
import React,{useEffect,useState} from 'react';
import Movie from './components/Movie'

const FEATURED_API="https://api.themoviedb.org/3/discover/movie?api_key=844ae1685ce9063a5fd7c1ddfc33edca&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate";

const SEARCH_API="https://api.themoviedb.org/3/search/movie?&api_key=844ae1685ce9063a5fd7c1ddfc33edca&query=";

function App() {

  const [movies, setMovies] = useState([]);
  const [searchTerm,setSearchTerm]= useState('');
    
  useEffect(() => {
    fetch(FEATURED_API).then(
      (res)=> res.json()
    ).then(
      (data)=>{ 
        setMovies(data.results);});
  }, [])

//   const getMovies =(API) =>
// {
//   fetch(SEARCH_API).then(
//     (res)=> res.json()
//   ).then(
//     (data)=>{ console.log(data);
//       setMovies(data.results);});
  
// if(searchTerm){
//   getMovies(SEARCH_API+searchTerm);
//   setSearchTerm('');
// }

 
  const handleOnSubmit = (e) =>
  {
    e.preventDefault();
    if(searchTerm){
      fetch(SEARCH_API+searchTerm).then(
        (res)=> res.json()
      ).then(
        (data)=>{ 
          setMovies(data.results);});
          setSearchTerm('');
    }
    

    
}
const handleOnchange = (e) =>
{
  console.log(searchTerm.length);
  setSearchTerm(e.target.value);
}



  return (
    <div>
    <header  >
    <form onSubmit={handleOnSubmit}>
    <input className="search" type="text" placeholder="search..." value={searchTerm} onChange={handleOnchange} />
    </form>
    </header>
    <div className="movie-container">
    {
     movies.length>0 && movies.map((movie)=><Movie key={movie.id} {...movie}/>)
    }
    </div>
    </div>
    );
}


export default App;
