<<<<<<< HEAD
// import Example from './components/Example.js'
import { useState } from 'react';
import Genre from './GenreAndId';
import 'bootstrap/dist/css/bootstrap.min.css';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import MovieCard from './components/Moviecard.js';
import './App.css'

function App(){
  const list=["Action","Adventure","Animation","Comedy","Crime","Documentary","Drama","Family","Fantasy","History","Horror","Music","Mystery","Romance","Science Fiction","TV Movie","Thriller","War","Western"];
  const [movieList,setMovieList] = useState([]);
  const [currMovie,setCurrMovie] = useState('');
  const [id,setId] = useState(0);
  const [page,setPage] = useState(1); 
  // let prevId = 0;
  const ClickHandler = (e) => {
    // setId(Genre[e.target.value]);
    setPage(1);
    console.log(id);
    // prevId = id;
    const fetch = require('node-fetch');
    const url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&page=${page}&sort_by=popularity.desc&with_genres=${id}`;
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4OThjZTFhNmZmMWJhMmU3NWI2NjIzYzgzNWRkMTU4OSIsInN1YiI6IjY0NjViZTQ1YTUwNDZlMDE0NzRiOGYwNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.utcr_isv1T9qfxJ-MLYubRPnM02hMfRDLgf-DHF89bg'
        }
    };
    fetch(url, options)
        .then(res => res.json())
        .then(json => setMovieList(json.results))
        .catch(err => console.error('error:' + err)); 
  }

  const handleOptionChange = (e) => {
    setCurrMovie(e);
    setId(Genre[e]);
    console.log("Function called!")
  }

  const updateClickHandler = (e) =>{
    setPage(page+1);
    // setId(prevId);
    console.log(page);
    console.log(id);
    const fetch = require('node-fetch');
    const url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&page=${page+1}&language=en-US&sort_by=popularity.desc&with_genres=${id}`;
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4OThjZTFhNmZmMWJhMmU3NWI2NjIzYzgzNWRkMTU4OSIsInN1YiI6IjY0NjViZTQ1YTUwNDZlMDE0NzRiOGYwNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.utcr_isv1T9qfxJ-MLYubRPnM02hMfRDLgf-DHF89bg'
        }
    };
    fetch(url, options)
        .then(res => res.json())
        .then(json => setMovieList((movieList) => movieList.concat([ ...json.results])))
        .catch(err => console.error('error:' + err));    
    // console.log(movieList);
  }
  // console.log(page);
  // console.log(prevId);

  return(
    <div>
      <h1 style={{'color' : '#9897A9'}}> {id === 0 ? `Search for movies by Genre` : `Showing ${currMovie} Movies (1-${20*page})`} </h1>
      <div id = "drop-down-wrapper">
        <DropdownButton
        title={id===0 ? 'Select Genre' : currMovie}
        id="drop-down-menu"
        onSelect= {(e) => handleOptionChange(e)}>
          {list.map((index,listI)=>(
          <Dropdown.Item eventKey={index} value={list[listI]}>{list[listI]}</Dropdown.Item>
        ))}
        </DropdownButton>
        <button type='submit' onClick={e => ClickHandler(e)}>Submit</button>
      </div>
      <div className='container'>
        {movieList.map((movieName,index) => 
          <div>
            <MovieCard image = {`https://image.tmdb.org/t/p/w500/${movieName.poster_path}`} name = {movieName.title} description = {movieName.overview} rating = {movieName.vote_average} voters = {movieName.vote_count} />
          </div>
        )
        }
      </div>
      <div id = "submit-wrapper">
        <button type='submit' onClick={e => updateClickHandler(e)}>Load more</button>
      </div>
=======
import './App.css';
import MovieDropDrowm from "./components/MovieGenresDropDown";
import MovieCard from "./components/MovieCard";
function App() {
  return (
    <div className="App">
    <MovieDropDrowm></MovieDropDrowm>

    <MovieCard className="Movie-Card" name="Vardhan" Description="very good boy" image="https://images.pexels.com/photos/2055100/pexels-photo-2055100.jpeg?cs=srgb&dl=pexels-george-desipris-2055100.jpg&fm=jpg"></MovieCard>
>>>>>>> 8d8ca1ce330607529d61e88efe6a2b072039e7ed
    </div>
  );
};

export default App;