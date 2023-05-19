// import Example from './components/Example.js'
import { useState } from 'react';
import Genre from './GenreAndId';
import 'bootstrap/dist/css/bootstrap.min.css';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import MovieCard from './components/MovieCard.js';
import Language from './LanguageAndCode';
import languageList from './LanguageList';
import GenreSelector from './components/GenreSelector';
import './App.css'

function App(){
  const list=["Action","Adventure","Animation","Comedy","Crime","Documentary","Drama","Family","Fantasy","History","Horror","Music","Mystery","Romance","Science Fiction","TV Movie","Thriller","War","Western"];
  const [movieList,setMovieList] = useState([]);
  const [currMovie,setCurrMovie] = useState('');
  const [id,setId] = useState(0);
  const [page,setPage] = useState(1);
  const [lang,setLang]=useState('English');
  const [code,setCode]=useState('en');

  const ClickHandler = (e) => {
    document.getElementById('header-text').innerText = `Showing ${currMovie} Movies (1-${20*page})`
    setPage(1);
    console.log(id);
    const fetch = require('node-fetch');
    const url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&with_original_language=${code}&language=en-US&page=${page}&sort_by=popularity.desc&with_genres=${id}`;
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
    console.log(currMovie);
    console.log(id);
  }

  const langSelect=(e)=>{
    setLang(e);
    setCode(Language[e]);
    console.log(lang);
    console.log(code);
  }

  const updateClickHandler = (e) =>{
    setPage(page+1);
    document.getElementById('header-text').innerText = `Showing ${currMovie} Movies (1-${20*(page+1)})`
    console.log(page);
    console.log(id);
    const fetch = require('node-fetch');
    const url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&with_original_language=${code}&language=en-US&page=${page+1}&sort_by=popularity.desc&with_genres=${id}`;
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
  }

  return(
    <div>
      <h1 style={{'color' : '#9897A9'}} id='header-text'> Search for Movies by Genre </h1>
      <div id = "drop-down-wrapper">
        {/* <DropdownButton
        title={id===0 ? 'Select Genre' : currMovie}
        id="drop-down-menu"
        onSelect= {(e) => handleOptionChange(e)}>
          {list.map((index,listI)=>(
          <Dropdown.Item eventKey={index}>{list[listI]}</Dropdown.Item>
        ))}
        </DropdownButton>
        <button type='submit' onClick={e => ClickHandler(e)}>Submit</button> */}
        <GenreSelector movieId = {id} currMovie = {currMovie} list = {list} handleOptionChange = {e => handleOptionChange(e)} ClickHandler = {e => ClickHandler(e)}/>

        <div>
        <DropdownButton id="language-dropdown" title={lang==='' ? 'Select language' : lang} 
        onSelect={(e)=>{langSelect(e);
          
        }}>
          {languageList.map((language, index) => (
            <Dropdown.Item eventKey={language} >{language}</Dropdown.Item>
          ))}
        </DropdownButton>
        </div>
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
    </div>
  );
};

export default App;