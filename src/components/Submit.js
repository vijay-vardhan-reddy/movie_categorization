import { useContext } from 'react';
import { AppContext } from '../App';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button } from "react-bootstrap";

export default function Submit(){
    const{movieList, setMovieList, page, setPage, id, setId, code, currMovie, setCurrMovie} = useContext(AppContext)
    const ClickHandler = (e) => {
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
    return(
        <Button type='submit' onClick={ClickHandler}>Submit</Button>
    );
}
 